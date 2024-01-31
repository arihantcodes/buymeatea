import Buychai from "@/components/Buychai";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Page = ({ params }: any) => {
  return (
    <>
      <div className="flex justify-evenly  mt-16">
        <div className="relative flex flex-col items-center justify-evenly min-w-0 md:w-5/12 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
          <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
            <div className="flex flex-wrap mb-6 xl:flex-nowrap">
              <div className="mb-5 mr-5">
                <div className="relative inline-block shrink-0 rounded-2xl">
                  <Image src="/avatar.svg" height={30} alt="" width={90} />
                  <div className="group/tooltip relative">
                    <span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2 border border-white"></span>
                    <span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block">
                      Status: Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="grow">
                <div className="flex flex-wrap items-start justify-between mb-2 ">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <a
                        className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                        href="javascript:void(0)"
                      >
                        {params.username}
                      </a>
                    </div>
                    <div className="flex flex-wrap pr-2 mb-4 font-medium ">
                      <a
                        className="flex items-center mb-2 mr-5 text-primary hover:text-primary"
                        href="javascript:void(0)"
                      >
                        <span className="mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        India
                      </a>
                      <a
                        className="flex items-center mb-2 mr-5 text-primary hover:text-primary"
                        href="javascript:void(0)"
                      >
                        <span className="mr-1">
                          <Image src="/upi.svg" height={20} width={40} alt="" />
                        </span>
                        jainari1208@paytm
                      </a>
                    </div>
                    <div className="flex justify-start gap-5 mb-4">
                      <Link href="https://twitter.com/Arihantdotcom">
                        <Image height={20} width={20} src="/x.svg" alt="" />
                      </Link>
                      <Link href="https://github.com/arihantdotcom">
                        <Image
                          height={20}
                          width={20}
                          src="/github.svg"
                          alt=""
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/arihantdotcom/">
                        <Image
                          height={20}
                          width={20}
                          src="/linkedin.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-full h-px border-neutral-200" />
          </div>
          <Buychai />
        </div>
      </div>
    </>
  );
};

export default Page;
