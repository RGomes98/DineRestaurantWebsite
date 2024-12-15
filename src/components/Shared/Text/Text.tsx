import { ReactNode } from 'react';
import styles from './Text.module.scss';

type TextProps = {
  children: ReactNode;
  variant: 'dark' | 'light';
};

export function Text({ children, variant }: TextProps) {
  return (
    <p className={styles.text} data-variant={variant}>
      {children}
    </p>
  );
}
