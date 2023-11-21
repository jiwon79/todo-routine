import { Test } from '@/lib/domain/Test';
import { getServerSession } from '@/lib/third-parties/next-auth';
import styles from './page.module.css';

export default async function Home() {
  const session = await getServerSession();
  console.log(session);

  return (
    <main className={styles.main}>
      <Test />
    </main>
  );
}
