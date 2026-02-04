"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { projects } from "@/components/portfolio/projectsData";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import gsap from "gsap";




export default function ContenuPortfolio() {
    // 1) UI immédiate (styles des boutons)
    const [uiFilters, setUiFilters] = useState<string[]>([]);
    // 2) filtres réellement affichés (appliqués après animation OUT)
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const FILTERS = ["tout", "web", "video", "creation", "design"];

    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const uiFiltersRef = useRef<string[]>(uiFilters);
    const shouldAnimateInRef = useRef(false);

    // keep ref in sync
    useLayoutEffect(() => {
        uiFiltersRef.current = uiFilters;
    }, [uiFilters]);

    function computeNextFilters(clicked: string, base: string[]) {
        if (clicked === "tout") return [];
        if (base.includes(clicked)) return base.filter((f) => f !== clicked);
        return [...base, clicked];
    }

    function startTransition() {
        // Coupe toute anim en cours, et repart (clics rapides OK)
        tlRef.current?.kill();
        tlRef.current = null;

        const cards = gsap.utils.toArray<HTMLElement>(".project-card");

        // S’il n’y a rien à animer, on applique direct
        if (!cards.length) {
            shouldAnimateInRef.current = true;
            setActiveFilters(uiFiltersRef.current);
            return;
        }

        gsap.killTweensOf(cards);

        // OUT: disparition
        const tl = gsap.timeline({
            defaults: { overwrite: "auto" as const },
            onComplete: () => {
                // applique le DERNIER état demandé (dernier clic gagne)
                shouldAnimateInRef.current = true;
                setActiveFilters(uiFiltersRef.current);
            },
        });

        tl.to(cards, {
            opacity: 0,
            scale: 0.70,
            y: 10,
            duration: 0.22,
            ease: "power2.in",
            stagger: 0.015,
        });

        tlRef.current = tl;
    }

    function toggleFilter(filter: string) {
        // 👉 UI doit réagir tout de suite (boutons)
        const nextUI = computeNextFilters(filter, uiFiltersRef.current);
        setUiFilters(nextUI); // instant

        // Puis on lance la transition d’affichage (OUT -> setActiveFilters -> IN)
        // (Même si tu spam click, ça kill et repart)
        startTransition();
    }

    // Filtrage basé sur activeFilters (ce qui est réellement affiché)
    const filteredProjects =
        activeFilters.length === 0
            ? projects
            : projects.filter((p) => activeFilters.includes(p.category));

    // IN: apparition après que le DOM ait rerender avec la nouvelle liste
    useLayoutEffect(() => {
        if (!shouldAnimateInRef.current) return;
        shouldAnimateInRef.current = false;

        const cards = gsap.utils.toArray<HTMLElement>(".project-card");
        if (!cards.length) return;

        gsap.killTweensOf(cards);

        gsap.fromTo(
            cards,
            { opacity: 0, scale: 0.70, y: 10, willChange: "opacity, transform" },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.38,
                ease: 'elastic.out(1.2,0.75)',
                stagger: 0.03,
                clearProps: "willChange",
            }
        );
    }, [activeFilters.join("|"), filteredProjects.length]);

    return (
        <div className="px-[10vw] ">
            {/* BOUTONS DE TRI */}
            <div className="mb-6 flex gap-3 flex-wrap filterBtn">
                {FILTERS.map((f) => {
                    const isAll = f === "tout";
                    // 👉 état des boutons basé sur uiFilters (instantané)
                    const active = isAll ? uiFilters.length === 0 : uiFilters.includes(f);

                    return (
                        <button
                            key={f}
                            cursor-scale={0.5}
                            onClick={() => toggleFilter(f)}
                            className={`
                px-4 py-2 rounded-2xl text-sm uppercase font-bold cursor-pointer
                transition-all duration-1000 ease-[cubic-bezier(0.22,1.61,0.36,1)]
                border border-[var(--foreground)]
                active:scale-[0.90]
                ${
                                active
                                    ? "[background-image:var(--foreground)] text-[var(--background)]"
                                    : "bg-transparent text-[var(--foreground)]"
                            }
              `}
                        >
                            {f}
                        </button>
                    );
                })}
            </div>

            {/* GRID */}
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((p) => (
                    <div key={p.id} className="project-card">
                        <ProjectCard project={p} />
                    </div>
                ))}
            </section>
        </div>
    );
}
