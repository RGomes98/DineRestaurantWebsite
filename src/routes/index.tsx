import { createFileRoute } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';
import { Section } from '../components';
import { tabsParamsSchema } from '@/lib/schemas/tabParams.schema';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: (search) => tabsParamsSchema.parse(search),
});

function RouteComponent() {
  return (
    <Fragment>
      <Section.InteractiveTabs />
      <Section.Booking />
    </Fragment>
  );
}
