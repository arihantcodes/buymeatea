import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    // Check if user has a profile in our database
    const userProfile = await prisma.userProfile.findFirst({
      where: { clerkId: user.id },
    });

    if (userProfile) {
      return NextResponse.json({ 
        hasProfile: true, 
        profile: userProfile 
      });
    } else {
      return NextResponse.json({ 
        hasProfile: false 
      });
    }
  } catch (error) {
    console.error('Error checking user profile:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
