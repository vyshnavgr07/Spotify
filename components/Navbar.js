import React from 'react'
import {
    ChevronLeft,
    ChevronRight,
    ArrowDownToLine,
    Bell,
    UserRound,
  } from "lucide-react";


const Navbar = () => {
  return (
    <div className='flex justify-between bg-red-600 p-5'>

        <div className='flex gap-2'>
            <button  className='bg-black rounded-full w-fit p-2 hover:text-green-500'>
                <ChevronLeft  strokeWidth={2}/>
            </button>
            <button  className='bg-black rounded-full w-fit p-2 hover:text-green-500'>
                <ChevronRight  strokeWidth={2}/>
            </button>
           </div>



<div  className="flex gap-2  ">

<button className=" rounded-full  bg-white text-black  p-2">
Expolore premium
</button>
    
<button className=" rounded-full bg-black flex p-2">
<ArrowDownToLine/>
install App
</button>

<div className='p-3'>
 <Bell  className='hover:ring-2 hover:ring-blue-500 rounded-md'/>
</div>
 
<div className='p-3'>
<UserRound   className="bg-black rounded-full w-fit p-2"/>
</div>

</div>
</div>
  )
}

export default Navbar