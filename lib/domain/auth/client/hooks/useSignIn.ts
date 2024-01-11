import { signIn } from 'next-auth/react';
import { useCallback } from 'react';
import { AuthApiClient } from '../apiClient';

export function useSignIn() {
  const signInEmailPwd = useCallback(
    (email: string, password: string) => {
      signIn('email-password', {
        email,
        password,
        callbackUrl: '/',
      });
    },
    [signIn],
  );

  const signInGuest = useCallback(async () => {
    const storedGuestID = localStorage.getItem('guestID');
    if (storedGuestID === null) {
      const newGuestID = crypto.randomUUID();
      await AuthApiClient.signUpGuest(newGuestID);
      localStorage.setItem('guestID', newGuestID);
    }
    const guestID = localStorage.getItem('guestID');

    signIn('guest', {
      guestID,
      callbackUrl: '/',
    });
  }, [signIn]);

  return { signInEmailPwd, signInGuest };
}
