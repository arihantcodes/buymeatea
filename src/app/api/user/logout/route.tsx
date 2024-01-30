import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout Successful",
      status: true,
    });

    response.cookies.set("token", "",
     { httpOnly: true, expires: new Date(0) });
     return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.messsage }, { status: 500 });
  }
}
