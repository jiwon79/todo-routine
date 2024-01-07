import { MongooseService, UsersModel } from '@/lib/third-parties/mongoose';
import { getServerSession } from '@/lib/domain/auth/next-auth';

export const GET = async () => {
  const session = await getServerSession();
  console.log('server session', session);

  await MongooseService.connect();
  const query = UsersModel.find();
  const docs = await query;

  return new Response(JSON.stringify({ response: docs, a: 'a' }));
};
