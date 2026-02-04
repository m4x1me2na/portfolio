"use client";

// importe tes autres boutons rive ici :
import BoutonRiveEnvoyer from "@/components/rive/BoutonRiveEnvoyer";
import BoutonRiveTheme from "@/components/rive/BoutonRiveTheme";
import MultimedialpesRive from "@/components/rive/MultimedialpesRive";
import BoutonRiveMax from "@/components/rive/BoutonRiveMax";
import BoutonRiveDecouvrirDemo from "@/components/rive/BoutonRiveDecouvrirDemo";
// import BoutonRiveX from "...";

export default function RiveLabShowcase() {
    return (
        <div className="flex flex-col gap-10">
            {/* Tu peux mettre chaque démo dans une “card” pour que ce soit clean */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-white/60">
                    Bouton “Découvrir” — suivi de la souris au survol et animation du fond du bouton.
                </p>
                <div className="flex justify-center">
                    <BoutonRiveDecouvrirDemo />
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-white/60">
                    Bouton “Envoyer” — animations avec états et transitions.
                </p>
                <div className="flex justify-center">
                    <BoutonRiveEnvoyer formId="contact-form" />
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-white/60">
                    Bouton “Thème” — animation changement de thème au clic.
                </p>
                <div className="flex justify-center">
                    <BoutonRiveTheme />
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-white/60">
                    Bouton “Multimedialpes” — animation motion design au clic.
                </p>
                <div className="flex justify-center">
                    <MultimedialpesRive />
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-white/60">
                    Bouton “max.” — animation motion design au hover.
                </p>
                <div className="flex justify-center">
                    <BoutonRiveMax />
                </div>
            </div>

            {/* Ajoute les suivants pareil */}
        </div>
    );
}
