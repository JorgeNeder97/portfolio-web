"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicialización correcta sin opciones obsoletas
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      lerp: 0.08, // suavizado ligero y natural
      wheelMultiplier: 1, 
      touchMultiplier: 1.3,
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    // requestAnimationFrame para actualizar el scroll
    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Limpieza al desmontar
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
