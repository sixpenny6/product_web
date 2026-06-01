import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CTAGroupProps = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  className?: string;
};

export function CTAGroup({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className
}: CTAGroupProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Link className={buttonVariants({ variant: "primary" })} href={primaryHref}>
        {primaryLabel}
      </Link>
      <Link
        className={buttonVariants({ variant: "secondary" })}
        href={secondaryHref}
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
