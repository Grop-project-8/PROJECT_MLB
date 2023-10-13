import { useState } from "react";
import hero from "../../../assets/hero/hero.svg";
import InitialValue from "../InitialValue/InitialValue";

const Userinfo = ({ toggleDashboard }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full  flex flex-col">
      <div className="md:flex w-full   ">
        <div className="rounded-full overflow-hidden w-[40%] md:w-[30%] lg:w-[20%] ">
          <img className="w-full" src={hero} alt="img_user" />
        </div>

        <div className="my-auto mx-[20px]  w-full">
          <div className="w-full flex  ">
            <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">name</h2>
            <div className="hidden md:inline w-full">
              <InitialValue />
            </div>
          </div>

        {/*  day of week desktop*/}
          <div className="flex  space-x-2 ">
            <div className="md:flex justify-center space-x-5 mt-4  hidden">
              {["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"].map((day, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 p-4 ${
                    isLoggedIn ? "bg-myGreen" : "bg-blue"
                  } rounded-full flex items-center justify-center`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          <button className="" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "ออกจากระบบ" : "ล็อกอิน"}
          </button>

          <button
            onClick={toggleDashboard}
            className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-1/3 mt-5 hidden lg:block "
          >
            view dashboard
          </button>
        </div>
      </div>

      {/* day of week mobile */}
      <div className=" md:hidden">
        <div className="flex  justify-center space-x-5 mt-4 w-full">
          {["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"].map((day, index) => (
            <div
              key={index}
              className={`w-6 h-6 p-4 ${
                isLoggedIn ? "bg-myGreen" : "bg-blue"
              } rounded-full flex items-center justify-center`}
            >
              {day}
            </div>
          ))}
        </div>
        <InitialValue />
      </div>
    </div>
  );
};

export default Userinfo;
