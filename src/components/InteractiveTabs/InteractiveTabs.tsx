import { tabs } from '@/data/tabs';
import { Shared } from '../Shared';
import { Route } from '@/routes';
import type { Tabs } from '@/lib/schemas/tabParams.schema';
import { Link } from '@tanstack/react-router';

import PatternLines from '@/assets/svgs/patterns/pattern-lines.svg?react';
import styles from './InteractiveTabs.module.scss';

export function InteractiveTabs() {
  const params = Object.keys(tabs) as Tabs[];
  const searchParams = Route.useSearch();
  const activeTab = tabs[searchParams.tab];

  return (
    <section className={styles.section}>
      <Shared.Picture
        key={activeTab.heading}
        pictureClassName={styles.picture}
        alt={`${activeTab.heading}-image`}
        mobileSrc={activeTab.image.mobile}
        tabletSrc={activeTab.image.tablet}
        desktopSrc={activeTab.image.desktop}
      >
        <PatternLines className={styles.lines} />
      </Shared.Picture>
      <div className={styles.main}>
        <div className={styles.header}>
          <Shared.Heading variant='dark'>{activeTab.heading}</Shared.Heading>
          <Shared.Text variant='dark'>{activeTab.text}</Shared.Text>
        </div>
        <Shared.Button variant='dark' label='Book a Table' />
        <div className={styles.container}>
          {params.map((param) => {
            const label = tabs[param].heading;
            const isTabActive = searchParams.tab === param;
            return (
              <Link to='/' search={{ tab: param }} className={styles.link} data-active={isTabActive}>
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
