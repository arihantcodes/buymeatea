"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
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
  const { isAuthenticated, user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();
  const toggleSidebar = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-evenly  items-center select-none">
      <div className="mt-2">
          <Link href="/faq" className="font-bold lg:mr-5">
            FAQ
          </Link>
          <Link href="/" className="font-bold lg:mr-5">
            WALL OF ❤️
          </Link>
          <Link href="/" className="font-bold lg:mr-5">
            HELP CENTER
          </Link>
        </div>
        <div className=" lg:mt-2 lg:mr-40">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/cup2.svg" alt="logo" width={50} height={22} />
            <h1 className="font-bold text-lg">Buy Me A Tea</h1>
          </Link>
        </div>
        <div className="lg:mt-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  {user && (
                    <Image
                      src={user.picture ?? ""}
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
                  <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" className="font-bold lg:mr-5">
                <LoginLink postLoginRedirectURL="/me">Sign in</LoginLink>
              </Button>
              <Button className="font-bold lg:mr-5 bg-[#C4822E] text-white p-3">
                <RegisterLink postLoginRedirectURL="/welcome">
                  Sign up
                </RegisterLink>
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
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full mr-6"
                >
                  {user && (
                    <Image
                      src={user.picture ?? ""}
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
                  <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" className="font-bold lg:mr-5">
                <LoginLink postLoginRedirectURL="/me">Sign in</LoginLink>
              </Button>
              <Button className="font-bold lg:mr-5 bg-[#C4822E] text-white p-3">
                <RegisterLink postLoginRedirectURL="/welcome">
                  Sign up
                </RegisterLink>
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PriNavbar;
