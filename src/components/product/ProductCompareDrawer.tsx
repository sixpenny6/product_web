import Link from "next/link";
import type {
  Product,
  ProductApplication,
  ProductSeries
} from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ProductCompareDrawerProps = {
  applications: ProductApplication[];
  isOpen: boolean;
  maxItems: number;
  products: Product[];
  productSeries: ProductSeries[];
  onClose: () => void;
  onOpen: () => void;
  onRemove: (slug: string) => void;
};

export function ProductCompareDrawer({
  applications,
  isOpen,
  maxItems,
  products,
  productSeries,
  onClose,
  onOpen,
  onRemove
}: ProductCompareDrawerProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 md:px-6 md:pb-5">
      <div className="mx-auto max-w-7xl rounded-sm border border-white/15 bg-[#0B0F14]/96 shadow-[0_-24px_90px_rgba(0,0,0,0.55)] backdrop-blur">
        <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Compare products ({products.length}/{maxItems})
            </p>
            <p className="mt-1 text-xs text-[#A8B3C2]">
              Structured placeholder specs only. Real values remain TODO.
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={isOpen ? onClose : onOpen} size="sm" variant="secondary">
              {isOpen ? "Close" : "Open"}
            </Button>
            <Link
              className={buttonVariants({ size: "sm", variant: "primary" })}
              href="/contact"
            >
              Get Quote
            </Link>
          </div>
        </div>

        {isOpen ? (
          <div className="max-h-[70vh] overflow-y-auto p-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product) => {
                const series = productSeries.find(
                  (item) => item.slug === product.series
                );
                const applicationLabels = product.applications
                  .map((slug) => applications.find((item) => item.slug === slug)?.name)
                  .filter(Boolean);
                const specs = product.specs.slice(0, 6);

                return (
                  <div
                    className="rounded-sm border border-white/10 bg-white/[0.03] p-4"
                    key={product.slug}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Badge variant="series">
                          {series?.name ?? product.series}
                        </Badge>
                        <h3 className="mt-3 text-base font-semibold text-white">
                          {product.name}
                        </h3>
                      </div>
                      <button
                        className="rounded-sm border border-white/15 px-2 py-1 text-xs text-[#A8B3C2] transition hover:border-[#00D5FF]/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF]"
                        onClick={() => onRemove(product.slug)}
                        type="button"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {applicationLabels.map((label) => (
                        <Badge key={label} variant="default">
                          {label}
                        </Badge>
                      ))}
                    </div>

                    <dl className="mt-4 space-y-2">
                      {specs.map((spec) => (
                        <div
                          className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 text-sm"
                          key={spec.key}
                        >
                          <dt className="text-[#A8B3C2]">{spec.label}</dt>
                          <dd className="font-semibold text-white">
                            {spec.value}
                            {spec.unit ? (
                              <span className="ml-1 text-xs text-[#A8B3C2]">
                                {spec.unit}
                              </span>
                            ) : null}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <Link
                      className={cn(
                        buttonVariants({
                          className: "mt-4 w-full",
                          variant: "secondary"
                        })
                      )}
                      href={`/products/${product.slug}`}
                    >
                      View Details
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
