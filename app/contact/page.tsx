import ColDroite from "@/components/contact/ColDroite";
import Magnetic from "@/components/magnetic";
import ContactReveal from "@/components/contact/ContactReveal";
import FormButton from "@/components/contact/FormButton";
import UnderlineLink from "@/components/underline-text";
import RevealHeroContact from "@/components/revealhero/revealheroContact";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact ● Maxime Znamiec",
};


export default function PageContact() {
    return (
        <div>
            <ContactReveal/>
            <RevealHeroContact
                big={"Contactez-moi"}
                mid={""}
                small={
                    <>
                        <span className="text-highlight">Disponible</span> pour échanger sur vos{" "}
                        <span className="text-highlight">projets</span>, collaborations ou opportunités. Je vous
                        répondrai avec plaisir afin de discuter de vos besoins ou de votre{" "}
                        <span className="text-highlight">idée</span>.
                    </>
                }
            />

            <div className="px-8 md:px-16 lg:px-[14vw] md:py-20 main-contact">
                {/* BLOC GLOBAL AVEC ESPACEMENT VERTICAL */}
                <div className="flex flex-col gap-4">

                    {/* GRID DU HAUT : FORM + COL DROITE */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
                        {/* COLONNE GAUCHE : FORMULAIRE */}
                        <form className="max-w-3xl w-full border-white/10 divide-y divide-white/10" id="contact-form">
                            {/* 01 - Prénom */}
                            <div className="py-12 flex gap-8 md:gap-12">
                                <span className="text-sm md:text-base tracking-[0.3em] uppercase opacity-50 mt-1.5">
                                    01
                                </span>

                                <div className="flex-1">
                                    <label className="block text-xl md:text-2xl mb-5 font-raleway">
                                        Qui êtes vous ? *
                                    </label>

                                    <input
                                        cursor-scale={0.5}
                                        type="text"
                                        name="Nom"
                                        required
                                        className="
                                            w-full bg-transparent outline-none border-none text-white
                                            text-2xl md:text-3xl
                                            font-raleway
                                            placeholder:font-raleway placeholder:opacity-40
                                        "
                                        placeholder="Votre nom et prénom *"
                                    />
                                </div>
                            </div>

                            {/* 02 - Email */}
                            <div className="py-12 flex gap-8 md:gap-12">
                                <span className="text-sm md:text-base tracking-[0.3em] uppercase opacity-50 mt-1.5">
                                    02
                                </span>

                                <div className="flex-1">
                                    <label className="block text-xl md:text-2xl mb-5 font-raleway">
                                        Quelle est votre adresse e-mail ? *
                                    </label>

                                    <input
                                        type="email"
                                        name="Email"
                                        cursor-scale={0.5}
                                        required
                                        className="
                                            w-full bg-transparent outline-none border-none text-white
                                            text-2xl md:text-3xl
                                            font-raleway
                                            placeholder:font-raleway placeholder:opacity-40
                                        "
                                        placeholder="votrenom@mail.com"
                                    />
                                </div>
                            </div>

                            {/* 03 - Organisation */}
                            <div className="py-12 flex gap-8 md:gap-12">
                                <span className="text-sm md:text-base tracking-[0.3em] uppercase opacity-50 mt-1.5">
                                    03
                                </span>

                                <div className="flex-1">
                                    <label className="block text-xl md:text-2xl mb-5 font-raleway">
                                        Quel est le nom de votre organisation ?
                                    </label>

                                    <input
                                        type="text"
                                        name="Organisation"
                                        cursor-scale={0.5}
                                        className="
                                            w-full bg-transparent outline-none border-none text-white
                                            text-2xl md:text-3xl
                                            font-raleway
                                            placeholder:font-raleway placeholder:opacity-40
                                        "
                                        placeholder="Entreprise, association…"
                                    />
                                </div>
                            </div>

                            {/* 04 - Services */}
                            <div className="py-12 flex gap-8 md:gap-12">
                                <span className="text-sm md:text-base tracking-[0.3em] uppercase opacity-50 mt-1.5">
                                    04
                                </span>

                                <div className="flex-1">
                                    <label className="block text-xl md:text-2xl mb-5 font-raleway">
                                        Quels services recherchez-vous ?
                                    </label>

                                    <input
                                        type="text"
                                        cursor-scale={0.5}
                                        name="Services"
                                        className="
                                            w-full bg-transparent outline-none border-none text-white
                                            text-2xl md:text-3xl
                                            font-raleway
                                            placeholder:font-raleway placeholder:opacity-40
                                        "
                                        placeholder="Site web, refonte, design…"
                                    />
                                </div>
                            </div>

                            {/* 05 - Message */}
                            <div className="py-12 flex gap-8 md:gap-12 ">
                                <span className="text-sm md:text-base tracking-[0.3em] uppercase opacity-50 mt-1.5">
                                    05
                                </span>

                                <div className="flex-1 ">
                                    <label className="block text-xl md:text-2xl mb-5 font-raleway">
                                        Votre message *
                                    </label>

                                    <textarea
                                        rows={2}
                                        cursor-scale={0.5}
                                        name="Message"
                                        required
                                        className="
                                            w-full bg-transparent outline-none border-none text-white
                                            text-2xl md:text-3xl resize-none
                                            font-raleway
                                            placeholder:font-raleway placeholder:opacity-40
                                        "
                                        placeholder="Parlez-moi de votre projet, de vos besoins, de vos objectifs…"
                                    />
                                </div>
                            </div>

                            {/* 05 - RGPD */}
                            <div className="py-12 flex gap-8 md:gap-12 items-start ">

                                <label className="group flex gap-8 md:gap-12 cursor-pointer select-none items-center"
                                       cursor-scale={0.5}>

                                    <input
                                        type="checkbox"
                                        name="Consentement_RGPD"
                                        required
                                        className="peer sr-only"
                                    />

                                    {/* Rond FIXÉ */}
                                    <span
                                        aria-hidden="true"
                                        className="
        mt-1 h-5 w-5 shrink-0 rounded-full
        border border-white/30
        flex items-center justify-center
        transition-all duration-200
        group-hover:border-white/60
        peer-checked:border-white peer-checked:bg-white/90
        peer-focus-visible:ring-2 peer-focus-visible:ring-white/30
      "
                                    >
      <span
          className="
          h-2.5 w-2.5 rounded-full bg-black
          scale-0 transition-transform duration-200 ease-out
          peer-checked:scale-100
        "
      />
    </span>

                                    <p className="leading-relaxed text-white/80 text-xl md:text-2xl font-raleway">
                                        J’accepte que mes données soient utilisées afin d’être recontacté
                                        dans le cadre de ma demande. *
                                    </p>

                                </label>
                            </div>


                        </form>

                        {/* COLONNE DROITE (haut) */}
                        <ColDroite/>
                    </div>


                    {/* GRID DU BAS : BOUTON RIVE + INFOS / RÉSEAUX */}
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Colonne gauche : bouton Rive */}
                        <div className="flex justify-center md:justify-start">
                            <FormButton/>
                        </div>

                        {/* Colonne droite : infos + réseaux */}
                        <div
                            className="
    mt-4 md:mt-0
    grid grid-cols-2
    gap-20 md:gap-30
    text-white/80 font-raleway
    pb-10 md:pb-0

  "
                        >
                            {/* Contact Details */}
                            <div className="flex flex-col gap-3 items-center md:items-start">
                                <h3 className="uppercase text-xs tracking-[0.25em] text-white/40">
                                    Contact
                                </h3>
                                <Magnetic stiffness={300} damping={50} mass={2} intensityX={0.2} intensityY={0.5}><p
                                    cursor-scale={0.5}
                                    className="text-md xl:text-lg 2xl:text-xl"><UnderlineLink
                                    href={"mailto:max.znamiec26@gmail.com"}>
                                    max.znamiec26@gmail.com
                                </UnderlineLink>
                                </p></Magnetic>
                                <Magnetic stiffness={300} damping={50} mass={2} intensityX={0.2} intensityY={0.5}><p
                                    cursor-scale={0.5}
                                    className="text-md xl:text-lg 2xl:text-xl"><UnderlineLink href={"tel:+33787594499"}>
                                    +33 7 87 59 44 99
                                </UnderlineLink>
                                </p></Magnetic>
                            </div>

                            {/* Socials */}
                            <div className="flex flex-col gap-3 items-center md:items-start">
                                <h3 className="uppercase text-xs tracking-[0.25em] text-white/40">
                                    Profil
                                </h3>


                                    <Magnetic stiffness={400} damping={50} mass={1.5} intensityX={0.4} intensityY={0.5}><p
                                        cursor-scale={0.5}
                                        className="text-md xl:text-lg 2xl:text-xl"><UnderlineLink href={"https://www.linkedin.com/in/maxime-znamiec-39bb382a4/"}>
                                        LinkedIn
                                    </UnderlineLink></p>
                                    </Magnetic>


                                    <Magnetic stiffness={400} damping={50} mass={1.5} intensityX={0.4} intensityY={0.5}><p
                                        cursor-scale={0.5}

                                        className="text-md xl:text-lg 2xl:text-xl"><UnderlineLink href={"/fichiers/CV_Maxime_Znamiec.pdf"}>
                                        CV
                                    </UnderlineLink></p>
                                    </Magnetic>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
        ;
}
