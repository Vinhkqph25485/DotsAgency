"use client";
import Modal from "../components/modal";
import Project from "../components/project";
import styles from "./page.module.css";
import { useState } from "react";

const projects = [
  {
    title: " Website Design\n & Development",
    content:
      "Website như ngôi nhà của thương hiệu. Hãy để Dots cùng bạn tạo ra trải nghiệm số đầy cảm xúc bằng bữa tiệc của thị giác, ngôn từ và công nghệ",
    src: "/bg1.jpg",
    color: "#000000",
  },
  {
    title: "Branding",
    content:
      "Website như ngôi nhà của thương hiệu. Hãy để Dots cùng bạn tạo ra trải nghiệm số đầy cảm xúc bằng bữa tiệc của thị giác, ngôn từ và công nghệ",
    src: "/bg2.jpg",
    color: "#8C8C8C",
  },
  {
    title: "Digital Marketing",
    content:
      "Website như ngôi nhà của thương hiệu. Hãy để Dots cùng bạn tạo ra trải nghiệm số đầy cảm xúc bằng bữa tiệc của thị giác, ngôn từ và công nghệ",
    src: "/bg1.jpg",
    color: "#EFE8D3",
  },
];

export default function Gallery() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div>
      <div className="my-10">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              content={project.content}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
      <button className="flex gap-5 bg-[#C8D5BB] px-5 py-2 rounded-full text-[21px] mt-[80px] hover:bg-white hover:text-black  hover:shadow-zinc-400 hover:shadow-lg transition duration-300 delay-100 ease-in-out">
        Let’s talk now! <span className="text-black">●</span>
      </button>
    </div>
  );
}
