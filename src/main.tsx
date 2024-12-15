import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import '@/stylesheets/globals.scss';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => router.navigate({ to: '/', search: { tab: 'family' }, replace: true }),
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
