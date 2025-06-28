"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";

import Services from './services/page'; 
import Resume from './resume/page'; 
import Contact from './contact/page'; 
import Work from './work/page'; 

export const useInView = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, inView];
};

const Home = () => {

  const [language, setLanguage] = useState("PT");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);


  // Estados que controlam se a animação já foi feita para cada seção
  const [hasAnimated1, setHasAnimated1] = useState(false);
  const [hasAnimated2, setHasAnimated2] = useState(false);
  const [hasAnimated3, setHasAnimated3] = useState(false);

  // Hooks para observar cada seção
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  // Verifica se a animação deve ser disparada
  if (inView1 && !hasAnimated1) setHasAnimated1(true);
  if (inView2 && !hasAnimated2) setHasAnimated2(true);
  if (inView3 && !hasAnimated3) setHasAnimated3(true);

  return (
    
    <div id="home">
      {/* Seção 1 */}
      <div>
      <section
  id="home"
  className="min-h-screen section bg-[url('ceuanime.jpg')] bg-cover bg-center pt-20 mt-20 relative"
>
  {/* Sobreposição com opacidade */}
  <div className="absolute inset-0 bg-black opacity-45 z-0"></div>
  <div className="max-w-6xl max-h-3xl mx-auto bg-black/50 p-4 rounded-lg">
      <div className="container mx-auto h-full flex items-center justify-center relative z-10"> {/* z-10 para garantir que fique acima da sobreposição */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{language === "PT" ? "Desenvolvedor Full-Stack" : "Full-Stack Developer"}</span>
            <h1 className="h1 mb-6">
            {language === "PT" ? "Olá! Eu sou " : "Hello! I'm "}<br /> <span className="text-accent">Pedro Lima</span>
            </h1>
            <p className="z-10 max-w-[500px] mb-9 text-white">
              {language === "PT" ? "Desenvolvedor apaixonado pela área de tecnologia com experiência em diversas áreas." : 
                "Passionate developer with experience across various areas of technology. "}
              
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/PedroLimaCD.pdf" target="_blank" rel="noopener noreferrer">
                <Button>{language === "PT" ? "Currículo":"Resume"} </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </div>
  < div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-0"></div> {/* Sombra suave */}
  </section>
</div>

{/* <div className="mx-auto border-t-4 border-green-400 w-1/2 my-4"></div> Linha verde */}


        <div id="services" className="mt-20">
          {/* Seção 2 */}
          <motion.section
            ref={ref1}
            className="h-full"
            initial={{ opacity: 0, x: "-50vw" }} // Começa fora da tela, à esquerda
            animate={hasAnimated1 ? { opacity: 1, x: 0 } : {}} // Anima para dentro da tela quando visível
            transition={{ duration: 1 }} // Duração da animação
          >
            <Services />
          </motion.section>
        </div>

        <div className="mx-auto border-t-4 border-green-400 w-1/2 my-4"></div> {/* Linha verde */}

        <div id="resume" className="mt-20">
        {/* Seção 3 */}
          <motion.section
            ref={ref2}
            className="h-full"
            initial={{ opacity: 0, x: "-50vw" }} // Começa fora da tela, à esquerda
            animate={hasAnimated2 ? { opacity: 1, x: 0 } : {}} // Anima para dentro da tela quando visível
            transition={{ duration: 1 }} // Duração da animação
          >
            <Resume />
          </motion.section>
        </div>

        <div className="mx-auto border-t-4 border-green-400 w-1/2 my-4"></div> {/* Linha verde */}

        <div id="work" className="mt-20">
        {/* Seção 4 */}
        <motion.section
          ref={ref3}
          className="h-full"
          initial={{ opacity: 0, x: "-50vw" }} // Começa fora da tela, à esquerda
          animate={hasAnimated3 ? { opacity: 1, x: 0 } : {}} // Anima para dentro da tela quando visível
          transition={{ duration: 1 }} // Duração da animação
        >
          <Work />
        </motion.section>
        </div>
        
      </div>
  );
};

export default Home;
