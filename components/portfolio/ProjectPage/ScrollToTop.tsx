"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";

export default function ScrollToTop({ lenis }: { lenis?: Lenis }) {
    const pathname = usePathname();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [pathname, lenis]);

    return null;
}
