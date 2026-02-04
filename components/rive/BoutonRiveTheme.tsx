"use client";

import { useEffect } from "react";
import { useRive, useViewModelInstanceBoolean } from "@rive-app/react-webgl2";
import gsap from "gsap";

export default function BoutonRiveTheme() {
    const { rive, RiveComponent } = useRive({
        src: "/rive/BoutonRiveTheme.riv",
        artboard: "Artboard",
        stateMachines: "State Machine 1",
        autoplay: true,
        autoBind: true,
    });

    const viewModelInstance = rive?.viewModelInstance;

    const { value: isHover } = useViewModelInstanceBoolean(
        "Hover button",
        viewModelInstance
    );

    const cursor = isHover ? "pointer" : "default";

    useEffect(() => {
        const cursorEl = document.getElementById("cursor");
        if (!cursorEl) return;

        gsap.to(cursorEl, {
            scale: isHover ? 0.5 : 1,
            duration: 0.3,
            ease: "power2.out",
        });
    }, [isHover]);

    return (
        <div className="flex items-center justify-center">

            <div
                style={{

                    width: 500,
                    height: 500,
                    border: "none",
                    padding: "0",
                    background: "transparent",
                    cursor,

                }}

            >
                <RiveComponent style={{ width: "100%", height: "100%" }} />
            </div>

        </div>
    );
}
