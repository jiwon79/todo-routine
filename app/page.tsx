'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './page.module.css';

export default function Home() {
  const session = useSession();
  console.log('client session', session);

  const fetchTest = async () => {
    const res = await fetch('/api/test');
    const data = await res.json();
    console.log('data', data);
  };

  return (
    <main className={styles.main}>
      <button onClick={() => signIn('kakao')}>
        <p>KAKAO</p>
      </button>
      <button onClick={() => signOut()}>sign out</button>
      <button onClick={() => fetchTest()}>fetch test</button>
    </main>
  );
}
