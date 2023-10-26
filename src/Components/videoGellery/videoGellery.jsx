import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard';
import { GrFormPrevious } from "react-icons/gr";
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
      const response = await axios.get(import.meta.env.VITE_REACT_API_URL+'getyoga');
      setAllVideo(response.data)
      console.log('fdgdfg', response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const goBack = () => {
    window.history.back();
  };

  
  const clickShowAll = () =>{
   setShowAll(!showAll);
  }

  const buttonText = showAll ? 'View Less Videos' : 'View All Videos';
  const buttonColor = showAll ? 'bg-myGray' : 'bg-myGreen';
  const displayVid = showAll ? allVideo : allVideo.slice(0, 8)

  return (<>
  
 

  <div className='static pl-2'>
  <GrFormPrevious
        onClick={goBack}
        className="lg:text-[60px] text-[40px] m-4 inline-block"
      />
    <p className='inline-block text-myGray font-poppins  2xl:text-sm text-xs pl-[5px]'>All videos</p>
  </div  >
    

    <div className='flex flex-row gap-4 w-full justify-center'>
      <Link to="/yoga">
      <button className='bg-myGreen w-[150px] h-[100px] rounded-[15px]  transition duration-300 ease-in-out hover:bg-yellow-400'> Yoga</button>
      
      </Link>

      <Link to='/bodyweight'>
      <button className='bg-myGreen w-[150px] h-[100px] rounded-[15px] transition duration-300 ease-in-out hover:bg-yellow-400'> Body Weight</button>
      </Link>
    
      <Link className="/pilates">
      <button className='bg-myGreen w-[150px] h-[100px] rounded-[15px] transition duration-300 ease-in-out hover:bg-yellow-400'> Pilates</button>
      </Link>
    
    <Link to="/jumpingrope">
    <button className='bg-myGreen w-[150px] h-[100px] rounded-[15px] transition duration-300 ease-in-out hover:bg-yellow-400'> Jumping Rope</button>
    </Link>
   
   <Link to='/dance'>
   <button className='bg-myGreen w-[150px] h-[100px] rounded-[15px] transition duration-300 ease-in-out hover:bg-yellow-400'> dance</button>
   </Link>
    
    </div>

    <br />
    <div className=' p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-1 gap-4'>
      {
        displayVid.map((video) => (
          <Link to={`/Full/${video._id}`}>
            <VideoCard  videoId={video._id} url={video.youtube_embed_link} title={video.title} img={video.thumbnail} />
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
