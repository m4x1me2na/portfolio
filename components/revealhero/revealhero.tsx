"use client";

import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import "@/styles/revealhero/revealhero.scss"

gsap.registerPlugin(useGSAP, SplitText);

export default function RevealHero({
                                       big,
                                       small,
                                       mid,
                                       delay = 0
                                   }: {
    big: React.ReactNode;
    small: React.ReactNode; // 👈 ici, pas string !
    mid: React.ReactNode;
    delay?: number;
}) {
    const root = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLHeadingElement>(null);
    const midRef = useRef<HTMLHeadingElement>(null);
    const bigRef = useRef<HTMLHeadingElement>(null);
    const smallRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Split text
            const splitDot = new SplitText(dotRef.current!, {type: "chars", mask: "chars", smartWrap: true, charsClass:"gradient-highlight"});



            const splitBig = new SplitText(bigRef.current!, {type: "chars", mask: "chars", smartWrap: true});

            splitBig.chars.forEach((char) => {
                if (char.textContent === "&") {
                    char.classList.add("gradient-highlight");
                }
            });

            const splitSmall = new SplitText(smallRef.current!, {type: "lines", mask: "lines"});
            const splitMid = new SplitText(midRef.current!, {type: "lines", mask: "lines"});

            // Préparation du clip bottom + translation
            gsap.set(splitDot.chars, {
                yPercent: 200,                 // starts below baseline
                opacity: 0,
            });

            gsap.set(splitBig.chars, {
                yPercent: 200,                 // starts below baseline
                opacity: 0.001,
            });

            gsap.set(splitSmall.lines, {
                yPercent: 100,
                opacity: 0.001,
            });

            gsap.set(splitMid.lines, {
                yPercent: 100,
                opacity: 0.001,
            });

            // Timeline reveal
            const tl = gsap.timeline({delay, defaults: {ease: "power3.out"}});


            gsap.to(splitDot.chars,{
                opacity: 1,
                yPercent: 0,
                delay: 0.5,
                duration: 0.7,

            })
            // Gros texte — lettres, stagger
            tl.to(splitBig.chars, {

                yPercent: 0,
                delay: 0.5,
                opacity: 1,
                duration: 1,
                stagger: 0.05,
            });
            tl.to(splitMid.lines, {

                    yPercent: 0,
                    opacity: 1,
                    duration: 0.6,

                },
                "-=0.7"
            );

            // Petit texte — lignes, pas de stagger
            tl.to(splitSmall.lines, {

                    yPercent: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                },
                "-=0.7"
            );

            return () => {
                splitBig.revert();
                splitSmall.revert();
                splitMid.revert();
                splitDot.revert();
            };
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={root} className="animated-hero  flex flex-col justify-center items-center text-center px-[7vw] py-[2vh]">

            {/*cursor-scale={"6"} cursor-ease-enter={"elastic.out(1.2,0.5)"}*/}
            {/*cursor-ease-leave={"elastic.out(1,0.90)"} cursor-dur-enter={0.7} cursor-dur-leave={0.7}*/}



            <h2 className="ah-title"><span ref={dotRef}  id="dot">.</span><span ref={bigRef}>{big}</span></h1>
            <h4 ref={midRef} className="ah-mid">{mid}</h4>
            <p ref={smallRef} className="ah-subtitle">{small}</p>
        </section>
    );
}
