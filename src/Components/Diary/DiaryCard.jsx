import React, { useState } from 'react'
import { activities } from './actMockData.js'
import FeedSection from './FeedSection'
  
const DiaryCard = () => {
    const [activityType, setActivityType] = useState('--Activity type--')
    const [activityName, setActivityName] = useState('--Activity name--')
    const [actName, setActName] = useState([])
    
    const changeActType = (even) => {
        setActivityType(even.target.value)
        setActName(activities.find( actT => actT.actType === even.target.value).actName)
    }

    const changeActName = (even) => {
        setActivityName(even.target.value)
    }

    


  return (
    <>
        {/* Mobile */}
        <div className='max-w-[300px] mx-auto p-4 bg-yellow-100 rounded-xl lg:hidden'>
            <div className='flex flex-col items-center '>
                <img className='rounded-full w-48 h-48' src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='Your Avatar' />
            </div>
            <h1 className='text-center font-bold text-sm'>Alex Mccarl</h1>
            <div className='p-2'>
                {/* <label className='flex justify-center items-center pb-2'>Choose an activity</label> */}
                <select className='w-full p-2 rounded-lg' value={activityType} onChange={changeActType}>
                    <option value='activity'>-- Activity type --</option>
                    {activities.map(actT => (
                        <option value={actT.actType}>{actT.actType}</option>
                    ))}
                </select>

                <select className='w-full p-2 rounded-lg mt-2' value={activityName} onChange={changeActName}>
                    <option value='activity'>-- Activity name --</option>
                    {actName.map(actN => (
                        <option value={actN.name}>{actN.name}</option>
                    ))}
                </select>

                <input className='p-2 rounded-lg mt-2 w-3/5 ' type="number" placeholder='Duration' />
                <label className='p-1 font-bold mx-3'>Minute</label>

                <textarea
                className='mt-2 w-full p-2 rounded-lg'
                placeholder="What's on your mind?"
                ></textarea>
            
            </div>
            <div className='m-2'>
                <button className='p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]'>Post</button>
            </div>
        </div>
        <div className='max-w-[300px] mx-auto mt-8 p-4 bg-yellow-100 rounded-xl lg:hidden'>
            <FeedSection />
        </div>

        {/* Desktop */}
        <div className='hidden lg:block'>
            <div className='flex flex-col items-center '>
                <div className='w-[700px] flex mx-4 p-2 bg-yellow-100 rounded-xl'>
                    <div className='text-center w-[50%] text-xs'>
                        <img className='rounded-full w-[50%] mx-auto ' src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='Your Avatar' />
                        <h1 className='font-bold  m-2'>Alex Mccarl</h1>
                        {/* <label className=' m-2'>Choose an activity</label> */}
                    </div>
                    <div className='p-2 flex flex-wrap mx-2' name='Activity type'>
                        <div className='flex justify-between w-full'>
                            <select className='w-[50%]  p-2 rounded-lg m-2' value={activityType} onChange={changeActType}>
                                <option value='activity'>-- Activity type --</option>
                                {activities.map(actT => (
                                    <option value={actT.actType}>{actT.actType}</option>
                                ))}
                            </select>

                            <select className='w-[50%] p-2 rounded-lg m-2' value={activityName} onChange={changeActName}>
                                <option value='activity'>-- Activity name --</option>
                                {actName.map(actN => (
                                    <option value={actN.name}>{actN.name}</option>
                                ))}
                            </select>
                        </div>
                        <input className='p-2 rounded-lg m-2' type="number" placeholder='Duration' />
                        <label className='p-1 mt-3 font-bold'>Minute</label>
                        
                        <textarea
                        className='m-2 w-full p-2 rounded-lg'
                        placeholder="What's on your mind?" name='detail'></textarea>

                        <div className='m-2'>
                            <button className='p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]'>Post</button>
                        </div>
                    </div>
                </div>
                <div className='w-[700px] my-8 p-4 bg-yellow-50 rounded-xl hidden lg:block'>
                    <FeedSection />
                </div>
            </div>
        </div>
    </>
  )
}


export default DiaryCard