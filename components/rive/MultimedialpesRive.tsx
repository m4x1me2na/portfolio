"use client";


import {useRive, useViewModelInstanceBoolean} from "@rive-app/react-webgl2";
import {useEffect} from "react";
import gsap from "gsap";


export default function MultimedialpesRive() {
    const {rive, RiveComponent} = useRive({
        src: "/rive/Multimedialpes.riv",
        artboard: 'Artboard',
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



    return (
        <div className="flex items-center">

                <button

                    type="button"
                    className="rive-button"

                    style={{
                        width: 600,       // diamètre du cercle
                        height: 600,
                        border: "none",
                        padding: "0",
                        background: "transparent",
                        cursor,


                    }}
                >

                    <RiveComponent style={{width: "100%", height: "100%"}}/>

                </button>

        </div>
    )
        ;
}
