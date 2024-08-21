import { NextResponse, NextRequest } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: NextRequest) {
  const { amount, currency, receipt,upiId  } = await req.json();

  // Validate input parameters
  if (!amount || !currency || !receipt) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID ?? '',
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    // Ensure amount is converted to paise
    const order = await instance.orders.create({
      amount: amount * 100, // Convert amount to paise (₹100 = 10000 paise)
      currency,
      receipt,
      notes: {
        upiId: upiId, // Creator's UPI ID
      },
    });

    console.log("Order created:", order);
    return NextResponse.json(order, { status: 201 });
  } catch (error:any) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
  }
}
