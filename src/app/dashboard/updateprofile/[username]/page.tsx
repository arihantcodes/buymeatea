
"use client"
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UpdateProfile({ initialProfileData }: any) {
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    _id: initialProfileData?._id || '',
    username: initialProfileData?.username || '',
    upi: initialProfileData?.upi || '',
    about: initialProfileData?.about || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (initialProfileData) {
      setProfileData({
        ...profileData,
        _id: initialProfileData._id || '',
        username: initialProfileData.username || '',
        upi: initialProfileData.upi || '',
        about: initialProfileData.about || '',
      });
    }
  }, [initialProfileData, profileData]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate if the username is provided
    if (!profileData.username.trim()) {
      console.error("Username is required for profile update");
      return;
    }

    try {
      const response = await axios.post("/api/updateprofile", profileData);

      if (response.status === 200) {
        console.log('Profile updated successfully:', response.data);
      } else {
        console.log('Error:', response.data.error);
      }

      router.push(`/dashboard/profile/${profileData.username}`);
      console.log(response);
    } catch (error) {
      console.error('Error updating profile:', error);
      router.push("/dashboard")
    }
  };

  return (
    <form className="space-y-12 flex justify-evenly items-center mt-28 flex-col">
      {/* ... (other form elements) */}
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* ... (other form fields) */}
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
        {/* ... (other form fields) */}
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
      <Link href="/dashboard">
      <Button variant="outline">Cancel</Button>
      </Link>
        <Button variant="destructive" onClick={handleSubmit}>
          Update Profile
        </Button>
      </div>
    </form>
  );
}
