import { useSession } from 'next-auth/react';

export function useSessionUser() {
  const session = useSession();
  return {
    status: session.status,
    user: session.data?.user,
  };
}
