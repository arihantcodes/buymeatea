import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";





connect();

export async function POST(Request: NextRequest) {
  try {
    const bodyreq = await Request.json();
    const { username, email, password } = bodyreq;

    console.log(bodyreq);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hash,
    });

    const saveduser = await newUser.save();

    console.log(saveduser);

    return NextResponse.json(
      { message: "User created successfully",
      success: true,
      saveduser
    
    },
     
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
