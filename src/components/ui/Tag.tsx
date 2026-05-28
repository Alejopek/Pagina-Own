import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export interface TagProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md";
}

export function Tag({ children, className, size = "md" }: TagProps) {
  return (
    <span
      className={cn(
        "font-mono rounded-sm bg-white/4 border border-border text-text-mid transition-all duration-200 white-space-nowrap hover:bg-accent-dim hover:border-border-glow hover:text-text cursor-default",
        size === "sm" ? "text-[11px] py-[3px] px-[10px]" : "text-xs py-[5px] px-3",
        className
      )}
    >
      {children}
    </span>
  );
}
