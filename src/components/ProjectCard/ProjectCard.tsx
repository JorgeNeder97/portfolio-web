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
    <Link href={`/${link}`} className="w-full max-w-[1080px] p-0.5 group relative border border-gray-800 rounded-xl">
        
        
        {/* Card */}
        <article className="flex flex-col bg-neutral-800  place-items-center overflow-hidden gap-5 px-5 pt-5 lg:px-10 lg:pt-10 relative border border-gray-700 group-hover:border-gray-500 rounded-xl transition-all duration-300 ease-in-out">

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.2),transparent_70%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>

            {/* Arrow Right */}
            <div className="absolute top-4 right-4 lg:top-10 lg:right-12 group-hover:translate-x-2.5 transition-all duration-300 ease-in-out will-change-transform">
                <ArrowRight className="text-gray-background group-hover:text-gray-100 transition-all duration-300 ease-in-out" />
            </div>

            <div className="w-full z-10 flex flex-col lg:flex-row lg:flex-wrap lg:place-items-end place-items-start place-content-start gap-5 lg:gap-[clamp(40px,10vw,100px)]">
                {/* Titulo */}
                <div className="flex flex-col place-items-start gap-5">
                    <h3 className="text-lg md:text-xl lg:text-2xl">{title}</h3>
                    <span className="lg:w-[410px]">{type} - {description}</span>
                </div>

                {/* Stack */}
                <div className="flex flex-col place-items-start gap-2">
                    <span>{stackTitle}</span>
                    <ul className="flex place-items-center gap-2">
                        {stack.map((Icon, index) => (
                            <li className="w-5 sm:w-10 h-5 sm:h-10" key={index}>
                                <Icon className="w-5 sm:w-10 h-5 sm:h-10" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="relative shadow-card border border-b-0 border-gray-700 rounded-t-lg w-fit lg:translate-y-5 lg:group-hover:translate-y-0.5 transition-all duration-300 ease-in-out will-change-transform">
                <Image src={image} width={1295} height={590} alt={title} className="w-auto rounded-t-lg" />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent group-hover:opacity-0 rounded-t-lg transition-all duration-300 ease-in-out"></div>
            </div>
        </article>
    </Link>
  )
};


export default ProjectCard;