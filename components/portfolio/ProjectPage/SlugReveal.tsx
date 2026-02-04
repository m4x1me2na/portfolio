"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export default function SlugReveal() {
    useGSAP(() => {
        let splitTitle: SplitText | undefined;
        let splitDesc: SplitText | undefined;
        let splitInfos: SplitText | undefined;

        const ctx = gsap.context(() => {
            splitTitle = SplitText.create("#slug-title", { type: "chars", mask: "chars" });
            splitDesc = SplitText.create("#slug-subtitle", { type: "lines", mask: "lines" });
            splitInfos = SplitText.create("#slug-infos", { type: "lines", mask: "lines" });

            gsap.set(splitTitle.chars, { yPercent: 200, opacity: 0.001 });
            gsap.set(splitDesc.lines, { yPercent: 100, opacity: 0.001 });
            gsap.set(splitInfos.lines, { yPercent: 100, opacity: 0.001 });

            const tl = gsap.timeline();

            tl.to(splitTitle.chars, {
                yPercent: 0,
                delay: 0.8,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
            });

            tl.to(
                splitDesc.lines,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.45,
                    stagger: 0.2,
                    ease: "power3.out",
                },
                "-=0.4"
            );

            gsap.to(splitInfos.lines, {
                delay: 0.8,
                yPercent: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "power3.out",
            });

            gsap.from("#slug-image", {
                opacity: 0,
                duration: 1,
                delay: 1.4,
                y:-200,
                ease: "power3.out",
            });
        });

        return () => {
            // 1) revert SplitText (remet le DOM original)
            splitTitle?.revert();
            splitDesc?.revert();
            splitInfos?.revert();

            // 2) revert le context (kill tweens/sets créés dedans)
            ctx.revert();
        };
    }, []);

    return null;
}
