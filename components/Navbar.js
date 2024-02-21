'use client';
import React, { useEffect, useState} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "../app/config"
import { useRouter } from 'next/navigation';


import {
  ChevronLeft,
  ChevronRight,
  ArrowDownToLine,
  Bell,
  UserRound,
} from "lucide-react";

const Navbar = () => {

  const router=useRouter()
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };




  const auth=getAuth(app)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if (user){
        console.log("give dashbord route");

}    })
  },[auth])








  return (
    <div className='flex flex-col md:flex-row justify-between p-5 bg-[#121212] h-28 w-full mt-3'>
      <div className='flex gap-2 mb-3 md:mb-0'>
        <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
          <ChevronLeft strokeWidth={2}/>
        </button>
        <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
          <ChevronRight strokeWidth={2}/>
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <a href='/auth/login'>
          <button className="rounded-full bg-white text-black p-2 hover:scale-105 transition-transform h-8 text-sm font-weight: 900">
            Explore premium
          </button>
        </a>

        <button className="rounded-full bg-black flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm">
          <ArrowDownToLine />
          Install App
        </button>

        <div className='p-3 relative flex items-center'>
          <div className='mr-2'>
            <Bell    />
          </div>
          <button
            id="dropdownInformationButton"
            onClick={toggleDropdown}
            className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <UserRound />
            <svg
              className={`w-2.5 h-2.5 ml-2 ${dropdownVisible ? 'rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownInformation"
            className={`z-10 absolute top-full left-0 mt-2 ${dropdownVisible ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:w-56 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Bonnie Green</div>
              <div className="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
            </ul>
            <div className="py-2">
              <a href="/logall" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
