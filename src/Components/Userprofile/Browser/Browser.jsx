import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Chartduration } from "../Chart/Chartduration";
import Dashboard from "../../Dashboard/Dashboard";
import Barduration from "../Chart/Barduration";

const Browser = ({ userData }) => {
  return (
    <div className="">
      <div className="lg:text-[1.5rem] w-full bg-myGreen text-center py-2  rounded-[12px]  mb-5 ">
        Overview
      </div>
      <div className="mt-5 bg-slate-200 p-5 rounded-xl shadow-xl w-[100%] shadow-[#999999]">
       <div className="lg:hidden">
       <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          pagination={{ type: "bullets" }}
          spaceBetween={100}
        >
          <SwiperSlide>
            <Chartduration />
          </SwiperSlide>
          <SwiperSlide>
            <Barduration />
          </SwiperSlide>
          <SwiperSlide>
            <Dashboard userData={userData} />
          </SwiperSlide>
        </Swiper>
       </div>
       
       <div className="hidden lg:flex justify-between">
          <Chartduration />
          <Barduration />
          <Dashboard userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default Browser;
