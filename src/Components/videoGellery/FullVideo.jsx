import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


 const FullVideo = () => {

  const {id} = useParams()
  console.log(id);

  const [Video ,setYogaVideo]= useState ({})

  const handleVideoClick = async (videoId) => {
    try {
      await axios.post(import.meta.env.VITE_REACT_API_URL+"addlastVideo", { videoId: videoId });
    } catch (error) {
      console.error("Error sending video ID:", error);
    }
  };

  const getVideo = async (id)=>{
try {
  const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}getyoga/${id}`);
  setYogaVideo(response.data)
} catch (error) {
  console.log(error)
}
  }
  useEffect(()=>{
    getVideo(id)
  },[id])

  
  return (
  <>
  <div className=' grid grid-cols-1' >
  <div className='flex justify-center pt-12' >
    <iframe className="w-3/4 aspect-video rounded-lg shadow-lg " 
    src={Video.youtube_embed_link} 
    frameborder="0" allow="accelerometer;  
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
      </iframe>
  </div>
  <div className='  pt-2 flex justify-center pl-20'>
         <p className='2xl:text-2xl xl:text-xl lg:text-[24px] sm:text-sm'>{Video.title}</p>
    </div>
  </div>
   
 
 </>
  )
}
export default FullVideo

