"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

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

const projectsPT = [
  {
    num: "01",
    category: "Unity",
    title: "Plataforma 3D",
    description:
      "Jogo de plataforma 3D criado para aprendizado sobre a plataforma Unity",
    stack: [{ name: "C#" }, { name: "Game Design" }, { name: "Efeitos Visuais" }],
    image: "/assets/work/unity1.png",
    live: "",
    github: "https://github.com/PedroHJLima",
  },
  {
    num: "02",
    category: "Unity",
    title: "Snake vs Human",
    description:
      "Auxilio no desenvolvimento de jogo",
    stack: [{ name: "C#" }, { name: "Animações" }, { name: "Agile work" }],
    image: "/assets/work/SvH.png",
    live: "",
    github: "https://github.com/PedroHJLima",
  },
  {
    num: "03",
    category: "SAP CRM",
    title: "CrmOne",
    description:
      "Auxilio no desenvolvimento de aplicativo de gerenciamento",
    stack: [{ name: "SAP" }, { name: "Mobile" }, { name: "ReactNative" }],
    image: "/assets/work/CrmOne.png",
    live: "",
    github: "https://github.com/PedroHJLima",
  },
];

const projectsEN = [
  {
    num: "01",
    category: "Unity",
    title: "Plataforma 3D",
    description:
      "3D platformer game created to learn about the Unity platform.",
    stack: [{ name: "C#" }, { name: "Game Design" }, { name: "Visual Effects" }],
    image: "/assets/work/unity1.png",
    live: "",
    github: "https://github.com/PedroHJLima",
  },
  {
    num: "02",
    category: "Unity",
    title: "Snake vs Human",
    description:
      "Assistance in the development of a mobile game",
    stack: [{ name: "C#" }, { name: "Animações" }, { name: "Agile work" }],
    image: "/assets/work/SvH.png",
    live: "",
    github: "https://github.com/PedroHJLima",
  },
  {
    num: "03",
    category: "SAP CRM",
    title: "CrmOne",
    description:
      "Assistance in the development of a management application",
    stack: [{ name: "SAP" }, { name: "Mobile" }, { name: "ReactNative" }],
    image: "/assets/work/CrmOne.png",
    live: "",
    github: "https://github.com/PedroHJLima",
  },
];

const Work = () => {
  const [language, setLanguage] = useState("PT");
  const [project, setProject] = useState(projectsPT[0]); // Initialize with the first project

  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update the project state based on language change
    setProject(projects[0]);
  }, [language]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const projects = language === "PT" ? projectsPT : projectsEN;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
          <div className="w-full xl:w-[70%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full bg-[#232329]">
                  <div className="h-[460px] relative group flex justify-center items-center bg-[#232329]">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      fill
                      sizes="(orientation: portrait) 100vw, (max-width: 1280px) 100vw, (max-width: 1980px) 50vw, 33vw" 
                      className="object-contain"
                      alt=""
                    />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
