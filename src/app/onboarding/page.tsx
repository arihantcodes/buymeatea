'use client'

import React, { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import PriNavbar from "@/components/Prinavbar"

const profileSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be less than 20 characters"),
  bio: z.string().optional(),
  upiId: z
    .string()
    .min(1, "UPI ID is required")
    .regex(/^[\w.-]+@[a-zA-Z0-9.-]+$/, "Invalid UPI ID format"),
  email: z.string().email("Invalid email"),
})

export default function OnboardingPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [bio, setBio] = useState("")
  const [upiId, setUpiId] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { user } = useUser()

  const createProfile = async () => {
    setLoading(true)
    setErrors({})

    const formData = {
      username,
      bio,
      upiId,
      email: user?.emailAddresses?.[0]?.emailAddress || "",
      clerkId: user?.id || "",
      picture: user?.imageUrl || "",
    }

    const validation = profileSchema.safeParse(formData)
    if (!validation.success) {
      const newErrors: Record<string, string> = {}
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0] as string] = error.message
        }
      })
      setErrors(newErrors)
      setLoading(false)
      return
    }

    try {
      const response = await axios.post("/api/createprofile", formData)
      
      router.push(`/dashboard/${response.data.username}`)
      console.log(response.data)
    } catch (error: any) {
      console.error("Error creating profile:", error)
      if (error.response?.data?.error) {
        if (error.response.data.error.includes("username")) {
          setErrors({ username: "Username already exists" })
        } else if (error.response.data.error.includes("email")) {
          setErrors({ email: "Email already exists" })
        } else {
          setErrors({ general: error.response.data.error })
        }
      } else {
        setErrors({ general: "Something went wrong. Please try again." })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PriNavbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-6">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {user?.imageUrl && (
                  <Image
                    src={user.imageUrl}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="rounded-full"
                  />
                )}
              </div>
              <CardTitle className="text-2xl font-bold">Complete Your Profile</CardTitle>
              <CardDescription>
                Set up your profile to start accepting donations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {errors.general && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{errors.general}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={user?.emailAddresses?.[0]?.emailAddress || ""}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username *</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="your-username"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.username ? 'border-red-500' : ''
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID *</Label>
                <Input
                  id="upiId"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="example@oksbi"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.upiId ? 'border-red-500' : ''
                  }`}
                />
                {errors.upiId && (
                  <p className="text-red-500 text-sm">{errors.upiId}</p>
                )}
                <p className="text-xs text-gray-500">
                  This is where you&apos;ll receive donations
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell people about yourself..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>

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
                  'Complete Setup'
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
