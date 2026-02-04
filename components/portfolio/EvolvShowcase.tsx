"use client";

import LottiePlayer from "@/components/LottiePlayer";

// ✅ imports JSON (recommandé)
import balanceAnim from "@/public/images/portfolio/evolv/balance.json";
import orgaAnim from "@/public/images/portfolio/evolv/orga.json";
import formationAnim from "@/public/images/portfolio/evolv/formation.json";


export default function EvolvShowcase() {
    return (
        <div className="flex flex-col gap-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-white/60">
                    Lottie - Montre la reconaissance et la légitimité de l'e-sport en tant que "vrai" sport à travers les années.
                </p>
                <div className="flex justify-center">
                    <LottiePlayer animationData={balanceAnim} className="w-150 h-120" />
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-white/60">
                    Lottie - Montre la professionnalisation des équipes d’e-sport à travers l’intégration de coachs, d’analystes et de communicants.
                </p>
                <div className="flex justify-center">
                    <LottiePlayer animationData={orgaAnim} className="w-200 h-70" />
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-white/60">
                    Lottie - Met en évidence l’augmentation du nombre de formations spécialisées dans l’e-sport.
                </p>
                <div className="flex justify-center">
                    <LottiePlayer animationData={formationAnim} className="w-200 h-70" />
                </div>
            </div>

        </div>
    );
}
