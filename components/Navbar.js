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
    <div className='flex justify-between  p-5 bg-[#121212]  h-28 w-full mt-3 '>

    

        <div className='flex gap-2  '>
            <button  className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500  h-10'>
                <ChevronLeft  strokeWidth={2}/>
            </button>
            <button  className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500  h-10'>
                <ChevronRight  strokeWidth={2}/>
            </button>
           </div>



<div  className="flex gap-2 items-center mb-7 ">

<button className=" rounded-full  bg-white text-black  p-2 hover:scale-105 transition-transform h-8 text-sm  font-weight: 900  ">
Expolore premium
</button>
    
<button className=" rounded-full bg-black flex p-2 items-center hover:scale-105 transition-transform   h-8 text-sm  ">
<ArrowDownToLine/>
install App
</button>

<div className='p-3'>
 <Bell  className='hover:ring-2 hover:ring-blue-500 rounded-md'/>
</div> 
 
<div className='p-3'>
<UserRound   className="bg-black rounded-full w-fit hover:ring-2   hover:ring-blue-500 "/>
</div>

</div>
</div>

  )
}

export default Navbar