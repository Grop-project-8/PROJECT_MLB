// import hero from "../../assets/hero/hero.svg";
import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Userinfo from "./Userinfo/Userinfo";
import Recent from "./Recent/Recent";
import Continued from "./Continued/Continued";
import Browser from "./Browser/Browser";

const Uesrprofile = () => {

  const [showDashboard, setShowDashboard] = useState(true);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="container">

      <Userinfo toggleDashboard={toggleDashboard} />

      {/* user  */}
      
      {/* <div className="flex justify-center md:justify-start  ">
        <div className="rounded-full overflow-hidden w-[40%] md:w-[20%] ">
          <img className="w-[100%]" src={hero} alt="" />
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

          <div className="flex  space-x-2  ">
            <div className="sm:flex justify-center space-x-5 mt-4 w-full hidden ">
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-myGreen" : "bg-blue"
                } rounded-full flex items-center justify-center`}
              >
                อา
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-myGreen" : "bg-blue"
                } rounded-full flex items-center justify-center`}
              >
                จ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-myGreen" : "bg-blue"
                } rounded-full flex items-center justify-center`}
              >
                อ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-myGreen" : "bg-blue"
                } rounded-full flex items-center justify-center`}
              >
                พ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-myGreen" : "bg-blue"
                } rounded-full flex items-center justify-center`}
              >
                พฤ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-myGreen" : "bg-blue"
                } rounded-full flex items-center justify-center`}
              >
                ศ
              </div>
              <div
                className={`w-6 h-6 p-4 ${
                  isLoggedIn ? "bg-myGreen" : "bg-blue"
                } rounded-full flex items-center justify-center`}
              >
                ส
              </div>
            </div>
          </div>

          <button
            onClick={toggleDashboard}
            className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-full mt-5 hidden lg:block"
          >
            view dashboard
          </button>
        </div>
      </div>

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

      <div className="flex  space-x-2 mt-5 sm:hidden ">
        <div className="flex justify-center space-x-5 mb-5 w-full  ">
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-myGreen" : "bg-blue"
            } rounded-full flex items-center justify-center`}
          >
            อา
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-myGreen" : "bg-blue"
            } rounded-full flex items-center justify-center`}
          >
            จ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-myGreen" : "bg-blue"
            } rounded-full flex items-center justify-center`}
          >
            อ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-myGreen" : "bg-blue"
            } rounded-full flex items-center justify-center`}
          >
            พ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-myGreen" : "bg-blue"
            } rounded-full flex items-center justify-center`}
          >
            พฤ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-myGreen" : "bg-blue"
            } rounded-full flex items-center justify-center`}
          >
            ศ
          </div>
          <div
            className={`w-6 h-6 p-4 ${
              isLoggedIn ? "bg-myGreen" : "bg-blue"
            } rounded-full flex items-center justify-center`}
          >
            ส
          </div>
        </div>
      </div> */}



{/*  */}
      <Recent/>
      <div className="before dsahboard">
      

      {/* Recent  */}
        {/* <div className="mt-5">
          <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">
            Recent activity
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
            <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
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

            <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
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

            <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
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

            <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
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
        </div> */}


        <Continued/>
        {/*  continued */}
        {/* <div className="text_button mt-5">
          <div className=" lg:flex  lg:items-center	 space-x-3 text-center w-full">
            <div className="w-[100%] lg:w-[40%] lg:text-end">
              <button className="text-xs  bg-myGreen  py-2 rounded-[12px] w-full ">
                continued (recent activity type)
              </button>
              <p className="2xl:text-sm text-xs">recommend video</p>
            </div>

            <div className="space-y-5 mt-5 md:space-y-0 md:space-x-5 md:flex w-full md:w-[100%] ">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-5 mt-5">
                <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
                  <video
                    src="https://www.youtube.com/watch?v=YLTnhWAG3hY"
                    controls
                    className="w-[50%] h-[80%] ml-3"
                  ></video>
                  <div className="mx-5">
                    <p className="">vdo name</p>
                
                  </div>
                </div>

                <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
                  <video
                    src="https://www.youtube.com/watch?v=YLTnhWAG3hY"
                    controls
                    className="w-[50%] h-[80%] ml-3"
                  ></video>
                  <div className="mx-5">
                    <p className="">vdo name</p>
                    
                  </div>
                </div>

                <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
                  <video
                    src="https://www.youtube.com/watch?v=YLTnhWAG3hY"
                    controls
                    className="w-[50%] h-[80%] ml-3"
                  ></video>
                  <div className="mx-5">
                    <p className="">vdo name</p>
                   
                  </div>
                </div>

                <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
                  <video
                    src="https://www.youtube.com/watch?v=YLTnhWAG3hY"
                    controls
                    className="w-[50%] h-[80%] ml-3"
                  ></video>
                  <div className="mx-5">
                    <p className="">vdo name</p>
                  
                  </div>
                </div>

                <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
                  <video
                    src="https://www.youtube.com/watch?v=YLTnhWAG3hY"
                    controls
                    className="w-[50%] h-[80%] ml-3"
                  ></video>
                  <div className="mx-5">
                    <p className="">vdo name</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Browser  */}

        <Browser/>
        {/* <div className="text_button mt-5">
          <div className=" lg:flex  lg:items-center	 space-x-3 text-center w-full ">
            <div className="w-[100%] lg:w-[40%] ">
              <button className="2xl:text-sm text-xs bg-myGreen  py-2 rounded-[12px] w-full mb-5">
                Browse another activity <br />
              </button>
            </div>

            <Swiper
              className=" flex flex-col w-full md:w-[100%] "
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img
                  src={Yoga}
                  alt="Image-yoga"
                  className="rounded-2xl w-[100%] "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={BodyWeight}
                  alt="Image-BodyWeight"
                  className="rounded-2xl w-[100%]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Dance}
                  alt="Image-Dance"
                  className="rounded-2xl w-[100%]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={JumpingRope}
                  alt="Image-JumpingRope"
                  className="rounded-2xl w-[100%]"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Pilates}
                  alt="Image-Pilates"
                  className="rounded-2xl w-[100%]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div> */}
      </div>







      <button
        className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-full mt-5 md:hidden"
        onClick={toggleDashboard}
      >
        view dashboard
      </button>

      {showDashboard ? <Dashboard /> : null}
    </div>
  );
};

export default Uesrprofile;
