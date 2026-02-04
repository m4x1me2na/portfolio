"use client";

import { useEffect, useRef, PropsWithChildren } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Smoother({ children }: PropsWithChildren) {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);
    const pathname = usePathname();

    // 🔹 1) Init Lenis une seule fois
    useEffect(() => {
        if (lenisRef.current) return;

        const lenis = new Lenis({
            lerp: 0.1,
            wheelMultiplier: 1,
            touchMultiplier: 1.2,
        });

        lenisRef.current = lenis;

        // Lenis informe ScrollTrigger à chaque scroll
        lenis.on("scroll", () => {
            ScrollTrigger.update();
        });

        // RAF loop
        const raf = (time: number) => {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        };
        rafRef.current = requestAnimationFrame(raf);

        // Refresh général après load
        const onLoad = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener("load", onLoad);

        return () => {
            window.removeEventListener("load", onLoad);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // 🔹 2) À CHAQUE changement de page → scroll en haut + refresh
    useLayoutEffect(() => {
        if (!lenisRef.current) return;

        lenisRef.current.scrollTo(0, { immediate: true });

        // refresh après que le DOM de la nouvelle page soit bien en place
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    }, [pathname]);

    // 🔹 3) refresh sur resize
    useEffect(() => {
        const onResize = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return <>{children}</>;
}
