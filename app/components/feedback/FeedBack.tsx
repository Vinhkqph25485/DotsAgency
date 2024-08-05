import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import Image from "next/image";

const feedbacks = [
  {
    quote:
      "“Just like the shape, size and colour of your stand, lighting can bring focus and draw potential customers in. It not only enhances the visual appeal of your stand but also highlights Artemide is committed to sustainability with EPD certification for Alphabet of Light. A step forward towards”",
    author: "Anaconda Tran",
    position: "Head Marketing at HOA CLUB",
    projects: "5 Project",
    collaborations: "+100 Collaboration",
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea eius rem dolorem error minima at doloremque aliquid explicabo eaque. Fugiat itaque odio repellat iste explicabo consequuntur libero culpa! Pariatur!”",
    author: "Anaconda Tran",
    position: "Head Marketing at HOA CLUB",
    projects: "5 Project",
    collaborations: "+100 Collaboration",
  },
  {
    quote:
      "“Just like the shape, size and colour of your stand, lighting can bring focus and draw potential customers in. It not only enhances the visual appeal of your stand but also highlights Artemide is committed to sustainability with EPD certification for Alphabet of Light. A step forward towards”",
    author: "Anaconda Tran",
    position: "Head Marketing at HOA CLUB",
    projects: "5 Project",
    collaborations: "+100 Collaboration",
  },
];

const Feedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(((currentFeedback + 1) / feedbacks.length) * 100);
  }, [currentFeedback]);

  const handleNext = () => {
    if (animating) return;
    setDirection("next");
    setAnimating(true);
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (animating) return;
    setDirection("prev");
    setAnimating(true);
    setCurrentFeedback(
      (prev) => (prev - 1 + feedbacks.length) % feedbacks.length
    );
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const handleClick = (e: any) => {
    if (animating) return;
    const { clientX, currentTarget } = e;
    const middle = currentTarget.offsetWidth / 2;
    if (clientX > middle) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const getNewAnimationClass = () => {
    if (!animating) return "";
    return direction === "next"
      ? style.slideInFromRight
      : style.slideInFromLeft;
  };

  return (
    <>
      <div className="mx-5 bg-black text-white py-10">
        <div className="text-white mb-5 mx-5 opacity-70">● KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</div>
        <div className={style.wrapper} onClick={handleClick}>
          <div
            style={{
              margin: "35px 0 55px 0",
              width: "100%",
              height: "2px",
              backgroundColor: "#000000",
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#ffffff",
                transition: "width 0.5s ease",
              }}
            ></div>
          </div>
          <div className="flex justify-between w-100 h-100">
            <div className="flex items-start gap-[16px]">
              <span className="flex items-center relative w-[80px]">
                <Image
                  src="/Ellipse 40.png"
                  alt="feedback"
                  width={37}
                  height={37}
                />
                <Image
                  src="/Ellipse 41.png"
                  alt="feedback"
                  width={37}
                  height={37}
                  style={{ position: "absolute", left: "20px" }}
                />
                <Image
                  src="/Ellipse 42.png"
                  alt="feedback"
                  width={37}
                  height={37}
                  style={{ position: "absolute", left: "40px" }}
                />
                <Image
                  src="/Ellipse 43.png"
                  alt="feedback"
                  width={37}
                  height={37}
                  style={{ position: "absolute", left: "60px" }}
                />
              </span>
              <div className="flex gap-3 mt-1 ml-5">
                <span style={{ opacity: "0.5" }}>
                  {feedbacks[currentFeedback].collaborations}
                </span>
                <span style={{ opacity: "0.5" }}>
                  {feedbacks[currentFeedback].projects}
                </span>
              </div>
            </div>
            <div
              className={`flex flex-col gap-[52px] ${style.feedbackItem}`}
              style={{
                maxWidth: "666px",
                animationName: animating ? getNewAnimationClass() : "",
              }}
            >
              <span style={{ maxWidth: "666px", fontSize: "28px" }}>
                {feedbacks[currentFeedback].quote}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  display: "inline-flex",
                  gap: "10px",
                }}
              >
                <p>{feedbacks[currentFeedback].author}</p>
                <p style={{ opacity: 0.4 }}>
                  {" "}
                  - {feedbacks[currentFeedback].position}
                </p>
              </span>
            </div>
            <div className="mt-[-20px]" style={{ fontSize: "50px" }}>
              <span>{String(currentFeedback + 1).padStart(2, "0")}</span>
              <span style={{ opacity: "0.2" }}>
                /{String(feedbacks.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
