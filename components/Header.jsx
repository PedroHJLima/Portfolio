"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";




const Header = () => {
  const [language, setLanguage] = useState("PT"); // Estado para o idioma

  // Ao carregar o componente, você pode verificar se já existe um idioma salvo
  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (language !== lang) {
      setLanguage(lang);
      localStorage.setItem("appLanguage", lang); // Salva o idioma no localStorage
      window.location.reload(); // Recarrega a página
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 py-8 xl:py-7 text-white bg-[#27272c] z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        
        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <Button
              onClick={() => changeLanguage("EN")}
              className={`${language === "EN" ? "text-black" : "bg-gray-400 text-white"} `}
            >
              EN
            </Button>
            <Button
              onClick={() => changeLanguage("PT")}
              className={`${language === "PT" ? "text-black" : "bg-gray-400 text-white"} `}
            >
              PT
            </Button>
          </div>
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Pedro<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="https://wa.me/51993337557" target="_blank" rel="noopener noreferrer">
            <Button>{language === "PT" ? "Contato" : "Contact"}</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

