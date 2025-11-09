import { useTranslations } from "next-intl";
import Image from "next/image";
import SoftSkillCard from "../SoftSkillCard/SoftSkillCard";


const About = () => {
    
    const t = useTranslations("About");
    
    return (
        <section id="about" className="relative w-full overflow-x-hidden min-h-screen pt-15 pb-15 text-white">
            
            <div className="flex flex-col place-items-center lg:place-items-start hd:pl-[22vw] w-full px-10 lg:px-20 gap-10 hd:gap-30">
                
                {/* Titulo y Contenido */}
                <div className="flex flex-col place-items-center lg:place-items-start w-full gap-10 hd:gap-20">
                    
                    {/* Titulo */}
                    <header className="z-20 max-w-[640px] flex flex-col place-items-center">
                        <h2 className="text-3xl mb-4 sm:text-[clamp(1.875rem,4.1vw,3rem)] lg:text-4xl">
                            {t("TituloUno")}
                        </h2>
                        <hr className="w-7/9 border-2" />
                    </header>

                    {/* Contenido */}
                    <div className="z-20 max-w-4/5 lg:max-w-3/5 hd:max-w-3/6">
                        <p className="text-base text-center lg:text-left font-thin leading-7 tracking-wide">{t("ContenidoUno")}</p>
                        <p className="text-base text-center lg:text-left font-thin leading-7 tracking-wide">{t("ContenidoDos")}</p>
                    </div>
                </div>

                {/* Habilidades Blandas */}
                <div className="z-20 flex flex-col place-items-center lg:place-items-start gap-8 hd:gap-20">
                    <h3 className="text-lg text-center lg:text-left lg:text-xl">{t("SubtituloUno")}</h3>
                    <ul className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-8">
                        <li><SoftSkillCard title={t("HabilidadUno.Titulo")} content={t("HabilidadUno.Descripcion")} /></li>
                        <li><SoftSkillCard title={t("HabilidadDos.Titulo")} content={t("HabilidadDos.Descripcion")} /></li>
                        <li><SoftSkillCard title={t("HabilidadTres.Titulo")} content={t("HabilidadTres.Descripcion")} /></li>
                        <li><SoftSkillCard title={t("HabilidadCuatro.Titulo")} content={t("HabilidadCuatro.Descripcion")} /></li>
                        <li><SoftSkillCard title={t("HabilidadCinco.Titulo")} content={t("HabilidadCinco.Descripcion")} /></li>
                        <li><SoftSkillCard title={t("HabilidadSeis.Titulo")} content={t("HabilidadSeis.Descripcion")} /></li>
                    </ul>
                </div>
            </div>

            {/* Light Overlay */}
            <div className="opacity-0 lg:opacity-100 absolute inset-0 bg-[radial-gradient(60%_70%_at_90%_55%,rgba(55,55,55,0.3),transparent_70%)]"></div>


            {/* Imagen */}
            <Image
                className="absolute bottom-0 z-0 opacity-0 md:opacity-20 lg:opacity-100 lg:z-10 lg:right-10 max-w-[clamp(830px,100vw,1800px)] max-h-screen lg:h-screen lg:w-auto object-contain lg:object-cover"
                src="/About.webp"
                width={1800}
                height={1800}
                alt={t("TituloUno")}
                loading="lazy"
            />
        </section>
    );
};

export default About;
