"use client";

import {useEffect} from "react";
import {useRive, useViewModelInstanceBoolean} from "@rive-app/react-webgl2";
import gsap from "gsap";
import Link from "next/link";

export default function BoutonRiveDecouvrirDemo() {
    const {rive, RiveComponent} = useRive({
        src: "/rive/RiveBoutonDecouvrir.riv",
        artboard: 'Light',
        stateMachines: "State Machine 1",
        autoplay: true,
        autoBind: true,
    });

    const viewModelInstance = rive?.viewModelInstance;

    // On lit la propriété bool "Hover cercle" du ViewModel
    const {value: isHover} = useViewModelInstanceBoolean(
        "Hover button",     // chemin/propriété dans le ViewModel
        viewModelInstance   // instance liée
    );

    const cursor = isHover ? "pointer" : "default";

    useEffect(() => {
        const cursorEl = document.getElementById("cursor");
        if (!cursorEl) return;

        gsap.to(cursorEl, {
            scale: isHover ? 0.5 : 1,      // scale dynamique
            duration: 0.3,
            ease: "power2.out",
        });
    }, [isHover]);

    useEffect(() => {
        document.querySelectorAll("a, button").forEach(el => {
            el.addEventListener("dragstart", e => e.preventDefault());
        });
    }, []);




    return (
        <div className="flex items-center">
            <div
                className="rive-button inline-flex active:scale-[0.90]
                transition-all duration-600 ease-[cubic-bezier(0.22,1.61,0.36,1)]"
                style={{ width: 600, height: 600, cursor: isHover ? "pointer" : "default" }}


            >
                <RiveComponent style={{ width: "100%", height: "100%" }} />
            </div>

        </div>
    )
        ;
}
