"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Next from "@/assets/techLogos/Next";
import ReactLogo from "@/assets/techLogos/ReactLogo";
import TypeScript from "@/assets/techLogos/TypeScript";
import TailwindCSS from "@/assets/techLogos/TailwindCSS";
import PostgresSQL from "@/assets/techLogos/PostgresSQL";
import Prisma3 from "@/assets/techLogos/Prisma";
import Git from "@/assets/techLogos/Git";
import GitHub from "@/assets/techLogos/GitHub";
import VisualStudioCode from "@/assets/techLogos/VisualStudioCode";
import Trello from "@/assets/techLogos/Trello";
import Image from "next/image";
import Bash from "@/assets/techLogos/Bash";
import Postman from "@/assets/techLogos/Postman";
import Linux from "@/assets/techLogos/Linux";
import NGINX from "@/assets/techLogos/NGINX";
import HTML5 from "@/assets/techLogos/HTML5";
import CSS3 from "@/assets/techLogos/CSS3";
import JavaScript from "@/assets/techLogos/JavaScript";
import Vite from "@/assets/techLogos/Vite.js";
import Redux from "@/assets/techLogos/Redux";
import Node from "@/assets/techLogos/Node.js";
import Express from "@/assets/techLogos/Express";
import Python from "@/assets/techLogos/Python";
import DjangoREST from "@/assets/techLogos/DjangoREST";
import MySQL from "@/assets/techLogos/MySQL";
import SQLite from "@/assets/techLogos/SQLite";
import Sequelize from "@/assets/techLogos/Sequelize";
import Redis from "@/assets/techLogos/Redis";
import Docker from "@/assets/techLogos/Docker";
import { Link } from "@/i18n/navigation";

const Stack = () => {

    const t = useTranslations("Stack");

    return (
        <section id="stack" className="w-full min-h-screen py-20 text-white flex flex-col place-items-center gap-50">
            
            {/* Titulo */}
            <div className="flex flex-col place-items-center gap-4">
                <h3 className="lg:text-5xl">{t("TituloUno")}</h3>
                <hr className="w-1/2 border-2" />
            </div>

            {/* Mi Stack */}
            <div className="flex flex-col place-items-center gap-20">
                <h4 className="lg:text-2xl">{t("TituloDos")}</h4>
                
                {/* Icons container */}
                <div className="flex place-items-center gap-10">
                    {/* Usar Clamp para la version mobile */}
                    <Link className="iconTech" href="https://nextjs.org/"><Next width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://es.react.dev/"><ReactLogo width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://www.typescriptlang.org/"><TypeScript width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://tailwindcss.com/"><TailwindCSS width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://www.postgresql.org/"><PostgresSQL width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://www.prisma.io/"><Prisma3 width="90" height="90" /></Link>
                </div>
            </div>

            {/* Herramientas y otras tecnologías */}
            <div className="flex flex-col place-items-center gap-20">
                <h4 className="lg:text-2xl">{t("TituloTres")}</h4>

                {/* Icons container */}
                <div className="lg:grid lg:grid-cols-9 lg:grid-rows-3 place-items-center place-content-center gap-10">
                    {/* Usar Clamp para la version mobile */}
                    
                    <Link className="iconTech" href="https://git-scm.com/"><Git width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://github.com/"><GitHub width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://code.visualstudio.com/"><VisualStudioCode width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://trello.com/"><Trello width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://es.wikipedia.org/wiki/Scrum_(desarrollo_de_software)"><Image src="/logosTech/Scrum.png" width={90} height={90} alt="Scrum" className="w-20 h-[90px]" /></Link>
                    <Link className="iconTech" href="https://git-scm.com/install/"><Bash width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://www.postman.com/"><Postman width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://es.wikipedia.org/wiki/GNU/Linux"><Linux width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://nginx.org/"><NGINX width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://developer.mozilla.org/es/docs/Glossary/HTML"><HTML5 width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://developer.mozilla.org/es/docs/Web/CSS"><CSS3 width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://developer.mozilla.org/es/docs/Web/JavaScript"><JavaScript width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://vite.dev/"><Vite width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://redux-toolkit.js.org/"><Redux width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://nodejs.org/en"><Node width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://expressjs.com/"><Express width="90" height="90" fill="#FFFFFF" /></Link>
                    <Link className="iconTech" href="https://www.python.org/"><Python width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://www.django-rest-framework.org/"><DjangoREST width="128" height="128" /></Link>
                    <Link className="iconTech" href="https://www.mysql.com/"><MySQL width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://sqlite.org/"><SQLite width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://sequelize.org/"><Sequelize width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://redis.io/"><Redis width="90" height="90" /></Link>
                    <Link className="iconTech" href="https://www.docker.com/"><Docker width="128" height="128" /></Link>
                </div>
            </div>
        </section>
    );
};


export default Stack;