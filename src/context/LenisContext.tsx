"use client";

import { createContext, useContext, useRef, useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
    return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const lenis = new Lenis({
            duration: 0.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            lerp: 0.09,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.3,
            orientation: "vertical",
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Recalcula límites si cambia el tamaño del contenido
        const resizeObserver = new ResizeObserver(() => lenis.resize());
        resizeObserver.observe(containerRef.current);

        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenisRef.current}>
            <div ref={containerRef} className="relative">
                {children}
            </div>
        </LenisContext.Provider>
    );
}
