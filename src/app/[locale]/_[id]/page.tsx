"use client";
import Nav from "@/components/Nav/Nav";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import { useTranslations } from "next-intl";
import { projectsPreview } from "@/data/projects";
import React, { use } from "react";

type Props = {
    params: Promise<{ id: string }>;
};

const ProyectPage = ({ params }: Props) => {
    
    // Obtener el id (nombre) del proyecto desde los parametros
    const parametros = use(params);
    const projectName = parametros.id;

    // Traemos los datos del proyecto
    const projectFound = projectsPreview.find(
        (project) => project.id === projectName
    );

    if (!projectFound) {
        return;
    } else {

        const t = useTranslations(`Experience.Proyectos.${projectName}`);

        return (
            <section className="bg-black-background w-screen h-screen text-white">
                <header>
                    <Nav />
                    <ProjectHero
                        title={t("Titulo")}
                        description={t("Descripcion")}
                        link={projectFound.link}
                    />
                </header>
                <div>{projectName}</div>
            </section>
        );
    }
};

export default ProyectPage;
