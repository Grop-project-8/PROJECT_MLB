import hero from "../../assets/hero/hero.svg";

function Hero() {
  return (
    <div className="relative">
      <div className="w-[100%] sm:h-[40rem] md:h-[60rem]">
        <img
          src={hero}
          alt="Image-hero"
          className="object-cover 
 w-[100%] h-full object-top "
        />
      </div>

      <div className="xl:container mx-auto mb-6 px-10">
        <div className="lg:absolute top-[50%] right-5 ">
          <div className=" space-y-4 my-5">
            <h1 className="text-4xl">
              Transform Your Health Qucik Workouts for Busy Lives
            </h1>
            <p className="text-4xl">
              Defeat Office Syndrome with Move-Life Balance!
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="bg-myGreen px-2 py-4 rounded-[12px] w-1/3  "
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
