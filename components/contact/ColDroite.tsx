"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WORDS = [ "VISION", "IMPACT", "FORME", "PROJET", "STYLE", "IDEES"];

export default function ColDroite() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const masksRef = useRef<HTMLDivElement[]>([]);

    // ✅ refs indexés, pas de push
    const setMaskRef = (index: number) => (el: HTMLDivElement | null) => {
        if (el) masksRef.current[index] = el;
    };

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.set(masksRef.current, {
            clipPath: "inset(0 100% 0 0)", // masqué à droite
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 50%",
                end: "50% 20%",
                scrub: true,
            },
        });

        masksRef.current.forEach((mask) => {
            tl.to(
                mask,
                {
                    clipPath: "inset(0 0% 0 0)", // totalement révélé
                    duration: 0.5,
                    ease: "none",
                },
                ">" // un mot après l'autre
            );
        });

        return () => tl.kill();
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex-col gap-25 2xl:gap-4 hidden xl:flex"
        >
            {WORDS.map((word, i) => (
                <div key={i} className="relative leading-none">
                    {/* TEXTE OUTLINE */}
                    <p
                        className="
                            font-raleway
                            uppercase
                            tracking-tight
                            text-[12vw] xl:text-[9vw] md:text-[8vw]
                            text-transparent select-none
                            font-bold
                            whitespace-nowrap

                        "
                        style={{
                            WebkitTextStroke: "2px rgba(255,255,255,0.35)",
                        }}
                    >
                        {word}
                    </p>

                    {/* TEXTE PLEIN — clip animé */}
                    <div
                        ref={setMaskRef(i)}
                        className="absolute inset-0"
                        style={{ clipPath: "inset(0 100% 0 0)" }}
                    >
                        <p
                            className="
                                font-raleway
                                uppercase
                                tracking-tight
                                text-[12vw] xl:text-[9vw] md:text-[8vw]
                                text-white select-none
                                font-bold
                                whitespace-nowrap

                            "
                        >
                            {word}
                        </p>
                    </div>
                </div>
            ))}


        </div>
    );
}
