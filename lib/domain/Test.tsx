'use client';

import { signIn, signOut as authSignOut } from 'next-auth/react';

export const Test = () => {
  const kakaoSignIn = async () => {
    console.log('kakao sign in');
    const result = await signIn('kakao');
    console.log(await result);
  };

  const signOut = async () => {
    console.log('sign out');
    const result = await authSignOut();
    console.log(result);
  };

  return (
    <>
      <button onClick={() => kakaoSignIn()}>
        <p>kakao login</p>
      </button>
      <button onClick={() => signOut()}>
        <p>sign out</p>
      </button>
    </>
  );
};
