"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
const Navbar: React.FC = () => {
  const [isopen, setIsopen] = useState(false);

  const toggleSidebar = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-evenly items-center select-none">
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
        <div className=" lg:mt-2">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={150} height={22} />
          </Link>
        </div>
        <div className="lg:mt-2">
          <input
            type="text"
            placeholder="Search Creators"
            className="bg-[#FAF2E8] lg:mr-8 lg:h-11 lg:p-4 outline-none rounded-xl font-regular"
          />
          <Button variant={"outline"} className="font-bold lg:mr-5">
          <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
          </Button>
          <Button className="font-bold lg:mr-5 bg-[#C4822E] text-white p-3">
          <RegisterLink postLoginRedirectURL="/welcome">Sign up</RegisterLink>
          </Button>
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
          <Button variant={"outline"} className="font-bold lg:mr-5">
            <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
          </Button>
          <Button className="font-bold lg:mr-5 bg-[#C4822E] text-white p-3 ml-4 ">
            <RegisterLink postLoginRedirectURL="/welcome">Sign up</RegisterLink>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
