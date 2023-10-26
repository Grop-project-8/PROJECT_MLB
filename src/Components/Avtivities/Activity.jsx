import React from 'react'
import Yoga from '../../assets/activity-img/Yoga.svg'
import BodyWeight from '../../assets/activity-img/BodyWeight.svg'
import Dance from '../../assets/activity-img/Dance.svg'
import JumpingRope from '../../assets/activity-img/JumpingRope.svg'
import Pilates from '../../assets/activity-img/Pilates.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { Link } from 'react-router-dom'


const Activity = () => {

  return (
    <>
        {/* Mobile */}
        <div className='md:hidden'>
          <div className=' flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg text-sm ' ><h1>Activities</h1></div>
             <Swiper className='w-[80%] flex flex-col '
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide > <Link to = '/yoga'><img src= {Yoga} alt="Image-yoga" className='rounded-2xl w-[100%] shadow-xl'/></Link></SwiperSlide>
                <SwiperSlide ><Link to = '/bodyweight'><img src= {BodyWeight} alt="Image-BodyWeight" className='rounded-2xl w-[100%] shadow-xl' /></Link></SwiperSlide>
                <SwiperSlide ><Link to = '/dance'><img src= {Dance} alt="Image-Dance" className='rounded-2xl w-[100%] shadow-xl'/></Link></SwiperSlide>
                <SwiperSlide > <Link to = '/jumpingrope'><img src= {JumpingRope} alt="Image-JumpingRope" className='rounded-2xl w-[100%] shadow-xl'/></Link></SwiperSlide>
                <SwiperSlide > <Link to = '/pilates'><img src= {Pilates} alt="Image-Pilates" className='rounded-2xl w-[100%] shadow-xl'/></Link></SwiperSlide> 
            </Swiper>
          </div>
        

        {/* Desktop */}
        <div className=' hidden md:block container bg-gray-100 py-6'>
          <div className='2xl:text-2xl xl:text-xl lg:text-lg text-sm ml-10' ><h1 >Activities</h1></div>    
            <div className='justify-center items-center space-x-5 space-y-5 w-full '>
              <div className='flex w-full justify-center items-center '>

                <Link to = '/yoga'>
                <img src= {Yoga} alt="Image-yoga" className='rounded-2xl  mx-3 shadow-xl hover:scale-105 duration-300'/>
                </Link>
                
                <Link to = '/bodyweight'>
                <img src= {BodyWeight} alt="Image-BodyWeight" className='rounded-2xl  mx-3 shadow-xl hover:scale-105 duration-300' />
                </Link>

                <Link to = '/dance'>
                <img src= {Dance} alt="Image-Dance" className='rounded-2xl  mx-3 shadow-xlshadow-xl hover:scale-105 duration-300'/>
                </Link>
              </div>
              <div className='flex w-full justify-center items-center'>

              <Link to = '/jumpingrope'>
                <img src= {JumpingRope} alt="Image-JumpingRope" className='rounded-2xl  mx-3 shadow-xl hover:scale-105 duration-300'/>
                </Link>

                <Link to = '/pilates'>
                <img src= {Pilates} alt="Image-Pilates" className='rounded-2xl  mx-3 shadow-xl hover:scale-105 duration-300'/> 
                </Link>
              </div>
            </div> 
        </div>
    </>
  )
}

export default Activity