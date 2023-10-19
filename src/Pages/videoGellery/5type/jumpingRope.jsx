import React from 'react'
import VideoCard from '../VideoCard'
import vid_list from '../vid_list'
import { useNavigate } from 'react-router-dom'
import { GrFormPrevious } from "react-icons/gr";

const JumpingRope = () => {
  const navigate = useNavigate();
  const goBack = () => {
    window.history.back();
  };
  //ก๊อปของเฟยมา
  return (
    <>
    <GrFormPrevious
        onClick={goBack}
        className="lg:text-[60px] text-[40px] m-4"
      />
    <div className=' flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg text-sm'><h1>Jumping rope</h1></div>
    <div className='lg:mx-[10rem] md:mx[4rem]'>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center mx-1 gap-4'>
          {vid_list.jumpingRope.map((video) => (
              <VideoCard url={video.youtube_embed_link} title={video.title}  />
          ))}
      </div>
    </div>
    </>
  )
}
export default JumpingRope