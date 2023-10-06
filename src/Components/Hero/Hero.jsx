import hero from "../../assets/hero/hero.svg";

function Hero() {
  return (
    <div className="relative md:container">
      <div className="w-[100%] sm:h-[40rem] md:h-[60rem]">
        <img
          src={hero}
          alt="Image-hero"
          className="object-cover w-[100%] h-full object-top md:w-full "
        />
      </div>

      <div className=" mx-auto mb-6 px-10"> {/* xl:container md:container */}
        <div className="lg:absolute top-[40%] right-[5%]  lg:w-[40%]">
          <div className=" space-y-4 my-5 ">

            <h1 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">
              Transform Your Health Qucik Workouts for Busy Lives
            </h1>

            <p className="text-myGray font-poppins  2xl:text-sm text-xs">
              Defeat Office Syndrome with Move-Life Balance!
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="bg-myGreen px-2 py-4 rounded-[12px] w-2/3 2xl:text-sm text-xs "
            >
              Try Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
