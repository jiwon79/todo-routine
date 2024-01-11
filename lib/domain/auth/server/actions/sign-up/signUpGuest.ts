import { NextRequest, NextResponse } from 'next/server';
import { SignInGuestBody } from '../../../interface';
import { MongooseService, UserModel } from '@/lib/third-parties/mongoose';

interface SignInGuestRequest extends NextRequest {
  json: () => Promise<SignInGuestBody>;
}

export async function signUpGuest(request: SignInGuestRequest) {
  const { guestID } = await request.json();
  await MongooseService.connect();

  const newGuestName = `guest-${guestID.slice(0, 8)}`;
  const newGuestUser = new UserModel({
    name: newGuestName,
    guest_id: guestID,
  });
  await newGuestUser.save();

  return NextResponse.json({
    user: {
      id: newGuestUser._id,
      name: newGuestUser.name,
    },
  });
}
