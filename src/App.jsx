import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featued from "./components/Featued";
import Cards from "./components/Cards";
import FeaturedHeading from "./components/FeaturedHeading";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const f1 = {
    image1:
      "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
    image2:
      "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    text1: "Cardboard Spaceship",
    text2: "Ah2 & matt horn",
  };

  const f2 = {
    image1:
      "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    image2:
      "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    text1: "fyde",
    text2: "vise",
  };

  const f3 = {
    image1:
      "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
    image2:
      "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
    text1: "trawa",
    text2: "premium blend",
  };

  if (window.innerWidth > 600) {
    let locomotiveScroll = new LocomotiveScroll();
  }
  let functionCaller = false;
  window.addEventListener("resize", () => {
    if (window.innerWidth < 600 && !functionCaller) {
      window.location.reload();
    }
  });

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white font-['Poppins']">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedHeading />
      <Featued f={f1} />
      <Featued f={f2} />
      <Featued f={f3} />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
