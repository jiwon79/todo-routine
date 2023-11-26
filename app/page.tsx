import { Test } from '@/lib/domain/Test';
import styles from './page.module.css';

export default async function Home() {
  return (
    <main className={styles.main}>
      <Test />
    </main>
  );
}
