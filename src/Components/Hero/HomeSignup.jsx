import hero3 from '../../assets/hero/hero3.svg'

function HomeSignup() {
  return (
    <div className='lg:container flex justify-between'>
        <div className='flex flex-col justify-center mx-auto'>
        <h1 className='text-4xl text-center w-[35rem]'>Track your history,progress and set personal goal</h1>
        <button className='bg-myGreen w-[50%] p-3 mt-6 rounded-lg'>sign up here</button>
        </div>

        <div className='flex mx-auto max-w-[630px]'>
            <img src={hero3} alt="Image-3" className='my-9 rounded-lg h-[40rem]'/>
        </div>
    </div>
  )
}

export default HomeSignup