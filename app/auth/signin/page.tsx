'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignInPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const signInEmailPwd = () => signIn('email-password', { email, password });

  return (
    <div>
      {error && <p>{error}</p>}
      <input type="text" value={email} onChange={onEmailChange} />
      <input type="password" value={password} onChange={onPasswordChange} />
      <button onClick={() => signInEmailPwd()}>sign in</button>
    </div>
  );
}
