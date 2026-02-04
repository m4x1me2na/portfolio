import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        optimizeCss: false, // contourne l’analyse stricte de LightningCSS
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

