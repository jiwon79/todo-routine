import { httpClient } from '@/lib/domain/http-client';
import { SignInResponse } from '../interface';

export const AuthApiClient = {
  async signInEmailPwd(email: string, password: string) {
    return httpClient.post<SignInResponse>('/api/auth/signin/email-password', {
      email,
      password,
    });
  },
};
