'use client';
import React, { useEffect} from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "./config"
import Login from "./Login"


import LoginPage from '@/components/LoginPage';
import { Sidebar } from 'lucide-react';

export default function Home() {

  const auth=getAuth(app)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if (user){
        console.log("give dashbord route");

}    })
  },[auth])

  return (
    <div> 

    <div  className="flex w-full">
  <Navbar/>
     
   
 </div>

  

  

  </div>
  );
}
