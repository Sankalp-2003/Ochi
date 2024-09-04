import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

function Featued({ f }) {
  const [hovering, setHovering] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const handleHover = () => {
    setHovering(true);
  };

  return (
    <div className="py-10 px-5 md:px-20  bg-[#111] border-t-[1px] border-zinc-700">
      <div className=" cards w-full md:flex md:gap-10 md:mt-10">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="cardcontainer relative  w-1/2 h-[75vh]"
        >
          <h1 className=" uppercase absolute top-1/2 left-full -translate-x-[50%]  -translate-y-[50%] z-[9] text-8xl font-semibold tracking-tighter leading-none text-nowrap text-[#CDEA68] overflow-hidden">
            {f.text1.split("").map((item, index) => (
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={hovering ? { y: "0%" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <motion.div
            className="fe-1c rounded-2xl w-full h-full overflow-hidden"
            initial={{ scale: 1 }}
            animate={hovering ? { scale: 0.95 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <motion.img
              initial={{ scale: 1 }}
              animate={hovering ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              className="w-full h-full  bg-cover"
              src={f.image1}
              alt=""
            />
          </motion.div>
        </div>
        <div
          onMouseEnter={() => setHovering2(true)}
          onMouseLeave={() => setHovering2(false)}
          className="cardcontainer relative  w-1/2 h-[75vh]"
        >
          <h1 className="uppercase absolute top-1/2 left-0 -translate-x-[50%]  -translate-y-[50%] z-[9] text-8xl font-semibold tracking-tighter leading-none text-nowrap text-[#CDEA68] overflow-hidden">
            {f.text2.split("").map((item, index) => (
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={hovering2 ? { y: "0%" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <motion.div
            className="fe-2c rounded-2xl w-full h-full overflow-hidden"
            initial={{ scale: 1 }}
            animate={hovering2 ? { scale: 0.9 } : { scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.img
              initial={{ scale: 1 }}
              animate={hovering2 ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full bg-cover"
              src={f.image2}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featued;
// 52
