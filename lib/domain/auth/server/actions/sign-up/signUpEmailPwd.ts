import { SignUpEmailPwdBody } from '@/lib/domain/auth/interface';
import { MongooseService, UserModel } from '@/lib/third-parties/mongoose';
import { hash } from '@/lib/third-parties/bcrypt';
import { NextResponse } from 'next/server';

interface SignInEmailPwdRequest extends Request {
  json: () => Promise<SignUpEmailPwdBody>;
}

export async function signUpEmailPwd(req: SignInEmailPwdRequest) {
  const { name, email, password } = await req.json();
  await MongooseService.connect();
  const existUsers = await UserModel.find({ email });
  if (existUsers.length > 0) {
    return NextResponse.json({ error: 'EMAIL_ALREADY_EXIST' }, { status: 400 });
  }

  const newUser = new UserModel({
    name,
    email,
    password: hash(password),
    type: 'email-password',
  });
  await newUser.save();

  return NextResponse.json({
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  });
}
