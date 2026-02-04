"use client";

import React, {useState} from "react";
import styles from "@/styles/menu/nav.module.scss";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {menuSlide} from "./menuAnim";
import {underSlide} from "./menuAnim";
import Link from "./Link";
import Magnetic from "@/components/magnetic";
import UnderlineLink from "@/components/underline-text";

// petit variant local pour la sous-couche (un poil en avance)

const navItems = [
    {title: "Home", href: "/"},
    {title: "Portfolio", href: "/portfolio"},
    {title: "Contact", href: "/contact"},
];



export default function Nav({onClose}) {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <div className={styles.menuWrap}>
            <motion.div
                className={styles.blurOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />
            {/* ✅ Sous-panneau : même mouvement, arrive juste avant */}
            <motion.div
                className={styles.panelUnder}
                variants={underSlide}
                initial="initial"
                animate="enter"
                exit="exit"
            />

            {/* ✅ Ton panneau existant : NE CHANGE PAS sa structure ni ses classes */}
            <motion.div
                variants={menuSlide}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.menu}

            >
                <div className={styles.body}>
                    <div
                        onMouseLeave={() => setSelectedIndicator(pathname)}
                        className={styles.nav}
                    >
                        <div className={styles.header}>
                            <p>Navigation</p>
                        </div>
                        {navItems.map((data, index) => (
                            <Magnetic intensityX={0.1} intensityY={0.2} >
                            <Link
                                key={index}
                                data={{...data, index}}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            />
                            </Magnetic>
                        ))}
                    </div>

                    <div className={styles.footer}>
                        <Magnetic stiffness={300} damping={50} mass={2} intensityX={0.6} intensityY={0.8}>
                            <div cursor-scale={0.5}>
                            <UnderlineLink href={"https://www.linkedin.com/in/maxime-znamiec-39bb382a4/"}>LinkedIn</UnderlineLink>
                            </div>
                        </Magnetic >
                        <Magnetic stiffness={300} damping={50} mass={2} intensityX={0.6} intensityY={0.8}>
                            <div cursor-scale={0.5}>
                            <UnderlineLink href={"mailto:max.znamiec26@gmail.com"}>Email</UnderlineLink>
                            </div>
                        </Magnetic>
                        <Magnetic stiffness={300} damping={50} mass={2} intensityX={0.6} intensityY={0.8}>
                            <div cursor-scale={0.5}>
                            <UnderlineLink href={"tel:+33787594499"}>Téléphone</UnderlineLink>

                            </div>
                        </Magnetic>

                    </div>
                </div>
            </motion.div>
        </div>
    );
}
