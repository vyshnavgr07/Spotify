'use client';
import React, { useEffect, useState} from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoginPage from '@/components/LoginPage';
import Sidebarr from '@/components/Sidebarr';
import { useSession } from 'next-auth/react';
import { data } from 'autoprefixer';
import Main from '@/components/Main';
import Playlist from '@/components/Playlist';
import Search from '@/components/Search';



export default function Home() {
  const [view,setView]=useState('search');
  const [globalPlaylistId,setGlobalPlaylistId]=useState(null);
  const [globalArtistId,setGlobalArtistId]=useState(null);

  return (
    <div>  
    <div  className="flex m-"> 

  <div  className='mt-3' >
  <Sidebarr
  view={view}
  setView={setView}
  setGlobalPlaylistId={setGlobalPlaylistId}/>
   </div>

;

   <div className=' ml-2 w-full'>
    <Navbar/>
    {view === 'playlist'  && <Playlist globalPlaylistId={globalPlaylistId} />}
    {view === 'Search'  && <Search/>}
   </div>

</div >
<div className='mt-10'>
<Footer/>
</div>

</div>

  );
}
