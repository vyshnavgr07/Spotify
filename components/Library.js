import { PlayIcon } from 'lucide-react';
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Library = ({setView,setGlobalPlaylistId}) => {
const {data:session}=useSession();
const [playlist,setPlaylist]=useState([])
function selectPlaylist(playlist){
    setView("playlist")
    setGlobalPlaylistId(playlist)
}




useEffect(() => {
    async function fetchData() {
      if (session && session.token.access_token) {

        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: `Bearer ${session.token.access_token}`
          }
        });

        const data = await response.json();
        
        setPlaylist(data.items);
      }
    }

    fetchData();
  }, [session]);
  return (
    <div className='flex-grow h-screen'>
<header  className='text-white sticky top-0 h-20 z-10 text-4xl  '>
</header>

<div className='flex flex-col gap-4 px-8 h-screen overflow-y-scroll'>

<h2 className='text-xl font-bold'>Playlist</h2>
<div className='flex flex-wrap gap-6 '>
{playlist.map((playlist)=>{
    return    <div  onClick={()=>selectPlaylist(playlist.id)} key={playlist.id} className='cursor-pointer relative group w-56 mb-2 bg-neutral-800 hover:bg-neutral-600 rounded-md p-4'>
        <div className='absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200  shadow-2xl shadow-neutral-900 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-green-500 top-[156px] group-hover:top-[1408px] right-6'>
            <PlayIcon className='h-6 w-6 text-black '/>
        </div>

        <img className='w-48  h-48 mb-4'src={playlist.images[0].url}/>
        <p className='text-base text-white mb-1 w-48 truncate'>{playlist.name}</p>
        <p className='text-sm text-neutral-400 mb-8 w-48 truncate'>{playlist.owner.display_name}</p>

        </div>
})}
</div>
</div>
</div>
  )
}

export default Library