/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import PriNavbar from "@/components/Prinavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

// Interface for User data
interface User {
  username: string;
  picture: string;
  bio: string;
  upiId: string; // Add the 'upiId' property
}

const UserProfilePage = ({ params }: { params: { username: string } }) => {
  const { username } = params;
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/profile?username=${username}`);
        setUser(response.data); // Set user data from response
      } catch (error) {
        setError("Error fetching user profile");
        console.error("Error:", error);
      }
    };

    // Call the function to fetch user data
    fetchUser();
  }, [username]);

  const [quantity, setQuantity] = useState(1);
  const pricePerTea = 100;
  const totalPrice = quantity * pricePerTea;
  
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async () => {
    setIsProcessing(true);
    try {
      const response = await axios.post("/api/createorder", {
        amount: totalPrice,
        currency: "INR",
        receipt: `Supporting ${user?.username}`,
        upiId:  user?.upiId
      });
      
      const data = await response.data;
      const { id } = response.data;
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalPrice * 100,
        currency: "INR",
        name: "Buy Me a Tea",
        description: `Supporting ${user?.username}`,
        image: "/cup2.svg",
        order_id: id,
        handler: function (response: any) {
          console.log("payment succesfull", response);
        },
        prefill: {
          name: "Aman Jain",
          email: "arihantjain7000@gmail.com",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <PriNavbar />
        <div className="grid md:grid-cols-2  md:mt-28">
          <div className="max-w-sm md:max-w-lg lg:max-w-xl md:mr-16 xl:max-w-2xl mx-auto p-8  rounded-2xl shadow-lg text-black">
            <div className="flex items-center space-x-4">
              <Image
                src={user?.picture || ""}
                height={100}
                width={100}
                alt="profile"
                className="rounded-full border-4 border-white"
              />
              <h1 className="text-2xl md:text-3xl font-bold">
                {user?.upiId}
              </h1>
            </div>

            <div className="mt-6">
              <Label className="text-lg font-semibold">Bio</Label>
              <p className="mt-2 text-sm md:text-base">{user?.bio}</p>
            </div>
          </div>
          <div className="max-w-sm md:max-w-lg lg:max-w-xl  md:mt-0 xl:max-w-2xl md:ml-16 mx-auto p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Buy Me a Tea</h2>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center  space-x-2 mr-5">
                <Image src="/cup2.svg" alt="logo" width={70} height={30} />{" "}
             
                <input
                  type="number"
                  className="md:w-16  text-center border rounded text-lg "
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  min="1"
                  max="10"
                />
              </div>
              <div className="space-x-2 w-full ml-5  ">
                {" "}
                {/* Increased button spacing */}
                <Button
                  onClick={() => handleQuantityChange(1)}
                  className={`px-4 py-2  rounded-full ${
                    quantity === 1 ? "" : "bg-gray-200 text-black"
                  }`}
                >
                  1
                </Button>
                <Button
                  onClick={() => handleQuantityChange(3)}
                  className={`px-4 py-2 rounded-full ${
                    quantity === 3 ? "" : "bg-gray-200 text-black"
                  }`}
                >
                  3
                </Button>
                <Button
                  onClick={() => handleQuantityChange(5)}
                  className={`px-4 py-2 rounded-full ${
                    quantity === 5 ? "" : "bg-gray-200 text-black"
                  }`}
                >
                  5
                </Button>
                <Button
                  onClick={() => handleQuantityChange(10)}
                  className={`px-4 py-2 rounded-full ${
                    quantity === 10 ? "" : "bg-gray-200 text-black"
                  }`}
                >
                  10
                </Button>
              </div>
            </div>
            <div className="mb-10">
              {" "}
              {/* Increased bottom margin */}
              <Input
                type="text"
                placeholder="Name or @yoursocial"
                className="w-full p-4 border rounded mb-6 text-lg"
              />
              <Textarea
                placeholder="Say something nice..."
                className="w-full p-4 border rounded text-lg"
              />
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isProcessing}
              className="w-full py-4 rounded text-lg"
            >
              Support ₹{totalPrice}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
