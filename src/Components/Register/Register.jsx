import logo from '../../assets/login/login-logo.svg'
import hero from '../../assets/hero/hero.svg'


function Register() {
  return (
    <div className='lg:container lg:flex'>
        {/* form mobile */}
        <div className='flex flex-col items-center justify-center h-screen relative'>
            <img src={logo} alt="register-logo" className='w-[20rem] absolut top-5 '/>
            <h1 className='2xl:text-2xl xl:text-xl lg:text-lg text-sm'>Register</h1>
            
            <form className='flex flex-col w-[60%] space-y-4 rounded-lg git'>
                <input type="text" placeholder='username' className='border p-3 rounded-lg'/>
                <input type="email" placeholder='E-mail' className=' border p-3 rounded-lg'/>
                <input type="password" placeholder='password' className=' border p-3 rounded-lg'/>
                <div className='flex justify-between'>
                <input type="number" placeholder='weight' className='w-[35%] p-3 border rounded-lg'/>
                <input type="number" placeholder='height' className='w-[35%] p-3 border rounded-lg'/>
                </div>
                <input type="date" placeholder='birth date' className=' border p-3 rounded-lg'/>
                <label className='text-center'>
                <input type="checkbox" id='myCheckbox' placeholder='checkbox' className=' border p-3 rounded-lg'/>
                <span className='text-[13px] pl-2 font-light'>accept term of use condition</span>
                </label>
                <button className='2xl:text-sm text-xs bg-myGreen px-2 py-2 mt-5 rounded-[12px] w-[30%] '>Sign Up</button>
            </form>
        </div>

        {/* img */}
        <div className='hidden md:block'>   
            <img src={hero} alt="image-register" className='h-screen object-cover'/>
        </div>
    </div>
  )
}

export default Register