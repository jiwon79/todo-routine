import NextAuth from 'next-auth/next';
import { authOptions } from '../core/authOptions';

const handler = NextAuth(authOptions);

export { handler as NextAuthGET, handler as NextAuthPOST };
