import type {
  Product,
  ProductApplication,
  ProductSeries
} from "@/types/product";
import { ProductCard } from "@/components/product/ProductCard";

type ProductGridProps = {
  applications: ProductApplication[];
  compareSlugs: string[];
  products: Product[];
  productSeries: ProductSeries[];
  maxCompareItems: number;
  onToggleCompare: (product: Product) => void;
};

export function ProductGrid({
  applications,
  compareSlugs,
  products,
  productSeries,
  maxCompareItems,
  onToggleCompare
}: ProductGridProps) {
  const compareIsFull = compareSlugs.length >= maxCompareItems;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          applications={applications}
          compareDisabled={compareIsFull}
          isCompared={compareSlugs.includes(product.slug)}
          key={product.slug}
          product={product}
          productSeries={productSeries}
          onToggleCompare={onToggleCompare}
        />
      ))}
    </div>
  );
}
