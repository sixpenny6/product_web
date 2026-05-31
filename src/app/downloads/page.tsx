import Link from "next/link";

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-[#05070A] px-6 py-16 text-[#F4F7FA]">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Downloads</h1>
        <p className="mt-4 text-[#A8B3C2]">
          Datasheets, manuals, certificates, and CAD placeholders will be added
          in later stages.
        </p>
        <Link className="mt-8 inline-block text-[#00D5FF]" href="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
