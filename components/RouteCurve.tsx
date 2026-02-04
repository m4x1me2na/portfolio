"use client";

import { projects } from "@/components/portfolio/projectsData";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { curve, translate, text as textVariants } from "./routeCurveAnim";

type Props = {
    waveColor?: string;
    routeNames?: Record<string, string>;
};

const defaultRoutes: Record<string, string> = {
    "/": "Home",
    "/portfolio": "Portfolio",
    "/contact": "Contact",

};

const anim = (variants: Variants) => ({
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
});

export default function RouteCurve({
                                       waveColor = "#000",
                                       routeNames = defaultRoutes,
                                   }: Props) {
    const pathname = usePathname();
    const router = useRouter();

    const [dimensions, setDimensions] = useState<{
        width: number | null;
        height: number | null;
    }>({
        width: null,
        height: null,
    });

    // La route vers laquelle on veut aller (déclenchée au clic)
    const [pendingPath, setPendingPath] = useState<string | null>(null);

    // Fallback pour éviter le flash avant d'avoir les dimensions
    const [curtainHidden, setCurtainHidden] = useState(false);

    // Intercepter les clics sur <a> internes et lancer la transition
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented) return;
            // clic gauche sans touche spéciale
            if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

            const target = e.target as HTMLElement | null;
            const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
            if (!link) return;

            const href = link.getAttribute("href");
            if (!href) return;

            // Laisser tranquilles les liens externes / protocole spécial
            if (!href.startsWith("/") || href.startsWith("//")) return;

            // Laisser tranquilles les target="_blank" ou download
            if (link.target === "_blank" || link.hasAttribute("download")) return;

            e.preventDefault(); // ❗ On bloque la nav immédiate

            try {
                const url = new URL(href, window.location.origin);
                setPendingPath(url.pathname); // On déclenche la transition vers cette route
            } catch {
                // si URL invalide, on ne fait rien
            }
        };

        const opts: AddEventListenerOptions = { capture: true };

        document.addEventListener("click", onClick, opts);
        return () => {
            document.removeEventListener("click", onClick, opts);
        };
    }, []);

    // Quand la vraie route a atteint pendingPath, on reset
    useEffect(() => {
        if (pendingPath && pathname === pendingPath) {
            setPendingPath(null);
        }
    }, [pathname, pendingPath]);

    // Récupérer les dimensions du viewport
    useEffect(() => {
        const resize = () =>
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);


    const getRouteLabel = (path: string) => {
        // routes fixes
        if (routeNames[path]) return routeNames[path];

        // /portfolio/[slug]
        if (path.startsWith("/portfolio/")) {
            const slug = path.split("/").pop() || "";
            const project = projects.find((p) => p.slug === slug);
            const title = project?.title ?? slug;

            return `Portfolio > ${title}`;
        }

        // fallback
        const cleaned = path.replace("/", "");
        return cleaned || "Page";
    };

    // Route "affichée" par l'animation (ancienne ou future)
    const displayPath = pendingPath ?? pathname;
    const routeLabel = getRouteLabel(displayPath);



    return (
        <div className="page curve">
            {/* Fallback background visible tant qu'on n'a pas les dimensions */}
            <motion.div
                className="background "
                style={{
                    backgroundColor: waveColor,
                    display: curtainHidden ? "none" : "block",


                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: dimensions.width == null ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                onAnimationComplete={() => {
                    if (dimensions.width != null) setCurtainHidden(true);
                }}
            />

            {/* Label au centre */}
            <AnimatePresence mode="wait">
                <motion.p
                    key={displayPath} // ✅ remonte à chaque "route animée"
                    className="route"
                    {...anim(textVariants)}
                >
                    {routeLabel}
                </motion.p>
            </AnimatePresence>

            {/* Overlay animé : on déclenche la nav réelle quand l'exit est fini */}
            <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                    if (pendingPath) {
                        router.push(pendingPath); // ✅ nav ici seulement
                    }
                }}
            >
                {dimensions.width != null && (
                    <SVG
                        key={displayPath} // ✅ synchronisé avec la route animée
                        width={dimensions.width!}
                        height={dimensions.height!}
                        waveColor={waveColor}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

function SVG({
                 height,
                 width,
                 waveColor,
             }: {
    height: number;
    width: number;
    waveColor: string;
}) {
    const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

    const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

    return (
        <motion.svg
            {...anim(translate)}
            viewBox={`0 0 ${width} ${height + 600}`}
            preserveAspectRatio="none"
        >
            <motion.path
                {...anim(curve(initialPath, targetPath))}
                fill={waveColor ?? "var(--background)"}
            />
        </motion.svg>
    );
}
