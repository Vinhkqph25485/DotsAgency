import React, { useState } from "react";
import BreadCumb from "../layout/BreadCumb";
import Paragraph from "../layout/word";
import { motion } from "framer-motion";

const dots = [
  { id: "D", word: "iscipline", top: "600px", left: "240px" },
  { id: "O", word: "perator", top: "300px", left: "480px" },
  { id: "T", word: "ransaction", top: "660px", left: "720px" },
  { id: "S", word: "uccessful", top: "480px", left: "1080px" },
];

const lines = [
  { d: "M360 600 L500 432" },
  { d: "M560 460 L748 680" },
  { d: "M880 700 L1092 600" },
  { d: "M640 380 L1092 520" },
  { d: "M400 690 L720 740" },
];

const Circle = () => {
  const [activeDiv, setActiveDiv] = useState("D");

  const getDivStyle = (id, width, height) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: activeDiv === id ? "#000000" : "rgba(255, 255, 255, 0.30)",
    fontSize: activeDiv === id ? "24px" : "96px",
    zIndex: "2",
    width: width || "160px",
    height: height || "160px",
    borderRadius: "100%",
    border: "1px solid rgba(255, 255, 255, 0.40)",
    backgroundColor: activeDiv === id ? "#C8D5BB" : "transparent",
    transition: "all 0.3s ease",
    transform: activeDiv === id ? "scale(1.2)" : "scale(1)",
  });
  const getLetterStylePosition = (id) => {
    switch (id) {
      case "D":
        return "50px";
      case "O":
        return "42px";
      case "T":
        return "30px";
      case "S":
        return "46px";
      default:
        return "50%";
    };
  };

  const getLetterStyle = (id) => ({
    position: "absolute",
    transition: "all 0.3s ease",
    left: activeDiv === id ? getLetterStylePosition(id) : "50%",
    transform: activeDiv === id ? "translateX(0)" : "translateX(-60%)",
  });

  const getLeftPosition = (id) => {
    switch (id) {
      case "D":
        return "12px";
      case "O":
        return "37px";
      case "T":
        return "30px";
      case "S":
        return "32px";
      default:
        return "50%";
    };
  };

  const getPaddingLeftPosition = (id) => {
    switch (id) {
      case "D":
        return "20px";
      case "O":
        return "37px";
      case "T":
        return "30px";
      case "S":
        return "32px";
      default:
        return "50%";
    };
  };
  
  const getWordStyle = (id) => ({
    position: "absolute",
    transition: "all 0.3s ease",
    // fontSize: "30px",
    paddingLeft: getPaddingLeftPosition(id),
    opacity: activeDiv === id ? 1 : 0,
    left: activeDiv === id ? "50%" : getLeftPosition(id), // Đảm bảo chữ ở giữa khi được click
    transform: activeDiv === id ? "translateX(-50%)" : "translateX(0)", // Dịch chuyển về giữa khi click
  });

  const calculateMidpoint = (x1, y1, x2, y2) => ({
    cx: (x1 + x2) / 2,
    cy: (y1 + y2) / 2,
  });

  const randomSize = () => Math.floor(Math.random() * 70);

  return (
    <div className="">
      <div className="h-screen relative top-[-300px]">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#999999" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {lines.map(({ d }, i) => {
            const [M, L] = d.split(" L");
            const [x1, y1] = M.slice(1).split(" ").map(Number);
            const [x2, y2] = L.split(" ").map(Number);
            const { cx, cy } = calculateMidpoint(x1, y1, x2, y2);
            const size = randomSize();

            return (
              <React.Fragment key={i}>
                <motion.path
                  d={d}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.rect
                  x={cx - size / 2}
                  y={cy - size / 2}
                  width={size}
                  height={size}
                  fill="transparent"
                  stroke="#858C8D"
                  strokeWidth="1"
                  rx="50%"
                  ry="50%"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </React.Fragment>
            );
          })}
        </svg>
        {dots.map(({ id, word, top, left }) => {
          const randomMotion = () => ({
            x: [0, Math.random() * 40 - 20, 0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0, Math.random() * 40 - 20, 0],
          });

          let width, height;
          if (id === "D") {
            width = "200px";
            height = "200px";
          } else if (id === "S") {
            width = "180px";
            height = "180px";
          }

          return (
            <motion.div
              key={id}
              initial={{ x: 0, y: 0 }}
              animate={randomMotion()}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{ top, left, ...getDivStyle(id, width, height) }}
              onClick={() => setActiveDiv(id)}
            >
              <span style={getLetterStyle(id)}>{id}</span>
              <span style={getWordStyle(id)}>{word}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Circle;
