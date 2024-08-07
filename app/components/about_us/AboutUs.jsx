import React from "react";
import Circle from "./Circle";
import styles from "./page.module.css";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const AboutUs = () => {
  const phrase =
    "        D là ngôi nhà của những gã “trẻ mà không non nghề” đam mê thiết kế phát triển website và xây dựng thương hiệu chuyên nghiệp";

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
      if (
        letter === "D" ||
        letter === "O" ||
        letter === "T" ||
        letter === "S"
      ) {
        // Nếu chữ cái là D, O, T, hoặc S, thay thế bằng hình ảnh
        letters.push(
          <img
            src="/DOST.svg"
            alt="DOTS"
            key="DOTS"
            style={{
              height: "96px",
              width: "128px",
              marginTop: "-38px",
              marginRight: "-20px",
            }}
          />
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

  return (
    <div className="px-10 py-10 bg-gradient-to-b from-[#232424] to-[#7b929f]">
      <div className="py-5 ">
          <div className="relative w-[100%] h-[300px]">
            <div className="text-white opacity-70 absolute top-[-32px]">● VỀ CHÚNG TÔI</div>
            <div className="pl-[1px] mt-[70px]">
              <span
                ref={container}
                className="text-[rgb(211, 211, 211)] flex items-end absolute top-[-50px]"
              >
                <span ref={body} className={styles.body}>
                  {splitWords(phrase)}
                </span>
              </span>
            </div>
          </div>
        <div className="pb-10">
          <Circle />
        </div>
      </div>
    </div>
  );
};
