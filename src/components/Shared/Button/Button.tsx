import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant: 'dark' | 'light';
};

export function Button({ label, variant }: ButtonProps) {
  return (
    <button className={styles.button} data-variant={variant}>
      {label}
    </button>
  );
}
