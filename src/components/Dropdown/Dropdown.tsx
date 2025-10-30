"use client";
import DropdownArrow from "@/assets/DropdownArrow";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

const Dropdown = () => {
    
    const locale = useLocale();
    const currentLang = locale === "es" ? "Es" : "En";
    const t = useTranslations("Nav");

    const [open, setOpen] = useState(false);

    return (
        <div 
            className="d-dropdown d-dropdown-bottom d-dropdown-center w-[83px] pb-1.5 select-none z-50" 
            onClick={() => setOpen(prev => !prev)} 
        >
            <div 
                tabIndex={0} 
                role="button" 
                className="flex place-items-center gap-1.5 cursor-pointer"
            >
                <span>{t(currentLang)}</span>{" "}
                <DropdownArrow
                    stroke="var(--color-almost-white)"
                    width="14"
                    height="14"
                />
            </div>

            <ul
                tabIndex={-1}
                className={`d-dropdown-content flex flex-col place-items-start d-bg-base-100 d-rounded-box z-10 w-[83px] transition-all duration-300 ease-in-out
                    ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
                `}
            >
                <li className="text-almost-white text-[15px] hover:text-white transition-all duration-300 ease-in-out">
                    <Link locale={locale === "es" ? "en" : "es"} href="/">
                        {t(locale === "es" ? "En" : "Es")}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
