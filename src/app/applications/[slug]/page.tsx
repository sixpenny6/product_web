import Link from "next/link";

type ApplicationDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ApplicationDetailPage({
  params
}: ApplicationDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[#05070A] px-6 py-16 text-[#F4F7FA]">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold">Application Detail</h1>
        <p className="mt-4 text-[#A8B3C2]">
          Placeholder route for application slug: <span>{slug}</span>
        </p>
        <Link
          className="mt-8 inline-block text-[#00D5FF]"
          href="/applications"
        >
          Back to applications
        </Link>
      </div>
    </main>
  );
}
