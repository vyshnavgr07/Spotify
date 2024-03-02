import React from 'react'

const Song = ({sno,track}) => {
  return (
    <div className='grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default '>
        <div className='flex items-center space-x-4'>
         <p className='w-5'>{sno +1}</p>
         <img className='h-10 w-10' src={track.album.images[0].url}/>
         <div>
           <p>{track.name}</p>
            <p>  {
                    track.artists.map((artist)=>{
                        return(
                            <> 
                            <span>{artist.name}</span>
                            <span>{i != artist.length -1 ? ", ":null}</span>
                            </>
                        )
                    })
                 
                 }

            </p>
         </div>
        </div>


<div></div>
    </div>
  )
}

export default Song