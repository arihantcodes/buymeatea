"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { SignInButton, SignUpButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const PriNavbar: React.FC = () => {
  const [isopen, setIsopen] = useState(false);
  const { isSignedIn, user } = useUser();
  const toggleSidebar = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-evenly items-center select-none">
      
        <div className=" lg:mt-2">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/cup2.svg" alt="logo" width={50} height={22} />
            <h1 className="font-bold text-lg">Buy Me A Tea</h1>
          </Link>
        </div>
        <div className="lg:mt-2">
          {isSignedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  {user && (
                    <Image
                      src={user.imageUrl ?? ""}
                      width={86}
                      height={86}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/editprofile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" className="font-bold lg:mr-5">
                <SignInButton mode="modal">
                  Sign in
                </SignInButton>
              </Button>
              <Button className="font-bold lg:mr-5 bg-[#C4822E] text-white p-3">
                <SignUpButton mode="modal">
                  Sign up
                </SignUpButton>
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile and Tablet Sidebar */}
      <div className="lg:hidden justify-between flex items-center   ">
        <div className="lg:hidden flex  items-center mt-4">
          <div>
            <button onClick={toggleSidebar} className="text-xl font-bold ml-5">
              ☰
            </button>
          </div>
          <div>
            <Link href="/">
              <Image src="/cup.svg" alt="logo" width={50} height={50} />
            </Link>
          </div>
          {isopen && (
            <div className="lg:hidden fixed inset-0 bg-white z-50">
              <div className="flex justify-end p-4">
                <button onClick={toggleSidebar} className="text-black">
                  ✖
                </button>
              </div>
              <div className="flex flex-col items-center text-black font-regular">
                <Link href="/faq" className="py-2 ">
                  FAQ
                </Link>
                <Link href="/" className="py-2 ">
                  WALL OF ❤️
                </Link>
                <Link href="/" className="py-2 ">
                  HELP CENTER
                </Link>
                {/* Add more links as needed */}
              </div>
            </div>
          )}
        </div>
        <div className="mt-4">
          {isSignedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full mr-6"
                >
                  {user && (
                    <Image
                      src={user.imageUrl ?? ""}
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/editprofile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" className="font-bold lg:mr-5">
                <SignInButton mode="modal">
                  Sign in
                </SignInButton>
              </Button>
              <Button className="font-bold lg:mr-5 bg-[#C4822E] text-white p-3">
                <SignUpButton mode="modal">
                  Sign up
                </SignUpButton>
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PriNavbar;
