import { SignInEmailPwdBody } from '@/lib/domain/auth/interface';
import { MongooseService, UserModel } from '@/lib/third-parties/mongoose';
import { compareHash, hash } from '@/lib/third-parties/bcrypt';
import { NextResponse } from 'next/server';

interface SignInEmailPwdRequest extends Request {
  json: () => Promise<SignInEmailPwdBody>;
}

export async function signInEmailPwd(req: SignInEmailPwdRequest) {
  const { email, password } = await req.json();
  await MongooseService.connect();
  console.log(email, password);
  const users = await UserModel.find({ email });
  if (users.length === 0) {
    return NextResponse.json({ error: 'NOT_CORRECT_EMAIL' }, { status: 400 });
  }

  const user = users[0]!;
  console.log('user', user);
  if (user.password && !compareHash(password, user.password)) {
    return NextResponse.json({ error: 'NOT_CORRECT_EMAIL' }, { status: 400 });
  }

  return NextResponse.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
}
