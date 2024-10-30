import { NextResponse } from 'next/server'
import QRCode from 'qrcode'

export async function POST(req: Request) {
  try {
    const { upiLink } = await req.json()
    
    // Generate QR code as data URL
    const qrCode = await QRCode.toDataURL(upiLink, {
      width: 400,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    })

    return NextResponse.json({ qrCode })
  } catch (err) {
    console.error('QR generation error:', err)
    return NextResponse.json(
      { error: 'Error generating QR code' },
      { status: 500 }
    )
  }
}