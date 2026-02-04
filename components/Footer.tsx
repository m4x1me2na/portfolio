import React from "react";
import Magnetic from "@/components/magnetic";
import LocalTime from "@/components/time";
import "@/styles/footer.scss";

export default function Footer() {

    return (
        <footer
            className="
                rounded-t-[3rem]
                bg-white text-[#111]
                shadow-[inset_0px_20px_20px_rgba(0,0,0,0.18)]
                py-[clamp(32px,6vw,80px)]
                px-[clamp(20px,5vw,60px)]
            "
        >
            {/* TOP */}
            <div
                className="
                    grid items-center
                    gap-[clamp(20px,4vw,60px)]
                    grid-cols-1
                    min-[900px]:grid-cols-2

                "
            >
                {/* INTRO */}
                <div className="flex items-center gap-[clamp(12px,2vw,24px)] justify-center">
                    <div
                        aria-hidden
                        className="
                            w-[clamp(56px,7vw,80px)]
                            aspect-square rounded-full
                             [background:var(--gradientlight)]

                        "
                    />
                    <h1
                        className="
                            m-0
                            leading-[0.95]
                            font-bold
                            text-[clamp(42px,8vw,150px)]
                            xl:text-[clamp(42px,8.7vw,150px)]
                        "
                    >
                        Travaillons
                        <br/>
                        ensemble
                    </h1>
                </div>

                {/* COLONNE CONTACT */}
                <div
                    className="
                        flex flex-col
                        justify-evenly
                        h-full
                    "
                >
                    {/* LINE + CTA */}
                    <div className="relative flex items-center">
                        <a
                            href="/contact"
                            className="
        flex items-center justify-center
        w-full
        h-[clamp(20px,10rem,150px)]
        rounded-[2rem]
        [background-image:var(--gradientlight)]

        px-[clamp(24px,4vw,40px)]
        no-underline
        cursor-pointer
        line
    "
                            cursor-scale={0.5}
                        >
    <span
        className="
            font-black
            text-[clamp(16px,2vw,28px)]
            text-[var(--background)]
        "
    >
        Parlez-moi de votre projet
    </span>
                        </a>
                    </div>

                    {/* CONTACT PILLS */}
                    <div
                        className="
                            mt-[clamp(24px,4vw,40px)]
                            flex

                           justify-between

                            text-center
                            flex-wrap
                            gap-10
                        "
                    >

                        <Magnetic intensityX={0.15} intensityY={0.3}>
                            <a
                                className="
                                px-5 py-3
                                rounded-full
                                border border-black/20
                                no-underline
                                w-full sm:w-auto
                                text-inherit
                                transition-colors
                                duration=300
                                ease-in-out
                                hover:border-[var(--background)]
                                text-[clamp(0.5rem,1.3rem,2rem)]
                            "
                                cursor-scale={0.5}
                                href="mailto:max.znamiec26@gmail.com"
                            >

                                <span className="xl:hidden">Email</span>
                                <span className="hidden xl:inline">max.znamiec26@gmail.com</span>
                            </a>
                        </Magnetic>
                        <Magnetic intensityX={0.3} intensityY={0.3}>
                            <a
                                className="
                                px-5 py-3
                                rounded-full
                                border border-black/20
                                no-underline
                                w-full sm:w-auto
                                text-inherit
                                transition-colors
                                duration=300
                                ease-in-out
                                hover:border-[var(--background)]
                                text-[clamp(0.5rem,1.3rem,2rem)]
                            "
                                target="_blank"
                                rel="noreferrer"
                                cursor-scale={0.5}
                                href="https://www.linkedin.com/in/maxime-znamiec-39bb382a4/"
                            >

                                LinkedIn
                            </a>
                        </Magnetic>
                        <Magnetic intensityX={0.3} intensityY={0.3}>
                            <a
                                className="
                                px-5 py-3
                                rounded-full
                                border border-black/20
                                no-underline
                                w-full sm:w-auto
                                text-inherit
                                transition-colors
                                duration=300
                                ease-in-out
                                hover:border-[var(--background)]
                                text-[clamp(0.5rem,1.3rem,2rem)]
                            "
                                cursor-scale={0.5}
                                target="_blank"
                                rel="noreferrer"
                                href="/fichiers/CV_Maxime_Znamiec.pdf"
                            >

                                CV
                            </a>
                        </Magnetic>
                        <Magnetic intensityX={0.15} intensityY={0.3}>

                            <a
                                className="
                                px-5 py-3
                                rounded-full
                                border border-black/20
                                no-underline
                                w-full sm:w-auto
                                text-inherit
                                transition-colors
                                duration=300
                                ease-in-out
                                hover:border-[var(--background)]
                                text-[clamp(0.5rem,1.3rem,2rem)]
                            "
                                cursor-scale={0.5}
                                href="tel:+33787594499"
                            >
                                <span className="xl:hidden">Téléphone</span>
                                <span className="hidden xl:inline">
                                    +33 7 87 59 44 99
                                </span>
                            </a>
                        </Magnetic>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div
                className="
                    mt-[clamp(32px,5vw,60px)]
                    flex flex-wrap
                    justify-between
                    gap-8

                    max-[900px]:gap-6
                "
            >

                <div>
                    <div className="uppercase text-[12px] opacity-60">
                        Version
                    </div>

                    <div className="text-[14px]">2026 © Edition</div>

                </div>
                <div>
                    <div className="uppercase text-[12px] opacity-60">
                        Heure
                    </div>

                    <div className="text-[14px]"><LocalTime></LocalTime></div>

                </div>

                <div>
                    <div className="uppercase text-[12px] opacity-60">
                        Basé à
                    </div>

                    <div className="text-[14px]">Grenoble, France</div>

                </div>

                <div>
                    <div className="uppercase text-[12px] opacity-60">
                        Status
                    </div>

                    <div className="text-[14px]">Recherche de stage</div>

                </div>


                <div>

                    <div className="uppercase text-[12px] opacity-60">
                        Etudes
                    </div>

                    <div className="text-[14px]">BUT MMI - 2e année</div>

                </div>

            </div>
        </footer>
    );
}
