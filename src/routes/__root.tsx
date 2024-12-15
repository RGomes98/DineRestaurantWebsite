import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Fragment } from 'react/jsx-runtime';
import { Section } from '@/components';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Fragment>
      <main>
        <Outlet />
      </main>
      <Section.Footer />
      <TanStackRouterDevtools />
    </Fragment>
  );
}
