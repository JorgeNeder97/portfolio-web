import { ReactNode } from "react";
import "./normalize.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Jorge Neder • FullStack Developer",
        template: "%s | Jorge Neder",
    },
    
    keywords: [
        "Jorge Neder",
        "Jorge Lian Neder Allub",
        "FullStack Developer",
        "React Developer",
        "Next.js",
        "Portfolio",
        "Web Developer",
        "Desarrollador Web",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
    ],
    authors: [{ name: "Jorge Neder", url: "https://jorge-neder.vercel.app" }],
    creator: "Jorge Neder",
    publisher: "Jorge Neder",
    
    openGraph: {
        type: "website",
        locale: "es_ES",
        url: "https://jorge-neder.vercel.app",
        title: "Jorge Neder • FullStack Developer",
        description:
            "Portfolio web - Jorge Lian Neder Allub, FullStack Developer.",
        siteName: "Jorge Neder Portfolio",
        images: [
            {
                url: "https://jorge-neder.vercel.app/Preview.png",
                width: 1290,
                height: 594,
                alt: "Preview - portfolio - Jorge Neder",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Jorge Neder • FullStack Developer",
        description:
            "Portfolio web - Jorge Lian Neder Allub, FullStack Developer.",
        images: ["https://jorge-neder.vercel.app/Preview.png"],
    },

    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/apple-touch-icon.png",
    },

    metadataBase: new URL("https://jorge-neder.vercel.app"),
    alternates: {
        canonical: "https://jorge-neder.vercel.app",
        languages: {
            es: "https://jorge-neder.vercel.app/es",
            en: "https://jorge-neder.vercel.app/en",
        },
    },

    description: "Portfolio web - Jorge Lian Neder Allub, FullStack Developer.",

    other: {
        "google-site-verification": "EsFIdarTbsxgyJEq3IKlkTbZf770IuQfymAMNP-jNGk",
    },
};

type Props = {
    children: ReactNode;
};

export default function RootLayout({ children }: Props) {
    return children;
}
