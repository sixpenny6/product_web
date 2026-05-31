import Link from "next/link";

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-[#05070A] px-6 py-16 text-[#F4F7FA]">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Applications</h1>
        <p className="mt-4 text-[#A8B3C2]">
          Application pages will map use cases to product families in a later
          stage.
        </p>
        <Link className="mt-8 inline-block text-[#00D5FF]" href="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
