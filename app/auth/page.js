import React from 'react'
import SignInWithGithub from '../comp/SignInWithGithub'


const page = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl  mb-4 text-black font-bold">Pleese Sign In</h2>
      
      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
      />

      {/* Email Login Button */}
      <button
        onClick={""}
        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 mb-4"
      >
        Login with Email
      </button>

      {/* GitHub Login Button */}
      <SignInWithGithub/>
    </div>
  </div>
  )
}

export default page