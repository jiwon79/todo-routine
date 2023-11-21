import { getServerSession as getServerSessionNextAuth } from 'next-auth/next';
import { authOptions } from './authOptions';
import { AuthSession } from '../interface';

export const getServerSession = async () => {
  return (await getServerSessionNextAuth(authOptions)) as AuthSession;
};
