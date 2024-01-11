'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useSignIn } from '@/lib/domain/auth/client';

export default function SignInPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const { signInEmailPwd, signInGuest } = useSignIn();

  const [email, setEmail] = useState(searchParams.get('email') ?? '');
  const [password, setPassword] = useState(searchParams.get('password') ?? '');

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <p>sign in</p>
      <p>{error}</p>
      <input type="text" value={email} onChange={onEmailChange} />
      <input type="password" value={password} onChange={onPasswordChange} />
      <button onClick={() => signInEmailPwd(email, password)}>sign in</button>
      <button onClick={() => signInGuest()}>guest login</button>
    </div>
  );
}
