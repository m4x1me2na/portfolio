"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function CercleMotion() {

    useGSAP(() => {
        const outer = document.querySelector(".cercle-accueil__outer") as HTMLElement | null;
        const inner = document.querySelector(".cercle-accueil__inner") as HTMLElement | null;


        // 👉 Le bouton Rive
        const riveButton = document.querySelector(".rive-button") as HTMLElement | null;

        if (!outer || !inner || !riveButton) return;

        const mm = gsap.matchMedia();

        gsap.from([outer, inner], {
            opacity: 0,
            duration: 1,
            delay: 1.5,
            ease: "power4.in"
        });

        // Fonction utilitaire pour calculer les offsets pour aligner le centre
        const getOffsetsToCenter = (fromEl: HTMLElement, targetEl: HTMLElement) => {
            const fromRect = fromEl.getBoundingClientRect();
            const targetRect = targetEl.getBoundingClientRect();

            const targetCenterX = targetRect.left + targetRect.width / 2;
            const targetCenterY = targetRect.top + targetRect.height / 2;

            const fromCenterX = fromRect.left + fromRect.width / 2;
            const fromCenterY = fromRect.top + fromRect.height / 2;

            return {
                x: targetCenterX - fromCenterX,
                y: targetCenterY - fromCenterY,
            };
        };

        mm.add("(min-width: 1256px)", () => {
            const outerOffsets = getOffsetsToCenter(outer, riveButton);
            const innerOffsets = getOffsetsToCenter(inner, riveButton);

            // 👉 un seul timeline avec ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    // un conteneur dédié, pas le document
                    start: "top top",
                    end: "+=2400", // distance en px, pas en %
                    scrub: 0.7,
                    // markers: true,
                },
            });

            tl.to(
                outer,
                {
                    motionPath: {
                        path: [
                            { x: 0, y: 0 },
                            { x: 500, y: 200 },
                            { x: outerOffsets.x, y: outerOffsets.y },
                        ],
                        curviness: 2,
                    },
                    scale: 1.2,
                    transformOrigin: "50% 50%",
                    ease: "none",
                },
                0,
            ).to(
                inner,
                {
                    motionPath: {
                        path: [
                            { x: 0, y: 0 },
                            { x: 80, y: 200 },
                            { x: innerOffsets.x, y: innerOffsets.y },
                        ],
                        curviness: 2,
                    },
                    scale: 1.4,
                    transformOrigin: "50% 50%",
                    ease: "none",
                },
                0,
            );

            // cleanup automatique quand le media query change
            return () => {
                tl.scrollTrigger?.kill();
                tl.kill();
            };
        });

        return () => {
            mm.revert();
        };
    }, []);

    return null;
}