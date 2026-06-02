import Image from "next/image";
import Link from "next/link";
import type {
  Product,
  ProductApplication,
  ProductCategory,
  ProductSeries
} from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  applications: ProductApplication[];
  compareDisabled: boolean;
  isCompared: boolean;
  product: Product;
  productSeries: ProductSeries[];
  onToggleCompare: (product: Product) => void;
};

const categoryLabels: Record<ProductCategory, string> = {
  accessory: "Accessory",
  "control-system": "Control System",
  motor: "Motor"
};

export function ProductCard({
  applications,
  compareDisabled,
  isCompared,
  product,
  productSeries,
  onToggleCompare
}: ProductCardProps) {
  const series = productSeries.find((item) => item.slug === product.series);
  const applicationLabels = product.applications
    .map((slug) => applications.find((item) => item.slug === slug)?.name)
    .filter(Boolean);
  const visibleSpecs = product.specs.slice(0, 4);

  return (
    <Card
      className="group flex h-full flex-col overflow-hidden"
      interactive
      variant="tech"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/20">
        <Image
          alt={product.heroImage.alt}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={product.heroImage.src}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/72 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge variant="series">{series?.name ?? product.series}</Badge>
          <Badge variant="default">{categoryLabels[product.category]}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
          <p className="mt-3 text-sm leading-6 text-[#A8B3C2]">
            {product.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {applicationLabels.map((label) => (
              <Badge key={label} variant="default">
                {label}
              </Badge>
            ))}
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {visibleSpecs.map((spec) => (
              <div
                className="rounded-sm border border-white/10 bg-white/[0.03] px-3 py-2"
                key={spec.key}
              >
                <p className="text-xs text-[#A8B3C2]">{spec.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {spec.value}
                  {spec.unit ? (
                    <span className="ml-1 text-xs text-[#A8B3C2]">
                      {spec.unit}
                    </span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          <Link
            className={buttonVariants({
              className: "w-full",
              variant: "secondary"
            })}
            href={`/products/${product.slug}`}
          >
            View Details
          </Link>
          <Button
            className="w-full"
            disabled={compareDisabled && !isCompared}
            onClick={() => onToggleCompare(product)}
            variant={isCompared ? "primary" : "secondary"}
          >
            {isCompared ? "Added" : "Compare"}
          </Button>
          <Link
            className={cn(
              buttonVariants({ className: "w-full", variant: "primary" })
            )}
            href={`/contact?product=${product.slug}`}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </Card>
  );
}
