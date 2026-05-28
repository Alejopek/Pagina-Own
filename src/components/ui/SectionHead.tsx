import { cn } from "../../lib/cn";

export interface SectionHeadProps {
  title: string;
  id?: string;
  className?: string;
}

export function SectionHead({ title, id, className }: SectionHeadProps) {
  return (
    <div className={cn("mb-[clamp(40px,6vw,64px)]", className)}>
      <h2
        id={id}
        className="font-display text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-text flex items-center gap-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-border-glow after:to-transparent after:max-w-[240px]"
      >
        {title}
      </h2>
    </div>
  );
}
