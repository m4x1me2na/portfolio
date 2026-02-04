"use client";

import "@/styles/header.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ScrumbleTest from "@/components/Scrumble/ScrumbleTest";
import ScrumbleTestButton from "@/components/Scrumble/ScrumbleTestButton";

export default function Header() {
    const pathname = usePathname();

    // Détecte les pages /portfolio/[slug]
    const isProjectPage =
        pathname.startsWith("/portfolio/") && pathname !== "/portfolio";

    return (
        <>
        <div className={`logoMobile ${isProjectPage ? "header--project" : ""} px-[8vw] pt-[4vh]`}>
            <Link href={"/"} >
                <h1 className="gradient-highlight">max.</h1>
            </Link>
        </div>
    <header  className={`header ${isProjectPage ? "header--project" : ""} pt-[4vh] px-[4vh]`}>
        <div>
            <Link href={"/"} cursor-scale={0.5}>

                <h1 className="gradient-highlight">max.</h1>
            </Link>

        </div>


        <nav>
            <ScrumbleTest text={"ACCUEIL"} href={"/"} isProjectPage></ScrumbleTest>

            <ScrumbleTest text={"PORTFOLIO"} href={"/portfolio"} isProjectPage></ScrumbleTest>

            <ScrumbleTestButton text={"CONTACT" } href={"/contact"} isProjectPage></ScrumbleTestButton>


        </nav>
    </header>
        </>
    );
}