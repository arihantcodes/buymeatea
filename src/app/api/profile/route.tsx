import { connect } from "@/dbconfig/dbconfig";
import Profile from "@/models/profileModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { upi, username, bio } = reqBody;

    // Log the request body
    console.log(reqBody);

    // Create a new profile instance
    const newProfile = new Profile({
      upi,
      username,
      bio,
    });

    // Log the MongoDB operation
    console.log("Inserting into MongoDB:", newProfile);

    // Save the profile to MongoDB
    await newProfile.save();

    return NextResponse.json(
      { message: "Profile created successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error While Creating Profile!!")
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
