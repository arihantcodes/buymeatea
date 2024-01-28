"use client";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link"
  import { useRouter } from "next/navigation"
  import axios from "axios"
  import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useState } from "react"

  export function UserNav() {
    const [data,setData] = useState("Profile")
    const [email,setEmail] = useState("")
    const [user,setUser] = useState("")

    const { toast } = useToast()
   const router = useRouter();
   const logout = async () => {
    try {
      const response = await axios.get("/api/user/logout")
      console.log("logout success", response.data);
      router.push("/");
      toast({
        description: "Logout Success",
      })
    } catch (error) {
      console.log("Logout failed")
      toast({
        variant: "destructive",
        title: "Logout failed !",
       
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
   }
   const getUserDetails = async () => {
    try {
        const res = await axios.get("/api/user/me");
        console.log(res.data);
        console.log(res.data.data.email);
        setEmail(res.data.data.email);

        setUser(res.data.data.username );
        setData(res.data.data.username );

    } catch (error:any) {
        if (error.response && error.response.status === 400) {
            console.error("Bad Request:", error.response.data);
            // Handle the 400 Bad Request error, e.g., show an error message to the user
        } else {
            console.error("Error fetching user details:", error);
            // Handle other errors
        }
    }
};

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>Aj</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user}</p>
              <p className="text-xs leading-none text-muted-foreground">
             {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <button
               onClick={getUserDetails}
               >
             {data === "Profile" ? "Profile..." : 
             <Link href={`/dashboard/profile/${data}`}>{data}</Link>}
              </button>
             
            </DropdownMenuItem>
           
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
          <button  onClick={logout}>
             Log out
          </button>
            
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }