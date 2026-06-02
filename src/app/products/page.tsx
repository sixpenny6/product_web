import { ProductPageClient } from "@/components/product/ProductPageClient";
import { mockApplications } from "@/lib/mock/applications";
import { mockProductSeries } from "@/lib/mock/product-series";
import { mockProducts } from "@/lib/mock/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#05070A] text-[#F4F7FA]">
      <ProductPageClient
        applications={mockApplications}
        productSeries={mockProductSeries}
        products={mockProducts}
      />
    </main>
  );
}
