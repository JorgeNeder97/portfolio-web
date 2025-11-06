"use client";
import FuzzyText from "@/components/Texts/FuzzyText";

export default function GlobalNotFound() {
    return (
        <html>
            <body className="relative bg-black w-screen h-screen flex flex-col gap-10 place-items-center place-content-center">
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.3}
                    enableHover={true}
                    fontSize="clamp(8rem, 28vw, 10rem)"
                >
                    404
                </FuzzyText>
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.3}
                    enableHover={true}
                    fontSize="clamp(4rem, 28vw, 5rem)"
                >
                    not found
                </FuzzyText>
                <div className="absolute bottom-5 right-5 z-20">
                    
                </div>
            </body>
        </html>
    );
}
