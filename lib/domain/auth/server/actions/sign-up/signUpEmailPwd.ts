import { SignUpEmailPwdBody } from '@/lib/domain/auth/interface';
import { MongooseService, UserModel } from '@/lib/third-parties/mongoose';

interface SignInEmailPwdRequest extends Request {
  json: () => Promise<SignUpEmailPwdBody>;
}

export async function signUpEmailPwd(req: SignInEmailPwdRequest) {
  const { name, email, password } = await req.json();
  await MongooseService.connect();
  const newUser = new UserModel({
    name,
    email,
    password,
    type: 'email-password',
  });
  await newUser.save();

  return Response.json({
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  });
}
