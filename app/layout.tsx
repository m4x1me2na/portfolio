import type {Metadata} from "next";
import "@/styles/global.scss";
import {Raleway} from "next/font/google";
import Cursor from "@/components/cursor";
import Smoother from "@/app/smoother";
import RouteCurve from "@/components/RouteCurve";
import Footer from "@/components/Footer";
import Home from "@/components/menu/menu";
import Header from "@/components/header";


const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-raleway", // optionnel si tu veux l’utiliser comme variable CSS
});


export const metadata: Metadata = {

    description: "Site perso WIP",

    icons: {
        icon: "/favicon.ico"

    },

};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (

        <html lang="fr" className={raleway.variable} suppressHydrationWarning>

        <body>


        <Smoother>
            <main className="relative isolate">

                <div>
                    <Header></Header>
                    <Home></Home>
                    <RouteCurve waveColor="#DEDEDE"/>

                    {children}
                    <Footer/>
                </div>


            </main>
        </Smoother>
        <Cursor/>
        </body>
        </html>

    );
}
