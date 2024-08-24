"use client";

import React, { useState } from "react";
import BreadCumb from "../layout/BreadCumb";
import Paragraph from "../layout/word";
import { motion } from "framer-motion";

const dots = [
  { id: "D", word: "iscipline", top: "720px", left: "240px" },
  { id: "O", word: "perator", top: "360px", left: "920px" },
  { id: "T", word: "ransaction", top: "880px", left: "800px" },
  { id: "S", word: "uccessful", top: "560px", left: "1440px" },
];

const lines = [
  { d: "M400 800 L920 560" },
  { d: "M1000 560 L900 800" },
  { d: "M1440 720 L960 1000" },
  { d: "M1100 480 L1440 560" },
  { d: "M400 780 L800 1000" },
];

const Circle = () => {
  const [activeDiv, setActiveDiv] = useState("D");

  const getDivStyle = (id) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: activeDiv === id ? "#000000" : "rgba(255, 255, 255, 0.30)",
    fontSize: activeDiv === id ? "24px" : "140px",
    zIndex: "2",
    width: "240px",
    height: "240px",
    borderRadius: "100%",
    border: "1px solid rgba(255, 255, 255, 0.40)",
    backgroundColor: activeDiv === id ? "#C8D5BB" : "transparent",
    transition: "all 0.3s ease",
    transform: activeDiv === id ? "scale(1.2)" : "scale(1)",
  });

  const getLetterStyle = (id) => ({
    position: "absolute",
    transition: "all 0.3s ease",
    left: activeDiv === id ? "20px" : "50%",
    transform: activeDiv === id ? "translateX(0)" : "translateX(-50%)",
    fontSize: activeDiv === id ? "36px" : "166px",
  });

  const getWordStyle = (id) => ({
    position: "absolute",
    transition: "all 0.3s ease-in-out",
    opacity: activeDiv === id ? 1 : 0,
    left: activeDiv === id ? "44px" : "50%",
    transform: activeDiv === id ? "translateX(0)" : "translateX(-50%)",
    fontSize: "36px",
  });

  const calculateMidpoint = (x1, y1, x2, y2) => ({
    cx: (x1 + x2) / 2,
    cy: (y1 + y2) / 2,
  });

  const randomSize = () => Math.floor(Math.random() * 50);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className="h-[120vh] relative mt-[-300px]">
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
              style={{ top, left, ...getDivStyle(id) }}
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
