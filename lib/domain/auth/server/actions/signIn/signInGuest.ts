import { NextRequest, NextResponse } from 'next/server';
import { MongooseService, UserModel } from '@/lib/third-parties/mongoose';
import { SignInGuestBody, SignInResponse } from '../../../interface';

interface SignInGuestRequest extends NextRequest {
  json: () => Promise<SignInGuestBody>;
}

export async function signInGuest(
  request: SignInGuestRequest,
): Promise<NextResponse<SignInResponse>> {
  const { guestID } = await request.json();
  await MongooseService.connect();

  const users = await UserModel.find({ guest_id: guestID });
  if (users.length === 0) {
    return NextResponse.json({
      error: 'NOT_EXIST_USER',
    });
  }

  const user = users.at(0)!;
  return NextResponse.json({
    user: {
      id: user._id.toString(),
      name: user.name!,
    },
  });
}
