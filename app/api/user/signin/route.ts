import { NextRequest } from 'next/server';

export const GET = (request: NextRequest) => {
  console.log(request);
  return new Response(JSON.stringify({ response: 'success' }), {
    status: 200,
  });
};
