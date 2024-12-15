import { Link } from '@tanstack/react-router';
import type { Tabs } from '@/lib/schemas/tabParams.schema';
import { Route } from '@/routes';
import { tabs } from '@/data/tabs';

import styles from './TabsLinks.module.scss';

type TabLinksProps = {
  tabParams: Tabs[];
};

export function TabsLinks({ tabParams }: TabLinksProps) {
  const { tab } = Route.useSearch();

  return (
    <div className={styles.container}>
      {tabParams.map((tabParam) => {
        const label = tabs[tabParam].heading;
        const isTabActive = tab === tabParam;

        return (
          <Link
            to='/'
            key={tabParam}
            className={styles.link}
            data-active={isTabActive}
            search={{ tab: tabParam }}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
