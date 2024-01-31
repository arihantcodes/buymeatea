"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QRCode from "qrcode.react";

const Buychai = () => {
  const [message, setMessage] = useState("");
  const maxLength = 400;
  const [amount, setAmount] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [generatedQRCode, setGeneratedQRCode] = useState<string | null>(null);
  const [upiId, setUpiId] = useState("jainari1208@paytm");

  useEffect(() => {
    // Set the default amount to ₹20 when the component mounts
    handleAmountChange(20);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      setMessage(inputValue);
    }
  };

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
    setIsActive(true); // Set isActive to true when any amount is selected
  };

  const generateQRCode = () => {
    if (upiId && amount) {
      const qrCodeText = `upi://pay?pa=${encodeURIComponent(
        upiId
      )}&mc=&tid=&tr=&tn=&cu=INR&am=${encodeURIComponent(
        amount
      )}&mam=null&url=null`;

      setGeneratedQRCode(qrCodeText);
    } else {
      alert("Please enter both UPI ID and Amount.");
    }
  };
  return (
    <>
      <div className="bg-white text-gray-800 rounded-2xl lg:w-7/12 mt-8 md:mt-12 flex flex-col border mb-4">
        <h1 className="font-bold p-4">Chai Khareedo</h1>
        <div className="bg-[#FAF2E8] flex justify-around items-center rounded-lg mx-2 md:mx-6 cursor-pointer">
          <Image src="/cup2.svg" width={40} height={40} alt="logo" />
          <h1> ✖</h1>
          <div className="flex gap-2 md:gap-4 ">
            <h1
              className={`font-bold h-9 w-9 text-xs md:text-sm md:h-11 md:w-11 border flex items-center justify-center  ${
                isActive && amount === 20
                  ? "bg-[#C4822E] text-white"
                  : "bg-white"
              } rounded-full`}
              onClick={() => handleAmountChange(20)}
            >
              ₹ 20
            </h1>
            <h1
              className={`font-bold h-9 w-9 text-xs md:text-sm md:h-11 md:w-11 border flex items-center justify-center ${
                isActive && amount === 50
                  ? "bg-[#C4822E] text-white"
                  : "bg-white"
              } rounded-full`}
              onClick={() => handleAmountChange(50)}
            >
              ₹ 50
            </h1>
            <h1
              className={`font-bold h-9 w-9 text-xs md:text-sm md:h-11 md:w-11 border flex items-center justify-center ${
                isActive && amount === 100
                  ? "bg-[#C4822E] text-white"
                  : "bg-white"
              } rounded-full`}
              onClick={() => handleAmountChange(100)}
            >
              ₹ 100
            </h1>
            <h1
              className={`font-bold h-9 w-9 text-xs md:text-sm md:h-11 md:w-11 border flex items-center justify-center ${
                isActive && amount === 200
                  ? "bg-[#C4822E] text-white"
                  : "bg-white"
              } rounded-full`}
              onClick={() => handleAmountChange(200)}
            >
              ₹ 200
            </h1>
            <h1
              className={`font-bold h-9 w-9 text-xs md:text-sm md:h-11 md:w-11 border flex items-center justify-center ${
                isActive && amount === 500
                  ? "bg-[#C4822E] text-white"
                  : "bg-white"
              } rounded-full`}
              onClick={() => handleAmountChange(500)}
            >
              ₹ 500
            </h1>
          </div>
        </div>
        <div className="mt-4 md:mb-12 flex-col md:mt-7 flex p-4 rounded-lg mx-2 md:mx-6 font-medium text-gray-800">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={message}
            onChange={handleInputChange}
            className="shadow-sm block w-full  md:h-56 h-32  md focus:ring-primary focus:border-primary sm:text-sm bg-[#FAF2E8] border outline-none border-gray-300 rounded-md resize-none"
            placeholder="Add a note"
          />
          <div className="font-regular text-sm">
            Characters left: {maxLength - message.length}
          </div>
        </div>

        <Button
          variant="default"
          size="lg"
          className="mx-4 md:mx-12 my-4 md:my-6 rounded-full"
          onClick={generateQRCode}
        >
          Buy Chai ₹{amount}
        </Button>
        {generatedQRCode && (
          <div className="absolute m-12 md:m-32  ">
            <QRCode value={generatedQRCode} size={200} />
          </div>
        )}
      </div>
    </>
  );
};

export default Buychai;
