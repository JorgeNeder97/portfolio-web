"use client";
import { Link } from "@/i18n/navigation";
import Dropdown from "../Dropdown/Dropdown";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";


const Nav = () => {

    const t = useTranslations("Nav");
    const pathname = usePathname();
    const locale = useLocale();

    // Verifica si está en el home o en un proyecto
    const isHomePage = pathname === `/${locale}`;

    return (
        <nav className="absolute top-7 lg:top-4 z-30 lg:w-full px-8 text-base flex place-items-center place-content-between">
            <Dropdown />
            <ul className={`hidden ${ isHomePage ? "lg:flex" : "lg:hidden"} place-items-center gap-5`}>
                <li className="nav-li group"><Link href={isHomePage ? "#experience" : `../${locale}#experience`} className="nav-link">{t("Experiencia")}</Link></li>
                <li className="nav-li group"><Link href={isHomePage ? "#stack" : `../${locale}#stack`} className="nav-link">{t("MiStack")}</Link></li>
                <li className="nav-li group"><Link href={isHomePage ? "#about" : `../${locale}#about`} className="nav-link">{t("SobreMi")}</Link></li>
                <li className="nav-li group"><Link href={isHomePage ? "#contact" : `../${locale}#contact`} className="nav-link">{t("Contacto")}</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
