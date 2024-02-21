"use client"
import { useRouter } from 'next/navigation';
import Navbar2 from '@/components/Navbar2'
import Sidebarr from '@/components/Sidebarr'
import React from 'react'


const page = () => {
  const router = useRouter();

  const otpval=()=>{
    router.push('/log')
  }
  return (
    <div className='min-h-screen bg-gray-600'>
    <Navbar2 />

    <div className='max-w-md mx-auto mt-8 p-6 bg-black rounded-md shadow-md'>
      <div className='mb-6'>
        <p className='text-2xl font-bold text-center'>Log in to Spotify</p>
      </div>

      <div className='mb-6'>
  <button className='w-full py-3 bg-black text-white rounded-full border border-gray-500 hover:border-gray-300 flex items-center justify-center mb-2'>
    <img src='https://wallpapercave.com/wp/wp2860517.jpg' className='w-5 h-5 mr-2'/>
    Continue with Google
  </button>



  <button className='w-full py-3 bg-black text-white rounded-full border border-gray-500 hover:border-gray-300 flex items-center justify-center' onClick={otpval}>

    <img src='https://w7.pngwing.com/pngs/563/359/png-transparent-mobile-phones-computer-icons-telephone-phone-icon-text-phone-icon-logo-thumbnail.png' className='w-5 h-5 mr-2'/>
    Continue with Phone number
  </button>


  
</div>




    </div>
  </div>
  )
}

export default page