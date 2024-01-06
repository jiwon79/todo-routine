import { MongooseService, UsersModel } from '@/lib/third-parties/mongoose';
import { authOptions } from '@/lib/third-parties/next-auth/authOptions';
import { getServerSession } from 'next-auth';

export const GET = async () => {
  const session = await getServerSession(authOptions);
  console.log('server session', session);

  await MongooseService.connect();
  const query = UsersModel.find();
  const docs = await query;

  return new Response(JSON.stringify({ response: docs, a: 'a' }));
};
