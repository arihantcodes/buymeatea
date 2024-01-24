import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-evenly items-center lg:ml-4 select-none">
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
        <div className="lg:ml-16 lg:mt-2">
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
          <Link href="/" className="font-bold lg:mr-5">
            SIGN IN
          </Link>
          <Link
            href="/"
            className="font-bold lg:mr-5 bg-[#C4822E] text-white p-3 rounded-xl"
          >
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Mobile and Tablet Sidebar */}
      <div className="lg:hidden flex justify-between items-center mt-4">
        <div>
          <button
           
            className="text-xl font-bold ml-5"
          >
            ☰
          </button>
        </div>
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={120} height={18} />
          </Link>
        </div>
        <div>
         
        </div>
      </div>
    </>
  );
};

export default Navbar;
