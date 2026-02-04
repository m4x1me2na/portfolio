"use client";

import { useEffect } from "react";
import { useRive, useViewModelInstanceBoolean } from "@rive-app/react-webgl2";
import gsap from "gsap";

type Props = {
    onClick?: () => void;
    formId: string;
    locked?: boolean;
};

export default function BoutonRiveEnvoyer({ onClick, formId, locked }: Props) {
    const { rive, RiveComponent } = useRive({
        src: "/rive/RiveBoutonEnvoyer.riv",
        artboard: "BoutonEnvoyer",
        stateMachines: "BoutonAnim",
        autoplay: true,
        autoBind: true,
    });

    const viewModelInstance = rive?.viewModelInstance;
    const { value: isHover } = useViewModelInstanceBoolean("Hover button", viewModelInstance);

    const cursor = locked ? "not-allowed" : isHover ? "pointer" : "default";

    useEffect(() => {
        const cursorEl = document.getElementById("cursor");
        if (!cursorEl) return;

        gsap.to(cursorEl, {
            scale: isHover && !locked ? 0.5 : 1,
            duration: 0.3,
            ease: "power2.out",
        });
    }, [isHover, locked]);

    const getForm = () => document.getElementById(formId) as HTMLFormElement | null;

    const handlePointerDownCapture = (e: React.PointerEvent<HTMLButtonElement>) => {
        if (locked) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        const form = getForm();
        if (!form) return;

        if (!form.checkValidity()) {
            form.reportValidity();
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const handleClick = () => {
        if (locked) return;
        onClick?.();
    };

    return (
        <div className="flex items-center justify-center">
            <button
                type="button"
                onPointerDownCapture={handlePointerDownCapture}
                onClickCapture={(e) => {
                    if (locked) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }}
                onClick={handleClick}
                className="
          rive-button
          w-[450px] h-[170px]
          md:w-[350px] md:h-[150px]
          lg:w-[400px] lg:h-[160px]
          xl:w-[500px] xl:h-[180px]
          2xl:w-[600px] 2xl:h-[200px]
          border-none p-0 bg-transparent
        "
                style={{ cursor }}
                aria-disabled={locked ? true : undefined}
            >
                <RiveComponent className="w-full h-full" />
            </button>
        </div>
    );
}
