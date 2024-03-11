import React from 'react'
import { Home,Search,Plus,Library  } from 'lucide-react';
import { useRouter } from 'next/navigation';
const UpperSidebar = ({view,setView}) => {
  const router=useRouter();
  return (
    <div>
 <div className='bg-[#121212] h-[8rem] rounded-lg p-8 font-medium text-lg flex flex-col gap-4'>
          <div  className='flex gap-4 items-center   '>
            <Home    strokeWidth={3}/>
            <button onClick={()=>setView("main")}>Home</button>
            </div>
            <div className='flex gap-4 items-center  '>
                <Search strokeWidth={3}/>
                <button onClick={()=>setView("Search")} >Search</button>
                </div>  
        </div>


    </div>
  )
}

export default UpperSidebar