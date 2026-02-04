"use client";

import Link from "next/link";
import BoutonRiveDecouvrir from "@/components/rive/BoutonRiveDecouvrir";

type Props = {
    href?: string;
    label?: string;
    className?: string;
    pressedScale?: "0.9" | "0.8";
};

export default function DecouvrirButtonResponsive({
                                                      href = "/portfolio",
                                                      label = "Découvrir ●",
                                                      className = "",
                                                      pressedScale = "0.9",
                                                  }: Props) {
    const activeScale = pressedScale === "0.8" ? "active:scale-[0.8]" : "active:scale-[0.9]";

    return (
        <div className={`flex flex-col items-center gap-4 ${className}`}>
            {/* ✅ RIVE visible en lg+ */}
            <div className="hidden xl:block">
                <BoutonRiveDecouvrir />
            </div>

            {/* ✅ Fallback Tailwind (toujours, donc responsive) */}
            <Link
                href={href}
                aria-label={label}
                onClick={() => {
                  setTimeout(() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                      }, 500);
                }}
                className="
          xl:hidden
          w-[50vw]
          text-center
          bg-white
          text-neutral-900
          px-8 py-4
          rounded-xl
          text-2xl md:text-4xl font-bold
          tracking-wide
          transition-transform duration-150 ease-out
          hover:scale-[1.02]
          active:scale-[0.9]
          focus:outline-none
          focus-visible:ring-2 focus-visible:ring-neutral-900/20
        "
            >
                {label}
            </Link>
        </div>
    );
}
