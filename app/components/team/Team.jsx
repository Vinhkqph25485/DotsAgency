import Carousel from "@/app/carousel/page";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./page.module.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
// Import Swiper styles
import { Autoplay } from "swiper";
import "swiper/css";

const Team = () => {
  const [active, setActive] = useState(null);
  const phrase =
    "          Tại D ,đội ngũ nhân sự của chúng tôi là tài sản quý giá nhất. Mỗi thành viên đều mang trong mình niềm đam mê, sự sáng tạo và chuyên môn cao trong lĩnh vực.";

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top 90%`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      if (letter === "D" || letter === "O" || letter === "S") {
        // Nếu chữ cái là D, O, T, hoặc S, thay thế bằng hình ảnh
        letters.push(
          <img
            src="/DOST.svg"
            alt="DOTS"
            key="DOTS"
            style={{ height: "96px", width: "128px", marginTop: "-38px", marginRight: "-20px", marginBottom: "-5px"}}
          />,
        );
      } else {
        letters.push(
          <span
            key={letter + "_" + i}
            ref={(el) => {
              refs.current.push(el);
            }}
          >
            {letter}
          </span>
        );
      }
    });
    return letters;
  };
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
    <div className="py-10 h-screen mb-[100px]">
      <div className="flex justify-between relative">
        <span className="text-white px-10 absolute ">● ĐỘI NGŨ CỦA DOTS</span>
        <div className="text-white text-3xl w-[70%] px-10">
        <div className="pl-[1px] mt-[115px]">
          <span ref={container} className="text-[rgb(211, 211, 211)] flex items-end absolute top-[-12px] tracking-tight">
            <span ref={body} className={styles.body}>
              {splitWords(phrase)}
            </span>
          </span>
        </div>
        </div>
      </div>
      <div className="h-[400px] bg-black flex items-center justify-center text-white">
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
