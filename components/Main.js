import { ArrowDownToLine, Bell, ChevronDownCircle, ChevronDownCircleIcon, ChevronLeft, ChevronRight, PlayIcon, Sidebar } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useSession } from 'next-auth/react';

const Main = ({setView,setGlobalPlaylistId}) => {
  const {data:session}=useSession();
  const [playlist,setPlaylist]=useState([])
  function selectPlaylist(playlist){
    console.log(playlist,"playlist iddd");
       setView("playlist")
      setGlobalPlaylistId(playlist)
  
  }
  
  
  useEffect(() => {
    async function f() {
        if (session && session.token.access_token) {
            const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists?" + new URLSearchParams({
                country: "IN"
            }), {
                headers: {
                    Authorization: `Bearer ${session.token.access_token}`
                }
            })
            const data = await response.json()
            setPlaylist(data.playlists.items)
        }
    }
    f()
  }, [session])
  return (
    <div className='gap-4 px-4 md:px-8 h-screen overflow-y-scroll mt-1 flex-grow '>

{/* <div className='h-20 fixed bg-gray-800 flex  w-full z-50 '>

<div className='flex gap-2 mb-3 md:mb-0'>
        <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
          <ChevronLeft strokeWidth={2} />
        </button>
        <button className='bg-[#121212] rounded-full w-fit p-2 hover:text-green-500 h-10'>
          <ChevronRight strokeWidth={2} />
        </button>
      </div>

<div className='flex gap-2 items-center justify-end'>
       
          <button className='rounded-full bg-white text-black p-2 hover:scale-105 transition-transform h-8 text-sm font-weight: 900'>
            Explore premium
          </button>
     

        <button className='rounded-full bg-black flex p-2 items-center hover:scale-105 transition-transform h-8 text-sm'>
          <ArrowDownToLine />
          Install App
        </button>

        <div className='p-3 relative flex items-center'>
          <div className='mr-2'>
            <Bell />
          </div>
          </div>


          <div className=' flex items-center bg-black bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-l-full  rounded-r-full   p-1 pr-2'>
      <img className='rounded-full w-7 h-7 ' src={session.user.image} alt='profile pic'/>
     <p>Logout</p>
      <ChevronDownCircle className='h-5 w-5'/>
       </div>

     </div>
</div> */}
<Navbar/>
<div className='h-6 w-full'>

</div>




  <div className='flex flex-wrap gap-4 mb-16 md:mb-48'>
    {playlist.map((playlist) => (
      <div
        onClick={() => selectPlaylist(playlist.id)}
        key={playlist.id}
        className='cursor-pointer relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-2'
      >
        <div className='absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 shadow-2xl shadow-neutral-900 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-green-500 top-[156px] group-hover:top-[148px] right-4 md:right-6'>
          <PlayIcon className='h-5 w-5 text-black' />
        </div>
        <img className='w-full h-40 mb-4' src={playlist.images[0].url} alt='playlist cover'/>
        <p className='text-base text-white mb-1 truncate'>{playlist.name}</p>
        <p className='text-sm text-neutral-400 mb-8 truncate'>By {playlist.owner.display_name}</p>
      </div>
    ))}
  </div>
</div>

  )
}

export default Main