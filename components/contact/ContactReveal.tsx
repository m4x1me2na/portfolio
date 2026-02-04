"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function ContactReveal() {
    useGSAP(() => {
        gsap.from(".main-contact", {
            opacity: 0,

            y: 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12, // animation décalée entre chaque élément
            delay: 1.7,
        });
    }, []);

    return null; // Ce composant ne rend rien, il anime juste la page
}
