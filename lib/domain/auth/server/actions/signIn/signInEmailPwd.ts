import { SignInEmailPwdBody } from '@/lib/domain/auth/interface';
import { MongooseService, UserModel } from '@/lib/third-parties/mongoose';

interface SignInEmailPwdRequest extends Request {
  json: () => Promise<SignInEmailPwdBody>;
}

export async function signInEmailPwd(req: SignInEmailPwdRequest) {
  const { email, password } = await req.json();
  await MongooseService.connect();
  const users = await UserModel.find({ email, password });
  if (users.length === 0) {
    return new Response(JSON.stringify({ error: 'NOT_CORRECT_EMAIL' }), {
      status: 400,
    });
  }

  const user = users[0]!;
  return new Response(JSON.stringify({ user }));
}
