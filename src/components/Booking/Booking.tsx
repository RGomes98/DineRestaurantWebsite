import { Shared } from '../Shared';
import styles from './Booking.module.scss';

export function Booking() {
  return (
    <section className={styles.section}>
      <span className={styles.heading}>Ready to make a reservation?</span>
      <Shared.Button label='Book a Table' variant='light' />
    </section>
  );
}
