import React from 'react'

const sample = () => {
  return (
 <>
  <PriNavbar />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
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
            <h1 className="text-2xl md:text-3xl font-bold">{user?.username}</h1>
          </div>

          <div className="mt-6">
            <Label className="text-lg font-semibold">Bio</Label>
            <p className="mt-2 text-sm md:text-base">{user?.bio}</p>
          </div>
        </div>

       
      </div>
 </>
  )
}

export default sample
