"use client";
import React, { useState, useEffect } from "react";
import Social from "./Social";
import Photo from "./Photo";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion"
const Hero = () => {
  const fullText =
    "I am Engineer Mays Kijani, graduated in 2009 from the Faculty of Architecture at Lattakia University. I have experience with many drawing programs and have worked in many fields within the field of architecture.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 30); // سرعة الكتابة (كل 30ms يضيف حرف)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container h-full mx-auto">
      <div className="flex flex-col items-center justify-between xl:pt-8 xl:flex-row xl:pb-24">
        {/* text */}
        <div className="order-2 text-center text-primaryText xl:text-left xl:order-none">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
            }}
            className="text-xl"
          >
            Architectural trainer{" "}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
            }}
            className="mt-3 mb-6 h1"
          >
            Hello I'm <br />
            <span className="text-accent-Default">Eng.Mais Kejani</span>
          </motion.h1>

          {/* typewriter paragraph */}
          <p className="max-w-[500px] mb-9 text-primaryText/80 min-h-[120px]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* btn and socials */}
          <div className="flex flex-col items-center gap-8 xl:flex-row">
            <motion.div variants={fadeIn("up", 0.2)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }} className="mb-8 xl:mb-0">
              <Social
                containerStyles={"flex gap-6"}
                iconStyles={
                  "w-9 h-9 border border-accent-Default rounded-full flex justify-center items-center text-accent-Default text-base hover:bg-accent-Default hover:text-primaryText hover:transition-all duration-500"
                }
              />
            </motion.div>
          </div>
        </div>

        {/* photo */}
        <div className="order-1 mb-8 xl:order-none xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
