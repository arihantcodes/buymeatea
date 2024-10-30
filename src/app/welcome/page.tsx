'use client'

import React, { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { Loader2 } from "lucide-react"

const profileSchema = z.object({
  username: z.string().min(6, "Username is required"),
  bio: z.string().optional(),
  upiId: z
    .string()
    .min(1, "UPI ID is required")
    .regex(/^[\w.-]+@[a-zA-Z0-9.-]+$/, "Invalid UPI ID format"),
  email: z.string().email("Invalid email"),
})

export default function Component() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [bio, setBio] = useState("")
  const [upiId, setUpiId] = useState("")
  const [loading, setLoading] = useState(false)
  const { user } = useKindeBrowserClient()

  const createProfile = async () => {
    setLoading(true)
    const formData = {
      username,
      bio,
      upiId,
      email: user?.email || "",
      kindeId: user?.id || "",
      picture: user?.picture || "",
    }

    const validation = profileSchema.safeParse(formData)
    if (!validation.success) {
      console.error("Validation errors:", validation.error.errors)
      setLoading(false)
      return
    }

    try {
      const response = await axios.post("/api/createprofile", formData)
      router.push(`/dashboard/${response.data.username}`)
      console.log(response.data)
    } catch (error) {
      console.error("Error creating profile:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-extrabold text-center mb-8">Welcome to Buy Me a Tea ☕</h1>

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
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label htmlFor="upiId">UPI ID</Label>
          <Input
            id="upiId"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="example@oksbi"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Your bio"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Button
            onClick={createProfile}
            className="w-full font-bold py-2 px-4 rounded-lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Profile...
              </>
            ) : (
              'Create Profile'
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}