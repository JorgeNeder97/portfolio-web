"use client";
import dynamic from "next/dynamic";
import { StaggeredMenuProps } from "@/components/Menu/StaggeredMenu";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const StaggeredMenu = dynamic(() => import("@/components/Menu/StaggeredMenu"), {
    ssr: false,
});

const StaggeredMenuClient = (props: StaggeredMenuProps) => {
    const t = useTranslations("Menu");
    const locale = useLocale();
    const pathname = usePathname();

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
            setShowMenu(true);
            return;
        }

        let observer: IntersectionObserver | null = null;
        let cancelled = false;

        const waitForHero = async () => {
            // Reintenta hasta 1 segundo máximo (10 veces cada 100ms)
            for (let i = 0; i < 10; i++) {
                const hero = document.querySelector("#hero");
                const projectHero = document.querySelector("#projectHero");
                if (hero) {
                    observer = new IntersectionObserver(
                        ([entry]) => setShowMenu(!entry.isIntersecting),
                        { threshold: 0.1 }
                    );
                    observer.observe(hero);
                    return;
                } else if (projectHero) {
                    observer = new IntersectionObserver(
                        ([entry]) => setShowMenu(!entry.isIntersecting),
                        { threshold: 0.1 }
                    );
                    observer.observe(projectHero);
                    return;
                }
                await new Promise((r) => setTimeout(r, 100));
                if (cancelled) return;
            }
        };

        waitForHero();

        return () => {
            cancelled = true;
            observer?.disconnect();
        };
    }, [isDesktop, pathname]);

    const isHomePage = pathname === `/${locale}`;

    const menuItems = [
        { label: t("Inicio"), ariaLabel: t("InicioLabel"), link: isHomePage ? `/${locale}#hero` : `/${locale}` },
        {
            label: t("Experiencia"),
            ariaLabel: t("ExperienciaLabel"),
            link: `${locale}#experience`,
        },
        {
            label: t("MiStack"),
            ariaLabel: t("MiStackLabel"),
            link: `${locale}#stack`,
        },
        {
            label: t("SobreMi"),
            ariaLabel: t("SobreMiLabel"),
            link: `${locale}#about`,
        },
        {
            label: t("Contacto"),
            ariaLabel: t("ContactoLabel"),
            link: `${locale}#contact`,
        },
    ];

    const socialItems = [
        {
            label: "Instagram",
            link: "https://www.instagram.com/jorge_neder97/",
        },
        { label: "GitHub", link: "https://github.com/JorgeNeder97" },
        { label: "LinkedIn", link: "https://www.linkedin.com/in/jorge-neder/" },
    ];

    return (
        <div
            className={`${
                showMenu
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
        >
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
