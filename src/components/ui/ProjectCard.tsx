import type { Project } from "../../data/projects";
import { Tag } from "./Tag";
import { cn } from "../../lib/cn";
import BorderGlow from "./BorderGlow";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { title, desc, stack, image, links } = project;

  return (
    <BorderGlow
      className={cn(
        "h-full w-full transition-transform duration-250 hover:-translate-y-1",
        className
      )}
      backgroundColor="#0c0c10"
      borderRadius={8}
      edgeSensitivity={24}
      glowColor="198 93 60"
      glowRadius={32}
      glowIntensity={0.85}
      coneSpread={22}
      colors={["#38bdf8", "#818cf8", "#4ade80"]}
      fillOpacity={0.22}
    >
      <article
        className="bg-bg-card rounded-lg overflow-hidden flex flex-direction-column flex-col relative h-full"
      >
        {/* Thumbnail area */}
        <div className="w-full aspect-video bg-bg-card-2 relative overflow-hidden border-b border-border select-none" aria-hidden="true">
          {/* Background gradient & lines */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.05)_0%,transparent_50%)] after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.015)_20px,rgba(255,255,255,0.015)_21px)] pointer-events-none" />
          <span className="absolute inset-0 flex items-center justify-content-center justify-center font-mono text-[11px] tracking-wider text-text-dim">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </span>
        </div>

        {/* Card Content body */}
        <div className="p-6 flex flex-col flex-1 gap-3">
          <h3 className="font-display text-[17px] font-bold text-text">
            {title}
          </h3>
          <p className="text-xs text-text-mid leading-[1.75] flex-1">
            {desc}
          </p>

          {/* Stack tags */}
          <ul className="flex flex-wrap gap-1.5 pt-1 border-t border-border mt-1">
            {stack.map((item, idx) => (
              <li key={idx}>
                <Tag size="sm">{item}</Tag>
              </li>
            ))}
          </ul>

          {/* Action Links */}
          <div className="flex gap-2.5 pt-1">
            {links.demo && (
              <a
                href={links.demo}
                className="font-mono text-[11px] tracking-wider text-text-mid flex items-center gap-1.25 hover:text-accent transition-colors py-1 before:content-['↗'] before:text-[13px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {links.demoLabel ?? "AUR"}
              </a>
            )}
            {links.code && (
              <a
                href={links.code}
                className="font-mono text-[11px] tracking-wider text-text-mid flex items-center gap-1.25 hover:text-accent transition-colors py-1 before:content-['⌥'] before:text-[13px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </a>
            )}
            {links.liveLabel && (
              <span className="font-mono text-[11px] tracking-wider text-text-mid select-none flex items-center gap-1 py-1">
                {links.liveLabel}
              </span>
            )}
          </div>
        </div>
      </article>
    </BorderGlow>
  );
}
