import React from 'react'
import VideoCard from '../VideoCard'
import { useNavigate } from 'react-router-dom'
import { GrFormPrevious } from "react-icons/gr";
import { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import {Link} from 'react-router-dom'


  const Dance = () => {
    const navigate = useNavigate();
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
        console.log(error)
      }
    }
    const filtertype = allVideo.filter(video => video.type === "dance");
    console.log(filtertype)
  return (
    <>
      <GrFormPrevious
        onClick={goBack}
        className="lg:text-[60px] text-[40px] m-4"
      />
    <div className=' flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg text-sm'><h1>Dance</h1></div>
    <div className='p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-1 gap-4'>
    {
        filtertype.map((video) => (
          <Link to={`/Full/${video._id}`}>
           <VideoCard videoId={video._id} url={video.youtube_embed_link} title={video.title}  img={video.thumbnail} />
          </Link>

        ))}
      </div></>
  )
}
export default Dance
