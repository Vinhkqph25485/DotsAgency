"use client";
import styles from "./page.module.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Gallery from "../gallery/page";

const phrase =
  "         Chúng tôi là creative agency thiết kế website và xây dựng thương hiệu, Chúng tôi giúp doanh nghiệp kết nối với khách hàng bằng câu chuyện của thị giác, ngôn từ và sức mạnh của công nghệ.";

export default function Typograph() {
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
        start: `top 70%`,
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
    });
    return letters;
  };

  return (
    <div className="px-10 py-10">
      <div className="py-5">
        <div className="pl-[10px] relative h-[300px]">
          <span ref={container} className="text-[rgb(211, 211, 211)] flex items-end absolute top-[20px] tracking-tight">
            <span ref={body} className={styles.body}>
              {splitWords(phrase)}
            </span>
          </span>
          <div className="text-white opacity-70 absolute top-[65px] text-[18px] flex items-center">● GIỚI THIỆU</div>
        </div>
      </div>
      <div className="pb-5 mt-[300px] flex justify-center">
        <img src="/dostagency.png" className="w-[50%] h-[50%]" alt="" />
      </div>

      <div className="py-10">
        <span className="text-white opacity-70">● DỊCH VỤ CỦA CHÚNG TÔI</span>
        <Gallery />
      </div>
    </div>
  );
}
