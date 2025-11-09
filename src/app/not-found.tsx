"use client";
import FuzzyText from "@/components/Texts/FuzzyText";
import Link from "next/link";

export default function GlobalNotFound() {
    return (
        <html>
            <body className="relative bg-black w-screen h-screen flex flex-col gap-10 place-items-center place-content-center">
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.3}
                    enableHover={true}
                    fontSize="7rem"
                >
                    404
                </FuzzyText>
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.3}
                    enableHover={true}
                    fontSize="3rem"
                >
                    not found
                </FuzzyText>
                <div className="absolute top-15 right-5 z-10 text-white">
                    <Link href="/es">
                        <FuzzyText
                            baseIntensity={0}
                            hoverIntensity={0.1}
                            enableHover={true}
                            fontSize="1.2rem"
                        >
                            Portfolio
                        </FuzzyText>
                    </Link>
                </div>
            </body>
        </html>
    );
}
