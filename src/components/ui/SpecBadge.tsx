import * as React from "react";
import { cn } from "@/lib/utils";

type SpecBadgeProps = {
  label: string;
  value?: "TODO" | "待补充" | "placeholder";
  helper?: string;
  className?: string;
};

export function SpecBadge({
  label,
  value = "TODO",
  helper = "Verified source data required",
  className
}: SpecBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-white/10 bg-white/[0.03] p-4",
        className
      )}
    >
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#A8B3C2]">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-[#A8B3C2]">{helper}</p>
    </div>
  );
}
