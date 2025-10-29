import { ReactNode } from "react";
import "./normalize.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jorge Neder • Frontend Developer",
    description:
        "Portfolio web - Jorge Lian Neder Allub, Frontend & FullStack Developer.",
};

type Props = {
    children: ReactNode;
};

export default function RootLayout({ children }: Props) {
    return children;
}
