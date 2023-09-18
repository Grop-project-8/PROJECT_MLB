import React from 'react'
import logo_horizon from '../../assets/logo_circle/logo_horizon.svg'
import {AiOutlineArrowLeft} from "react-icons/ai";
 
export default function Forgot_password_mobile() {
  return (
    <><div class="grid justify-center sm-max  md:disabled: gap-4">
        <div className='relative'> 
        <img src={logo_horizon} className='w-[266px] h-[67px] '  alt="" />
        <AiOutlineArrowLeft  className='absolute inline-block  top-0 left-0 bg-white h-[67px]'/>
        </div>

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
