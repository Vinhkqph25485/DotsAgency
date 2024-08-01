"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Carousel = () => {
  return (
    <div className="bg-black">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-[#C8D5BB] rounded-lg transition-size duration-300 group-hover:h-[500px] group-hover:w-[500px]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid text-white">
        <div className="self-end justify-self-start p-8">
          <p className="from-white/20 to-white/0 text-base">{card.title}</p>
          <p className="text-sm opacity-60">{card.title2}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: "/avatar.png",
    title: "Title 1",
    title2: "Title 1",
    id: 1,
  },
  {
    url: "/avatar.png",
    title: "Title 2",
    title2: "Title 1",
    id: 2,
  },
  {
    url: "/avatar.png",
    title: "Title 3",
    title2: "Title 1",
    id: 3,
  },
  {
    url: "/avatar.png",
    title: "Title 4",
    title2: "Title 1",
    id: 4,
  },
  {
    url: "/avatar.png",
    title: "Title 5",
    title2: "Title 1",
    id: 5,
  },
  {
    url: "/avatar.png",
    title: "Title 6",
    title2: "Title 1",
    id: 6,
  },
];
