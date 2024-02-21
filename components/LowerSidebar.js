import React from 'react'
import { Home,Search,Plus,Library  } from 'lucide-react';
const LowerSidebar = () => {
  return (
    <div className='bg-[#121212] p-2'>
           <div className='p-6 font-medium text-gray-400 flex items-center justify-between'>
            <Library  strokeWidth={2} />
            <p>Your Library</p>
            <Plus  strokeWidth={2} />
            </div> 
             <div className='flex flex-col gap-4'>
               
             <div className='bg-[#252525] rounded-lg p-2 flex flex-col gap-2'>
            <p className='font-medium text-base'>Create your first playlist</p>
            <p className='text-sm pb-1'>It's easy, we'll help you</p>
            <button className='bg-white text-black rounded-full px-3 py-1 font-bold'>Create playlist</button>
            </div>

            <div className='bg-[#252525] rounded-lg p-2 flex flex-col gap-2'>
            <p className='font-medium text-base'>Let's find some podcasts to <span>follow</span></p>
            <p className='text-sm pb-1'>We'll keep you updated on new <span>episodes</span></p>
            <button className='bg-white text-black rounded-full px-3 py-1 font-bold'>Browse podcasts</button>
            </div>


              
            </div>
        </div>


  )
}

export default LowerSidebar