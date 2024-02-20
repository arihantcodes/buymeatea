import { log } from "console";
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
    console.log("Error while logging out")
    return NextResponse.json({ error: error.messsage }, { status: 500 });
  }
}
