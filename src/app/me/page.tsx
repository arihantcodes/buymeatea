"use client"
import PriNavbar from "@/components/Prinavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Loader2, Search, User, Coffee, ArrowRight } from "lucide-react";
import Image from "next/image";
import Star from "@/components/Star";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [checkingProfile, setCheckingProfile] = useState(false);
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const checkUserProfile = async () => {
      if (!isSignedIn) {
        setLoading(false);
        return;
      }

      try {
        setCheckingProfile(true);
        const response = await axios.get('/api/user/profile');
        
        if (response.data.hasProfile) {
          // User has a profile, redirect to their dashboard
          router.push(`/dashboard/${response.data.profile.username}`);
        } else {
          // User doesn't have a profile, show onboarding
          setLoading(false);
        }
      } catch (error) {
        console.error('Error checking profile:', error);
        setLoading(false);
      } finally {
        setCheckingProfile(false);
      }
    };

    checkUserProfile();
  }, [isSignedIn, router]);

  const gotoProfile = async () => {
    try {
      // Append the username as a query parameter
      const response = await axios.get(`/api/profile?username=${username}`);
      console.log(response.data);
      if (response.data.username) {
        router.push(`/dashboard/${response.data.username}`);
      } else {
        console.log("Username not found");
      }
    } catch (error) {
      console.log(error);
      console.log("Profile not found");
    }
  };

  // Show loading state while checking profile
  if (loading || checkingProfile) {
    return (
      <>
        <PriNavbar />
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-gradient-to-r from-[#C4822E] to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-[#C4822E]" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Checking your profile...</h3>
                <p className="text-gray-600">We&apos;re setting up your experience</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // If user is not signed in, show the username lookup form
  if (!isSignedIn) {
    return (
      <>
        <PriNavbar/>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#C4822E] to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#C4822E] to-orange-600 bg-clip-text text-transparent">
                  Find Creator
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Discover amazing creators and support their work
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-700 font-medium">Username</Label>
                    <div className="relative">
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter creator's username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="h-12 rounded-xl border-2 border-gray-200 focus:border-[#C4822E] focus:ring-4 focus:ring-orange-100 transition-all duration-200 pl-4 pr-12"
                        required
                      />
                      <User className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-8 pb-8">
                <Button 
                  className="w-full h-12 bg-gradient-to-r from-[#C4822E] to-orange-500 hover:from-[#B37328] hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2" 
                  onClick={gotoProfile}
                >
                  <Search className="h-5 w-5" />
                  Find Profile
                </Button>
              </CardFooter>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 opacity-10">
              <Star />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10">
              <Star />
            </div>
          </div>
        </div>
      </>
    );
  }

  // If user is signed in but doesn't have a profile, redirect to onboarding
  return (
    <>
      <PriNavbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-[#C4822E] to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                {user?.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    width={80}
                    height={80}
                    alt="Avatar"
                    className="rounded-full"
                  />
                ) : (
                  <Coffee className="h-12 w-12 text-white" />
                )}
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#C4822E] to-orange-600 bg-clip-text text-transparent">
                Welcome Back!
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Let&apos;s complete your profile to start accepting donations
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-6">
              <div className="text-center space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Hi {user?.firstName || 'there'}! 👋
                  </h3>
                  <p className="text-gray-600">
                    We noticed you haven&apos;t set up your profile yet. Let&apos;s get you started!
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-[#C4822E] rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <p className="text-xs text-gray-600">Setup Profile</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-gray-500 font-bold text-lg">2</span>
                    </div>
                    <p className="text-xs text-gray-500">Share Link</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-gray-500 font-bold text-lg">3</span>
                    </div>
                    <p className="text-xs text-gray-500">Get Donations</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <Button 
                className="w-full h-12 bg-gradient-to-r from-[#C4822E] to-orange-500 hover:from-[#B37328] hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2" 
                onClick={() => router.push('/onboarding')}
              >
                <ArrowRight className="h-5 w-5" />
                Start Onboarding
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}


export default LoginForm;