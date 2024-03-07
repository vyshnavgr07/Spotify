import { shuffle } from 'lodash'
import { ChevronDownCircle } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { off } from 'process'
import React, { useEffect, useState } from 'react'
import Song from './Song'

const colors=[
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500'

]



 const Playlist = ({globalPlaylistId,setGlobalCurrentSongId,globalIsTrackPlaying,globalArtistId}) => {
   const {data:session}=useSession()
  const[playlistData,setPlaylistData]=useState(null)
  const[color,setColor]=useState(colors[0])
  const[opacity,setOpacity]=useState(1)
  const [textOpacity,setTextOpacity]=useState(1)
  
function changOpacity(scrollPos){
  const offset=300;
  const textOffset=10;
  if(scrollPos<offset){
    const newOpacity=1-((offset-scrollPos)/offset)
    setOpacity(newOpacity)
  }else{
   const delta=scrollPos-offset
   const newTextOpacity=1-((textOffset-delta)/textOffset)
   setTextOpacity(newTextOpacity)
  }

}


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







useEffect(() => {
  // Shuffle the colors array and get the last color
  const shuffledColor = shuffle(colors).pop();

  // Update the color state
  setColor(shuffledColor);
}, [globalPlaylistId]);

  return (
<div className='flex-grow h-screen'>

<header style={{opacity:opacity}} className='text-white sticky top-0 h-20 z-10 text-4xl bg-neutral-800 p-8 flex items-center font-bold '>

  <div  style={{opacity:textOpacity}}  className='p-2 flex items-center'>
  {/* {playlistData && <img className='h-8 w-8 ' src={playlistData.images[0]?.url} />} */}
   <p className='pl-1'>{playlistData?.name}</p>
  </div>
</header>

{/* <div className='absolute z-20 top-5 right-8 flex items-center bg-black bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-l-full  rounded-r-full   p-1 pr-2'>
<img className='rounded-full w-7 h-7 ' src={session.user.image} alt='profile pic'/>
<p>Logout</p>
<ChevronDownCircle className='h-5 w-5'/>
</div> */}

<div onScroll={(e)=>changOpacity(e.target.scrollTop)}  className='relative -top-20 h-screen overflow-y-scroll bg-neutral-900'>
<section className={`flex items-end space-x-7 bg-gradient-to-b to-neutral-900 ${color} h-80 text-white p-8`}>
     {playlistData && <img className='h-44 w-44' src={playlistData.images[0].url} />}
       <div className='h=100 w-100 '>
        <p className='text-sm font-bold'>Playlist</p>
        <h1 className='text-2xl md:text-3xl lg:text-6xl  font-extrabold'>{playlistData?.name}</h1>
      </div>    
</section>
<div className='text-white px-8 flex flex-col space-y-1 pb-28'>
 {playlistData?.tracks.items.map((track,i)=>{
 //song component
 return <Song
 globalIsTrackPlaying={globalIsTrackPlaying}
 setGlobalCurrentSongId={setGlobalCurrentSongId}
 key={track.track.id}
 sno={i}
 track={track.track}/>
 })}
 </div>


</div>





</div>












  ) 
}

export default Playlist