"use client";

import { useRef } from "react";

import Typograph from "./text/page";
import Footer from "./components/Footer";
import { Video } from "./components/video/Video";
import { AboutUs } from "./components/about_us/AboutUs";
import Team from "./components/team/Team";
import FeedBack from "./components/feedback/FeedBack";
import Contact from "./components/contact/Contact";
import Insight from "./components/insight/Insight";
import Hero from "./components/hero/page";
import Header from "./components/header copy/page";

export default function Home() {
  return (
    <main className="relative">
      <div className="">
        <Header />
        <div>
          <Hero />
        </div>
        <Video />
        <Typograph />
        <AboutUs />
        <Team />
        {/* <Header ref={stickyElement} /> */}
        {/* <StickyCursor stickyElement={stickyElement} /> */}
        {/* <Typograph /> */}
        {/* <div style={{ height: "100vh" }}></div> */}
        {/* <section className="flex flex-col items-center justify-center">
        <AnimatedText
          once
          text={paragraph}
          el="p"
          className="text-[56px]"
          repeatDelay={10}
        />
      </section> */}
        {/* <div style={{ height: "100vh" }}></div> */}
        {/* <Character value={paragraph} /> */}
        {/* <div style={{ height: "100vh" }}></div> */}
        {/* <Word value={paragraph} /> */}
        {/* <Smooth /> */}

        {/* <EarthPage />
      <RevealLinks />
      <HoverImageLinks />
      <Cursor /> */}

        <FeedBack />
        <Contact />
        <Insight />
        {/* <Mouse />
      {/* <Infinity />
      <Bezier /> */}
        <Footer />
      </div>
    </main>
  );
}
