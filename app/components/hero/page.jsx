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
      }}
    >
      <div className={style.wrapper}>
        <div className="hero-image">
          <Image
            className="hero"
            src="/images/hero.gif"
            alt="hero"
            width={1248}
            height={900}
          />
        </div>
        <div className="hero-text">
          <motion.span
            className="absolute flex gap-2"
            style={{ fontSize: "12px", left: "120px", bottom: "240px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            WE ARE
          </motion.span>
          <motion.div
            className="absolute flex gap-2"
            style={{ fontSize: "12px", left: "425px", bottom: "240px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>HANOI</span>
            {moment().format("h:mm A")}
          </motion.div>
          <motion.span
            className="absolute flex gap-2"
            style={{ fontSize: "12px", left: "1300px", bottom: "240px", width: "250px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div>SCROLL TO VIEW MORE</div>
            <Image src="/arrow-down.svg" alt="arrow" width={8} height={8} />
          </motion.span>
          <motion.span
            className="absolute"
            style={{ fontSize: "360px", bottom: "-40px", left: "30px" }}
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
              fontSize: "230px",
              bottom: "-80px",
              left: "280px",
              fontFamily: "PPRader",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            OTSAGENCY
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
