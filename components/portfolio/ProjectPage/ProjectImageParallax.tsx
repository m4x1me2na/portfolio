// src/components/portfolio/ProjectImageParallax.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger); // ⬅️ important : on NE registre PAS useGSAP ici

type Props = {
    src: string;
    alt: string;
};

export default function ProjectImageParallax({ src }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            const el = containerRef.current;
            if (!el) return;

            const ctx = gsap.context(() => {
                gsap.fromTo(
                    el,
                    { backgroundPositionY: "0%",backgroundSize: "100%",},
                    {
                        backgroundPositionY: "70%",
                        backgroundSize: "150%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: el,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            }, containerRef);

            // Recalcule tous les ScrollTriggers après montage
            ScrollTrigger.refresh();

            return () => {
                ctx.revert(); // kill tween + ScrollTrigger quand on quitte la page
            };
        },
        // ⬅️ important : dépend seulement de src si tu veux,
        // mais en app router chaque page remonte de toute façon.
        [src]
    );

    return (
        <div
            ref={containerRef}
            className="relative z-0 -mt-20 xl:-mt-12 aspect-[5/4] xl:aspect-[16/9] rounded-b-[5vh]"
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center 0%",
                backgroundRepeat: "no-repeat",
            }}
            id="slug-image"
        />
    );
}
