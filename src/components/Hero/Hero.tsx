"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollVelocity from "../Name/ScrollVelocity";

const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <div id="hero" className="relative w-full min-h-screen max-h-screen bg-gray-background overflow-x-hidden">
            <div className="w-full h-screen flex place-items-center place-content-center">
                <div className="text-white flex flex-col place-items-start -translate-x-20 lg:-translate-x-full -translate-y-24 lg:-translate-y-16 gap-8">
                    <span className="text-2xl lg:text-4xl">
                        FullStack <br /> Developer
                    </span>

                    <div className="flex place-items-center place-content-center gap-4">
                        <span className="text-base max-w-24">
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
                    className="absolute bottom-0 lg:right-[42%] translate-x-[12%] lg:translate-x-[58%] max-w-[830px] max-h-[calc(100vh-50px)] lg:h-screen lg:w-auto object-contain"
                    src="/Hero2.png"
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
        </div>
    );
};

export default Hero;
