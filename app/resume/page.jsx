"use client";

import {
  FaHtml5,
  FaUnity,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useEffect,useState } from "react";

// about data
const aboutPT = {
  title: "Sobre mim",
  description:
    "Trabalhando para soluções inovadoras",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Pedro Henrique J de Lima",
    },
    {
      fieldName: "Celular",
      fieldValue: "(+51) 993337557",
    },
    {
      fieldName: "Experiência",
      fieldValue: "1 Ano",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Português, Inglês",
    },
  ],
};
const aboutEN = {
  title: "About Me",
  description:
    "Working to create inovative solutions",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Pedro Henrique J de Lima",
    },
    {
      fieldName: "Mobile",
      fieldValue: "(+51) 993337557",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English",
    },
  ],
};

// experience
const experiencePT = {
  icon: "/assets/resume/badge.svg",
  title: "Experiência Profissional",
  description:
    "Todas as experiências que tive o prazer de vivenciar e que moldaram o profissional que sou hoje.",
  items: [
    {
      company: "Kreativitas",
      position: "Desenvolvedor Unity",
      duration: "2024 - Atual",
    },
    {
      company: "DWU - It Solutions",
      position: "Desenvolvedor React Native",
      duration: "2024 - 2024",
    },
    {
      company: "Freelancer",
      position: "Desenhista/Animador 2D",
      duration: "2022 - 2024",
    },
    {
      company: "Hospital Cristo Redentor",
      position: "Auxiliar Administrativo",
      duration: "2020 - 2022",
    },
  ],
};
const experienceEN = {
  icon: "/assets/resume/badge.svg",
  title: "Professional Experience",
  description:
    "All the experiences that have shaped me into the professional I am today.",
  items: [
    {
      company: "Kreativitas",
      position: "Unity Developer",
      duration: "2024 - Present",
    },
    {
      company: "DWU - It Solutions",
      position: "React Native Developer",
      duration: "2024 - 2024",
    },
    {
      company: "Freelancer",
      position: "2D Artist/Animator",
      duration: "2022 - 2024",
    },
    {
      company: "Hospital Cristo Redentor",
      position: "Administrative Assistant",
      duration: "2020 - 2022",
    },
  ],
};

// education data
const educationPT = {
  icon: "/assets/resume/cap.svg",
  title: "Minhas Formações",
  description:
    "Instituições que me forneceram instrução formal",
  items: [
    {
      institution: "Ebac",
      degree: "Game Design e Desenvolvimento Unity",
      duration: "2022 - 2024",
    },
    {
      institution: "Senac",
      degree: "Análise e Desenv. de Sistemas",
      duration: "2022 - 2025",
    },
    {
      institution: "Laureate Brasil",
      degree: "Game Design",
      duration: "2020",
    },
  ],
};
const educationEN = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Institutions that provided me with formal education",
  items: [
    {
      institution: "Ebac",
      degree: "Game Design and Unity Development",
      duration: "2022 - 2024",
    },
    {
      institution: "Senac",
      degree: "Systems Analysis and Development",
      duration: "2022 - 2025",
    },
    {
      institution: "Laureate Brasil",
      degree: "Game Design",
      duration: "2020",
    },
  ],
};

// skills data
const createSkills = (title, description) => ({
  title,
  description,
  skillList: [
    {
      icon: <FaUnity />,
      name: "Unity",
    },
    {
      icon: <img src="/unreal.png" alt="Unreal Engine" className="w-16 h-16" />,
      name: "Unreal Engine",
    },
    {
      icon: <img src="/blender.png" alt="Blender" className="w-16 h-16" />,
      name: "Blender",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React Native",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
  ],
});

const skillsPT = createSkills("Conhecimentos", "Ferramentas que auxiliam no meu trabalho");
const skillsEN = createSkills("Skills", "Tools that assist in my work");

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {

  const [language, setLanguage] = useState("PT");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const education = language === "PT" ? educationPT : educationEN;
  const experience = language === "PT" ? experiencePT : experienceEN;
  const about = language === "PT" ? aboutPT : aboutEN;
  const skills = language === "PT" ? skillsPT : skillsEN;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[0vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
