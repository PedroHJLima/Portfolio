"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";

const statsPT = [
  { num: 3, text: "Ano de experiência" },
  { num: 5, text: "Projetos concluídos" },
  { num: 12, text: "Tecnologias aprendidas" },
  { num: 3, text: "Cursos e Formações" },
];

const statsEN = [
  { num: 3, text: "Years of Experience" },
  { num: 5, text: "Completed Projects" },
  { num: 12, text: "Technologies Learned" },
  { num: 3, text: "Courses and Training" },
];

const Stats = () => {
  const [language, setLanguage] = useState("PT");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const stats = language === "PT" ? statsPT : statsEN; // Ajuste aqui

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="z-10 flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
