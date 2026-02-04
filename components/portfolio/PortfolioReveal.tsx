"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PortfolioReveal() {
    useGSAP(() => {


        const cards = gsap.utils.toArray<HTMLElement>(".project-card");

        gsap.fromTo(
            cards,
            {opacity: 0, scale: 0.70, y: 10, willChange: "opacity, transform"},
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                delay: 1.5,
                ease: 'elastic.out(1.2,0.75)',
                stagger: 0.03,
                clearProps: "willChange",
            }
        );


        gsap.set(".filterBtn", {
            opacity: 0,
            y: 40,
        });

        gsap.to(".filterBtn", {
            opacity: 1,
            delay: 1.5,
            y: 0,
            duration: 0.6,
            ease: "power3.out",


            // 👇 Quand l'anim est finie, on enlève transform
            onComplete: () => {
                gsap.set(".filterBtn", {clearProps: "transform"});
            },

        });

    }, []);

    return null;
}
