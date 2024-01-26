import Star from "@/components/Star";
import React from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Donation from "@/components/Donation";

const page = () => {
  return (
    <>
      <div className="flex justify-evenly items-center md:mt-16 flex-col">
        <div className="flex  items-center flex-col">
          <div className="flex flex-col md:flex-row  items-center gap-1 mb-5 md:mb-12 mt-9">
            <div className="flex">
              <Star />
            </div>
            <h1 className="font-regular  text-sm md:text-xl">
              Appreciated by over 1,000+ creators.
            </h1>
          </div>
          <h1 className="font-bold text-4xl md:mb-9 mb-3  md:text-8xl ">
            Monetize your
            <br />
            creative efforts
          </h1>
          <h3 className="flex items-center font-regular text-gray-500 text-xs lg:text-lg">
            Accept Donations Via{" "}
            <span>
              <Image src="/upi.svg" height={40} width={40} alt="upi"></Image>
            </span>{" "}
            Direct To Your Account
          </h3>
          <h3 className="font-regular  text-xs lg:text-lg text-gray-500  ">
            It’s easier than you think.
          </h3>
        </div>
        <div className="mt-8 mb-6">
          <Link
            href="/"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Start your Tapri
          </Link>
          <h3 className="font-bold mt-5 text-gray-500">100% commission Free</h3>
        </div>
        {/* home screen page end */}
        <div className="mt-32 mb-9 flex justify-center flex-col items-center">
          <Donation />
          <Image
            src="/blog.svg"
            width={800}
            height={80}
            alt=""
            className="mt-32 h-80 w-80 md:h-[800px] md:w-[800px] "
          />
        </div>
      </div>
    </>
  );
};

export default page;
