import React, { useState } from 'react'
import UpperSidebar from './UpperSidebar'
import LowerSidebar from './LowerSidebar'

const Sidebarr = ({ view,setView,setGlobalPlaylistId}) => {

  return (
    <div className=' lg:w-[23rem] h-screen flex flex-col p-3 text-white '>
      <div className='pb-2 bg-black'>
      <UpperSidebar  view={view} setView={setView}  />
      </div>
      <div className='pt-2 overflow-y-scroll '>
      <LowerSidebar   view={view} setView={setView}  setGlobalPlaylistId={setGlobalPlaylistId}/>
     </div>
     </div>
  )
}

export default Sidebarr