"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const router = useRouter();
  const { toast } = useToast()
  const onSignup = async () => {
    try {
      const response = await axios.post("/api/user/signup", user )
      console.log("signup success", response.data);
      toast({
        description: "Account Create Successfully",
      })
      router.push(`/dashboard/profile/&{username}`);
    } catch (error) {
      console.log("create account failed")
      toast({
        variant: "destructive",
        title: "Create Account failed !",
        description: "Email Already Exits ",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
 
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
             
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              
            />
          </div>
          <div className="grid gap-1">
          <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
             
            />
          </div>
          <Button disabled={isLoading} onClick={onSignup}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex justify-evenly">
      <Link href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=665870045363-45r97n4h1dhdhkg9r1rfgdguoqis9msu.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=qaDU5vnA_KZwG4HjeUwGlN0XuKzFxZ5_ynm3VdasRnc&code_challenge=vQLL63E0Senpc57KaoWckjAYob4fGTgmdwWPq_vSpSY&code_challenge_method=S256&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow">
          <Button variant="outline" type="button" disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.gitHub className="mr-2 h-4 w-4" />
            )}{" "}
            GitHub
          </Button>
        </Link>
        OR
        <Link href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=665870045363-45r97n4h1dhdhkg9r1rfgdguoqis9msu.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=qaDU5vnA_KZwG4HjeUwGlN0XuKzFxZ5_ynm3VdasRnc&code_challenge=vQLL63E0Senpc57KaoWckjAYob4fGTgmdwWPq_vSpSY&code_challenge_method=S256&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow">
          <Button variant="outline" type="button" disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.google className="mr-2 h-4 w-4" />
            )}{" "}
            Google
          </Button>
        </Link>
    </div>
    </div>
  );
}
