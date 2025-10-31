"use client";
import { Next, ReactLogo, TypeScript, TailwindCSS, PostgresSQL, Prisma3, Git, GitHub, VisualStudioCode, 
    Trello, Bash, Postman, Linux, NGINX, HTML5, CSS3, JavaScript, Vite, Redux, Node, Express, 
    Python, DjangoREST, MySQL, SQLite, Sequelize, Redis, Docker } from "@/assets/techLogos";
import { useTranslations } from "next-intl";
import Image from "next/image";


const Stack = () => {

    const t = useTranslations("Stack");

    return (
        <section id="stack" className="w-full min-h-screen py-20 text-white flex flex-col place-items-center gap-50">
            
            {/* Titulo */}
            <header className="flex flex-col place-items-center gap-4">
                <h2 className="lg:text-5xl">{t("TituloUno")}</h2>
                <hr className="w-1/2 border-2" />
            </header>

            {/* Mi Stack */}
            <article className="flex flex-col place-items-center gap-20">
                <h4 className="lg:text-2xl">{t("TituloDos")}</h4>
                
                {/* Icons container */}
                <ul className="flex place-items-center gap-10">
                    {/* Usar Clamp para la version mobile */}
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://nextjs.org/"><Next className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://es.react.dev/"><ReactLogo className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org/"><TypeScript className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/"><TailwindCSS className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org/"><PostgresSQL className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.prisma.io/"><Prisma3 className="w-20 h-20" /></a></li>
                </ul>
            </article>

            {/* Herramientas y otras tecnologías */}
            <article className="flex flex-col place-items-center gap-20">
                <h4 className="lg:text-2xl">{t("TituloTres")}</h4>

                {/* Icons container */}
                <ul className="lg:grid lg:grid-cols-9 lg:grid-rows-3 place-items-center place-content-center justify-center gap-5">
                    {/* Usar Clamp para la version mobile */}
                    
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://git-scm.com/"><Git className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://github.com/"><GitHub className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/"><VisualStudioCode className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://trello.com/"><Trello className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Scrum_(desarrollo_de_software)"><Image src="/logosTech/Scrum.png" width={90} height={90} alt="Scrum" className="w-20 h-[90px]" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://git-scm.com/install/"><Bash className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.postman.com/"><Postman className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/GNU/Linux"><Linux className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://nginx.org/"><NGINX className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/es/docs/Glossary/HTML"><HTML5 className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/es/docs/Web/CSS"><CSS3 className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/es/docs/Web/JavaScript"><JavaScript className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://vite.dev/"><Vite className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://redux-toolkit.js.org/"><Redux className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en"><Node className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://expressjs.com/"><Express className="w-20 h-20" fill="#FFFFFF" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.python.org/"><Python className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.django-rest-framework.org/"><DjangoREST className="w-26 h-26" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.mysql.com/"><MySQL className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://sqlite.org/"><SQLite className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://sequelize.org/"><Sequelize className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://redis.io/"><Redis className="w-20 h-20" /></a></li>
                    <li><a className="iconTech" target="_blank" rel="noopener noreferrer" href="https://www.docker.com/"><Docker className="w-26 h-26" /></a></li>
                </ul>
            </article>
        </section>
    );
};


export default Stack;