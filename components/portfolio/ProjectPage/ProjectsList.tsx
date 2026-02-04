"use client";

import { projects } from "@/components/portfolio/projectsData";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ProjectsList() {
    const pathname = usePathname();
    const currentSlug = pathname.split("/").pop();

    return (
        <div className="relative mix-blend-difference z-10 text-white w-full">
            <ul className="list-none border-b border-white/20">
                {projects.map((project, index) => {
                    const isCurrent = project.slug === currentSlug;

                    const rowClasses = `
            items-center
            text-[4vw]
            p-5
            transition-opacity duration-200
            grid grid-cols-1 md:grid-cols-[2.5fr_1.5fr]
            px-8 md:px-16 lg:px-[14vw]
            ${isCurrent ? "opacity-40 cursor-default" : "cursor-pointer hover:opacity-50"}
          `;

                    const content = (
                        <>
                            {/* Titre + catégorie */}
                            <div className="flex items-center gap-10 justify-center md:justify-start">
                <span className="text-4xl opacity-50 mr-5">
                  {String(index + 1).padStart(2, "0")}
                </span>

                                <div className="flex items-center gap-3">
                                    <p className="leading-none">{project.title}</p>

                                    {isCurrent ? (
                                        <span
                                            className="
                        text-xs md:text-sm
                        uppercase tracking-wider font-semibold
                        px-3 py-1 rounded-full
                        border border-white/30
                        bg-white/10
                        whitespace-nowrap
                      "
                                        >
                      Actuel
                    </span>
                                    ) : null}
                                </div>
                            </div>

                            <span
                                className="
                  w-fit
                  text-[2vw] uppercase font-medium tracking-wider
                  px-3 py-1 rounded-full
                  bg-[var(--foreground)] text-[var(--background)]
                  whitespace-nowrap
                  hidden md:block
                  ml-50
                "
                            >
                {project.category}
              </span>
                        </>
                    );

                    // ✅ si c'est le projet actuel : pas de Link (donc pas cliquable)
                    if (isCurrent) {
                        return (
                            <li key={project.slug} className="border-t border-white/20">
                                <div className={rowClasses} aria-current="page">
                                    {content}
                                </div>
                            </li>
                        );
                    }

                    // sinon : normal, avec preview cursor
                    return (
                        <li key={project.slug} className="border-t border-white/20">
                            <Link
                                href={`/portfolio/${project.slug}`}
                                data-cursor-image={project.image}
                                className={rowClasses}
                            >
                                {content}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
