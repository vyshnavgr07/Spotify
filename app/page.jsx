'use client';
import React, { useEffect} from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import {app} from "./config"
// import Login from "./Login"


import LoginPage from '@/components/LoginPage';
import Sidebarr from '@/components/Sidebarr';


export default function Home() {

//   const auth=getAuth(app)

//   useEffect(()=>{
//     onAuthStateChanged(auth,(user)=>{
//       if (user){
//         console.log("give dashbord route");

// }    })
//   },[auth])

  return (
    <div  className="flex m-"> 

  <div  className='mt-3' >
  <Sidebarr/>
   </div>


   <div className=' ml-2 w-full'>
  <Navbar/>
   </div>

</div>
  );
}
