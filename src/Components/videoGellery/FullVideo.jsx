import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


 const FullVideo = () => {

  const {id} = useParams()
  console.log(id);

  const [Video ,setYogaVideo]= useState ({})

  const getVideo = async (id)=>{
try {
  const response = await axios.get(`http://localhost:8000/getyoga/${id}`)
  setYogaVideo(response.data)
} catch (error) {
  console.log(error)
}
  }
  useEffect(()=>{
    getVideo(id)
  },[id])

  // const vdofull = findvdo(title)
  
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

// function findvdo(title) {
//   const categories = Object.keys(vid_list);
//   for (const category of categories) {
//     const videos = vid_list[category];
//     const vdo = videos.find((item) => item.title === title);
//     if (vdo) {
//       return vdo.youtube_embed_link;
//     }
//   }
//   return null;
// }
