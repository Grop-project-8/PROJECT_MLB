import { Navbar } from 'flowbite-react'
import React from 'react'

export const Forget_password_desktop = () => {
  return (
    <>
    <div class="grid justify-items-center gap-4">
        {/* <div className='relative'> 
        <img src={logo_horizon} className='w-[266px] h-[67px] '  alt="" />
        <AiOutlineArrowLeft  className='absolute inline-block  top-0 left-0 bg-white h-[67px]'/>
        </div> */}
        <Navbar/>

        <div className='grid  mx-[auto] gap-2'>
        <p className='text-[36px]'>Forgot password</p>
          <input type='email' name="" id="" placeholder=' E-mail' className='h-[50px] border-2 border-slate-900 w-full  rounded-lg' />
          <br />

          <div>
            <button class="bg-myGreen  text-black  py-2 px-4 rounded self-center">Confirm E-mail</button>
            </div>
        </div>
      </div>
    
    </>
  )
}
