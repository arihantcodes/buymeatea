import { NextResponse } from 'next/server'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function POST(req: Request) {
  try {
    const { supporter, message, amount, recipientUsername } = await req.json()
    
    // Log the support in your database
    await prisma.support.create({
      data: {
        supporter,
        message,
        amount,
        recipientUsername,
        status: 'pending' // You'll need to update this when payment is confirmed
      }
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Logging error:', err)
    return NextResponse.json(
      { error: 'Error logging support' },
      { status: 500 }
    )
  }
}