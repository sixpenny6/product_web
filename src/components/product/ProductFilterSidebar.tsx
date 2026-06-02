import type {
  Product,
  ProductApplication,
  ProductCategory,
  ProductSeries
} from "@/types/product";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export type ProductFilters = {
  series: string;
  application: string;
  controlType: string;
  category: "all" | ProductCategory;
};

type ProductFilterSidebarProps = {
  applications: ProductApplication[];
  categories: ProductCategory[];
  controlTypes: string[];
  filters: ProductFilters;
  productSeries: ProductSeries[];
  products: Product[];
  resultCount: number;
  onChange: (filters: ProductFilters) => void;
  onClear: () => void;
};

const categoryLabels: Record<ProductCategory, string> = {
  accessory: "Accessory",
  "control-system": "Control System",
  motor: "Motor"
};

function FilterButton({
  active,
  children,
  onClick
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "rounded-sm border px-3 py-2 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF]",
        active
          ? "border-[#00D5FF]/70 bg-[#2F7DFF]/16 text-white"
          : "border-white/10 bg-white/[0.03] text-[#A8B3C2] hover:border-white/25 hover:text-white"
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export function ProductFilterSidebar({
  applications,
  categories,
  controlTypes,
  filters,
  productSeries,
  products,
  resultCount,
  onChange,
  onClear
}: ProductFilterSidebarProps) {
  const activeCount = [
    filters.series !== "all",
    filters.application !== "all",
    filters.controlType !== "all",
    filters.category !== "all"
  ].filter(Boolean).length;

  return (
    <aside className="rounded-sm border border-white/10 bg-[#0B0F14] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] lg:sticky lg:top-24">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">Filters</h2>
          <p className="mt-1 text-xs text-[#A8B3C2]">
            {resultCount} of {products.length} items
          </p>
        </div>
        {activeCount > 0 ? (
          <Badge variant="series">{activeCount} active</Badge>
        ) : null}
      </div>

      <div className="mt-5 space-y-6">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#A8B3C2]">
            Product Category
          </p>
          <div className="grid gap-2">
            <FilterButton
              active={filters.category === "all"}
              onClick={() => onChange({ ...filters, category: "all" })}
            >
              All categories
            </FilterButton>
            {categories.map((category) => (
              <FilterButton
                active={filters.category === category}
                key={category}
                onClick={() => onChange({ ...filters, category })}
              >
                {categoryLabels[category]}
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#A8B3C2]">
            Series / System
          </p>
          <div className="grid gap-2">
            <FilterButton
              active={filters.series === "all"}
              onClick={() => onChange({ ...filters, series: "all" })}
            >
              All series
            </FilterButton>
            {productSeries.map((series) => (
              <FilterButton
                active={filters.series === series.slug}
                key={series.slug}
                onClick={() => onChange({ ...filters, series: series.slug })}
              >
                {series.name}
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#A8B3C2]">
            Application
          </p>
          <div className="grid gap-2">
            <FilterButton
              active={filters.application === "all"}
              onClick={() => onChange({ ...filters, application: "all" })}
            >
              All applications
            </FilterButton>
            {applications.map((application) => (
              <FilterButton
                active={filters.application === application.slug}
                key={application.slug}
                onClick={() =>
                  onChange({ ...filters, application: application.slug })
                }
              >
                {application.name}
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#A8B3C2]">
            Control Type
          </p>
          <div className="grid gap-2">
            <FilterButton
              active={filters.controlType === "all"}
              onClick={() => onChange({ ...filters, controlType: "all" })}
            >
              All control types
            </FilterButton>
            {controlTypes.map((controlType) => (
              <FilterButton
                active={filters.controlType === controlType}
                key={controlType}
                onClick={() => onChange({ ...filters, controlType })}
              >
                {controlType}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>

      <Button className="mt-6 w-full" onClick={onClear} variant="secondary">
        Clear filters
      </Button>
    </aside>
  );
}
