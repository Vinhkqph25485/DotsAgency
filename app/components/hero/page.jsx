"use client";

import style from "./index.module.scss";
import Image from "next/image";
import moment from "moment";
import "./style.css";
import { motion } from "framer-motion";
import gsap from "gsap";
import D from "@/public/D.svg";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".product .hero",
      {
        scale: 0,
        opacity: 0,
      },
      {
        delay: 2,
        duration: 3,
        scale: 1,
        opacity: 1,
        ease: "expo.inOut",
      }
    );
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #16160E 0%, #1D1F18 9.9%, #6C848D 100%)",
        width: "full",
      }}
    >
      <div className="h-[1083px]">
        <div className="relative inline-block">
          <div className="flex justify-center mt-[-150px]">
            <img
              className="hero"
              src="/images/hero.gif"
              alt="hero"
              width="100%"
            />
          </div>
          <div className="flex justify-center mt-[-320px]">
            <motion.span
              className="absolute flex gap-2"
              style={{ fontSize: "18px", left: "130px", bottom: "290px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              WE ARE
            </motion.span>
            <motion.div
              className="absolute flex gap-2"
              style={{ fontSize: "18px", left: "490px", bottom: "290px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span>HANOI</span>
              {moment().format("h:mm A")}
            </motion.div>
            <motion.span
              className="absolute flex gap-2"
              style={{
                fontSize: "18px",
                left: "1650px",
                bottom: "290px",
                width: "250px",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div>SCROLL TO VIEW MORE</div>
              <Image src="/arrow-down.svg" alt="arrow" width={10} height={10} />
            </motion.span>
            <motion.span
              className="absolute"
              style={{ fontSize: "596px", bottom: "-15px", left: "50px" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Image
                src={D}
                alt="D"
                style={{ width: "420px", height: "520px" }}
              />
            </motion.span>
            <motion.span
              className="absolute"
              style={{
                fontSize: "286px",
                bottom: "-80px",
                left: "320px",
                fontFamily: "PPRader",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              OTS
            </motion.span>

            <motion.span
              className="absolute"
              style={{
                fontSize: "286px",
                bottom: "-80px",
                left: "860px",
                fontFamily: "PPRader",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              AGENCY
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
