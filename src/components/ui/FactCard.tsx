import { cn } from "../../lib/cn";
import BorderGlow from "./BorderGlow";

export interface FactCardProps {
  icon: string;
  title: string;
  desc: string;
  className?: string;
}

export function FactCard({ icon, title, desc, className }: FactCardProps) {
  return (
    <BorderGlow
      className={cn(
        "h-full transition-transform duration-200 hover:-translate-y-[2px]",
        className,
      )}
      backgroundColor="#818ea0ff"
      borderRadius={14}
      edgeSensitivity={22}
      glowColor="198 93 62"
      glowRadius={24}
      glowIntensity={0.75}
      coneSpread={24}
      colors={["#38bdf8", "#818cf8", "#4ade80"]}
      fillOpacity={0.18}
    >
      <div className="bg-white rounded-[14px] py-7 px-6 h-full min-h-[156px] flex flex-col justify-center">
        <span className="text-2xl mb-3 block select-none" aria-hidden="true">
          {icon}
        </span>
        <strong className="block font-display text-[15px] font-bold text-text mb-1.5">
          {title}
        </strong>
        <span className="text-xs text-text-mid leading-normal block">
          {desc}
        </span>
      </div>
    </BorderGlow>
  );
}
