'use client';

import {
  getSession,
  signInWithKakao,
  signOut,
} from '@/lib/third-parties/supabase';

export const Test = () => {
  const onClickSession = async () => {
    const { data, error } = await getSession();
    if (error) {
      console.error(error);
      return;
    }
    console.log(data);
  };

  return (
    <>
      <button onClick={signInWithKakao}>카카오 로그인</button>
      <button onClick={signOut}>로그아웃</button>
      <button onClick={onClickSession}>세션</button>
    </>
  );
};
