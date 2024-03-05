"use client"
import Sidebarr from "@/components/Sidebarr";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react';

const Page = () => {
  const { data: session } = useSession();
  console.log(session,"jamesbond");
  const [accessToken, setAccessToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
     
    }

    fetchData();
  }, [session]);

  return (
    <div>
      <div>
        
   
      </div>
    </div>
  );
};

export default Page;
