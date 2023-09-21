import { useState } from "react";
import hero from "../../../assets/hero/hero.svg";

const Userinfo = ({toggleDashboard}) => {



  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div className="md:flex w-[100%] ">
        <div className="rounded-full overflow-hidden w-full md:w-[20%]  ">
          <img className="w-[100%]" src={hero} alt="img_user" />
        </div>
        <div className="my-auto mx-[20px] ">
          <div className="">
            <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">
              user_name
            </h2>
            <button className="2xl:text-sm text-xs rounded-[12px] ">
              Set Goal
            </button>
          </div>

          {/*  day of week desktop*/}
          <div className="flex  space-x-2  ">
            <div className="sm:flex justify-center space-x-5 mt-4 w-full hidden">
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

          {/* day of week mobile */}
          <div className="flex sm:hidden justify-center space-x-5 mt-4 w-full ">
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

          <button className="" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "ออกจากระบบ" : "ล็อกอิน"}
          </button>

          <button
            onClick={toggleDashboard}
            className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-full mt-5 hidden lg:block"
          >
            view dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
