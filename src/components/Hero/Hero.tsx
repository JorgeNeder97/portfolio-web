"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollVelocity from "../Name/ScrollVelocity";
import { Next, PostgresSQL, Prisma3, ReactLogo, TailwindCSS, TypeScript } from "@/assets/techLogos";

const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <section id="hero" className="relative w-full min-h-screen max-h-screen bg-gray-background overflow-x-hidden">
            <div className="w-full h-screen flex place-items-center place-content-center">
                <div className="text-white flex flex-col place-items-start -translate-x-[clamp(80px,20vw,280px)] lg:-translate-x-full -translate-y-24 lg:-translate-y-16 gap-5 lg:gap-8">
                    <span className="text-[clamp(1.5rem,6vw,2rem)] lg:text-[clamp(2.25rem,2.6vw,4rem)]">
                        FullStack <br /> Developer <br />
                        {/* Icons container */}
                        <ul className="flex place-items-center gap-1 pt-5">
                            <li className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)]"><Next className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)] drop-shadow-icon" /></li>
                            <li className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)]"><ReactLogo className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)] drop-shadow-icon" /></li>
                            <li className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)]"><TypeScript className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)] drop-shadow-icon" /></li>
                            <li className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)]"><TailwindCSS className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)] drop-shadow-icon" /></li>
                            <li className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)]"><PostgresSQL className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)] drop-shadow-icon" /></li>
                            <li className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)]"><Prisma3 className="w-[clamp(1.2rem,4.6vw,1.7rem)] h-[clamp(1.2rem,4.6vw,1.7rem)] lg:w-[clamp(1.7rem,2vw,3.2rem)] lg:h-[clamp(1.7rem,2vw,3.2rem)] drop-shadow-icon" /></li>
                        </ul>
                    </span>

                    <div className="flex place-items-center place-content-center gap-4">
                        <span className="text-base lg:text-[clamp(1rem,1.3vw,1.5rem)] max-w-24 lg:max-w-[clamp(6rem,8vw,9.6rem)]">
                            {t("Ubicacion")}
                        </span>

                        <div className="relative bg-[#B1B2B5] rounded-full w-14 h-14 flex place-items-center place-content-center">
                            <div className="globo">
                                <div className="contenedor-globo">
                                    <div className="anillo"></div>
                                    <div className="anillo"></div>
                                    <div className="anillo"></div>
                                    <div className="anillo-horizontal"></div>
                                    <div className="anillo-horizontal-medio"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Image
                    className="absolute bottom-0 lg:right-[42%] translate-x-[12%] lg:translate-x-[58%] max-w-[clamp(830px,100vw,1800px)] max-h-[calc(100vh-50px)] lg:h-screen lg:w-auto object-contain lg:object-cover"
                    src="/Hero.png"
                    width={2278}
                    height={2278}
                    alt="Jorge Lian Neder Allub"
                    priority={true}
                />
            </div>

            <div className="absolute bottom-10 w-screen">
                <ScrollVelocity
                    texts={[" - Jorge Lian Neder Allub"]}
                    velocity={90}
                    className="custom-scroll-text font-normal text-9xl"
                />
            </div>
        </section>
    );
};

export default Hero;
