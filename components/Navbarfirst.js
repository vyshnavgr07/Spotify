import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Navbarfirst = () => {
  return (
    <div className='flex justify-between p-5 bg-[#121212] h-28 w-full mt-3'>

      <div className='flex gap-2'>
        <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
          <ChevronLeft strokeWidth={2}/>
        </button>
        <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
          <ChevronRight strokeWidth={2}/>
        </button>
      </div>

      <div className="flex gap-2 items-center mb-7">
        <a href='/auth/login'> 
          <p className="text-white p-2 hover:scale-105 transition-transform h-8 text-sm font-weight-900">
            premium
          </p>
        </a> 

        <a href='/auth/login'> 
          <p className="text-white p-2 hover:scale-105 transition-transform h-8 text-sm font-weight-900">
            Support
          </p>
        </a> 

        <a href='/auth/login'> 
          <p className="text-white p-2 hover:scale-105 transition-transform h-8 text-sm font-weight-900">
            Download
          </p>
        </a> 

        <div className="border-l border-gray-500 h-8 mx-4"></div>

        <div className='flex gap-2 items-center'>
          <div> 
            <p className="rounded-full text-white flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm">
              Sign Up
            </p>
          </div>
          <div> 
            {/* Increased height and width for the login button */}
            <button className="rounded-full bg-white text-black flex p-2 items-center hover:scale-105 transition-transform h-10 md:h-12 w-15 md:w-16">
              Login
            </button>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Navbarfirst;
