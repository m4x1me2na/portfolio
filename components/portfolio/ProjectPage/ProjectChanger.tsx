"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Magnetic from "@/components/magnetic";

gsap.registerPlugin(ScrollTrigger);

type ProjectNavItem = { slug: string };

type Props = {
    projects: ProjectNavItem[];
    currentSlug: string;
    hideOn?: string;
    hideStart?: string;
    hideEnd?: string;
};

export default function ProjectChanger({
                                           projects,
                                           currentSlug,
                                           hideOn,
                                           hideStart = "top bottom",
                                           hideEnd = "bottom top",
                                       }: Props) {
    const rootRef = useRef<HTMLDivElement>(null);

    const [visibleByProgress, setVisibleByProgress] = useState(false);
    const [hiddenByElement, setHiddenByElement] = useState(false);
    const visible = visibleByProgress && !hiddenByElement;

    const index = useMemo(
        () => projects.findIndex((p) => p.slug === currentSlug),
        [projects, currentSlug]
    );

    const prev = index > 0 ? projects[index - 1] : null;
    const next = index >= 0 && index < projects.length - 1 ? projects[index + 1] : null;

    useEffect(() => {
        const stProgress = ScrollTrigger.create({
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const v = self.progress > 0.22 && self.progress < 0.97;
                setVisibleByProgress(v);
            },
        });

        let stHide: ScrollTrigger | null = null;

        const createHideTrigger = () => {
            if (!hideOn) return;
            const el = document.querySelector(hideOn);
            if (!el) return;

            stHide = ScrollTrigger.create({
                trigger: el,
                start: hideStart,
                end: hideEnd,
                onEnter: () => setHiddenByElement(true),
                onEnterBack: () => setHiddenByElement(true),
                onLeave: () => setHiddenByElement(false),
                onLeaveBack: () => setHiddenByElement(false),
            });
        };

        createHideTrigger();
        const raf = requestAnimationFrame(createHideTrigger);

        return () => {
            cancelAnimationFrame(raf);
            stProgress.kill();
            stHide?.kill();
        };
    }, [hideOn, hideStart, hideEnd]);

    useLayoutEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        // état initial safe
        gsap.set(root, { transformOrigin: "50% 100%" });

        gsap.to(root, {
            scale: visible ? 1 : 0,
            autoAlpha: visible ? 1 : 0,
            duration: visible ? 0.8 : 0.25,
            ease: visible ? "elastic.out(0.9, 0.6)" : "power2.in",
            overwrite: true,
            pointerEvents: visible ? "auto" : "none",
        });
    }, [visible]);

    // ✅ Boutons responsive : petit sur tel, plus grand sur desktop
    const btnClass = `
    inline-flex items-center justify-center whitespace-nowrap
    rounded-full
    border border-black/40
    text-[var(--background)]
    transition-colors duration-200
    hover:border-[var(--background)]
    
    px-3 py-1.5 text-[0.75rem]
    sm:px-4 sm:py-2 sm:text-sm
  `;

    const disabledClass = `
    opacity-30 cursor-not-allowed pointer-events-none border-black/40
  `;

    return (
        <div
            ref={rootRef}
            className="
        fixed inset-x-0 z-[80] flex justify-center
        bottom-3 sm:bottom-4 lg:bottom-6
      "
            style={{ pointerEvents: "none", opacity: 0 }}
        >
            {/* MINI MENU responsive */}
            <div
                className="
          pointer-events-auto
          w-[fit-content]
          bg-[var(--foreground)]
          opacity-60
          border border-black/10
          shadow-md

          hover:opacity-100
          transition-opacity duration-200

          px-2.5 py-2
          sm:px-4 sm:py-2.5
          lg:px-5 lg:py-3
          rounded-[2.2rem]
        "
            >
                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                    {/* Prev */}
                    {prev ? (
                        <Magnetic intensityX={0.15} intensityY={0.3}>
                            <Link className={btnClass} cursor-scale={0.5 as any} href={`/portfolio/${prev.slug}`}>

                                <span >← Précédent</span>
                            </Link>
                        </Magnetic>
                    ) : (
                        <span className={`${btnClass} ${disabledClass}`}>

              <span>← Précédent</span>
            </span>
                    )}

                    {/* Center */}
                    <Magnetic intensityX={0.12} intensityY={0.25}>
                        <Link className={`${btnClass} font-medium`} cursor-scale={0.5 as any} href="/portfolio">
                            Portfolio
                        </Link>
                    </Magnetic>

                    {/* Next */}
                    {next ? (
                        <Magnetic intensityX={0.15} intensityY={0.3}>
                            <Link className={btnClass} cursor-scale={0.5 as any} href={`/portfolio/${next.slug}`}>

                                <span>Suivant →</span>
                            </Link>
                        </Magnetic>
                    ) : (
                        <span className={`${btnClass} ${disabledClass}`}>

              <span>Suivant →</span>
            </span>
                    )}
                </div>
            </div>
        </div>
    );
}
