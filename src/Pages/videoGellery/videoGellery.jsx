import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard';
import {AiOutlineArrowLeft} from "react-icons/ai";
import vid_list from './vid_list';
import {Link} from 'react-router-dom'
import axios, { all } from 'axios';


 const VideoGellery = () => {
  const alltype = [...vid_list.bodyWeight, ...vid_list.dance, ...vid_list.jumpingRope, ...vid_list.pilates, ...vid_list.yoga]
  const [allVideo, setAllVideo]= useState([])
  console.log(allVideo)
  useEffect(()=>{
    getData()
  },[])
  const getData = async() =>{
    try {
      const response = await axios.get('http://localhost:8000/getyoga');
      setAllVideo(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (<>
  <div className='static pl-2'>
  <AiOutlineArrowLeft  className='static inline-block  bg-white'/>
    <p className='inline-block text-myGray font-poppins  2xl:text-sm text-xs pl-[5px]'>Video</p>
    <button className='absolute end-10 bg-myGray p-1 rounded-[3px] '>view all videos</button>
  </div>
    <br />
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-1 gap-4'>
      {
        allVideo.map((video) => (
          <Link to={`/Full/${video._id}`}>
           <VideoCard  url={video.youtube_embed_link} title={video.title} />
          </Link>

        ))}
 
    </div>
 
    </>
  )
}
export  default VideoGellery
