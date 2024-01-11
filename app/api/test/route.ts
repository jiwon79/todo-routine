import { MongooseService, ObjectiveModel } from '@/lib/third-parties/mongoose';
import { NextRequest, NextResponse } from 'next/server';

interface Req extends NextRequest {
  json: () => Promise<{
    title: string;
  }>;
}

export const POST = async (request: Req) => {
  const body = await request.json();

  await MongooseService.connect();
  const newObjective = new ObjectiveModel({
    title: body.title,
  });
  await newObjective.save();

  return NextResponse.json({
    success: true,
  });
};
