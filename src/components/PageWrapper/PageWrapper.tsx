"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    return (
        <motion.main
            key={pathname}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 2,
                ease: [0.77, 0, 0.18, 1],
                delay: 1.7,
            }}
        >
            {children}
        </motion.main>
    );
}
