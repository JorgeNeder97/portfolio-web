"use client";
import { Link } from "@/i18n/navigation";
import Dropdown from "../Dropdown/Dropdown";
import { useTranslations } from "next-intl";


const Nav = () => {

    const t = useTranslations("Nav");

    return (
        <nav className="absolute top-7 lg:top-4 z-30 lg:w-full px-8 text-base flex place-items-center place-content-between">
            <Dropdown />
            <ul className="hidden lg:flex place-items-center gap-5">
                <li className="nav-li group"><Link href="#experience" className="nav-link">{t("Experiencia")}</Link></li>
                <li className="nav-li group"><Link href="#stack" className="nav-link">{t("MiStack")}</Link></li>
                <li className="nav-li group"><Link href="#about" className="nav-link">{t("SobreMi")}</Link></li>
                <li className="nav-li group"><Link href="#contact" className="nav-link">{t("Contacto")}</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
