import Itemcon from "./Itemcon";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "swiper/css/scrollbar";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";

const Continued = () => {
  const [vdoContinued, setVdoContinued] = useState([]);
  console.log(vdoContinued);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/findlastVideo", {
        withCredentials: true,
      });
      const sortedData = response.data.videos.reverse();
      setVdoContinued(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5">
      <div className="  ">
        <div className="w-auto  lg:text-end">
          <div className="lg:text-[1.5rem] bg-myGreen py-2 rounded-[12px]  text-center">
            recent activity
          </div>
        </div>

        <div className="space-y-5 mt-5 md:space-y-0 md:space-x-5 md:flex w-full md:w-[100%] text-center">
          {vdoContinued.length === 0 ? (
            <q className="lg:text-[1.75rem]  h-20 text-center">
              No recent activity
            </q>
          ) : (
            <>
              {vdoContinued.length > 3 ? (
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                breakpoints={{
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                  pagination={{ type: 'bullets' }}

                >
                  {vdoContinued.map((video, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        to={`/Full/${video._id}`}
                        className={
                          vdoContinued.length === 1
                            ? "lg:col-span-3 md:col-span-2"
                            : "lg:col-span-1 md:col-span-1"
                        }
                      >
                        <Itemcon
                          img={video.thumbnail}
                          title={video.title}
                          className={
                            vdoContinued.length === 1
                              ? "flex justify-center items-center"
                              : ""
                          }
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5 mx-auto">
                  {vdoContinued.map((video, index) => (
                    <Link
                      to={`/Full/${video._id}`}
                      key={index}
                      className={
                        vdoContinued.length === 1
                          ? "lg:col-span-3 md:col-span-2"
                          : "lg:col-span-1 md:col-span-1"
                      }
                    >
                      <Itemcon
                        img={video.thumbnail}
                        title={video.title}
                        className={
                          vdoContinued.length === 1
                            ? "flex justify-center items-center"
                            : ""
                        }
                      />
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Continued;
