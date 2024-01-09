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
          throw new Error(
            `${response.error}&email=${credentials.email}&password=${credentials.password}`,
          );
        }

        const user = response.user!;
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // eslint-disable-next-line no-param-reassign
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
};
