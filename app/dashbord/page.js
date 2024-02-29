"use client"
import { Sidebar } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { data: session } = useSession();
  console.log(session,"jamesbond");
  const [accessToken, setAccessToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      if (session && session.token.access_token) {
        setAccessToken(session.token.access_token);

        const response = await fetch("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks", {
          headers: {
            Authorization: `Bearer ${session.token.access_token}`
          }
        });

        const data = await response.json()
        console.log(data,"sambaar");
        setPlaylist(data.items);
      }
    }

    fetchData();
  }, [session]);

  return (
    <div>
      <div><Sidebar/></div>
    </div>
  );
};

export default Page;
