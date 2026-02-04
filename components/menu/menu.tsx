'use client'

import styles from "@/styles/menu/menu.module.scss";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Nav from "@/components/menu/nav";



function useHeaderVisibility() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const header = document.querySelector("header");
        if (!header) return; // si pas de header, on garde visible=true -> bouton caché

        const io = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            {
                // threshold: 0 -> false uniquement quand le header n'est plus du tout visible
                threshold: 0
            }
        );

        io.observe(header);
        return () => io.disconnect();
    }, []);

    return visible;
}

export default function Home() {
    const [isActive, setIsActive] = useState(false);
    const headerVisible = useHeaderVisibility();
    const menuRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();
    useEffect(() => {
        // À chaque changement de route, on ferme le menu
        setIsActive(false);
    }, [pathname]);

    useEffect(() => {
        if (isActive && headerVisible) {
            setIsActive(false);
        }
    }, [isActive, headerVisible]);




    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsActive(prev => !prev); // 🔥 toggle menu
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);




    return (
        <>
            <motion.div
                cursor-scale={"0.5"}
                cursor-ease-enter={"elastic.out(1.2,0.5)"}
                cursor-ease-leave={"elastic.out(1.2,0.5)"}
                cursor-dur-enter={0.5}
                cursor-dur-leave={0.5}
                className={styles.button}
                onClick={() => setIsActive(!isActive)}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                    headerVisible
                        ? { scale: 0, opacity: 0, pointerEvents: "none" as const }
                        : { scale: 1, opacity: 1, pointerEvents: "auto" as const }
                }
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                aria-hidden={headerVisible}
            >
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`} />
            </motion.div>

            <AnimatePresence mode="wait">
                {isActive && (
                    <div ref={menuRef}>
                        <Nav onClose={() => setIsActive(false)}/>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
