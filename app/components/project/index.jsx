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
      className="group flex justify-between text-white px-5 items-center py-10 border-t-2 border-b-2 duration-400 opacity-50 hover:opacity-100"
    >
      <div className="flex justify-between text-white px-5 items-center duration-400">
        <div className="flex gap-10 items-center">
          <span className="duration-400">({index + 1})</span>
          <span className="text-5xl w-[350px] duration-400">{title}</span>
        </div>
      </div>
      <span className="opacity-0 group-hover:opacity-100 transition duration-400 w-[350px]">
        {content}
      </span>
    </div>
  );
}
