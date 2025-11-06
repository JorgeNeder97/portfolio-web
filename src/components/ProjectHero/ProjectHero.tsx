import React from "react";

type ProjectHeroProps = {
    title: string;
    description: string;
    link: string;
};

const ProjectHero = ({ title, description, link }: ProjectHeroProps) => {
    return (
        <article className="min-h-screen w-screen flex flex-col place-items-center place-content-center">
            <div className="flex flex-col place-items-center">
                <h2>{title}</h2>
                <hr />
                <span>{description}</span>
            </div>

            <a href={link} className=""></a>
        </article>
    );
};

export default ProjectHero;
