import { randomUUID } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { SignInGuestBody } from '../../../interface';
import { MongooseService, UserModel } from '@/lib/third-parties/mongoose';

interface SignInGuestRequest extends NextRequest {
  json: () => Promise<SignInGuestBody>;
}

export async function signInGuest(request: SignInGuestRequest) {
  const { guestID } = await request.json();
  await MongooseService.connect();

  if (guestID !== undefined) {
    const users = await UserModel.find({ guest_id: guestID });
    if (users.length > 0) {
      const user = users[0]!;
      return NextResponse.json({
        id: user._id,
        name: user.name,
      });
    }
  }

  const newGuestID = randomUUID();
  const newGuestName = `guest-${newGuestID.slice(0, 8)}`;
  const newGuestUser = new UserModel({
    name: newGuestName,
    guest_id: newGuestID,
  });
  await newGuestUser.save();
  return NextResponse.json({
    id: newGuestUser._id,
    name: newGuestUser.name,
  });
}
