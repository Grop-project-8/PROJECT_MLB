import hero3 from '../../assets/hero/hero3.svg'

function HomeSignup() {
  return (
    <div className='xl:container my-6 lg:flex'>
      <div className='relative flex justify-center '>
        <div className='absolute text-center'>
          <div className='w-[75%] mx-auto mt-40 '>
          <h1 className='2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-white '>Track your history progress and set personal goal</h1>
          </div>
          <div className='mt-2'>
            <button className='2xl:text-sm w-[30%] text-[10px] bg-myGreen px-2 py-2 rounded-lg'>Signup here</button>
          </div>
          </div>

        <div className='w-[100%]'>
        <img src={hero3} alt="absolute" />
        </div>
      </div>
    </div>
    
  )
}

export default HomeSignup