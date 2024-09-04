import React from "react";

function Cards() {
  return (
    <div className="cds md:flex md:items-center md:gap-5 w-full md:h-screen   md:px-20 bg-zinc-900">
      <div className=" cardContainer md:h-[55vh] md:w-1/2 ">
        <div className="cds-1 relative card rounded-xl md:w-full md:h-full bg-[#004D43] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#CDEA68] text-[#CDEA68]">
            &copy;2019-2020
          </button>
        </div>
      </div>
      <div className="cardContainer c2 pt-2 md:flex md:gap-5 md:w-1/2 md:h-[55vh]">
        <div className="relative card rounded-xl md:w-1/2 md:h-full bg-[#212121] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 uppercase">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="relative card rounded-xl w-1/2 md:h-full bg-[#212121] flex justify-center items-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 uppercase">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
