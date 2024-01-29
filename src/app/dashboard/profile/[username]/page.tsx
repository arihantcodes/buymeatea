"use client"
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    _id: '',
    // Add other profile fields as needed
    username: '',
    upi: '',
    about: '',
  });

  const handleChange = (e:any) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/profile", profileData);

      
      if (response.status === 200) {
        console.log('Profile updated successfully:', response.data);
      } else {
        console.log('Error:', response.data.error);
      }
      router.push(`/dashboard/profile/${profileData.username}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="">
      <div className="space-y-12 flex justify-evenly items-center mt-28 flex-col">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-bold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
              >
                Change
              </button>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    ekchaipilade/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    value={profileData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="upi"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                UPI ID
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                  <span className="flex select-none items-center  text-gray-500 sm:text-sm">
                    
                  </span>
                  <input
                    type="text"
                    name="upi"
                    id="upi"
                    autoComplete="upi"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="example@paytm"
                    value={profileData.upi}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  defaultValue={""}
                  value={profileData.about}
                  onChange={handleChange}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive" onClick={handleSubmit}>
          Update Profile
        </Button>
      </div>
    </form>
  );
}
