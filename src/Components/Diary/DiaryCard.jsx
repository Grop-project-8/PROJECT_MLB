import React from 'react'
  
const DiaryCard = () => {
  return (
    <div className='max-w-[300px] mx-auto p-4 bg-yellow-100 rounded-xl'> 
        <div className=''>

                <img className='h-full w-full' src="https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png" alt="Your Avatar" />
                <div className='text-center font-bold text-sm'>かわいい猫</div>
            <div className='p-2'>
                <label className='flex justify-center items-center pb-2'>Choose an activity</label>
                <select className='w-full p-2 rounded-lg'>
                    <option value='yoga'>Yoga</option>
                    <option value="bodyWiegth">Body Weight</option>
                    <option value="dancing">Dancing</option>
                    <option value="jumpingRope">Jumping rope</option>
                    <option value="pilates">Pilates</option>
                </select>

                <textarea
                className='mt-2 w-full p-2 rounded-lg'
                placeholder="What's on your mind?"
                ></textarea>
            
                <input className='p-2 rounded-lg' type="date" />
            </div>
            <div className="m-4">
                <button className="p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]">Post</button>
            </div>
        </div>
    </div>
  )
}


export default DiaryCard