"use client";
import { useTranslations } from "next-intl";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsPreview } from "@/data/projectsPreview";

const Experience = () => {

    const t = useTranslations("Experience");
    const tp = useTranslations("Experience.Proyectos");

    return (
        <section id="experience" className="w-full min-h-screen text-white px-5 pt-20 lg:pt-40 flex flex-col place-items-center gap-20 lg:gap-40">
            
            {/* Titulo */}
            <header className="max-w-[640px] flex flex-col place-items-center gap-4">
                <h2 className="text-3xl mb-4 sm:text-[clamp(1.875rem,4.1vw,3rem)] lg:text-5xl">{t("TituloUno")}</h2>
                <hr className="w-1/3 border-2" />
                <span className="text-center text-lg">{t("SubTituloUno")}</span>
            </header>

            {/* Proyectos (Cards) */}
            <div className="flex flex-col place-items-center gap-20 lg:gap-40">
                {projectsPreview.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={tp(`${project.id}.Titulo`)}
                        type={tp(`${project.id}.Tipo`)}
                        description={tp(`${project.id}.Descripcion`)}
                        stack={project.stack}
                        stackTitle={t("StackTitulo")}
                        image={project.image}
                        link={project.id}
                    />
                ))}
            </div>
            

        </section>
    );
};


export default Experience;