"use client";
import { Next, ReactLogo, TypeScript, TailwindCSS, PostgresSQL, Prisma3, Git, GitHub, VisualStudioCode, 
    Trello, Bash, Postman, Linux, NGINX, HTML5, CSS3, JavaScript, Vite, Redux, Node, Express, 
    Python, DjangoREST, MySQL, SQLite, Sequelize, Redis, Docker } from "@/assets/techLogos";
import Figma from "@/assets/techLogos/Figma";
import { useTranslations } from "next-intl";


const Stack = () => {

    const t = useTranslations("Stack");

    return (
        <section id="stack" className="w-full min-h-screen px-5 py-20 lg:py-30 text-white flex flex-col place-items-center gap-20 lg:gap-25">
            
            {/* Titulo */}
            <header className="flex flex-col place-items-center gap-4">
                <h2 className="mb-4 text-3xl sm:text-[clamp(1.875rem,4.1vw,3rem)] lg:text-4xl">{t("TituloUno")}</h2>
                <hr className="w-1/2 border-2" />
            </header>

            {/* Mi Stack */}
            <article className="flex flex-col place-items-center gap-10 lg:gap-18">
                <h4 className="text-center text-lg sm:text-[clamp(1.125rem,2.5vw,1.5rem)] lg:text-xl">{t("TituloDos")}</h4>
                
                {/* Icons container */}
                <ul className="flex flex-wrap w-[185px] sm:w-auto place-items-center gap-5 lg:flex-nowrap lg:gap-15 lg:max-h-20">
                    {/* Usar Clamp para la version mobile */}
                    <li className="li-icon"><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://nextjs.org/"><Next className="iconTech" /></a></li>
                    <li className="li-icon"><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://es.react.dev/"><ReactLogo className="iconTech" /></a></li>
                    <li className="li-icon"><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org/"><TypeScript className="iconTech" /></a></li>
                    <li className="li-icon"><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/"><TailwindCSS className="iconTech" /></a></li>
                    <li className="li-icon"><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org/"><PostgresSQL className="iconTech" /></a></li>
                    <li className="li-icon"><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.prisma.io/"><Prisma3 className="iconTech" /></a></li>
                </ul>
            </article>

            {/* Herramientas y otras tecnologías */}
            <article className="flex flex-col place-items-center gap-10 lg:gap-18">
                <h4 className="text-center text-lg sm:text-[clamp(1.125rem,2.5vw,1.5rem)] lg:text-xl">{t("TituloTres")}</h4>

                {/* Icons container */}
                <ul className="flex flex-wrap max-w-[500px] lg:max-w-[1096px] lg:grid lg:grid-cols-9 lg:grid-rows-3 place-items-center place-content-center justify-center gap-8">
                    {/* Usar Clamp para la version mobile */}
                    
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://git-scm.com/"><Git className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://github.com/"><GitHub className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/"><VisualStudioCode className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://trello.com/"><Trello className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/"><Figma className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://www.postman.com/"><Postman className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://git-scm.com/install/"><Bash className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/GNU/Linux"><Linux className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/es/docs/Glossary/HTML"><HTML5 className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/es/docs/Web/CSS"><CSS3 className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/es/docs/Web/JavaScript"><JavaScript className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://vite.dev/"><Vite className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://redux-toolkit.js.org/"><Redux className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en"><Node className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://expressjs.com/"><Express className="iconTech-small" fill="#FFFFFF" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://www.python.org/"><Python className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://www.django-rest-framework.org/"><DjangoREST className="iconTech-docker-rest" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://www.mysql.com/"><MySQL className="iconTech-small" /></a></li>
                    <li className="li-icon lg:col-start-3"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://sqlite.org/"><SQLite className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://sequelize.org/"><Sequelize className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://redis.io/"><Redis className="iconTech-small" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://www.docker.com/"><Docker className="iconTech-docker-rest" /></a></li>
                    <li className="li-icon"><a className="iconTech-small" target="_blank" rel="noopener noreferrer" href="https://nginx.org/"><NGINX className="iconTech-small" /></a></li>
                </ul>
            </article>
        </section>
    );
};


export default Stack;