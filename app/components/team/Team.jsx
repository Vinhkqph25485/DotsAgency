import Carousel from "@/app/carousel/page";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay } from "swiper";
import "swiper/css";

const Team = () => {
  const [active, setActive] = useState(null);
  const langs = [
    { name: "Quân Nguyễn" },
    { name: "Quân Nguyễn" },
    { name: "Quân Nguyễn" },
    { name: "Quân Nguyễn" },
    { name: "Quân Nguyễn" },
    { name: "Quân Nguyễn" },
    { name: "Quân Nguyễn" },
  ];
  return (
    <div className="py-10 h-screen">
      <div className="flex justify-between">
        <span className="text-white px-5 ">● Đội ngũ của DOTS</span>
        <div className="text-white text-3xl w-[50%] px-10">
          <span className="text-black">aaaaaaa</span>Tại Dost,{" "}
          <span className="text-green-200">
            đội ngũ nhân sự của chúng tôi là tài sản quý giá nhất
          </span>
          . Mỗi thành viên đều mang trong mình niềm đam mê, sự sáng tạo và
          chuyên môn cao trong lĩnh vực.
        </div>
      </div>
      <div className="h-screen bg-black flex items-center justify-center text-white mt-[-100px]">
        <div className="max-w-7xl">
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            onSlideChange={(cur) => setActive(cur.realIndex)}
            loop={true}
            centeredSlides={true}
            speed={800}
            autoplay={{ delay: 3000 }}
            // modules={[Autoplay]}
          >
            {langs.map((lang, i) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="h-96 flex">
                      <div
                        className={`card relative ${
                          active === i && "card-active"
                        } to-red-600/40`}
                      >
                        <div className="logo">
                          <img
                            src="/avatar.png"
                            alt=""
                            className="absolute -top-10"
                          />
                        </div>
                        {active === i && (
                          <div>
                            <h2 className="absolute bottom-[40px] font-semibold para text-white">
                              {lang.name}
                            </h2>
                            <br />
                            <p className=" absolute bottom-[20px] opacity-80 ">
                              Business Analyst
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
      {/* <Carousel /> */}
    </div>
  );
};

export default Team;
