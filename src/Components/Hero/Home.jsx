import { Link } from 'react-router-dom';
import Home1 from '../../assets/hero/Home.svg'


function Home() {
  return (
    <div className="relative md:container w-[100%]">
      <div className="relative md:w-full  bg-black sm:h-full">
        <img
          src={Home1}
          alt="Image-hero"
          loading='lazy'
          className="object-cover w-full md:w-[100%] lg:w-full xl:w-full opacity-60 h-auto"
        />
      </div>

      <div className="md:absolute md:top-20 md:left-0 md:right-0 rounded-md text-center mx-6">
          <h1 className="2xl:text-2xl xl:text-xl lg:text-md text-[1.1rem] md:text-[1.5rem] lg:w-[100%] mt-2 md:text-white">
            Transform Your Health Quick Workouts for Busy Lives
          </h1>
          <p className="md:text-white font-poppins lg:text-md  2xl:text-lg text-[1rem] md:text-[1.5rem] mt-2">
              Defeat Office Syndrome with 
            </p>
            <span className='text-myGreen lg:text-[60px] md:text-[30px] text-sm'>Move-Life</span> <span className='text-yellow-300 lg:text-[60px] md:text-[30px] text-sm'>Balance!</span>
            
      </div>

      <div className="md:absolute lg:bottom-20 md:bottom-10 flex justify-center w-full mt-2">
            <Link to='/activity' className=" p-3 rounded-[12px] sm:w-3/3 2xl:text-md lg:text-md text-center md:w-3/3 shadow-xl md:text-sm lg:w-1/3 hover:text-[#fff565] bg-[#9ffc41]  hover:scale-105 duration-150">
              Try Workout
            </Link>
          </div>

    </div>
  );
}

export default Home;
