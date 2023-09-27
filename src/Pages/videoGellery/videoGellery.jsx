import React from 'react'
import VideoCard from './VideoCard';
import {AiOutlineArrowLeft} from "react-icons/ai";
const vid_list = [
    {
    url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
    title:'sunroof',
    accType:'1'
    },
    {
        url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
        title:'dance the night',
        accType:'2'
    },
    {
        url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
        title:'Vaundy',
        accType:'3'
    },
    {
        url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
        title:'from the start',
        accType:'4'
    },
    {
        url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
        title:'sunroof',
        accType:'1'
        },
        {
            url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
            title:'dance the night',
            accType:'2'
        },
        {
            url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
            title:'Vaundy',
            accType:'3'
        },
        {
            url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
            title:'from the start',
            accType:'4'
        },
        {
            url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
            title:'sunroof',
            accType:'1'
            },
            {
                url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
                title:'dance the night',
                accType:'2'
            },
            {
                url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
                title:'Vaundy',
                accType:'3'
            },
            {
                url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
                title:'from the start',
                accType:'4'
            },
            {
             url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
            title:'sunroof',
            accType:'1'
            },
            {
            url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
            title:'dance the night',
            accType:'2'
            },
            {
            url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
            title:'Vaundy',
            accType:'3'
            },
            {
             url:"https://www.youtube.com/embed/G5xSLbYMr-I?list=RDG5xSLbYMr-I",
            title:'from the start',
            accType:'4'
            },
    
];
 const VideoGellery = () => {

  return (<>
  <div className='static pl-2'>
  <AiOutlineArrowLeft  className='static inline-block  bg-white'/>
    <p className='inline-block text-myGray font-poppins  2xl:text-sm text-xs pl-[5px]'>Video</p>
    <button className='absolute end-10 bg-myGray'>view all videos</button>
  </div>
    <br />
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-1 gap-4'>
        {vid_list.map((video) => (
        <VideoCard  url={video.url} title={video.title} accType={video.accType} />
    ))}
    </div>
 
    </>
  )
}
export  default VideoGellery
