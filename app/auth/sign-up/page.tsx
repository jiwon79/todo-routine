'use client';

import { useState } from 'react';
import { AuthApiClient } from '@/lib/domain/auth/client/apiClient';
import { useRouter } from 'next/navigation';

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpPage = () => {
  // TODO: useForm을 만들어서 리팩토링하기
  const router = useRouter();
  const [form, setForm] = useState<SignUpForm>({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: event.target.value });
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: event.target.value });
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, password: event.target.value });
  };

  const onRepeatPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setForm({ ...form, repeatPassword: event.target.value });
  };

  const signUp = async () => {
    await AuthApiClient.signUpEmailPwd(form.name, form.email, form.password);
    await router.push(`/auth/sign-in?email=${form.email}`);
  };

  return (
    <div>
      <p>sign up</p>
      <label htmlFor="name">
        <p>name</p>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={onNameChange}
        />
      </label>
      <label htmlFor="email">
        <p>email</p>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={onEmailChange}
        />
      </label>
      <label htmlFor="password">
        <p>password</p>
        <input
          type="password"
          id="password"
          value={form.password}
          onChange={onPasswordChange}
        />
      </label>
      <label htmlFor="repeat-password">
        <p>repeat password</p>
        <input
          type="password"
          id="repeat-password"
          value={form.repeatPassword}
          onChange={onRepeatPasswordChange}
        />
      </label>
      <button onClick={() => signUp()}>sign up</button>
    </div>
  );
};

export default SignUpPage;
