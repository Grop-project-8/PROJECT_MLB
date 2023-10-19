import hero3 from '../../assets/hero/hero3.svg'

function HomeSignup() {
  return (
    <div className='md:container my-6 lg:flex '>
      <div className='relative flex justify-center items-center'>
        <div className='absolute text-center bottom-12'>
          <div className='w-[75%] mx-auto mb-2'>
          <h1 className='2xl:text-2xl xl:text-xl lg:text-lg text-xs text-white '>Track your history progress and set personal goal</h1>
          </div>
          
            <button className='md:text-sm md:w-[12rem] w-[8rem] text-[1rem] bg-myGreen p-2 md:p-3 rounded-lg'>Signup here</button>
          
          </div>

        <div className='w-[100%]'>
        <img src={hero3} alt="absolute" />
        </div>
      </div>
    </div>
    
  )
}

export default HomeSignup