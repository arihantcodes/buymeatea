// src/components/Donation.tsx
// Replace double quotes with &quot; or &ldquo; or &#34; or &rdquo;

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Donation = () => {
  return (
    <>
      <div className="bg-[#FAF2E8] flex flex-col items-center p-4 md:w-full w-9/12 lg:p-12 select-none rounded-2xl">
        <div className="text-center">
          <h1 className="text-center font-medium text-gray-500">DONATIONS</h1>
          <h1 className="font-bold text-sm md:text-5xl">Make it simple for your audience</h1>
          <h1 className="font-bold text-xl md:text-5xl">to express gratitude.</h1>
          <p className="font-regular text-gray-700 mt-4">
            Buy Me A Tea makes it fun and simple to show support. <br /> In
            just a few taps, your fans can make a payment and leave a message.
          </p>
        </div>
        <div className="bg-white text-gray-800 rounded-2xl lg:w-7/12 mt-8 md:mt-12 flex flex-col">
          <h1 className="font-bold p-4">Buy Me A Tea</h1>
          <div className="bg-[#FAF2E8] flex justify-around items-center rounded-lg mx-2 md:mx-6">
            <Image src="/cup2.svg" width={40} height={40} alt="logo" />
            <h1> ✖</h1>
            <div className="flex gap-2 md:gap-4 ">
              <h1 className="font-bold h-9 w-9 text-xs md:text-sm  md:h-11 md:w-11 border flex items-center justify-center bg-[#C4822E] text-white rounded-full">
                ₹ 20
              </h1>
              <h1 className="font-bold h-6 w-6 text-xs md:text-sm md:h-11 md:w-11 border hidden md:flex items-center justify-center border-[#C4822E] bg-white rounded-full">
                ₹ 50
              </h1>
              <h1 className="font-bold h-9 w-9 text-xs md:text-sm md:h-11 md:w-11 border flex items-center justify-center border-[#C4822E] bg-white rounded-full">
                ₹ 100
              </h1>
              <h1 className="font-bold h-9 w-9 text-xs md:text-sm md:h-11 md:w-11 border flex items-center justify-center border-[#C4822E] bg-white rounded-full">
                ₹ 200
              </h1>
              <h1 className="font-bold h-9 w-9 text-xs md:text-sm md:h-11 md:w-11 border flex items-center justify-center border-[#C4822E] bg-white rounded-full">
                ₹ 500
              </h1>
            </div>
          </div>
          <div className="mt-4 md:mt-7 bg-[#FAF2E8] flex p-2 rounded-lg mx-2 md:mx-6 h-20 md:h-32 font-bold text-gray-800">
            Leave a message ...
          </div>
          <Button
            variant="default"
            size="lg"
            className="mx-4 md:mx-12 my-4 md:my-6 rounded-full"
          >
            Buy Me A Tea
          </Button>
        </div>
      </div>
    </>
  );
};

export default Donation;
