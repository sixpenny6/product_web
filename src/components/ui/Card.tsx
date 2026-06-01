import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-sm border transition focus-within:ring-2 focus-within:ring-[#00D5FF]/70",
  {
    variants: {
      variant: {
        base: "border-white/10 bg-[#0B0F14] text-white",
        tech: "border-[#2F7DFF]/20 bg-[#0B0F14] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_50px_rgba(0,0,0,0.28)]"
      },
      interactive: {
        true: "hover:-translate-y-0.5 hover:border-[#00D5FF]/45 hover:bg-white/[0.04]",
        false: ""
      }
    },
    defaultVariants: {
      variant: "base",
      interactive: false
    }
  }
);

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card({
  className,
  variant,
  interactive,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, interactive }), className)}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 pb-3", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 pt-0", className)} {...props} />;
}
