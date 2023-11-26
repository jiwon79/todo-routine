import { supabaseClient } from './client';

export const signInWithKakao = async () => {
  return supabaseClient.auth.signInWithOAuth({
    provider: 'kakao',
  });
};

export const signOut = async () => {
  return supabaseClient.auth.signOut();
};

export const getSession = async () => {
  return supabaseClient.auth.getSession();
};

export const getUser = async () => {
  return supabaseClient.auth.getUser();
};
