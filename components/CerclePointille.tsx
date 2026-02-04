// app/components/CerclePointille.tsx
"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/cerclepointille.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type CSSLength = number | string;

type Props = {
    /** Taille du SVG (width/height) */
    size?: CSSLength;                // ex: 240, "18rem", "30vh"
    /** Position CSS (par défaut "absolute") */
    position?: "absolute" | "fixed" | "relative" | "sticky";
    /** Offsets */
    top?: CSSLength;
    right?: CSSLength;
    bottom?: CSSLength;
    left?: CSSLength;

    /** Couleur (currentColor par défaut → hérite) */
    color?: string;
    /** Épaisseur du trait */
    strokeWidth?: number;
    /** Motif pointillé (dash, gap) */
    dash?: [number, number] | string; // ex: [2,8] ou "2 8"
    /** Durée pour une rotation complète (s) */
    rotationDuration?: number;
    /** Désactiver la rotation perpétuelle */
    spinning?: boolean;
    rotationDirection?: 1 | -1;
    className?: string;
    ariaLabel?: string;

};

function toCss(v?: CSSLength) {
    if (v === undefined || v === null) return undefined;
    return typeof v === "number" ? `${v}px` : v;
}

export default function CerclePointille({
                                            size = 240,
                                            position = "absolute",
                                            top,
                                            right,
                                            bottom,
                                            left,
                                            color,                         // ex: "#ff005e"
                                            strokeWidth = 2,
                                            dash = [2, 8],
                                            rotationDuration = 50,
                                            spinning = true,
                                            rotationDirection = -1,
                                            className,
                                            ariaLabel = "Anneau pointillé décoratif",
                                        }: Props) {
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const rotorRef = useRef<SVGGElement | null>(null);

    useGSAP(() => {
        if (!rotorRef.current || !wrapRef.current) return;

        if (spinning) {
            gsap.to(rotorRef.current, {
                rotation: 360 * rotationDirection,
                transformOrigin: "50% 50%",
                ease: "none",
                duration: rotationDuration,
                repeat: -1,
            });
        }
    }, [spinning, rotationDuration]);

    // viewBox carré propre + cercle centré
    const vb = 100;
    const r = 50 - strokeWidth / 2; // éviter de couper le trait
    const dashStr = Array.isArray(dash) ? dash.join(" ") : dash;

    return (
        <div
            ref={wrapRef}
            className={["wrap-ring", className].filter(Boolean).join(" ")}
            style={{
                position,
                top: toCss(top),
                right: toCss(right),
                bottom: toCss(bottom),
                left: toCss(left),
                // taille + héritage couleur
                width: toCss(size),
                height: toCss(size),
                color,
                pointerEvents: "none", // décoratif
            }}
            aria-label={ariaLabel}
        >
            <svg
                className="cercle"
                viewBox={`0 0 ${vb} ${vb}`}
                width="100%"
                height="100%"
                aria-hidden="true"
                focusable="false"
            >
                <g ref={rotorRef}>
                    <circle
                        cx={vb / 2}
                        cy={vb / 2}
                        r={r}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeLinecap="square"
                        strokeDasharray={dashStr}
                        vectorEffect="non-scaling-stroke"
                    />
                </g>
            </svg>
        </div>
    );
}
