import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex lg:justify-evenly lg:flex-row flex-col ">
        <div className="font-regular text-center mb-4">
          <h1>© Buy Me A Tea</h1>
        </div>

        <div className="flex flex-wrap  justify-center text-center text-gray-600 font-regular gap-5 mb-4">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/refund-policy">Refund/Cancellation Policy</Link>
          <Link href="/">Help center</Link>
        </div>

        <div className="flex justify-center gap-5 mb-4">
          <Link href="https://twitter.com/arihantcodes">
            <Image height={20} width={20} src="/x.svg" alt="" />
          </Link>
          <Link href="https://github.com/arihantcodes">
            <Image height={20} width={20} src="/github.svg" alt="" />
          </Link>
          <Link href="https://www.linkedin.com/in/arihantcodes/">
            <Image height={20} width={20} src="/linkedin.svg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
