import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Playlist = ({globalPlaylistId}) => {
  const {data:session}=useSession()
  const[playlistData,setPlaylistData]=useState(null)
  console.log(playlistData,"datum");
    useEffect(()=>{
async function f(){
    if(session && session.token.access_token){
const response=await fetch(`https://api.spotify.com/v1/playlists/${globalPlaylistId}`,{
headers:{
    Authorization: `Bearer ${session.token.access_token}`
}
})

const data=await response.json()
setPlaylistData(data)

    }  
}
f()
},[session,globalPlaylistId])


  return (
    <div className='flex-grow h-screen'>
<header  className='text-white sticky top-0 h-20 z-10  text-4xl bg-neutral-800 p-8 flex items-center font-bold'>
<div>{playlistData?.name}</div>
</header>

<div className='absolute z-20 top-5 right-8 flex items-center bg-black bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'>
{playlistData && <img className='h-44 w-44'  src={playlistData.images[0].url}/>}
</div>
    </div>
  )
}

export default Playlist