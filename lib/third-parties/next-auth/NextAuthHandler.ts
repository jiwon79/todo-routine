import NextAuth from 'next-auth';
import { authOptions } from './authOptions';

export const NextAuthHandler = NextAuth(authOptions);
