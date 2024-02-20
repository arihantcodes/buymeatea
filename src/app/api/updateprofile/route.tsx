import { connect } from "@/dbconfig/dbconfig";
import Profile from "@/models/profileModel";
import { NextRequest, NextResponse } from "next/server";

connect();

// Update profile
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);

    // Validate if _id is present in the request body
    if (!reqBody._id) {
      return NextResponse.json(
        { error: "Missing _id in the request body" },
        { status: 400 }
      );
    }

    const updatedProfile = await Profile.findByIdAndUpdate(
      reqBody._id,
      reqBody,
      { new: true } // To return the updated document
    );

    console.log(updatedProfile);

    if (!updatedProfile) {
      return NextResponse.json(
        { error: "Profile not found with the given _id" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Profile updated successfully", updatedProfile },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error While Updating Profie")
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
