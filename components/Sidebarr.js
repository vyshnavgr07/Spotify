import React from 'react'
import UpperSidebar from './UpperSidebar'
import LowerSidebar from './LowerSidebar'

const Sidebarr = () => {
  return (
    <div className='w-full lg:w-[23rem] h-full flex flex-col p-3 text-white bg-[#121212]'>
        <UpperSidebar/>
        <LowerSidebar/>
    </div>
  )
}

export default Sidebarr