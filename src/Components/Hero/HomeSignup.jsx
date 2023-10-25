import homesign from '../../assets/hero/homesign.jpg'
import { Link } from 'react-router-dom'

function HomeSignup() {
  return (
    <div className='md:container my-6 lg:flex'>
      <div className='relative flex justify-center items-center w-full bg-black md:h-full'>
        <div className='w-full'>
          <img src={homesign} alt="absolute" className='object-cover rounded-lg opacity-60 md:w-auto md:h-auto w-auto h-auto' />
        </div>

        <div className='absolute text-center lg:bottom-6 bottom-0 w-full '>
          <div className='lg:w-full mx-auto lg:mb-12 mb-8 max-[639px]:mb-5'>
            <h1 className='2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-[15px] max-[639px]:text-[14px]  text-white h-full '>
              Track your history progress and set personal goals
            </h1>
          </div>

          <div className='w-full'>
            <div className='flex items-center justify-center md:mb-1 max-[639px]:mb-2'>
              <Link
                to='/sign'
                className='bg-myGreen  md:p-3 p-2 mb-2 rounded-xl 2xl:text-md sm:text-md sm:w-3/3  lg:text-md text-center md:w-3/3 shadow-xl md:text-sm block lg:w-1/3   '
              >
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSignup
