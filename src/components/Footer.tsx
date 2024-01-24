import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex lg:justify-evenly lg:flex-row flex-col ">
        <div className="font-regular text-center mb-4">
          <h1>© Ek chai pilade</h1>
        </div>

        <div className="flex flex-wrap  justify-center text-center text-gray-600 font-regular gap-5 mb-4">
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
          <Link href="/">About</Link>
          <Link href="/">Help center</Link>
        </div>

        <div className="flex justify-center gap-5 mb-4">
          <Link href="">
            <Image height={20} width={20} src="/x.svg" alt="" />
          </Link>
          <Link href="">
            <Image height={20} width={20} src="/insta.svg" alt="" />
          </Link>
          <Link href="">
            <Image height={20} width={20} src="/linkedin.svg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
