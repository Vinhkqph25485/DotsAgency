"use client";
import React from "react";

export default function Footer() {
  return (
    <div className="py-10 border-t-2 text-white mx-10">
      <div className="flex justify-between mb-5 items-center">
        <img src="/image2.png" width={230} height={80} alt="" />
        <div className="flex gap-3">
          <img src="/Facebook.svg" width={"30px"} height={"30px"}  alt="" />
          <img src="/Pinterest.png" width={"30px"} height={"30px"}   alt="" />
          <img src="/Tiktok.png" width={"30px"} height={"30px"}   alt="" />
          <img src="/Instagram.png" width={"30px"} height={"30px"}   alt="" />
        </div>
      </div>
      <div className="flex justify-between pt-10 mt-5 text-[24px]">
        <div className="flex gap-10">
          <div>
            <span className="opacity-20">Email</span>
            <br />
            <span>dotsagency.info@gmail.com</span>
          </div>
          <div> 
            <span className="opacity-20">Hotline</span>
            <br />
            <span>09328739244</span>
          </div>
        </div>
        <span className="flex justify-between mt-8">2024 © Dots Co., Ltd.</span>
      </div>
    </div>
  );
}
