"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "@/styles/cursor.scss";

gsap.registerPlugin(useGSAP);

const Cursor = () => {
    useGSAP(() => {
        let shown = false;

        // ✅ on track l'échelle "logique" du curseur (celle que tu changes avec cursor-scale)
        let currentScale = 1;

        gsap.set("#cursor", {
            autoAlpha: 0,
            scale: 0,
            transformOrigin: "50% 50%",
        });

        gsap.set("#cursor-core", { scale: 1, transformOrigin: "50% 50%" });
        gsap.set("#cursor-preview", { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" });
        gsap.set("#cursor-label", { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%" });

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;

            if (!shown) {
                shown = true;
                gsap.to("#cursor", {
                    autoAlpha: 1,
                    duration: 1,
                    scale: 1,
                    ease: "elastic.out",
                });
            }

            gsap.to("#cursor", {
                x: clientX - 40 / 2,
                y: clientY - 40 / 2,
                duration: 0.7,
                ease: "power4.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        const handleHover = (event: MouseEvent) => {
            const target = (event.target as HTMLElement | null)?.closest(
                "[cursor-scale], [data-cursor-image], [data-cursor-text]"
            ) as HTMLElement | null;

            const image = target?.getAttribute("data-cursor-image");
            if (image) {
                const previewEl = document.getElementById("cursor-preview");
                if (previewEl) previewEl.style.backgroundImage = `url(${image})`;

                gsap.set("#cursor", { mixBlendMode: "difference" });

                gsap.to("#cursor-core", { scale: 0, duration: 0.25, ease: "power2.out" });
                gsap.to("#cursor-label", { autoAlpha: 0, scale: 0, duration: 0.25, ease: "power2.out" });
                gsap.to("#cursor-preview", { autoAlpha: 1, scale: 1, duration: 0.25, ease: "power2.out" });

                return;
            }

            const text = target?.getAttribute("data-cursor-text");
            if (text) {
                const labelTextEl = document.getElementById("cursor-label-text");
                if (labelTextEl) {
                    labelTextEl.innerHTML = `
            <span>${text}</span>
            <span>${text}</span>
          `;
                }

                gsap.set("#cursor", { mixBlendMode: "normal" });

                gsap.to("#cursor-core", { scale: 0, duration: 0.25, ease: "power2.out" });
                gsap.to("#cursor-preview", { autoAlpha: 0, scale: 0, duration: 0.25, ease: "power2.out" });
                gsap.to("#cursor-label", { autoAlpha: 1, scale: 1, duration: 0.25, ease: "power2.out" });

                return;
            }

            gsap.set("#cursor", { mixBlendMode: "difference" });

            gsap.to("#cursor-preview", { autoAlpha: 0, scale: 0, duration: 0.25, ease: "power2.out" });
            gsap.to("#cursor-label", { autoAlpha: 0, scale: 0, duration: 0.25, ease: "power2.out" });
            gsap.to("#cursor-core", { scale: 1, duration: 0.25, ease: "power2.out" });

            const scalableTarget = (event.target as HTMLElement | null)?.closest(
                "[cursor-scale]"
            ) as HTMLElement | null;

            if (scalableTarget) {
                const scaleAttr = scalableTarget.getAttribute("cursor-scale") || "8";
                const easeEnter = scalableTarget.getAttribute("cursor-ease-enter") || "power2.inOut";
                const durEnter = scalableTarget.getAttribute("cursor-dur-enter") || "0.3";

                currentScale = parseFloat(scaleAttr); // ✅ keep track
                gsap.to("#cursor", {
                    scale: currentScale,
                    duration: parseFloat(durEnter),
                    ease: easeEnter,
                });
            } else {
                currentScale = 1; // ✅ keep track
                gsap.to("#cursor", {
                    scale: currentScale,
                    duration: 0.3,
                    ease: "power2.inOut",
                });
            }
        };

        document.addEventListener("mouseover", handleHover);

        // ✅ CLICK / PRESS SCALE (0.8x de l'échelle actuelle)
        const pressFactor = 0.8;

        const handlePointerDown = () => {
            gsap.to("#cursor", {
                scale: currentScale * pressFactor,
                duration: 0.12,
                ease: "power2.out",
                overwrite: "auto",
            });
        };

        const handlePointerUp = () => {
            gsap.to("#cursor", {
                scale: currentScale,
                duration: 0.18,
                ease: "power2.out",
                overwrite: "auto",
            });
        };

        window.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("pointerup", handlePointerUp);
        window.addEventListener("pointercancel", handlePointerUp);
        window.addEventListener("blur", handlePointerUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleHover);

            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointerup", handlePointerUp);
            window.removeEventListener("pointercancel", handlePointerUp);
            window.removeEventListener("blur", handlePointerUp);
        };
    }, []);

    return (
        <div id="cursor">
            <div id="cursor-core" />
            <div id="cursor-preview" />
            <div id="cursor-label">
                <span id="cursor-label-text"></span>
            </div>
        </div>
    );
};

export default Cursor;
