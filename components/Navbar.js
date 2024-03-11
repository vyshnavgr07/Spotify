import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, signIn, useSession } from 'next-auth/react';
import { ChevronLeft, ChevronRight, ArrowDownToLine, Bell, UserRound, ChevronDownCircle } from 'lucide-react';
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
       
          <div
  className='flex items-center bg-black bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-l-full rounded-r-full p-1 pr-2'
  onClick={handleToggleSignInOut}
>
  {session && session.user && session.user.image && (
    <img className='rounded-full w-7 h-7' src={session.user.image} alt='profile pic' />
  )}
  {session ? <p>Logout</p> : <p>Login</p>}
  <ChevronDownCircle className='h-5 w-5' />
</div>






          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
