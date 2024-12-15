import { tabs } from '@/data/tabs';
import { TabsLinks } from './TabsLinks/TabsLinks';
import { Shared } from '../Shared';
import { Route } from '@/routes';
import type { Tabs } from '@/lib/schemas/tabParams.schema';

import PatternLines from '@/assets/svgs/patterns/pattern-lines.svg?react';
import styles from './InteractiveTabs.module.scss';

export function InteractiveTabs() {
  const { tab } = Route.useSearch();
  const tabParams = Object.keys(tabs) as Tabs[];
  const activeTab = tabs[tab];

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
          <span className={styles.heading}>{activeTab.heading}</span>
          <p className={styles.headingText}>{activeTab.text}</p>
        </div>
        <Shared.Button variant='dark' label='Book a Table' />
        <TabsLinks tabParams={tabParams} />
      </div>
    </section>
  );
}
