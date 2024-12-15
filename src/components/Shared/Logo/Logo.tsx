import styles from './Logo.module.scss';
import DineLogo from '@/assets/svgs/logo.svg?react';

export function Logo() {
  return <DineLogo className={styles.logo} />;
}
