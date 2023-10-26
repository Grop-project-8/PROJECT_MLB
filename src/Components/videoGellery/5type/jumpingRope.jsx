import React from 'react'
import VideoCard from '../VideoCard'
import { GrFormPrevious } from "react-icons/gr";
import { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import {Link} from 'react-router-dom'

const JumpingRope = () => {

  const goBack = () => {
    window.history.back();
  };

  const [allVideo, setAllVideo]= useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async() =>{
    try {
      const response = await axios.get(import.meta.env.VITE_REACT_API_URL+'getyoga');
      setAllVideo(response.data)
    
    } catch (error) {
   
    }
  }
  const filtertype = allVideo.filter(video => video.type === "jumpingRope");

  return (
    <>
    <GrFormPrevious
        onClick={goBack}
        className="lg:text-[60px] text-[40px] m-4"
      />
    <div className=' flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg text-sm'><h1>Jumping rope</h1></div>
    <div className='flex justify-center items-center'>  
    <Link to = '/jumpingrope/stopwatch'>
    <button className=' text text-black w-[180px] h-[120px] rounded-[10px] m-4 hover:text-[#fff565] bg-[#9ffc41]  hover:scale-105 duration-150'> Stop watch ⏱️</button>
    </Link>
    </div>
    <div className='lg:mx-[10rem] md:mx[4rem]'>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center mx-1 gap-4'>
          
    {
        filtertype.map((video) => (
          <Link to={`/Full/${video._id}`}>
           <VideoCard  url={video.youtube_embed_link} title={video.title}  img={video.thumbnail} />
          </Link>
           ))}
      </div>
    </div>
    </>
  )
}
export default JumpingRope