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
import Player from '@/components/Player';
import Library from '@/components/Library';
import Artist from '@/components/Artist';



export default function Home() {
  const [view,setView]=useState('search');
  const [globalPlaylistId,setGlobalPlaylistId]=useState(null);
  const [globalArtistId,setGlobalArtistId]=useState(null);
  const[globalCurrentSongId,setGlobalCurrentSongId]=useState(null)
  const[globalIsTrackPlaying,setGlobalIsTrackPlaying]=useState(false)  
  return (
    


  <div  className="flex m-"> 

  <div  className='mt-3' >
  <Sidebarr
  view={view}
  setView={setView}
  setGlobalPlaylistId={setGlobalPlaylistId}/>
   </div>

  <div className=' ml-2 w-full'>
    <Navbar/>
    {view === 'playlist'  && <Playlist globalPlaylistId={globalPlaylistId }  setGlobalCurrentSongId={setGlobalCurrentSongId} globalArtistId={globalArtistId} />}
    {view === 'Search'  && <Search  
    setView={setView} 
     globalPlaylistId={globalPlaylistId } 
     setGlobalPlaylistId={setGlobalPlaylistId}
     setGlobalCurrentSongId={setGlobalCurrentSongId}
     setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}
     setGlobalArtistId={setGlobalArtistId}
      />}
    {view === 'library'  && <Library    setView={setView} setGlobalPlaylistId={setGlobalPlaylistId}  />}

{view === "artist" && <Artist globalArtistId={globalArtistId} setGlobalArtistId={setGlobalArtistId}  setGlobalCurrentSongId={setGlobalCurrentSongId}/>}



    <div  className='sticky z-20 bottom-0  w-full'>
<Player globalCurrentSongId={globalCurrentSongId} setGlobalCurrentSongId={setGlobalCurrentSongId} globalIsTrackPlaying={globalIsTrackPlaying} setGlobalIsTrackPlaying={setGlobalIsTrackPlaying}/>
</div>
   </div>
 
</div >

   );
}
