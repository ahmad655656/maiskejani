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
    description: "cars website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
    image: "/asset/car.png",
    live: "https://ahmad655656.github.io/Fifth-project/",
    github: "https://github.com/ahmad655656/Fifth-project.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "games website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
    image: "/asset/game.png",
    live: "https://ahmad655656.github.io/gameWebsite/",
    github: "https://github.com/ahmad655656/gameWebsite.git",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "portfolio website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
    image: "/asset/portfolio.png",
    live: "https://ahmad655656.github.io/The-fourth-project/",
    github: "https://github.com/ahmad655656/The-fourth-project.git",
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
    github: "https://github.com/ahmad655656/medical.git",
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
    live: "https://photoland-five.vercel.app/",
    github: "https://github.com/ahmad655656/photoland.git",
  },
   {
    num: "06",
    category: "frontend",
    title: "project 6",
    description: "carland website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    image: "/asset/carland.png",
    live: "https://car-ashy-nine.vercel.app/",
    github: "https://github.com/ahmad655656/car.git",
  },
  {
    num: "07",
    category: "frontend",
    title: "project 7",
    description: "constructions website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    image: "/asset/constructions.png",
    live: "https://urban-build-phi.vercel.app/",
    github: "https://github.com/ahmad655656/urbanBuild.git",
  },
  {
    num: "08",
    category: "frontend",
    title: "project 8",
    description: "Games website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    image: "/asset/TypeScriptGame.png",
    live: "https://game-chi-ashen-73.vercel.app/",
    github: "https://github.com/ahmad655656/game.git",
  },
  {
    num: "09",
    category: "frontend",
    title: "project 8",
    description: "Software Landing Page .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    image: "/asset/softwareLandingPage.png",
    live: "https://software-landing-page-1n9g.vercel.app/",
    github: "https://github.com/ahmad655656/softwareLandingPage.git",
  },
   {
    num: "10",
    category: "frontend",
    title: "project 8",
    description: "Ai_Image Generator website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    image: "/asset/aiImage.png",
    live: "https://ai-image-iota-five.vercel.app/",
    github: "https://github.com/ahmad655656/aiImage.git",
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
              <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent-Default transition-all duration-500 capitalize  ">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-5 flex-wrap">
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
                      {item.category !== "full-stack" ? <Image src={project.image} fill className="object-contain" alt="" /> : <video controls muted autoplayed className="absolute h-[80%] z-[22]" src={project.image}></video>}
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
