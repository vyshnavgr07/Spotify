import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Home, Search, Plus, Library } from 'lucide-react';

const LowerSidebar = ({setView,setGlobalPlaylistId}) => {
  const { data: session } = useSession();
  const [accessToken, setAccessToken] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (session && session.token.access_token) {
        setAccessToken(session.token.access_token);

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
    <div className='bg-[#121212] p-2'>
      <div className='p-6 font-medium text-gray-400 flex items-center justify-between'>
        <Library strokeWidth={2} />
        <p className='hidden sm:block'>Your Library</p>
        <Plus strokeWidth={2} />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='bg-[#252525] rounded-lg p-2 flex flex-col gap-2'>
          <p className='font-medium text-base'>Create your first playlist</p>
          <p className='text-sm pb-1'>It's easy, we'll help you</p>
          <button className='bg-white text-black rounded-full px-3 py-1 font-bold'>Create playlist</button>
        </div>
        <div className='bg-[#252525] rounded-lg p-2 flex flex-col gap-2'>
          <p className='font-medium text-base'>Let's find some podcasts to <span>follow</span></p>
          <p className='text-sm pb-1'>We'll keep you updated on new <span>episodes</span></p>
          <button className='bg-white text-black rounded-full px-3 py-1 font-bold'>Browse podcasts</button>
        </div>
        <div className='bg-[#252525] rounded-lg p-4'>
          <div>
            <p className='text-base sm:text-lg'>Your Playlist</p>
            {playlist && playlist.map((play) => (
              <div key={play.id} className="text-white bg-[#252525] rounded-lg p-4 mb-4 flex hover:bg-gray-800">
                <img className='w-8 mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtueoawXUAnk7Gj9mKocRCpp2NVTlklyJiA&usqp=CAU'/>
                <div onClick={()=>{setView("playlist"),setGlobalPlaylistId(play.id)}}>
                  <p className='text-lg font-bold'>{play.name}</p>
               <p className='text-gray-600 '>{session.token.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerSidebar;
