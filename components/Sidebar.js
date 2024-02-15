import React from 'react'
import { Home,Search,Plus,Library  } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='w-[23rem] h-full gap-2 flex flex-col p-3 text-white'>
<UpperSidebar/>
<LowerSidebar/>
</div>
  )
};



const UpperSidebar=()=>{
    return(
        <div className='bg-[#121212] h-[8rem] rounded-lg p-8 font-medium text-lg flex flex-col gap-4'>
          <div className='flex gap-4 items-center   '>
            <Home strokeWidth={3}/>
            <p>Home</p>
            </div>
            <div className='flex gap-4 items-center  '>
                <Search strokeWidth={3}/>
                <p>Search</p>
                </div>  
        </div>
    )
}

const LowerSidebar=()=>{
    return(
        <div className='bg-[#121212] p-2'>
           <div className='p-6 font-medium text-gray-400 flex items-center justify-between'>
            <Library  strokeWidth={2} />
            <p>Your Library</p>
            <Plus  strokeWidth={2} />
            </div> 
             <div className='flex flex-col gap-4'>
               <Box1/> 
               <Box2/>
            </div>
        </div>

  )}

  const Box1 = () => {
    return (
        <div className='bg-[#252525] rounded-lg p-2 flex flex-col gap-2'>
            <p className='font-medium text-base'>Create your first playlist</p>
            <p className='text-sm pb-1'>It's easy, we'll help you</p>
            <button className='bg-white text-black rounded-full px-3 py-1 font-bold'>Create playlist</button>
        </div>
    )
  }

  const Box2 = () => {
    return (
        <div className='bg-[#252525] rounded-lg p-2 flex flex-col gap-2'>
            <p className='font-medium text-base'>Let's find some podcasts to <span>follow</span></p>
            <p className='text-sm pb-1'>We'll keep you updated on new <span>episodes</span></p>
            <button className='bg-white text-black rounded-full px-3 py-1 font-bold'>Browse podcasts</button>
        </div>
    )
  }


export default Sidebar