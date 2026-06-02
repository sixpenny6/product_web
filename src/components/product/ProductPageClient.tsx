"use client";

import { useMemo, useState } from "react";
import type {
  Product,
  ProductApplication,
  ProductCategory,
  ProductSeries
} from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/product/EmptyState";
import { ProductCompareDrawer } from "@/components/product/ProductCompareDrawer";
import {
  ProductFilterSidebar,
  type ProductFilters
} from "@/components/product/ProductFilterSidebar";
import { ProductGrid } from "@/components/product/ProductGrid";

type ProductPageClientProps = {
  applications: ProductApplication[];
  products: Product[];
  productSeries: ProductSeries[];
};

const initialFilters: ProductFilters = {
  application: "all",
  category: "all",
  controlType: "all",
  series: "all"
};

const maxCompareItems = 4;

export function ProductPageClient({
  applications,
  products,
  productSeries
}: ProductPageClientProps) {
  const [filters, setFilters] = useState<ProductFilters>(initialFilters);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);
  const [compareNotice, setCompareNotice] = useState("");

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.category)));
  }, [products]);

  const controlTypes = useMemo(() => {
    const values = products
      .map((product) => product.specs.find((spec) => spec.key === "controlType")?.value)
      .filter((value): value is string => Boolean(value));

    return Array.from(new Set(values));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const controlType =
        product.specs.find((spec) => spec.key === "controlType")?.value ??
        "placeholder";

      const matchesSeries =
        filters.series === "all" || product.series === filters.series;
      const matchesApplication =
        filters.application === "all" ||
        product.applications.includes(filters.application);
      const matchesCategory =
        filters.category === "all" || product.category === filters.category;
      const matchesControlType =
        filters.controlType === "all" || controlType === filters.controlType;

      return (
        matchesSeries &&
        matchesApplication &&
        matchesCategory &&
        matchesControlType
      );
    });
  }, [filters, products]);

  const comparedProducts = useMemo(() => {
    return compareSlugs
      .map((slug) => products.find((product) => product.slug === slug))
      .filter((product): product is Product => Boolean(product));
  }, [compareSlugs, products]);

  const clearFilters = () => setFilters(initialFilters);

  const toggleCompare = (product: Product) => {
    setCompareNotice("");

    if (compareSlugs.includes(product.slug)) {
      setCompareSlugs((current) =>
        current.filter((slug) => slug !== product.slug)
      );
      return;
    }

    if (compareSlugs.length >= maxCompareItems) {
      setCompareNotice(`Compare is limited to ${maxCompareItems} items.`);
      setCompareOpen(true);
      return;
    }

    setCompareSlugs((current) => [...current, product.slug]);
    setCompareOpen(true);
  };

  const removeComparedProduct = (slug: string) => {
    setCompareSlugs((current) => current.filter((item) => item !== slug));
  };

  return (
    <>
      <section className="border-b border-white/10 bg-[#05070A] px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge variant="series">Stage 6 product listing</Badge>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold text-white md:text-5xl">
                Products
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#A8B3C2]">
                Browse structured placeholder product data for tubular motors,
                control systems and accessories. Real specifications remain TODO
                until verified.
              </p>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#A8B3C2]">
              <span className="font-semibold text-white">
                {filteredProducts.length}
              </span>{" "}
              results from {products.length} mock items
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[19rem_1fr]">
          <div className="lg:hidden">
            <Button
              className="w-full"
              onClick={() => setMobileFiltersOpen((current) => !current)}
              variant="secondary"
            >
              {mobileFiltersOpen ? "Hide filters" : "Show filters"}
            </Button>
          </div>

          <div className={mobileFiltersOpen ? "block" : "hidden lg:block"}>
            <ProductFilterSidebar
              applications={applications}
              categories={categories as ProductCategory[]}
              controlTypes={controlTypes}
              filters={filters}
              productSeries={productSeries}
              products={products}
              resultCount={filteredProducts.length}
              onChange={setFilters}
              onClear={clearFilters}
            />
          </div>

          <div>
            <div className="mb-5 flex flex-col gap-3 rounded-sm border border-white/10 bg-[#0B0F14] p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Product results
                </p>
                <p className="mt-1 text-xs text-[#A8B3C2]">
                  Filtering uses mock series, application, category and
                  placeholder control type fields.
                </p>
              </div>
              {compareNotice ? (
                <p className="rounded-sm border border-[#C8783A]/30 bg-[#C8783A]/10 px-3 py-2 text-xs text-[#FFB45C]">
                  {compareNotice}
                </p>
              ) : null}
            </div>

            {filteredProducts.length > 0 ? (
              <ProductGrid
                applications={applications}
                compareSlugs={compareSlugs}
                maxCompareItems={maxCompareItems}
                products={filteredProducts}
                productSeries={productSeries}
                onToggleCompare={toggleCompare}
              />
            ) : (
              <EmptyState onClear={clearFilters} />
            )}
          </div>
        </div>
      </section>

      <ProductCompareDrawer
        applications={applications}
        isOpen={compareOpen}
        maxItems={maxCompareItems}
        products={comparedProducts}
        productSeries={productSeries}
        onClose={() => setCompareOpen(false)}
        onOpen={() => setCompareOpen(true)}
        onRemove={removeComparedProduct}
      />
    </>
  );
}
