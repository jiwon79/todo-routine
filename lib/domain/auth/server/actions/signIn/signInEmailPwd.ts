import { SignInEmailPwdBody } from '@/lib/domain/auth/interface';

interface SignInEmailPwdRequest extends Request {
  json: () => Promise<SignInEmailPwdBody>;
}

export async function signInEmailPwd(req: SignInEmailPwdRequest) {
  const { email, password } = await req.json();
  if (email !== 'a') {
    return new Response(JSON.stringify({ error: 'NOT_CORRECT_EMAIL' }), {
      status: 400,
    });
  }

  if (password !== 'a') {
    return new Response(JSON.stringify({ error: 'NOT_CORRECT_PASSWORD' }), {
      status: 400,
    });
  }

  return new Response(JSON.stringify({ user: { id: '1' } }));
}
