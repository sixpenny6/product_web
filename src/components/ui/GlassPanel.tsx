import * as React from "react";
import { cn } from "@/lib/utils";

export type GlassPanelProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassPanel({ className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-white/10 bg-[#0B0F14]/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
}
