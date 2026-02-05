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

   

    icons: {
        icon: "/favicon.ico"
    },
    description:
    "Maxime Znamiec. Portfolio de développement web et UX/UI. Projets front-end, interfaces web et design d’expérience utilisateur.",
    authors: [{ name: "Maxime Znamiec" }],
  creator: "Maxime Znamiec",
  keywords: [
    "Maxime Znamiec",
    "Znamiec",
    "portfolio Maxime Znamiec",
    "développement web",
    "UX UI",
    "front-end",
    "portfolio web",
  ],
  metadataBase: new URL("https://maxime-znamiec.fr"), 
  openGraph: {
    title: "Maxime Znamiec — Développement web & UX/UI",
    description:
      "Portfolio de Maxime Znamiec. Projets en développement web et UX/UI.",
    url: "https://maxime-znamiec.fr",
    siteName: "Portfolio Maxime Znamiec",
    locale: "fr_FR",
    type: "website",
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
