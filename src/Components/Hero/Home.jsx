import { Link } from 'react-router-dom';
import Home1 from '../../assets/hero/Home.jpg'

function Home() {
  return (
    <div className="relative md:container sm:w-[100%]">
      <div className="md:w-full sm:h-[40rem] md:bg-black h-screen">
        <img
          src={Home1}
          alt="Image-hero"
          className="object-cover sm:w-full md:w-full lg:w-full xl:w-full opacity-80 h-full"
        />
      </div>

      <div className="mx-auto relative"> {/* xl:container md:container */}
        <div className="md:absolute bottom-0 left-0 right-0 rounded-md py-8 text-center">
        <h1 className="2xl:text-2xl xl:text-xl lg:text-md text-[1.2rem] md:text-sm md:text-black lg:w-[100%] ">
              Transform Your Health Quick Workouts for Busy Lives
            </h1>
            <p className="text-white font-poppins lg:text-sm  2xl:text-lg text-[1rem] md:text-[1.2rem] ">
              Defeat Office Syndrome with Move-Life Balance!
            </p>
          <div className="flex justify-center w-full">
            <Link to='/activity' className="bg-myGreen p-3 rounded-[12px] sm:w-3/3 2xl:text-md lg:text-md text-center md:w-3/3 shadow-xl md:text-sm lg:w-1/3 ">
              Try Workout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
