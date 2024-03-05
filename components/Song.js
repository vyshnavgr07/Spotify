import { Key, Play, PlayCircle } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'


const Song = ({sno,track, setGlobalCurrentSongId,globalIsTrackPlaying}) => {
const[hover,setHover]=useState(false)
const{data:session}=useSession()
async function playSong(trackId){
setGlobalCurrentSongId(track.id);
console.log(globalIsTrackPlaying,"jasir");
// setGlobalIsTrackPlaying(true)
if(session && session.token.access_token){


const response=await fetch('https://api.spotify.com/v1/me/player/play',{
  method:'PUT',
  headers:{
    Authorization: `Bearer ${session.token.access_token}`
},

body: JSON.stringify({
  uris: [track.uri]
})

});

console.log(response.status,"plandii");
}
}



  function millisToMinutesAndSeconds(millis){
    var minutes=Math.floor(millis/6000);
    var seconds=((millis % 60000)/1000).toFixed(0);
    return(
      seconds ==60 ?
      (minutes +1 )+ ":00" :
      minutes +":" + (seconds <10 ? "0" :"")+seconds
    )
  }
  return (
    <div onClick={async ()=>await playSong(track.id)} 
    onMouseEnter={()=>setHover(true)} 
    onMouseLeave={()=>setHover(false)} 
    className='grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default '>
        <div className='flex items-center space-x-4'>
         {hover? <PlayCircle className='h-5 w-5 text-white'/>  :<p className='w-5'>{sno +1}</p>}
         <img className='h-10 w-10' src={track.album.images[0].url}/>
         <div>
           <p className='w-36  lg:w-64 truncate text-white text-base'>{track.name}</p>
            <p className='w-36 truncate'>  {
                    track.artists.map((artist,i)=>{
                        return(
                            < > 
                            <span className='hover:underline'>{artist.name}</span>
                            <span>{i !=track.artists.length -1 ? ", ":null}</span>
                            </>
                        )
                    })
                 
                 }

            </p>
         </div>
        </div>


<div className='flex items-center justify-between'> 
<p className='w-40 truncate hidden md:inline '>{track.album.name}</p>
<p className=''>{millisToMinutesAndSeconds(track.duration_ms)}</p>
 </div>
    </div>
  )
}

export default Song