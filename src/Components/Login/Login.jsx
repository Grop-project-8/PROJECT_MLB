
import logo from '../../assets/login/login-logo.svg'
import hero2 from '../../assets/hero/hero2.svg'

function Login() {
  return (
    <div className='lg:container flex justify-between md:justify-center border border-red-800 m-auto'>

        <div id='left-page' className='flex flex-col justify-center w-[100%]'>
        <div id='logo' className='flex justify-center mb-6'>
            <img src={logo} alt="login-logo" className=''/>
        </div>

        <div className=''>
            <h1 className='2xl:text-2xl xl:text-xl lg:text-lg text-sm'>Login</h1>
        </div>

        {/* input */}
        <div className='w-[80%]'>
            <div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
                <input type="text" placeholder='username' className='pl-2 outline-none border-none'/>
            </div>
            <div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
                <input type="text" placeholder='password' className='pl-2 outline-none border-none'/>
            </div>
        </div>
       
            <p className='text-gray-500'>forget password</p>
    
        <button className='2xl:text-sm text-xs bg-myGreen px-2 py-2 mt-4 rounded-[12px] w-[40%] '>Login</button>
        </div>

        {/* imgage */}
        <div id='right-page' className='hidden md:block w-[100%] border border-red-800'>
            <img src={hero2} alt="login-image" className='h-[100%] object-cover' />
        </div>
    </div>
  )
}

export default Login