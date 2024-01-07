'use client';

import { useSearchParams } from 'next/navigation';

export default function SignInPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  console.log('error', error);

  return (
    <div>
      <p>sign in</p>
    </div>
  );
}
