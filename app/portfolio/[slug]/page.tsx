import {projects} from "@/components/portfolio/projectsData";
import Image from "next/image";
import React from "react";
import ProjectsList from "@/components/portfolio/ProjectPage/ProjectsList";
import ProjectImageParallax from "@/components/portfolio/ProjectPage/ProjectImageParallax";
import Magnetic from "@/components/magnetic";
import UnderlineLink from "@/components/underline-text";
import SlugReveal from "@/components/portfolio/ProjectPage/SlugReveal";
import RiveLabShowcase from "@/components/portfolio/RiveLabShowcase";
import ProjectChanger from "@/components/portfolio/ProjectPage/ProjectChanger";
import EvolvShowcase from "@/components/portfolio/EvolvShowcase";
import CTASlug from "@/components/Scrumble/ScrumbleTestSlug";

import type { Metadata } from "next";
import type { ReactNode } from "react";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const p = projects.find((x) => x.slug === slug);

    if (!p) {
        return { title: "Projet introuvable ● Maxime Znamiec" };
    }

    return {
        title: `${p.title} ● Maxime Znamiec`,
    };
}



function SectionRow({
                        title,
                        subtitle,
                        images,
                        children,
                    }: {
    title: string;
    subtitle: string;
    images?: string[];
    children: ReactNode;
}) {

    return (
        <section className="mt-28">
            <div className="grid grid-cols-1 2xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 2xl:gap-16 items-start">

                {/* colonne gauche */}
                <div className="2xl:sticky  2xl:top-1/2 ">
                    <h2 className="text-5xl 2xl:text-6xl font-semibold leading-none gradient-highlight">
                        {title}
                    </h2>
                    <p className="mt-4 text-base 2xl:text-lg text-white/50">
                        {subtitle}
                    </p>
                </div>

                {/* colonne droite */}
                <div className="min-w-0">
                    {children}

                    {/* images en dessous du contenu */}
                    {images?.length ? (
                        <div className="mt-12 grid grid-cols-1 gap-8">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/10"
                                >
                                    <Image
                                        src={img}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}


export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);
    if (!project) return <div className="px-8 py-20">Projet introuvable.</div>;

    return (
        <div>


            <SlugReveal></SlugReveal>
            {/* FULL-WIDTH HERO */}
            <section
                className="w-full bg-[var(--foreground)] text-[var(--background)] py-24 border-b border-black/10 rounded-b-[3rem] z-50 relative">
                <div
                    className="px-8 md:px-16 lg:px-[14vw] grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-16 lg:gap-24">

                    {/* Titre */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight" id="slug-title">
                            {project.title}
                        </h1>

                        {project.subtitle && (
                            <p className="mt-6 text-2xl md:text-4xl lg:text-5xl text-black/80" id="slug-subtitle">
                                {project.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Infos à droite */}
                    <div className="text-sm md:text-base text-black/70" id="slug-infos">

                        {/* Nom du projet */}
                        <div className="flex justify-between gap-6 border-b-2 border-black/50 py-3">
                            <span className="text-[var(--background)] font-semibold ">Projet</span>
                            <span className="font-semibold text-right text-[var(--background)] ">{project.title}</span>
                        </div>


                        {/* 🔹 WEBSITE (NOUVEAU BLOC) */}
                        {project.website && (
                            <div className="flex justify-between gap-6 border-b-2 border-black/10 py-3">
                                <span>Lien</span>
                                <Magnetic intensityX={0.1} intensityY={0.3}>
                                    <UnderlineLink href={project.website}>
                                        {project.websiteLabel ?? project.website}
                                    </UnderlineLink>
                                </Magnetic>
                            </div>
                        )}


                        {/* Domaine */}
                        <div className="flex justify-between gap-6 border-b-2 border-black/10 py-3">
                            <span>Domaine</span>
                            <span
                                className="text-xs tracking-wide uppercase bg-black/5 px-2 py-1 rounded">{project.category}</span>
                        </div>

                        {/* Services (optionnel) */}
                        {"services" in project && project.services && (
                            <div className="flex justify-between gap-6 border-b-2 border-black/10 py-3">
                                <span>Compétences</span>
                                <div className="flex flex-wrap justify-end gap-2">
                                    {project.services.map((s) => (
                                        <span
                                            key={s}
                                            className="text-xs uppercase tracking-wide bg-black/5 px-2 py-1 rounded">{s}</span>))}
                                </div>
                            </div>)}

                        {/* Year */}
                        {"year" in project && project.year && (
                            <div className="flex justify-between gap-6 py-3">
                                <span>Année</span>
                                <span className="font-medium text-right text-black">{project.year}</span></div>)}
                    </div>
                </div>
            </section>

            <ProjectImageParallax
                src={project.image}
                alt={project.title}
            />

            <main className="px-8 md:px-16 lg:px-[14vw] pb-12  xl:py-24 text-[var(--text)]">

                {/* INTRO */}
                <section
                    className="mt-16 max-w-4xl text-base xl:text-2xl leading-relaxed opacity-90 whitespace-pre-line">
                    <p>{project.description}</p>
                </section>


                {project.cta && (
                    <section className="mt-12">
                        <CTASlug text={project.cta.label} href={project.cta.href}/>
                    </section>
                )}


                {/* DÉMOS RIVE (uniquement pour le projet Rive Lab) */}
                {project.id === "rive-lab" ? (
                    <div className="hidden sm:block">
                        <SectionRow
                            title="Démonstrations"
                            subtitle="Quelques interactions Rive intégrées en conditions réelles (hover, clic, états et transitions)."
                        >
                            <RiveLabShowcase/>
                        </SectionRow>
                    </div>
                ) : null}

                {/* DÉMOS EVOLV (uniquement pour le projet EVOLV) */}
                {project.id === "evolv" ? (
                    <SectionRow
                        title="Démonstrations"
                        subtitle="Séquences de motion design basées sur des illustrations de données."
                    >
                        <EvolvShowcase/>
                    </SectionRow>
                ) : null}


                {/* IMAGES (ex galerie, sans titre) */}
                {project.gallery?.length ? (
                    <section className="mt-24">
                        <div className="grid grid-cols-1 gap-8">

                            {project.gallery.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/10"
                                >
                                    <Image src={img} alt="" fill className="object-cover"/>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : null}

                {/* CE QUE J'AI FAIT */}
                {project.whatIDid?.length ? (
                    <SectionRow
                        title="Mon rôle"
                        subtitle="Ce que j’ai pris en charge et la manière dont j’ai contribué."
                        images={project.roleImages}
                    >
                        <ul className="space-y-4 opacity-90 text-base xl:text-2xl leading-relaxed">
                            {project.whatIDid.map((line, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="mt-[0.6em] w-2 h-2 rounded-full bg-current shrink-0"/>
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </SectionRow>
                ) : null}


                {/* TECH STACK (pills) */}
                {project.tech?.length ? (
                    <SectionRow
                        title="Compétences"
                        subtitle="Compétences et outils utilisés pour concevoir, développer et livrer."
                        images={project.techImages}
                    >
                        <div className="flex flex-wrap" cursor-scale={0.5}>
                            {project.tech.map((t) => (
                                <Magnetic key={t} intensityX={0.3} intensityY={0.4}>
          <span
              className="inline-flex px-4 py-2 mr-3 mb-3 rounded-full text-xl md:text-2xl uppercase tracking-wide bg-[var(--foreground)] text-[var(--background)]">
            {t}
          </span>
                                </Magnetic>
                            ))}
                        </div>
                    </SectionRow>
                ) : null}


                {/* CE QUE CE PROJET M'A APPORTÉ */}
                {project.takeaways ? (
                    <SectionRow
                        title="Retours d’expérience"
                        subtitle="Synthèse et recul personnel sur le projet."
                        images={project.takeawaysImages}
                    >
                        <p className="opacity-90 text-base xl:text-2xl leading-relaxed whitespace-pre-line max-w-3xl">
                            {project.takeaways}
                        </p>
                    </SectionRow>
                ) : null}


            </main>


            <ProjectChanger
                projects={projects.map((p) => ({slug: p.slug}))}
                currentSlug={slug}
                hideOn="#projects-list"
                hideStart="top 85%"
                hideEnd="bottom top"
            />


            <div id="projects-list">
                <ProjectsList/>
            </div>
            <div className="h-20"></div>
        </div>
    );
}
