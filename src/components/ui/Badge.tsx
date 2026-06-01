import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/[0.04] text-[#DCE5EF]",
        series: "border-[#2F7DFF]/35 bg-[#2F7DFF]/10 text-[#9CC7FF]",
        spec: "border-[#C8783A]/35 bg-[#C8783A]/10 text-[#FFB45C]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
