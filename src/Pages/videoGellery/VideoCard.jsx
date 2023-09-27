import React from 'react'

export default function VideoCard({url, title, accType}) {
  return (
    <div >
        <div className='w-[350px] h-full bg-gray-200 rounded-[10px]'>
          <div className='flex justify-center pt-2'>
          <iframe width="full" height="200" 
        src={url}
        title={title}
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        llowfullscreen></iframe> 
          </div>
          <div className='pl-2 pt-1'>
        <button className="bg-myGreen  text-black rounded w-[40%] justify-center  ">view full page</button>
        <p>{title}</p>
        <p>{accType}</p>
        </div>  
        </div>
            
    </div>
  )
}
