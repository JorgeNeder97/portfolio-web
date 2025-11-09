import ArrowRight from '@/assets/ArrowRight';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react'

export interface ProjectCard {
    title: string;
    type: string;
    description: string;
    stack: React.FC<React.SVGProps<SVGSVGElement>>[];
    stackTitle: string;
    image: string;
    link: string;
}

const ProjectCard = ({ title, type, description, stack, stackTitle, image, link } : ProjectCard) => {
    
    const locale = useLocale();
    
    return (
    
    // Borde
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full md:max-w-[700px] lg:max-w-[900px] hd:max-w-[1080px] p-0.5 group relative border border-gray-800 rounded-xl">
        
        
        {/* Card */}
        <article className="flex flex-col bg-neutral-800  place-items-center overflow-hidden gap-2 px-5 pt-5 lg:px-10 lg:pt-10 relative border border-gray-700 group-hover:border-gray-500 rounded-xl transition-all duration-300 ease-in-out">

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.2),transparent_70%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>

            {/* Arrow Right */}
            <div className="absolute top-4 right-4 lg:top-10 lg:right-12 hd:right-12 group-hover:translate-x-2.5 transition-all duration-300 ease-in-out will-change-transform">
                <ArrowRight className="text-gray-background w-5 h-5 group-hover:text-gray-100 transition-all duration-300 ease-in-out" />
            </div>

            <div className="w-full z-10 flex flex-col md:flex-row lg:flex-row md:place-items-end place-items-start place-content-between gap-5 lg:gap-2 hd:gap-[clamp(40px,10vw,100px)]">
                {/* Titulo */}
                <div className="flex flex-col place-items-start gap-5">
                    <h3 className="text-lg md:text-xl hd:text-2xl">{title}</h3>
                    <span className="hd:w-[410px] text-xs hd:text-base">{type} - {description}</span>
                </div>

                {/* Stack */}
                <div className="flex flex-col place-items-start gap-2 md:pr-2">
                    <span className="text-xs hd:text-base">{stackTitle}</span>
                    <ul className="flex place-items-center gap-2">
                        {stack.map((Icon, index) => (
                            <li className="w-5 h-5 lg:w-7 lg:h-7 hd:w-10 hd:h-10" key={index}>
                                <Icon className="w-5 h-5 lg:w-7 lg:h-7 hd:w-10 hd:h-10" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="relative shadow-card border border-b-0 border-gray-700 rounded-t-lg w-fit lg:translate-y-5 lg:group-hover:translate-y-0.5 transition-all duration-300 ease-in-out will-change-transform">
                <Image src={image} width={1295} height={590} alt={title} className="lg:w-[700px] hd:w-auto rounded-t-lg" />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent group-hover:opacity-0 rounded-t-lg transition-all duration-300 ease-in-out"></div>
            </div>
        </article>
    </a>
  )
};


export default ProjectCard;