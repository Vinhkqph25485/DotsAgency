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
    <div className="">
      <Header />
      <div>
        <Hero />
      </div>
      <Video />
      <Typograph />
      {/* <AboutUs /> */}
      {/* <Team /> */}
      {/* <FeedBack /> */}
      {/* <Contact /> */}
      {/* <Insight /> */}
      {/* <Footer /> */}
    </div>
  );
}
