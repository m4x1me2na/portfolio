


import RevealHeroTest from "@/components/revealhero/revealHeroTest";
import ContenuPortfolio from "@/components/portfolio/ContenuPortfolio";
import PortfolioReveal from "@/components/portfolio/PortfolioReveal";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Portfolio ● Maxime Znamiec",
};



export default function PageProjet() {


    return (


        <div>
            <PortfolioReveal/>


            <RevealHeroTest
                big={"Mes projets"}
                mid={""}
                small={
                    <>
                        Retrouvez ici les <span className={"text-highlight"}>projets</span> sur lesquels j’ai <span
                        className={"text-highlight"}>travaillé</span> ces dernières années.
                    </>
                }
            />


            <div className="projectssection min-h-[120vh]">
            <ContenuPortfolio/>
            </div>
        </div>

    );
}