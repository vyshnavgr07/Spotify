import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, signIn, useSession } from 'next-auth/react';
import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound } from 'lucide-react';
import { data } from 'browserslist';

const Navbar = () => {
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [sign, setSign] = useState(false);
  const [ses, setses] = useState('');
  

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const { data: session } = useSession();


  useEffect(() => {
    if (session) {
      setSign(true);
      setses(session.user);
    }
  }, [session]);
console.log(ses,"dattty");
  const handleToggleSignInOut = async () => {
    if (sign) {
      await signOut({ callbackUrl: 'http://localhost:3000' });
      setSign(false);
    } else {
      signIn('spotify', { callbackUrl: '/' });
    }
  };

  return (
    <div className='flex flex-col md:flex-row justify-between p-5 bg-[#121212] h-28 w-full mt-3'>
      <div className='flex gap-2 mb-3 md:mb-0'>
        <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
          <ChevronLeft strokeWidth={2} />
        </button>
        <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
          <ChevronRight strokeWidth={2} />
        </button>
      </div>

      <div className='flex gap-2 items-center'>
        <a href='/auth/login'>
          <button className='rounded-full bg-white text-black p-2 hover:scale-105 transition-transform h-8 text-sm font-weight: 900'>
            Explore premium
          </button>
        </a>

        <button className='rounded-full bg-black flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
          <ArrowDownToLine />
          Install App
        </button>

        <div className='p-3 relative flex items-center'>
          <div className='mr-2'>
            <Bell />
          </div>
          <button
            id='dropdownInformationButton'
            onClick={toggleDropdown}
            className='text-white  focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'
          >
            {/* <UserRound /> */}
            <img className='rounded-full w-10 h-10  ' src={ses.image} alt='profile'  onClick={toggleDropdown} />
            <svg
              className={`w-2.5 h-2.5 ml-2 ${dropdownVisible ? 'rotate-180' : ''}`}
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
            </svg>
          </button>

          <div
            id='dropdownInformation'
            className={`z-10 absolute top-full left-0 mt-2 ${dropdownVisible ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:w-56 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <div className='px-4 py-3 '>
              <div className='font-bold truncate text-red-600 '>{ses.name}</div>
            </div>
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownInformationButton'>
              <li>
                <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                  Account
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                  Profile
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                  Settings
                </a>
              </li>
            </ul>

            <div className='py-2'>
              <button
                onClick={handleToggleSignInOut}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                {sign ? 'Sign Out' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
