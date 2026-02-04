"use client";

import Lottie from "lottie-react";
import { useMemo } from "react";

type Props = {
    animationData: object;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
    speed?: number; // lottie-react gère speed via props "speed" (selon version) -> sinon on gère via ref
};

export default function LottiePlayer({
                                         animationData,
                                         className,
                                         loop = true,
                                         autoplay = true,
                                     }: Props) {
    // petit hack: évite de recréer l’objet si tu le passes direct
    const data = useMemo(() => animationData, [animationData]);

    return (
        <Lottie
            animationData={data}
            loop={loop}
            autoplay={autoplay}
            className={className}
        />
    );
}
