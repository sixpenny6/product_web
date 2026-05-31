import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#05070A] px-6 py-16 text-[#F4F7FA]">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-4 text-[#A8B3C2]">
          Product listing and filters will be added in a later stage.
        </p>
        <Link className="mt-8 inline-block text-[#00D5FF]" href="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
