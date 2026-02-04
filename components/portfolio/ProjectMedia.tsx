"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
    image: string;
    title: string;
    previewVideo?: string;
};

export default function ProjectMedia({ image, title, previewVideo }: Props) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [hovered, setHovered] = useState(false);

    const hasVideo = Boolean(previewVideo);

    return (
        <div
            className="relative w-full h-full"
            onMouseEnter={() => {
                if (!hasVideo) return;
                setHovered(true);
                videoRef.current?.play().catch(() => {});
            }}
            onMouseLeave={() => {
                if (!hasVideo) return;
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
                setHovered(false);
            }}
        >
            {/* IMAGE */}
            <Image
                loading="eager"
                src={image}
                alt={title}
                fill
                className={`object-cover transition-opacity duration-700 ${
                    hovered ? "opacity-0" : "opacity-100"
                }`}
            />

            {/* VIDEO */}
            {hasVideo && (
                <video
                    ref={videoRef}
                    src={previewVideo}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        hovered ? "opacity-100" : "opacity-0"
                    }`}
                />
            )}
        </div>
    );
}
