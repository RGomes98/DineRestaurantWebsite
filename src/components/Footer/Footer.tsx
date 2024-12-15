import { footer } from '@/data/footer';
import { Shared } from '../Shared';

import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Shared.Logo />
        <div className={styles.wrapper}>
          {footer.map((column, index) => (
            <ul key={index} className={styles.list}>
              {column.map((content) => (
                <li key={content} className={styles.item}>
                  <span className={styles.text}>{content}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
}
