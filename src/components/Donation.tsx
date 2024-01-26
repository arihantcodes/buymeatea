import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"

const Donation = () => {
  return (
    <>
      <div className="bg-[#FAF2E8] flex justify-center flex-col items-center p-12  select-none  rounded-2xl">
        <div className="text-center">
          <h1 className="text-center font-medium text-gray-500">DONATIONS</h1>
          <h1 className="font-bold text-5xl">
            Make it simple for your audience
            <br />
            to express gratitude.
          </h1>
          <p className="font-regular text-gray-700 mt-4">
            "Ek chai pilade" makes it fun and simple to show support. <br /> In
            just a few taps, your fans can make a payment and leave a message.
          </p>
        </div>
        <div className="bg-white text-gray-800 rounded-2xl w-7/12 h-96 mt-12 flex flex-col">
          <h1 className="font-bold p-4">Chai Khareedo</h1>
          <div className="bg-[#FAF2E8] flex justify-around items-center rounded-lg ml-6 mr-6 ">
            <Image src="/cup2.svg" width={40} height={40} alt="logo" />

            <h1> ✖</h1>
            <div className="flex gap-4 text-sm ">
              <h1 className="font-bold h-11 w-11 border flex items-center justify-center bg-[#C4822E] text-white rounded-full ">
                ₹ 20
              </h1>
              <h1 className="font-bold h-11 w-11 border flex items-center justify-center border-[#C4822E] bg-white rounded-full ">
                ₹ 50
              </h1>
              <h1 className="font-bold h-11 w-11 border flex items-center justify-center border-[#C4822E] bg-white rounded-full ">
                ₹ 100
              </h1>
              <h1 className="font-bold h-11 w-11 border flex items-center justify-center border-[#C4822E] bg-white rounded-full ">
                ₹ 200
              </h1>
              <h1 className="font-bold h-11 w-11 border flex items-center justify-center border-[#C4822E] bg-white rounded-full ">
                ₹ 500
              </h1>
              
            </div>

          </div>
          <div className="mt-7 bg-[#FAF2E8] flex p-2  rounded-lg ml-6  mr-6 h-32 font-bold text-gray-800">
         say something....
          </div>
          <Button variant="default" size="lg" className="ml-12 mr-12 mt-6 rounded-full">Buy Chai</Button>

        </div>
      </div>
    </>
  );
};

export default Donation;
