import type { ReactNode } from 'react';
import styles from './Heading.module.scss';

type HeadingProps = {
  children: ReactNode;
  variant: 'dark' | 'light';
};

export function Heading({ children, variant }: HeadingProps) {
  return (
    <span className={styles.heading} data-variant={variant}>
      {children}
    </span>
  );
}
