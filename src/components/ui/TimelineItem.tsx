import type { TimelineEvent } from "../../data/journey";
import { cn } from "../../lib/cn";

export interface TimelineItemProps {
  event: TimelineEvent;
  className?: string;
}

export function TimelineItem({ event, className }: TimelineItemProps) {
  const { period, title, description } = event;

  return (
    <li
      className={cn(
        "relative pl-6 pb-10 last:pb-0 group select-text",
        // Custom interactive bullet dot styled with Tailwind CSS
        "before:content-[''] before:absolute before:left-[-4px] before:top-2 before:w-[9px] before:h-[9px] before:rounded-full before:bg-bg before:border-[1.5px] before:border-accent before:shadow-[0_0_10px_rgba(56,189,248,0.4)] before:transition-all before:duration-200",
        "hover:before:scale-[1.4] hover:before:shadow-[0_0_16px_rgba(56,189,248,0.6)]",
        className
      )}
    >
      <p className="font-mono text-[11px] text-accent tracking-[0.08em] mb-1.5 cursor-default">
        {period}
      </p>
      <h3 className="font-display text-[17px] font-bold text-text mb-2">
        {title}
      </h3>
      <p className="text-xs text-text-mid leading-[1.75] max-w-[560px]">
        {description}
      </p>
    </li>
  );
}
