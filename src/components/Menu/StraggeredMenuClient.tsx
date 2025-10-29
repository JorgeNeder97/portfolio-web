"use client";
import dynamic from "next/dynamic";
import { StaggeredMenuProps } from "@/components/Menu/StaggeredMenu";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

const StaggeredMenu = dynamic(() => import("@/components/Menu/StaggeredMenu"), {
  ssr: false,
});

const StaggeredMenuClient = (props: StaggeredMenuProps) => {
  const t = useTranslations("Menu");
  const locale = useLocale();

  const heroRef = useRef<HTMLElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detectamos si estamos en desktop
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      // En mobile siempre mostramos el menu
      setShowMenu(true);
      return;
    }

    heroRef.current = document.querySelector("#hero");
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowMenu(!entry.isIntersecting),
      { threshold: 0.1 } // opcional: ajustar cuándo consideramos "no visible"
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isDesktop]);

  const menuItems = [
    { label: t("Inicio"), ariaLabel: t("InicioLabel"), link: `/${locale}` },
    { label: t("Experiencia"), ariaLabel: t("ExperienciaLabel"), link: `${locale}#exp` },
    { label: t("MiStack"), ariaLabel: t("MiStackLabel"), link: `${locale}#stack` },
    { label: t("SobreMi"), ariaLabel: t("SobreMiLabel"), link: `${locale}#me` },
    { label: t("Contacto"), ariaLabel: t("ContactoLabel"), link: `${locale}#cont` },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/jorge_neder97/" },
    { label: "GitHub", link: "https://github.com/JorgeNeder97" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/jorge-neder/" },
  ];

  return (
    <div className={`${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-300`}>
      <StaggeredMenu
        {...props}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#333"
        changeMenuColorOnOpen={true}
        colors={["#545454", "#b1b2b5"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        isFixed={false}
      />
    </div>
  );
};

export default StaggeredMenuClient;
