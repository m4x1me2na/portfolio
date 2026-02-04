"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

gsap.registerPlugin(SplitText);

type Props = {
    text: string;
    href: string;
    isProjectPage?: boolean;
    className?: string;
};

export default function ScrumbleTestButton({
                                         text,
                                         href,
                                         isProjectPage = false,
                                         className = "",
                                     }: Props) {
    const btnRef = useRef<HTMLButtonElement>(null);
    const topRef = useRef<HTMLSpanElement>(null);
    const bottomRef = useRef<HTMLSpanElement>(null);

    // ✅ flèches séparées
    const arrowTopRef = useRef<HTMLSpanElement>(null);
    const arrowBottomRef = useRef<HTMLSpanElement>(null);

    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const splitTopRef = useRef<SplitText | null>(null);
    const splitBottomRef = useRef<SplitText | null>(null);

    useEffect(() => {
        const btn = btnRef.current;
        const topEl = topRef.current;
        const bottomEl = bottomRef.current;
        const arrowTop = arrowTopRef.current;
        const arrowBottom = arrowBottomRef.current;
        if (!btn || !topEl || !bottomEl || !arrowTop || !arrowBottom) return;

        tlRef.current?.kill();
        splitTopRef.current?.revert();
        splitBottomRef.current?.revert();

        const splitTop = new SplitText(topEl, { type: "chars" });
        const splitBottom = new SplitText(bottomEl, { type: "chars" });
        splitTopRef.current = splitTop;
        splitBottomRef.current = splitBottom;

        const underlineFill = btn.querySelector<HTMLElement>(".js-underline-fill");

        // ✅ ici: plus de flèche dans les items chars
        const topItems = splitTop.chars;
        const bottomItems = splitBottom.chars;

        gsap.set([...topItems, ...bottomItems], { display: "inline-block" });
        gsap.set(topItems, { yPercent: 100 });
        gsap.set(bottomItems, { yPercent: 0 });

        // ✅ flèches: état initial séparé
        gsap.set([arrowTop, arrowBottom], { display: "inline-block" });
        gsap.set(arrowTop, {  xPercent: -100, rotation:45, transformOrigin: "50% 50%" });
        gsap.set(arrowBottom, {  xPercent: 0, rotation:45, transformOrigin: "50% 50%" });

        if (underlineFill) gsap.set(underlineFill, { scaleX: 0, transformOrigin: "left center" });

        const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut" } });

        // ✅ texte (inchangé)
        tl.to(
            bottomItems,
            { yPercent: -100, duration: 0.5, stagger: { each: 0.012, from: "random" } },
            0
        ).to(
            topItems,
            { yPercent: 0, duration: 0.5, stagger: { each: 0.012, from: "random" } },
            0.02
        );

        // ✅ flèche indépendante (direction haut-gauche)
        tl.to(
            arrowBottom,
            { xPercent: 100,  duration: 0.5, ease: "power3.inOut" },
            0
        ).to(
            arrowTop,
            {  xPercent: 0,  duration: 0.5, ease: "power3.inOut" },
            0.02
        );

        if (underlineFill) tl.to(underlineFill, { scaleX: 1, duration: 0.5 }, 0);

        tlRef.current = tl;

        return () => {
            tl.kill();
            splitTop.revert();
            splitBottom.revert();
            tlRef.current = null;
            splitTopRef.current = null;
            splitBottomRef.current = null;
        };
    }, [text]);

    return (
        <Link
            href={href}
            className={[
                "inline-flex scrumbletest-container pointer-events-none",
                isProjectPage ? "scrumbletest-container--project" : "",
            ].join(" ")}
        >
            <button
                ref={btnRef}
                type="button"
                onMouseEnter={() => tlRef.current?.play()}
                onMouseLeave={() => tlRef.current?.reverse()}
                className={[
                    "inline-flex items-center p-0 bg-transparent pointer-events-auto cursor-pointer select-none py-[1.5em] px-[3.3em] border-2 border-white/30 rounded-[4em] transition-colors duration-500 ease-in-out hover:border-[var(--foreground)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black",
                    className,
                ].join(" ")}
                cursor-scale={0.5}
            >
        <span className="relative inline-flex cursor-pointer  leading-none align-middle" >
          <span className="relative inline-block h-[clamp(1.25rem,1.38vw,3rem)] overflow-hidden leading-none">
            {/* TOP LINE */}
              <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 inline-flex whitespace-pre text-[var(--foreground)] leading-none font-semibold tracking-tight text-[clamp(1.25rem,1.38vw,3rem)]"
              >
              {/* ✅ SplitText UNIQUEMENT sur ce span */}
                  <span ref={topRef} className="inline-block">
                {text}
              </span>
                <span className="relative inline-block h-[clamp(1.25rem,1.38vw,3rem)] overflow-hidden leading-none">
                  {/* ✅ flèche séparée */}
                  <span ref={arrowTopRef} className="pl-0.5 inline-block" aria-hidden="true">
                <svg viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1cap] h-[1cap]">
                  <path
                      d="M2.82861 22L22.8286 2M22.8286 2V22M22.8286 2H2.82861"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="square"
                  />
                </svg>
              </span>
                </span>
            </span>

              {/* BOTTOM LINE */}
              <span
                  className="inline-flex whitespace-pre text-[var(--foreground)] leading-none font-semibold tracking-tight text-[clamp(1.25rem,1.38vw,3rem)]"
              >
              {/* ✅ SplitText UNIQUEMENT sur ce span */}
                  <span ref={bottomRef} className="inline-block">
                {text}
              </span>

                  {/* ✅ flèche séparée */}
                  <span ref={arrowBottomRef} className="pl-0.5 inline-block" aria-hidden="true">
                <svg viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1cap] h-[1cap]">
                  <path
                      d="M2.82861 22L22.8286 2M22.8286 2V22M22.8286 2V22M22.8286 2H2.82861"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="square"
                  />
                </svg>
              </span>
            </span>
          </span>


        </span>
            </button>
        </Link>
    );
}
