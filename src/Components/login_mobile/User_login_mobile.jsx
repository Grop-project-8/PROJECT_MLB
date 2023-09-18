import React from 'react'
import user_login_mobile_pic from '../../assets/pic_login_mobile/user_login_mobile_pic.svg'
// import AiOutlineArrowLeft "react-icons/ai";

 const User_login_mobile = () => {
  return (
    <div class="grid justify-center sm:max md:disabled: gap-4" >
      <div>
      <img src={user_login_mobile_pic} className='h-[355px] w-100' alt="" />
      </div>
       <div  className='mx-[auto]'>
       <p className='text-[36px]'>Welcome back!</p>
       
       </div>
       <div  className='mx-[auto]'>
       <p className='text-[36px]'>Log in</p>
       </div>
       <div>
        <input type="text" name="" id="" placeholder='  user name' className='border-2 border-slate-900 w-full  rounded-lg'/>
       </div>
       <div >
        <input type="text" name="" id="" placeholder='  password' className='border-2 border-slate-900 w-full  rounded-lg'/>
       </div>
       <br />
       <button  class="bg-myGreen  text-black  py-2 px-4 rounded self-center" >Log in</button>
       <div className='mx-[auto]'>
        <a href=""> forgot password?</a>
        </div>
    </div>
  )
}
export default User_login_mobile