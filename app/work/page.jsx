"use client";
import { React, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Cars website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
    image: "/asset/car.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "Games website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
    image: "/asset/game.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Portfolio website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
    image: "/asset/portfolio.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description: "Medical website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
    image: "/asset/medical.png",
    live: "",
    github: "",
  },
   {
    num: "05",
    category: "full-stack",
    title: "project 5",
    description: "Ecommerce website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Stripe" },
    ],
    image: "/asset/fullstack.mp4",
    live: "",
    github: "",
  },
  
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex ;
    // update project state based on current
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]  ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col group gap-[30px] h-[50%] ">
              <div className="leading-none text-transparent text-8xl font-extralight text-outline ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-Default transition-all duration-500 capitalize  ">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm text-accent-Default">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })} 
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                {/* live project button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-3xl text-white group-hover:text-accent-Default" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                  {/* github project button */}
                  <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-3xl text-white group-hover:text-accent-Default" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper onSlideChange={handleSlideChange} spaceBetween={30} slidesPerView={1} className="xl:h-[420px]  ">
              {projects.map((item, index) => {
                return <SwiperSlide className="w-full" key={index}>
                  <div className="relative flex items-center justify-center h-[460px] group bg-transparent">
                    <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                    <div className="relative w-full h-full">
                      {item.category !== "full-stack" ? <Image src={project.image} fill className="object-contain" alt="" /> : <video src={project.image}></video>}
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns btnStyles={"bg-accent-Default p-3 hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center item-center transition-all "} containerStyles={"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "}/>
               
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
