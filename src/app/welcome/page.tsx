/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { z } from "zod";

const profileSchema = z.object({
  username: z.string().min(6, "Username is required"),
  bio: z.string().optional(),
  upiId: z
    .string()
    .min(1, "UPI ID is required")
    .regex(/^[\w.-]+@[a-zA-Z0-9.-]+$/, "Invalid UPI ID format"),
  email: z.string().email("Invalid email"),

});

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [upiId, setUpiId] = useState("");

  const { user } = useKindeBrowserClient();

  const createProfile = async () => {
    const formData = {
      username,
      bio,
      upiId,
      email: user?.email || "",
      kindeId: user?.id || "",
      picture: user?.picture || "",
    };

    const validation = profileSchema.safeParse(formData);
    if (!validation.success) {
      console.error("Validation errors:", validation.error.errors);
      return;
    }

    try {
      const response = await axios.post("/api/createprofile", formData);
      router.push(`/dashboard/${response.data.username}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-6  rounded-lg shadow-lg">
        <h1 className="text-2xl font-extrabold text-center  mb-8">
          Welcome to Buy Me a Tea ☕
        </h1>

        {user?.picture && (
          <div className="flex justify-center mb-6">
            <Image
              src={user.picture}
              width={100}
              height={100}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </div>
        )}

        <div className="space-y-4 pb-6 pt-6 mb-6">
          <Label>Email</Label>
          <Input
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label>Username</Label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label>UPI ID</Label>
          <Input
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="example@oksbi"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label>Bio</Label>
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Your bio"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Button
            onClick={createProfile}
            className="w-full  font-bold py-2 px-4 rounded-lg"
          >
            Create Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
 