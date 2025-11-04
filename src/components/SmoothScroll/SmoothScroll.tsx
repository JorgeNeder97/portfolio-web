"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
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

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Recalcula límites si cambia el tamaño del contenido
    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(containerRef.current);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={containerRef} className="relative">{children}</div>;
}
