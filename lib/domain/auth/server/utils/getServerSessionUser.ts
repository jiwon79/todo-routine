import { getServerSession as getNextAuthServerSession } from 'next-auth';
import { authOptions } from '../../next-auth/authOptions';

export async function getServerSessionUser() {
  const session = await getNextAuthServerSession(authOptions);
  return {
    expires: session?.expires,
    user: session?.user,
  };
}
