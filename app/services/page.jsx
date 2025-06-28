"use client";

import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"; // Certifique-se de que o Tooltip está corretamente configurado
import { useEffect, useState  } from "react";

const servicesPT = [
  {
    num: "01",
    title: "Dev. Full Stack",
    description:
      "Experiência sólida no desenvolvimento de aplicativos utilizando React Native, com conhecimento em back-end e front-end, garantindo soluções completas e otimizadas.",
    href: "",
  },
  {
    num: "02",
    title: "Desenvolvedor Front-End",
    description:
      "Experiência abrangente com desenvolvimento de sites tanto para Mobile quanto para desktop.",
    href: "",
  },
  {
    num: "03",
    title: "Game Designer",
    description:
      "Habilidade na elaboração de documentação técnica, criação de mecânicas de jogo inovadoras e no desenvolvimento de conceitos para proporcionar experiências imersivas.",
    href: "",
  },
  {
    num: "04",
    title: "Desenvolvedor Unity",
    description:
      "Especializado no desenvolvimento com Unity, incluindo a criação de jogos 3D e otimização de performance.",
    href: "",
  },
  
];

const servicesEN = [
  {
    num: "01",
    title: "Full Stack Developer",
    description:
      "Solid experience in developing applications using React Native, with knowledge in both back-end and front-end, ensuring complete and optimized solutions.",
    href: "",
  },
  {
    num: "02",
    title: "Front-end Developer",
    description:
      "Extensive experience with development of websites on both mobile and desktop",
    href: "",
  },
  {
    num: "03",
    title: "Game Designer",
    description:
      "Skilled in drafting technical documentation, creating innovative game mechanics, and developing concepts to provide immersive experiences.",
    href: "",
  },
  {
    num: "04",
    title: "Unity Developer",
    description:
      "Specialized in development with Unity, including the creation of 3D games and performance optimization.",
    href: "",
  },
  
];

const Services = () => {
  const [language, setLanguage] = useState("PT");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  const services = language === "PT" ? servicesPT : servicesEN;
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 text-center mb-20">
        {language === "PT" ? "Funções" : "Roles"}
      </h2>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  {index === 4 && (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center">
                          <FaCheck className="text-primary text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{language === "PT" ? "Função atual" : "Current Role"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
