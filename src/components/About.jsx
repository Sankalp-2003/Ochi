import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="about w-full  md:p-20 bg-[#CDEA68] md:rounded-t-3xl text-black"
    >
      <h1 className="ab-1 md:text-[4vw] md:leading-[4vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="ab-2 w-full border-t-[1px] border-[#889d3c] md:mt-20 pt-10 md:flex md:gap-5">
        <div className="w-1/2 ">
          <h1 className="ab-txt text-6xl">Our approach:</h1>
          <button className="ab-btn md:px-10 md:py-6 bg-zinc-900 rounded-full text-white md:mt-10 flex gap-10 items-center uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="ab-img w-1/2 h-[70vh] rounded-3xl overflow-hidden hover:scale-105 transition-all duration-700 ">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
