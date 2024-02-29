import React from 'react';
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className='flex justify-between bg-[#121212] py-6 px-8'>
      <div className='flex space-x-8'>
        <div className=' '>
          <p className='mb-2  font-bold text-white hover:underline'>company</p>
          <p className='hover:underline'>About</p>
          <p className='hover:underline'>Jobs</p>
          <p className='hover:underline'>For the Record</p>
        </div>
        <div className=' '>
          <p className='font-bold mb-2'>Communities</p>
          <p className='hover:underline'>For Artists</p>
          <p className='hover:underline'>Developers</p>
          <p className='hover:underline'>Investors</p>
          <p className='hover:underline'>Vendors</p>
        </div>
        <div className=' '>
          <p className='font-bold mb-2 hover:underline'>Useful links</p>
          <p className='hover:underline'>Support</p>
          <p className='hover:underline'>Free Mobile App</p>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <Instagram />
        <Twitter />
        <Facebook />
      </div>
    </div>
  );
}

export default Footer;
