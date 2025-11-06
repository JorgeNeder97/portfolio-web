import Nav from "@/components/Nav/Nav";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import { useTranslations } from "next-intl";
import { projectsPreview } from "@/data/projects";
import React from "react";
import { div } from "motion/react-client";

type Props = {
    params: { id: string };
};

const ProyectPage = ({ params } : Props) => {

    const projectName = params.id;
    // Traemos los datos del proyecto
    const projectFound = projectsPreview.find((project) => project.id === projectName);

    if(projectFound) {
        const t = useTranslations(`Experience.Proyectos.${projectName}`)
    
        return (
            <section className="bg-black-background w-screen h-screen text-white">
                <header>
                    <Nav />
                    <ProjectHero title={t("Titulo")} description={t("Descripcion")} link={projectFound.link} />
                </header>
                <div>{projectName}</div>
            </section>
        );
    } else {
        return (
            <div>
                <span>404</span>
            </div>
        )
    }
};

export default ProyectPage;
