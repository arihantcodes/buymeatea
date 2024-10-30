'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { Coffee, Loader2, MessageSquare, Share2, User, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import PriNavbar from "@/components/Navbar"

interface User {
  username: string
  picture: string
  bio: string
  upiId: string
}

export default function Component({ params }: { params: { username: string } }) {
  const { username } = params
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [showQR, setShowQR] = useState(false)
  const [qrCode, setQrCode] = useState("")
  
  const pricePerTea = 100
  const totalPrice = quantity * pricePerTea

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/profile?username=${username}`)
        setUser(response.data)
      } catch (err) {
        setError("Couldn't load profile. Please try again later.")
        toast.error("Error loading profile")
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [username])

  const handleQuantityChange = (value: number) => {
    setQuantity(value)
  }

  const generateUPILink = () => {
    if (!user?.upiId) {
      toast.error("UPI ID not found")
      return null
    }

    // Generate UPI payment link
    const upiURL = `upi://pay?pa=${user.upiId}&pn=${encodeURIComponent(user.username)}&am=${totalPrice}&cu=INR&tn=${encodeURIComponent(`Support from ${name}: ${message || 'Thank you!'}`)}`;
    return upiURL
  }

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast.error("Please enter your name")
      return
    }

    if (!user?.upiId) {
      toast.error("Creator's UPI ID not found")
      return
    }

    setIsProcessing(true)
    try {
      // Generate QR code for UPI payment
      const upiLink = generateUPILink()
      if (!upiLink) return

      const response = await axios.post('/api/generate-qr', {
        upiLink: upiLink
      })

      setQrCode(response.data.qrCode)
      setShowQR(true)

      // Log the support intention
      await axios.post('/api/log-support', {
        supporter: name,
        message: message,
        amount: totalPrice,
        recipientUsername: username
      })

    } catch (err) {
      console.error('Payment error:', err)
      toast.error("Failed to generate payment QR code")
    } finally {
      setIsProcessing(false)
    }
  }

  if (loading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="space-y-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <Skeleton className="h-8 w-48" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <Card className="text-center p-8">
          <CardHeader>
            <CardTitle className="text-2xl">Oops!</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
    <PriNavbar/>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Card */}
          <Card className="md:sticky md:top-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {user?.picture ? (
                    <Image
                      src={user.picture}
                      alt={user.username}
                      width={64}
                      height={64}
                      className="rounded-full border-4 border-background"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-2xl">{user?.username}</CardTitle>
                    <CardDescription>Creator</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => {
                  navigator.share({
                    title: `Support ${user?.username}`,
                    url: window.location.href
                  })
                }}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-lg font-semibold">About</Label>
                  <p className="mt-2 text-muted-foreground">{user?.bio || "No bio yet"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coffee className="w-5 h-5" />
                <span>Buy me a tea</span>
              </CardTitle>
              <CardDescription>Support my work with a cup of tea</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quantity Selector */}
              <div className="space-y-4">
                <Label>How many teas?</Label>
                <div className="flex flex-wrap gap-2">
                  {[1, 3, 5, 10].map((num) => (
                    <Button
                      key={num}
                      variant={quantity === num ? "default" : "outline"}
                      onClick={() => handleQuantityChange(num)}
                      className="flex-1 sm:flex-none"
                    >
                      {num} {num === 1 ? 'tea' : 'teas'}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <Label htmlFor="name">Your name or @social</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe or @johndoe"
                  className="w-full"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Leave a message (optional)</span>
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Thanks for your amazing work!"
                  className="min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button 
                className="w-full h-12 text-lg"
                onClick={handleSubmit}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Support ₹${totalPrice}`
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* QR Code Dialog */}
      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scan to Pay</DialogTitle>
            <DialogDescription>
              Scan this QR code with any UPI app to complete your payment of ₹{totalPrice}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6">
            {qrCode && (
              <Image
                src={qrCode}
                alt="Payment QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            )}
            <p className="mt-4 text-sm text-muted-foreground">
              Payment will be sent to {user?.upiId}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}