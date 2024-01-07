import { NextAuthOptions } from 'next-auth';
// import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID!,
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    // }),
    CredentialsProvider({
      id: 'email-password',
      name: 'email-password',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email@gmail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('authorize', credentials, req);
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
        if (credentials && credentials.email !== 'a') {
          throw new Error('NOT_CORRECT_EMAIL');
        }
        if (credentials && credentials.password !== 'a') {
          throw new Error('NOT_CORRECT_PASSWORD');
        }
        return user;
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
