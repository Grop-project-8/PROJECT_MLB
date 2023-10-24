import homesign from '../../assets/hero/homesign.jpg'
import { Link } from 'react-router-dom'

function HomeSignup() {
  return (
    <div className='md:container my-6 lg:flex'>
      <div className='relative flex justify-center items-center w-full'>
        <div className='absolute text-center bottom-12 w-full'>
          <div className='lg:w-full mx-auto mb-6 '>
            <h1 className='[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-[20px] text-white  '>
              Track your history progress and set personal goals
            </h1>
          </div>

          <div className='w-full'>
            <div className='flex items-center justify-center'>
              <Link
                to='/sign'
                className='bg-myGreen p-3 rounded-xl 2xl:text-md sm:text-md sm:w-3/3  lg:text-md text-center md:w-3/3 shadow-xl md:text-sm block lg:w-1/3   '
              >
                Sign up here
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <img src={homesign} alt="absolute" className='object-cover w-full h-[50rem] rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default HomeSignup
