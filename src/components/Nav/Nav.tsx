"use client";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";
import { useTranslations } from "next-intl";


const Nav = () => {

    const t = useTranslations("Nav");

    return (
        <nav className="absolute top-4 z-50 w-full px-8 text-base flex place-items-center place-content-between">
            <Dropdown />
            <ul className="hidden lg:flex place-items-center gap-5">
                <li className="nav-li group"><Link href="#exp" className="nav-link">{t("Experiencia")}</Link></li>
                <li className="nav-li group"><Link href="#stack" className="nav-link">{t("MiStack")}</Link></li>
                <li className="nav-li group"><Link href="#me" className="nav-link">{t("SobreMi")}</Link></li>
                <li className="nav-li group"><Link href="#cont" className="nav-link">{t("Contacto")}</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
