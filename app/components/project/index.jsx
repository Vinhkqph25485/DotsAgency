"use client";
import React from "react";
import styles from "./style.module.css";

export default function Project({ index, title, setModal, content }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex justify-between text-white px-5 items-center py-10 min-h-[250px] border-t-2 transition-all border-b-2 duration-500 delay-200 opacity-50 hover:opacity-100 hover:py-[80px]"
    >
      <div className="flex justify-between text-white px-5 items-center duration-500 delay-200">
        <div className="flex gap-10 items-center">
          <span className="duration-500 delay-200">({index + 1})</span>
          <span style={{lineHeight: "1"}} className="text-[82px] w-[640px] duration-500 delay-200">{title}</span>
        </div>
      </div>
      <span className="opacity-0 text-[19px] group-hover:opacity-100 transition-all duration-500 delay-200 w-[350px]">
        {content}
      </span>
    </div>
  );
}
