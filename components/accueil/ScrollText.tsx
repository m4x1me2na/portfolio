"use client";

import React, {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useEffect} from "react";
import {SplitText} from "gsap/SplitText";
import ScrollToPlugin from "gsap/ScrollToPlugin";



import Magnetic from "@/components/magnetic";

gsap.registerPlugin(useGSAP, SplitText, ScrollToPlugin);

export default function ScrollText() {
    const root = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);
    const arrowRef = useRef<SVGSVGElement | null>(null);


    useEffect(() => {
        document.querySelectorAll("a[href^='#']").forEach(anchor => {
            anchor.addEventListener("click", e => {
                e.preventDefault();

                const target = anchor.getAttribute("href");
                if (!target) return;

                gsap.to(window, {
                    duration: 1.5,          // <- là tu verras vraiment la diff
                    scrollTo: { y: target, autoKill: true },
                    ease: "power3.inOut",
                });

            });
        });
    }, []);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            if (!textRef.current) return;

            // Split sur le mot "Scroll"
            const split = new SplitText(textRef.current, {type: "chars", mask: "chars"});

            // Les lettres partent du haut
            gsap.set([split.chars, arrowRef.current], {
                yPercent: -200,

            });

            // Animation simple, aléatoire
            gsap.to([split.chars, arrowRef.current], {
                yPercent: 0,

                duration: 1,
                ease: "power4.Out",
                delay: 1,
                stagger: {
                    each: 0.1,
                    from: "random",
                },
            });

            return () => {
                split.revert();
            };
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={root} className="cercle-accueil__texte">
            <Magnetic stiffness={200} damping={50} mass={1} intensityX={0.5}>
                <span className="flex items-center gap-2">
                    {/* Texte animé */}
                    <a href="#scroll-anchor">
                    <span ref={textRef} cursor-scale={0.5}>SCROLL</span>
                    </a>

                    {/* Flèche comme avant */}
                    <span className="arrow-mask">
                    <svg
                        ref={arrowRef}
                        className="scrumblebutton-arrow"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M12 5v14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M6 13l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                </span>
            </Magnetic>
        </div>
    );
}
