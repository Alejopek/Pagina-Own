import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  as?: "button" | "a";
  className?: string;
} & ComponentPropsWithoutRef<"button"> & ComponentPropsWithoutRef<"a">;

export function Button({
  children,
  variant = "primary",
  as = "button",
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] font-medium py-3 px-6 rounded-sm transition-all duration-200 relative overflow-hidden select-none active:scale-[0.98]";

  const variantClasses =
    variant === "primary"
      ? "bg-accent text-bg font-bold hover:bg-white hover:shadow-[0_0_32px_rgba(56,189,248,0.35)] hover:-translate-y-[1px]"
      : "text-text border border-border bg-transparent hover:border-accent hover:text-accent hover:bg-accent-dim hover:-translate-y-[1px]";

  const combinedClasses = cn(baseClasses, variantClasses, className);

  if (as === "a") {
    return (
      <a className={combinedClasses} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
