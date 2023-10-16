import React from 'react'
import FeedSection from './FeedSection'
  
const DiaryCard = () => {
  return (
    <>
        {/* Mobile */}
        <div className='max-w-[300px] mx-auto p-4 bg-yellow-100 rounded-xl lg:hidden'>
            <div className='flex flex-col items-center '>
                <img className='rounded-full w-48 h-48' src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='Your Avatar' />
            </div>
            <h1 className='text-center font-bold text-sm'>Alex Mccarl</h1>
            <div className='p-2'>
                <label className='flex justify-center items-center pb-2'>Choose an activity</label>
                <select className='w-full p-2 rounded-lg'>
                    <option value='yoga'>Yoga</option>
                    <option value='bodyWiegth'>Body Weight</option>
                    <option value='dancing'>Dancing</option>
                    <option value='jumpingRope'>Jumping rope</option>
                    <option value='pilates'>Pilates</option>
                </select>

                <textarea
                className='mt-2 w-full p-2 rounded-lg'
                placeholder="What's on your mind?"
                ></textarea>
            
                <input className='p-2 rounded-lg' type="date" />
            </div>
            <div className='m-4'>
                <button className='p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]'>Post</button>
            </div>
        </div>
        <div className='max-w-[300px] mx-auto mt-8 p-4 bg-yellow-100 rounded-xl lg:hidden'>
            <FeedSection />
        </div>

        {/* Desktop */}
        <div className='flex justify-center'>
            <div className='max-w-[1040px] mx-auto p-4 bg-yellow-100 rounded-xl hidden lg:block'>
                <div className='flex flex-col items-center'>
                <img className='rounded-full w-48 h-48 ' src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='Your Avatar' />
                </div>
                <h1 className='text-center font-bold text-sm'>Alex Mccarl</h1>
                <div className='p-2'>
                    <label className='flex justify-center items-center pb-2'>Choose an activity</label>
                    <select className='w-full p-2 rounded-lg'>
                        <option value='yoga'>Yoga</option>
                        <option value='bodyWiegth'>Body Weight</option>
                        <option value='dancing'>Dancing</option>
                        <option value='jumpingRope'>Jumping rope</option>
                        <option value='pilates'>Pilates</option>
                    </select>

                    <textarea
                    className='mt-2 w-full p-2 rounded-lg'
                    placeholder="What's on your mind?"
                    ></textarea>
                
                    <input className='p-2 rounded-lg' type="date" />
                </div>
                <div className='m-4'>
                    <button className='p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]'>Post</button>
                </div>
            </div>
            <div className='max-w-[700px] mx-auto my-auto p-4 bg-yellow-100 rounded-xl hidden lg:block'>
                <FeedSection />
            </div>
        </div>
    </>
  )
}


export default DiaryCard