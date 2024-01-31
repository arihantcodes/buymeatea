import Buychai from '@/components/Buychai';
import React from 'react';
import Image from 'next/image';
const Page = ({params}:any) => {
  return (
    <>
    <div className='flex justify-evenly  mt-16'>
      
      <div className="relative flex flex-col items-center justify-evenly min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
        <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
          <div className="flex flex-wrap mb-6 xl:flex-nowrap">
            <div className="mb-5 mr-5">
              <div className="relative inline-block shrink-0 rounded-2xl">
               
                <div className="group/tooltip relative">
                  <span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2 border border-white"></span>
                  <span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block">
                    Status: Active
                  </span>
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="flex flex-wrap items-start justify-between mb-2">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <a className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1" href="javascript:void(0)">
                      {params.username}
                    </a>
                  </div>
                  <div className="flex flex-wrap pr-2 mb-4 font-medium">
                    <a className="flex items-center mb-2 mr-5 text-primary hover:text-primary" href="javascript:void(0)">
                      <span className="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      New York, NY
                    </a>
                    <a className="flex items-center mb-2 mr-5 text-primary hover:text-primary" href="javascript:void(0)">
                      <span className="mr-1">
                        <Image src="/upi.svg" height={20} width={40} alt=''/>
                      </span>
                    arihant@paytm
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap my-auto">
                  <a href="javascript:void(0)" className="inline-block px-6 py-3 mr-3 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-primary bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark ">
                    Follow
                  </a>
                  <a href="javascript:void(0)" className="inline-block px-6 py-3 text-base font-medium leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark ">
                    Hire
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <a href="javascript:void(0)" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                    320 Following
                  </a>
                  <a href="javascript:void(0)" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                    2.5k Followers
                  </a>
                  <a href="javascript:void(0)" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                    48 Deals
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full h-px border-neutral-200" />
          
        </div>
      <Buychai/>
      </div>
      </div>
    </>
  );
};

export default Page;
