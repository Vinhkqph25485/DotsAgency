"use client";
import Image from "next/image";
import React from "react";
import image2 from "@/public/image2.png";
import fb from "@/public/Facebook.svg";
import Pinterest from "@/public/Pinterest.png";
import Tiktok from "@/public/Tiktok.png";
import Instagram from "@/public/Instagram.png";

export default function Footer() {
  return (
    <div className="py-10 border-t-2 text-white mx-10">
      <div className="flex justify-between mb-5 items-center">
        <Image src={image2} className="w-[230px] h-[80px]" alt="" />
        <div className="flex gap-3">
          <Image src={fb} className="w-[30px] h-[30px]"  alt="" />
          <Image src={Pinterest} className="w-[30px] h-[30px]"  alt="" />
          <Image src={Tiktok} className="w-[30px] h-[30px]"  alt="" />
          <Image src={Instagram} className="w-[30px] h-[30px]"  alt="" />
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
