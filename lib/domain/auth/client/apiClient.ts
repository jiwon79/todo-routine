import { httpClient } from '@/lib/domain/http-client';
import { SignInResponse } from '../interface';

export const AuthApiClient = {
  async signInEmailPwd(email: string, password: string) {
    return httpClient.post<SignInResponse>('/api/user/sign-in/email-password', {
      email,
      password,
    });
  },
  async signUpEmailPwd(name: string, email: string, password: string) {
    return httpClient.post<SignInResponse>('/api/user/sign-up/email-password', {
      name,
      email,
      password,
    });
  },
  async signInGuest(guestID: string | undefined) {
    return httpClient.post<SignInResponse>('/api/user/sign-in/guest', {
      guestID,
    });
  },
  async signUpGuest(guestID: string) {
    return httpClient.post<SignInResponse>('/api/user/sign-up/guest', {
      guestID,
    });
  },
};
