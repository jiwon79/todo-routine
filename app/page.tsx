'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const session = useSession();
  console.log('Home Session :', session);

  return (
    <main className={styles.main}>
      <Link href="/auth/sign-in">Sign In</Link>
      <Link href="/auth/sign-up">Sign Up</Link>
      <button onClick={() => signOut()}>sign out</button>
    </main>
  );
}
