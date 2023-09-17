import hero from '../../assets/hero/hero.svg'
import Navbar from '../Navbar/Navbar'

function Hero() {
  return (
    <>
    <Navbar/>

    <div className='xl:container mx-auto mb-6'>

        <div className='lg:relative'>
            <div>
            <img src={hero} alt="Image-hero"
            className='object-cover w-full'
            />
            </div>

            <div className='lg:absolute top-[50%] right-5 '>
                <h1 className='text-4xl'>Transform Your Health Qucik Workouts for Busy Lives</h1>
                <p className='text-4xl'>Defeat Office Syndrome with Move-Life Balance!</p>
            </div>
        </div>

        

        <button type="button" className='lg:hidden bg-myGreen'>Try Workout</button>

    </div>
    </>
  )
}

export default Hero