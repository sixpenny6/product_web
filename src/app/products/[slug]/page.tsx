import Link from "next/link";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params
}: ProductDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[#05070A] px-6 py-16 text-[#F4F7FA]">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Product Detail</h1>
        <p className="mt-4 text-[#A8B3C2]">
          Placeholder route for product slug: <span>{slug}</span>
        </p>
        <p className="mt-2 text-[#A8B3C2]">
          Real product data and specifications will use TODO or 待补充 until
          verified source data is available.
        </p>
        <Link className="mt-8 inline-block text-[#00D5FF]" href="/products">
          Back to products
        </Link>
      </div>
    </main>
  );
}
