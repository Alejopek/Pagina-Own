import { SectionHead } from "../ui/SectionHead";
import { ProjectCard } from "../ui/ProjectCard";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-[clamp(80px,12vw,140px)] relative select-text">
      <div className="w-full max-w-[1100px] mx-auto px-[clamp(20px,5vw,60px)]">
        <AnimateOnScroll variant="fade-up" delay={0}>
          <SectionHead title="Projects" id="projects-title" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => {
            const delay = index * 100;
            return (
              <AnimateOnScroll
                key={project.id}
                variant="zoom-in"
                delay={delay}
                className="flex"
              >
                <ProjectCard project={project} className="w-full" />
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
