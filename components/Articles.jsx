"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants';

const articles = [
  {
    title: "Use TailwindCSS with Gatsby (with Emotion or styled-components)",
    tags: ["#gatsby", "#tailwindcss", "#css"],
    description:
      "Learn how to use TailwindCSS with Gatsby along with Emotion or styled-components perfectly.",
  },
  {
    title: "Understanding React Hooks Deeply",
    tags: ["#react", "#hooks", "#javascript"],
    description:
      "A detailed guide on React hooks and how to use them efficiently in your projects.",
  },
  {
    title: "Building Responsive UI with TailwindCSS",
    tags: ["#tailwindcss", "#css", "#responsive"],
    description:
      "Learn to build fully responsive user interfaces using TailwindCSS classes.",
  },
];

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full relative bg-white max-h-[100vh] p-20 flex flex-col items-center gap-5">
      <motion.h1 variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  className="text-primaryText font-black text-center mb-10 text-[30px]">
        Articles
      </motion.h1>

      <div className="relative w-full max-w-[85vw] overflow-hidden">
        {/* Slider wrapper */}
        <div 
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article, index) => (
            <Link
            href={"/articles"}
              key={index}
              className="min-w-full px-10 py-3 font-normal md:h-[20vh] max-h-[40vh] rounded-lg md:px-20 bg-primary"
            >
              <motion.div  variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  className="flex flex-col justify-between md:flex-row">
                <h3 className="mb-2 md:text-xl text-l font-semibold leading-snug text-primaryText">
                  {article.title}
                </h3>
                <div className="flex items-center mb-2 space-x-2">
                  {article.tags.map((tag, i) => (
                    <p
                      key={i}
                      className={`px-2 rounded ${
                        tag.startsWith("#tailwindcss")
                          ? "text-gray-800 bg-accent-hover/30"
                          : "text-white bg-accent-Default/30"
                      }`}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </motion.div>
              <motion.p  variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  className="text-primaryText/30 line-clamp-4 md:block hidden">{article.description}</motion.p>
            </Link>
          ))}
        </div>
      </div>

      {/* Dots Indicators */}
      <div className="flex mt-4 space-x-2">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-accent-hover" : "bg-gray-300"
            }`}
          />
        ))}
         {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute px-3 py-2  translate-x-[87px] md:translate-y-[40%] text-primaryText/60 translate-y-[110px] bg-accent-gold transition-all ease-in-out duration-200 hover:text-primaryText rounded left-2 top-1/2 hover:bg-accent-Default/40"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute px-3 py-2  -translate-x-[95px] md:translate-y-[40%] translate-y-[110px] text-primaryText/60 bg-accent-gold transition-all ease-in-out duration-200 hover:text-primaryText rounded right-2 top-1/2 hover:bg-accent-Default/40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Articles;
