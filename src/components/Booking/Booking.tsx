import { Shared } from '../Shared';
import styles from './Booking.module.scss';

export function Booking() {
  return (
    <section className={styles.section}>
      <Shared.Heading variant='light'>Ready to make a reservation?</Shared.Heading>
      <Shared.Button label='Book a Table' variant='light' />
    </section>
  );
}
