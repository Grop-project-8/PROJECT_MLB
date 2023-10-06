import logo from '../../assets/login/login-logo.svg'
import hero from '../../assets/hero/hero.svg'

function Login() {
  return (
    <div className='lg:container flex justify-between md:justify-center border  m-auto h-screen'>

        <div id='left-page' className='flex flex-col justify-center text-center items-center w-[100%]'>
            {/* logo */}
        <div id='logo' className='flex justify-center'>
            <img src={logo} alt="login-logo" className='w-[80%]'/>
        </div>

        <div >
            <h1 className='2xl:text-2xl xl:text-xl lg:text-lg text-sm'>Login</h1>
        </div>

        {/* input */}
        <div className='w-[20rem]'>
            <div className='flex  border-2 py-2 px-3 rounded-2xl mb-4'>
                <input type="text" placeholder='username' className='pl-2 outline-none border-none'/>
            </div>
            <div className='flex  border-2 py-2 px-3 rounded-2xl mb-4'>
                <input type="text" placeholder='password' className='pl-2 outline-none border-none'/>
            </div>
        </div>
       
            <p className='text-gray-500'>forget password</p>
    
        <button className='2xl:text-sm text-xs bg-myGreen px-2 py-2 mt-4 rounded-[12px] w-[40%] '>Login</button>
        </div>

        {/* imgage */}
        <div id='right-page' className='hidden md:block w-[100%] border   '>
            <img src={hero} alt="login-image" className='object-cover w-[100%] h-full object-top md:w-full' />
        </div>

    </div>
  )
}

export default Login