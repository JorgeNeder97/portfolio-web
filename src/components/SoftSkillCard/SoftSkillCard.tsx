import React from "react";


const SoftSkillCard = ({ title, content } : { title: string; content:string }) => {
    return (
        <article className="relative group d-tooltip bg-card-background flex flex-col place-items-center place-content-center gap-2 hover:cursor-default w-full lg:w-54 px-5 h-20 lg:h-20 border border-gray-700 hover:border-gray-500 rounded-lg transition-all duration-300 ease-in-out">
            <div className="d-tooltip-content text-left leading-5 tracking-wide bg-accent rounded lg:w-46">{content}</div>
            <span className="text-center">{title}</span>
            <hr className="absolute group-hover:text-gray-500 bottom-3 w-3/4 text-gray-700 transition-all duration-300 ease-in-out" />
        </article>
    );
};


export default SoftSkillCard;