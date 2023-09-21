import Yoga from "../../../assets/activity-img/Yoga.svg";
import BodyWeight from "../../../assets/activity-img/BodyWeight.svg";
import Dance from "../../../assets/activity-img/Dance.svg";
import JumpingRope from "../../../assets/activity-img/JumpingRope.svg";
import Pilates from "../../../assets/activity-img/Pilates.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

const Browser = () => {
  return (
    <div className="text_button mt-5">
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
  </div>
  )
}

export default Browser
