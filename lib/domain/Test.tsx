'use client';

import {
  getSession,
  signInWithKakao,
  signOut,
} from '@/lib/third-parties/supabase';

export const Test = () => {
  return (
    <>
      <button onClick={signInWithKakao}>카카오 로그인</button>
      <button onClick={signOut}>로그아웃</button>
      <button onClick={getSession}>세션</button>
    </>
  );
};
