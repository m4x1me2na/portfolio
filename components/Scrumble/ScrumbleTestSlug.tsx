"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

type Props = {
    text: string;
    href: string;
    className?: string;
};

export default function CTASlug({ text, href, className = "" }: Props) {
    const rootRef = useRef<HTMLAnchorElement>(null);
    const fillRef = useRef<HTMLSpanElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const root = rootRef.current;
        const fill = fillRef.current;
        if (!root || !fill) return;

        tlRef.current?.kill();

        gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });

        const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut" } });
        tl.to(fill, { scaleX: 1, duration: 0.5 }, 0);

        tlRef.current = tl;

        const enter = () => tl.play();
        const leave = () => tl.reverse();

        root.addEventListener("mouseenter", enter);
        root.addEventListener("mouseleave", leave);

        return () => {
            root.removeEventListener("mouseenter", enter);
            root.removeEventListener("mouseleave", leave);
            tl.kill();
            tlRef.current = null;
        };
    }, []);

    return (
        <Link
            target="_blank" rel="noopener noreferrer"
            ref={rootRef}
            href={href}
            cursor-scale={0.5}
            className={[
                "inline-flex relative items-center select-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black",
                className,
            ].join(" ")}
        >
      <span className="relative inline-flex leading-none">
        <span className="whitespace-pre text-[var(--foreground)]  text-[clamp(1.8rem,3.8vw,6rem)] font-semibold tracking-tight">
          {text}
        </span>

          {/* underline */}
          <span className="pointer-events-none absolute left-0 right-0 top-full mt-[2px] h-[2px] overflow-hidden" aria-hidden="true">
          <span className="absolute inset-0 bg-white/30" />
          <span ref={fillRef} className="absolute inset-0 origin-left scale-x-0 bg-white" />
        </span>
      </span>
        </Link>
    );
}
