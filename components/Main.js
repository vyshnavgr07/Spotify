import { ArrowDownToLine, Bell, ChevronDownCircle, ChevronDownCircleIcon, ChevronLeft, ChevronRight, PlayIcon, Sidebar } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useSession } from 'next-auth/react';

const Main = ({ setView, setGlobalPlaylistId }) => {
  const { data: session } = useSession();
  const [playlist, setPlaylist] = useState([]);

  function selectPlaylist(playlistId) {
    console.log(playlistId, "playlist iddd");
    setView("playlist");
    setGlobalPlaylistId(playlistId);
  }

  useEffect(() => {
    async function fetchData() {
      if (session && session.token.access_token) {
        const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists?" + new URLSearchParams({
          country: "IN"
        }), {
          headers: {
            Authorization: `Bearer ${session.token.access_token}`
          }
        });
        const data = await response.json();
        setPlaylist(data.playlists.items);
      }
    }
    fetchData();
  }, [session]);

  return (
    <div className='gap-4 px-4 md:px-8 h-screen overflow-y-scroll mt-1 flex-grow '>
      <Navbar />

      <div className='flex flex-wrap gap-4  md:mb-48 container mx-auto  justify-between pt-5'>
        {playlist.map((playlist) => (
          <div
            onClick={() => selectPlaylist(playlist.id)}
            key={playlist.id}
            className='cursor-pointer relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-2'
          >
            <div className='absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 shadow-2xl shadow-neutral-900 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-green-500 top-[156px] group-hover:top-[148px] right-4 md:right-6'>
              <PlayIcon className='h-5 w-5 text-black' />
            </div>
            <img className='w-full h-40 mb-4' src={playlist.images[0].url} alt='playlist cover' />
            <p className='text-base text-white mb-1 truncate'>{playlist.name}</p>
            <p className='text-sm text-neutral-400 mb-8 truncate'>By {playlist.owner.display_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
