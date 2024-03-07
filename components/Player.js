import { PauseCircleIcon, PlayCircle, PlayCircleIcon, PlaySquare } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Player = ({ globalCurrentSongId, setGlobalCurrentSongId, globalIsTrackPlaying, setGlobalIsTrackPlaying }) => {
  const { data: session } = useSession();
  const [songInfo, setSongInfo] = useState(null);

  async function fetchSonginfo(trackId) {
    if (trackId) {
      try {
        const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
          headers: {
            Authorization: `Bearer ${session.token.access_token}`,
          },
        });

        if (!response.ok) {
          console.error(`Error fetching song info. Status: ${response.status}`);
          return null; // or handle the error accordingly
        }

        const data = await response.json();
        setSongInfo(data);
      } catch (error) {
        console.error('Error fetching song info:', error.message);
      }
    }
  }

  async function getCurrentlyPlaying() {
  
      const response = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
        headers: {
          Authorization: `Bearer ${session.token.access_token}`,
        },
      });

      if (response.status ==204 ) {
        console.error('204 response from currently playing', response.status);
        return ;
      }

      const data=await response.json()
      return data;
  
  }

  async function handlePlayPause() {
    if (session && session.token.access_token) {
      const data = await getCurrentlyPlaying();
      console.log(data.is_playing,"isplayu");
       if (data.is_playing) {
          const response = await fetch("https://api.spotify.com/v1/me/player/pause", {
            method:'PUT',
            headers: {
              Authorization: `Bearer ${session.token.access_token}`,
            },
          })
          if(response.status ==204 )
          setGlobalIsTrackPlaying(false)
}else{
  const response=await fetch('https://api.spotify.com/v1/me/player/play',{
    method:'PUT',
    headers:{
      Authorization: `Bearer ${session.token.access_token}`
  }
  
  })
  if(response.status ===204){
   setGlobalIsTrackPlaying(true)
   setGlobalCurrentSongId(data.item.id) 
  }
}
  }
}

  useEffect(() => {
    async function f() {
      if (session && session.token.access_token) {
        if (!globalCurrentSongId) {
          const data = await getCurrentlyPlaying();
          setGlobalCurrentSongId(data?.item.id);
          if (data.is_playing) {
            setGlobalIsTrackPlaying(true);
          }
          await fetchSonginfo(data?.item?.id);
        } else {
          await fetchSonginfo(globalCurrentSongId);
        }
      }
    }
    f();
  }, [globalCurrentSongId]);

  return (
    <div className='h-24 bg-neutral-800 border-t border-neutral-700 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>
      <div className='flex items-center space-x-4'>
        {songInfo?.album.images[0].url && <img className='hidden md:inline h-10 w-10' src={songInfo.album.images[0].url} />}
        <div>
          <p className='text-white text-sm'>{songInfo?.name}</p>
          <p className='text-neutral-400 text-xs'>{songInfo?.artists[0].name}</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        {globalIsTrackPlaying ? <PauseCircleIcon onClick={handlePlayPause} className='w-5 h-5' /> : <PlayCircleIcon onClick={handlePlayPause} className='w-5 h-5' />}
      </div>
      <div></div>
    </div>
  );
};

export default Player;
