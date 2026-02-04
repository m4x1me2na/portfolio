"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

import "@/styles/skew.scss";
import { projects } from "@/components/portfolio/projectsData";

gsap.registerPlugin(ScrollTrigger);

const SKEW_LAYOUT = [
    { slug: "restaurateur", top: "4%", left: "2%", w: 400, speed: 1, z: 1 },
    { slug: "evolv", top: "42%", left: "78%", w: 400, speed: -0.6, z: 11 },
    { slug: "multimedialpes", top: "73%", left: "6%", w: 400, speed: -0.8, z: 11 },
    { slug: "rive-lab", top: "86%", left: "72%", w: 400, speed: -0.8, z: 1 },
] as const;

type LayoutItem = (typeof SKEW_LAYOUT)[number];

export default function Skew() {
    const root = useRef<HTMLDivElement>(null);

    const items = useMemo(() => {
        return SKEW_LAYOUT.map((l) => {
            const p = projects.find((x) => x.slug === l.slug);
            return p ? { layout: l, project: p } : null;
        }).filter(Boolean) as Array<{ layout: LayoutItem; project: (typeof projects)[number] }>;
    }, []);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            /* =======================
               SKEW GLOBAL
            ======================= */
            const proxy = { skew: 0 };
            const skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg");
            const clamp = gsap.utils.clamp(-20, 20);

            gsap.set(".skewElem", {
                transformOrigin: "right center",
                willChange: "transform",
                force3D: true,
            });

            ScrollTrigger.create({
                onUpdate(self) {
                    const v = self.getVelocity() / 500;
                    proxy.skew += (clamp(v) - proxy.skew) * 0.18;
                    skewSetter(proxy.skew);
                },
            });

            ScrollTrigger.addEventListener("scrollEnd", () => {
                gsap.to(proxy, {
                    skew: 0,
                    duration: 0.35,
                    ease: "power2.out",
                    onUpdate: () => skewSetter(proxy.skew),
                });
            });

            /* =======================
               PARALLAX IMAGES
            ======================= */
            const section = root.current;
            if (!section) return;

            const imgs = gsap.utils.toArray<HTMLImageElement>(
                section.querySelectorAll("img[data-speed]")
            );

            gsap.to(imgs, {
                y: (_, el) => {
                    const speed = parseFloat(el.dataset.speed || "0");
                    return speed * 200;
                },
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });

            // refresh quand les images chargent
            imgs.forEach((img) => {
                if (img.complete) return;
                img.addEventListener(
                    "load",
                    () => ScrollTrigger.refresh(),
                    { once: true }
                );
            });

            /* =======================
               WIPE SÉQUENTIEL TITRES
            ======================= */
            const titles = gsap.utils.toArray<HTMLElement>(".skewElem");
            const n = titles.length;
            const ease = (t: number) => t * t * (3 - 2 * t); // smoothstep

            ScrollTrigger.create({
                trigger: section,
                start: "10% 70%",
                end: "110% 40%",
                scrub: true,
                onUpdate(self) {
                    const g = self.progress;
                    for (let i = 0; i < n; i++) {
                        const start = i / n;
                        const end = (i + 1) / n;
                        let local = (g - start) / (end - start);
                        local = Math.min(1, Math.max(0, local));
                        titles[i].style.setProperty("--p", `${ease(local) * 100}`);
                    }
                },
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={root}
            className="relative  flex flex-col justify-center items-center text-center"
        >
            {/* IMAGES PARALLAX */}
            {items.map(({ layout, project }) => (
                <Link
                    key={project.id}
                    href={`/portfolio/${project.slug}`}
                    className="absolute block pointer-events-auto mix-blend-difference skewImg"
                    style={{
                        top: layout.top,
                        left: layout.left,
                        width: `clamp(220px, 22vw, ${layout.w}px)`,
                        zIndex: layout.z,
                    }}
                    data-cursor-text="Voir le projet →"
                    aria-label={`Voir le projet ${project.title}`}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        data-speed={layout.speed}
                        className="select-none rounded-xl block w-full h-auto"
                        draggable={false}
                    />
                </Link>
            ))}

            {/* TITRES */}
            <div className="relative z-10 pointer-events-none">
                <h1 className="skewElem title">DEVELOPPEUR</h1>
                {["GRAPHISTE", "ANIMATEUR", "CREATEUR", "DESIGNER", "CONCEPTEUR"].map(
                    (word) => (
                        <h1 key={word} className="skewElem title">
                            {word}
                        </h1>
                    )
                )}
            </div>
        </div>
    );
}
