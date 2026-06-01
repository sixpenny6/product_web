import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A] disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary:
          "bg-[#2F7DFF] text-white shadow-[0_0_0_1px_rgba(47,125,255,0.3)] hover:bg-[#1F6BED] focus-visible:ring-[#00D5FF]",
        secondary:
          "border border-white/20 bg-white/[0.03] text-white hover:border-[#00D5FF]/60 hover:bg-white/[0.08] focus-visible:ring-[#00D5FF]",
        ghost:
          "bg-transparent text-[#A8B3C2] hover:bg-white/[0.06] hover:text-white focus-visible:ring-[#00D5FF]",
        text: "min-h-0 px-0 py-0 text-[#00D5FF] hover:text-white focus-visible:ring-[#00D5FF]"
      },
      size: {
        sm: "min-h-9 px-3 text-xs",
        md: "min-h-11 px-5 text-sm",
        lg: "min-h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      type={type}
      {...props}
    />
  );
}
