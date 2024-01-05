import { ConnectService, UsersModel } from '@/lib/third-parties/mongoose';

export const GET = async () => {
  await ConnectService.connect();
  const query = UsersModel.find();
  const docs = await query;

  return new Response(JSON.stringify({ response: docs, a: 'a' }));
};
