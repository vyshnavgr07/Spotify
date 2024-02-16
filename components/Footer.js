import React from 'react'
import {
    Instagram,
    Twitter,
    Facebook
  } from "lucide-react";
const Footer = () => {
  return (
    <div className='flex  justify-between  bg-[#121212]'> 
    <div className='flex ml-8'>

<div className='p-5 font-bold'>
    <p className='font-bold'>company</p>
    <p>About</p>
    <p>jobs</p>
    <p>For the Record</p>
</div>
<div className='p-5 '>
    <p className='font-bold'>Communities</p>
    <p>For Artists</p>
    <p>Developers</p>
    <p>Investors</p>
    <p>Vendors</p>
</div>
<div className='p-5 '>
    <p  className='font-bold'> Useful links</p>
    <p>Support</p>
    <p>Free Mobile App</p>
    
</div>

</div>
<div className='inline'>
<Instagram /> 
<Twitter    />
<Facebook   />
</div>
 </div>
  )
}

export default Footer