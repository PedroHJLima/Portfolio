"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";


const linksPT = [
  { name: "Início", path: "#home" },
  { name: "Funções", path: "#services" },
  { name: "Sobre", path: "#resume" },
  { name: "Trabalhos", path: "#work" },
];

const linksEN = [
  { name: "Home", path: "#home" },
  { name: "Features", path: "#services" },
  { name: "About Me", path: "#resume" },
  { name: "Works", path: "#work" },
];


const MobileNav = () => {
  const [language, setLanguage] = useState("PT");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  const links = language === "PT" ? linksPT : linksEN;
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Pedro<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}

        <div>
          <Link href="https://wa.me/51993337557" target="_blank" rel="noopener noreferrer">
            <Button>Contato</Button>
          </Link>
        </div>

        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
