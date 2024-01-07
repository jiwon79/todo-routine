import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthApiClient } from '@/lib/domain/auth/client/apiClient';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'email-password',
      name: 'email-password',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email@gmail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('CREDENTIAL_NULL');
        }

        const response = await AuthApiClient.signInEmailPwd(
          credentials.email,
          credentials.password,
        );
        if (response.error) {
          throw new Error(response.error);
        }

        return response.user!;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('signIn', user, account, profile);
      return true;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
};
