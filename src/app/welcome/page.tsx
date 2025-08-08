'use client'

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()
  const { user } = useUser()

  const startOnboarding = () => {
    router.push('/onboarding')
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-extrabold text-center mb-8">Welcome to Buy Me a Tea ☕</h1>

        {user?.imageUrl && (
          <div className="flex justify-center mb-6">
            <Image
              src={user.imageUrl}
              width={100}
              height={100}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </div>
        )}

        <div className="space-y-4 pb-6 pt-6 mb-6">
          <div className="text-center">
                          <p className="text-gray-600 mb-6">
                Hi {user?.firstName || 'there'}! Let&apos;s set up your profile to start accepting donations.
              </p>
          </div>

          <Button
            onClick={startOnboarding}
            className="w-full font-bold py-2 px-4 rounded-lg"
          >
            Start Onboarding
          </Button>
        </div>
      </div>
    </div>
  )
}