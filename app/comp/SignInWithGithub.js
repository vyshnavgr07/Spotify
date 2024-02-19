"use client"
import React from 'react';
import { signIn } from 'next-auth/react';

const SignInWithGithub = () => {
  const handleSignIn = () => {
    signIn('SpotifyProvider', {
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <div>
      <button
        onClick={handleSignIn}
        className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
      >
        Login with GitHub
      </button>
    </div>
  );
};

export default SignInWithGithub;
