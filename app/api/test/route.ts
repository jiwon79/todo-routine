import { MongooseService, UsersModel } from '@/lib/third-parties/mongoose';
import { getServerSessionUser } from '@/lib/domain/auth/server';

export const GET = async () => {
  const session = await getServerSessionUser();
  console.log('server session', session);

  await MongooseService.connect();
  const query = UsersModel.find();
  const docs = await query;

  return new Response(JSON.stringify({ response: docs, a: 'a' }));
};
