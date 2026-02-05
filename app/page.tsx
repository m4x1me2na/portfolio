import CerclePointille from "@/components/CerclePointille";
import RevealHero from "@/components/revealhero/revealhero";
import Skew from "@/components/skew";
import "@/styles/accueil.scss";
import {CercleMotion} from "@/components/accueil/CercleMotion/CercleMotion";
import ScrollText from "@/components/accueil/ScrollText";
import BoutonRiveDecouvrir from "@/components/rive/BoutonRiveDecouvrir";
import type {Metadata} from "next";
import DecouvrirButtonResponsive from "@/components/DecouvrirButtonResponsive";


export const metadata: Metadata = {
    title: "Maxime Znamiec ● Développeur/Designer",
};


export default function PagePortfolio() {


    return (

        <>

            <div>
               


                <RevealHero big={"Designer & développeur"}
                            small={<>Je conçois des <span className="text-highlight">expériences </span> numériques, alliant <span
                                className="text-highlight">design</span>, <span
                                className="text-highlight">graphisme</span> et <span className="text-highlight">développement web</span>.
                                J’aime transformer des idées en <span className="text-highlight">projets concrets</span>,
                                en créant des interfaces soignées, cohérentes et pensées pour l’utilisateur.</>}
                            mid={<>Je suis <span className="gradient-highlight">Maxime.</span></>}
                ></RevealHero>


                <div className="cercle-accueil">
                    <ScrollText></ScrollText>

                    <div className="cercle-accueil__cercles ">
                        <CerclePointille
                            size={"var(--cercle-size)"}
                            spinning
                            rotationDuration={60}
                            dash={[6, 10]}
                            strokeWidth={2}
                            color="#919191"
                            className="cercle-accueil__svg cercle-accueil__outer "
                        />

                        <CerclePointille
                            size={`calc(var(--cercle-size) * var(--cercle-inner-scale))`}
                            spinning
                            rotationDuration={40}
                            rotationDirection={1}
                            dash={[6, 10]}
                            strokeWidth={2}
                            color="#919191"
                            className="cercle-accueil__svg cercle-accueil__inner"
                        />
                    </div>
                </div>


                <div className="2xl:py-[15vh]"></div>

                <div id="scroll-anchor" className="bg-neutral-900 py-40 rounded-[3rem]">
                    <Skew></Skew>
                </div>









                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-14 xl:gap-20 px-6 sm:px-8 md:px-16 xl:px-[14vw] py-12 md:py-20 items-center">
                    <div className="order-2 xl:order-1 flex justify-center xl:justify-start">
                        <DecouvrirButtonResponsive href="/portfolio" />

                    </div>

                    <div className="order-1 xl:order-2 text-center xl:text-left space-y-6">
                        <h2 className="gradient-highlight font-bold leading-tight text-4xl sm:text-5xl lg:text-7xl xl:text-8xl">
                            Mon portfolio
                        </h2>

                        <p className="text-base sm:text-lg lg:text-1xl xl:text-2xl 2xl:text-3xl font-normal leading-relaxed">
                            Découvrez mon portfolio : un ensemble de mes projets mêlant design, graphisme, audiovisuel et développement web.
                        </p>

                        <p className="text-base sm:text-lg lg:text-1xl xl:text-2xl 2xl:text-3xl font-normal leading-relaxed">
                            Une vision globale de mon univers créatif et de ce que j’aime construire.
                        </p>
                    </div>
                </div>

                <CercleMotion/>



            </div>
        </>
    );
}
