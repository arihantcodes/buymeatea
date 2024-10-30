'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Coffee, TrendingUp, Users } from "lucide-react"

export default function Component() {
  const [publicUrl, setPublicUrl] = useState("")
  
  useEffect(() => {
    const currentPath = window.location.pathname
    const username = currentPath.split('/').pop()
    setPublicUrl(`/public/${username}`)
  }, [])

  // Mock data - replace with your actual data
  const stats = {
    thisMonth: 2450,
    total: 12890,
    supporters: 156
  }

  const recentSupporters = [
    { id: 1, name: "Sarah K.", amount: 100, date: "2 hours ago", image: "/placeholder.svg?height=32&width=32" },
    { id: 2, name: "Mike R.", amount: 50, date: "5 hours ago", image: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Alex M.", amount: 200, date: "1 day ago", image: "/placeholder.svg?height=32&width=32" },
    { id: 4, name: "Jamie L.", amount: 75, date: "2 days ago", image: "/placeholder.svg?height=32&width=32" },
    { id: 5, name: "Chris P.", amount: 150, date: "2 days ago", image: "/placeholder.svg?height=32&width=32" }
  ]

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link href={publicUrl}>
          <Button>
            <Coffee className="mr-2 h-4 w-4" />
            Public Profile
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{stats.thisMonth}</div>
            <p className="text-xs text-muted-foreground">
              From {stats.supporters} supporters
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <Coffee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              Lifetime earnings
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Supporters</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.supporters}</div>
            <p className="text-xs text-muted-foreground">
              Unique supporters
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Supporters */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Supporters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSupporters.map((supporter) => (
              <div
                key={supporter.id}
                className="flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={supporter.image} alt={supporter.name} />
                    <AvatarFallback>{supporter.name.split(' ')[0][0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">{supporter.name}</p>
                    <p className="text-sm text-muted-foreground">{supporter.date}</p>
                  </div>
                </div>
                <div className="font-medium">₹{supporter.amount}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}