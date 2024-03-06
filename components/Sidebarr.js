import React, { useState } from 'react'
import UpperSidebar from './UpperSidebar'
import LowerSidebar from './LowerSidebar'

const Sidebarr = ({ view,setView,setGlobalPlaylistId}) => {

  return (
    <div className='w-full lg:w-[23rem] h-full flex flex-col p-3 text-white bg-[#121212] '>
      
      <UpperSidebar  view={view} setView={setView}  />
        <LowerSidebar   view={view} setView={setView}  setGlobalPlaylistId={setGlobalPlaylistId}/>
    </div>
  )
}

export default Sidebarr