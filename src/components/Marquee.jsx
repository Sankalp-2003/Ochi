import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="mq1 w-full py-24  bg-[#004D43] rounded-t-3xl"
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none tracking-tighter font-semibold uppercase  -mt-5 pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none tracking-tighter font-semibold uppercase  -mt-5 pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
