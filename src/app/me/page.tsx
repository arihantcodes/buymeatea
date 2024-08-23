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
import { useState } from "react";

const  LoginForm = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

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

  return (
    <>
      <PriNavbar/>
    <div className="flex justify-center mt-40">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Enter Your Username</CardTitle>
        <CardDescription>
          Enter your username below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="m@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={gotoProfile}>Sign in</Button>
      </CardFooter>
    </Card>
    
    </div>

    </>
  );
}


export default LoginForm;