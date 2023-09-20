import hero from "../../assets/hero/hero.svg";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";

const Uesrprofile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <div className="flex justify-center md:justify-start  ">
        <div className="rounded-full overflow-hidden w-[40%] md:w-[20%] ">
          <img className="w-[100%]" src={hero} alt="" />
        </div>

        <div className="my-auto mx-[20px]">
          <div className="md:flex">
          <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">
            user_name
          </h2>
          <button className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] ml-5"> Set Goal</button>
          </div>
         
          <div className="flex  space-x-2  ">
            <div className="sm:flex justify-center space-x-5 mt-4 w-full hidden ">
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-green-400" : "bg-blue-400"
                } rounded-full flex items-center justify-center`}
              >
                อา
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-green-400" : "bg-blue-400"
                } rounded-full flex items-center justify-center`}
              >
                จ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-green-400" : "bg-blue-400"
                } rounded-full flex items-center justify-center`}
              >
                อ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-green-400" : "bg-blue-400"
                } rounded-full flex items-center justify-center`}
              >
                พ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-green-400" : "bg-blue-400"
                } rounded-full flex items-center justify-center`}
              >
                พฤ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-green-400" : "bg-blue-400"
                } rounded-full flex items-center justify-center`}
              >
                ศ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-green-400" : "bg-blue-400"
                } rounded-full flex items-center justify-center`}
              >
                ส
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <button className="" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "ออกจากระบบ" : "ล็อกอิน"}
      </button>
      <div className="flex  space-x-2 sm:hidden ">
        <div className="flex justify-center space-x-5 mb-5 w-full  ">
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-green-400" : "bg-blue-400"
            } rounded-full flex items-center justify-center`}
          >
            อา
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-green-400" : "bg-blue-400"
            } rounded-full flex items-center justify-center`}
          >
            จ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-green-400" : "bg-blue-400"
            } rounded-full flex items-center justify-center`}
          >
            อ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-green-400" : "bg-blue-400"
            } rounded-full flex items-center justify-center`}
          >
            พ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-green-400" : "bg-blue-400"
            } rounded-full flex items-center justify-center`}
          >
            พฤ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-green-400" : "bg-blue-400"
            } rounded-full flex items-center justify-center`}
          >
            ศ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-green-400" : "bg-blue-400"
            } rounded-full flex items-center justify-center`}
          >
            ส
          </div>
        </div>
      </div>

  
      <div className="space-y-5 mt-5 md:space-y-0 md:space-x-5 md:flex">
        <div className="bg-slate-400	 rounded-[12px] w-full h-[10rem] flex justify-center items-center ">
          <video
            src="https://www.youtube.com/watch?v=YLTnhWAG3hY"
            controls
            className="w-[50%] h-[80%] mx-3"
          ></video>

          <div className="mx-5">
            <p className="">vdo name</p>
            <button className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px]">
              play again
            </button>
          </div>
        </div>

        <div className="bg-slate-400	 rounded-[12px] w-full h-[10rem] flex justify-center items-center ">
          <video
            src="https://www.youtube.com/watch?v=YLTnhWAG3hY"
            controls
            className="w-[50%] h-[80%] mx-3"
          ></video>

          <div className="mx-5">
            <p className="">vdo name</p>
            <button className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px]">
              play again
            </button>
          </div>
        </div>
        
      </div>

      <div className="text_button mt-5">
        <div className="space-y-3 text-center ">
          <button className="2xl:text-sm text-xs bg-myGreen  py-2 rounded-[12px] w-[100%]">
            Continued (recent activity type)
          </button>
          <button className="2xl:text-sm text-xs bg-myGreen  py-2 rounded-[12px] w-[100%]">
            Browse another activity
          </button>
        </div>

        <div className="mt-5">
          <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">
            Recent activity
          </h2>
        </div>
      </div>

        <button className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-full mt-5">
          view dashboard
        </button>

      <Dashboard />
    </div>
  );
};

export default Uesrprofile;
