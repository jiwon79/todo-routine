import { getServerSession as getNextAuthServerSession } from 'next-auth';
import { authOptions } from './authOptions';

export function getServerSession() {
  return getNextAuthServerSession(authOptions);
}
