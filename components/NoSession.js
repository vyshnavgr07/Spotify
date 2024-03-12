import React from 'react'
import Navbar from './Navbar'
import spotifImage from "../public/images/spotifyImage.png"
const NoSession = () => {
  return (
    <div className='flex flex-col gap-4 px-4 md:px-8 h-screen  mt-1 w-full'>
    <Navbar />
    <div>
      <iframe
        className='w-full h-screen'
        src="https://giphy.com/embed/gLtfALLX0y0wf9hiYI"
        width="270"
        height="480"
        frameBorder="0"
        title="giphy-embed"
        allowFullScreen
      ></iframe>
      <p className='text-center mt-2'><a href="https://giphy.com/gifs/novamusicblog-playlist-nova-era-music-blog-gLtfALLX0y0wf9hiYI">via GIPHY</a></p>
    </div>
  </div>
  )
}

export default NoSession