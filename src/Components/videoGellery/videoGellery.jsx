import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard';
import {AiOutlineArrowLeft} from "react-icons/ai";
import vid_list from './vid_list';
import {Link} from 'react-router-dom'
import axios, { all } from 'axios';


 const VideoGellery = () => {

  const [allVideo, setAllVideo]= useState([])
  const [showAll, setShowAll] = useState(false);

  useEffect(()=>{
    getData()
  },[])

  const getData = async() =>{
    try {
      const response = await axios.get('http://localhost:8000/getyoga');
      setAllVideo(response.data)
      console.log('fdgdfg', response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  const clickShowAll = () =>{
   setShowAll(!showAll);
  }

  const buttonText = showAll ? 'View Less Videos' : 'View All Videos';
  const buttonColor = showAll ? 'bg-myGray' : 'bg-myGreen';
  const displayVid = showAll ? allVideo : allVideo.slice(0, 8)

  return (<>
  <div className='static pl-2'>

    <p className='inline-block text-myGray font-poppins  2xl:text-sm text-xs pl-[5px]'>All videos</p>
   
  </div>

    <br />
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-1 gap-4'>
      {
        displayVid.map((video) => (
          <Link to={`/Full/${video._id}`}>
           <VideoCard  url={video.youtube_embed_link} title={video.title} img={video.thumbnail} />
          </Link>

        ))}
    </div>
    <br />

    <div className='flex  justify-center flex-col-1'>
    <button className={`${buttonColor} text-black rounded w-[40%] h-[40px] justify-center`}
     onClick={clickShowAll }
     >
      {buttonText} 
      </button>
    </div>
    <br />
    
    </>
  )
}
export  default VideoGellery
