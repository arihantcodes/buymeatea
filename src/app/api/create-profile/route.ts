// src/app/api/create-profile/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, username, bio, upiId, kindeId,picture } = await req.json();

  if (!email || !username || !upiId) {
    return NextResponse.json({ error: 'Email, username, and UPI ID are required' }, { status: 400 });
  }
  if(email){
    const emailExists = await prisma.userProfile.findFirst({
      where: { email },
    });
    if (emailExists) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }
  }

  try {
    const userProfile = await prisma.userProfile.create({
      data: {
        email,
        username,
        bio,
        kindeId,
        upiId,
        picture
      },
    });

    return NextResponse.json(userProfile, { status: 201 });
  } catch (error) {
    console.error('Error creating user profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



