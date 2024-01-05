import { MongooseService, UsersModel } from '@/lib/third-parties/mongoose';

export const GET = async () => {
  await MongooseService.connect();
  const query = UsersModel.find();
  const docs = await query;

  return new Response(JSON.stringify({ response: docs, a: 'a' }));
};
