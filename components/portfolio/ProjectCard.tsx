// src/components/portfolio/ProjectCard.tsx
import type {Project} from "@/components/portfolio/projectsData";
import Link from "next/link";
import ProjectMedia from "@/components/portfolio/ProjectMedia";

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({project}: ProjectCardProps) {

    return (

        <article
            className="flex flex-col  max-w-[460px] w-full overflow-hidden  py-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1.61,0.36,1)] hover:scale-103 active:scale-98 projectCard">
            <Link href={`/portfolio/${project.slug}`} data-cursor-text="Voir le projet →">
                <div className="relative w-full h-[400px] md:h-[550px] rounded-xl overflow-hidden cursor-pointer">
                    {/* Badge category */}
                    <span
                        className="absolute top-3 left-3 text-md z-10 px-3 py-1  uppercase font-medium rounded-full bg-[var(--foreground)] backdrop-blur border border-black/5 pointer-events-none">
  <span className="text-[var(--background)]">
    {project.category}
  </span>
</span>

                    <ProjectMedia
                        image={project.image}
                        title={project.title}
                        previewVideo={project.previewVideo}
                    />
                </div>
            </Link>


            <span className="text-xl font-medium  py-5">
                    <span className="gradient-highlight font-bold">{project.title}</span> - {project.subtitle}
                </span>


        </article>
    );
}
