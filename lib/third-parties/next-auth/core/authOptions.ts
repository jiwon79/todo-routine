import { AuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { randomBytes, randomUUID } from 'crypto';

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET_KEY!,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex');
    },
  },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
    jwt: ({ token }) => {
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
