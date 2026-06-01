import { DesignSystemPreview } from "@/components/sections/DesignSystemPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070A] text-[#F4F7FA]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.24em] text-[#00D5FF]">
          Tubular Motor Systems
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          B2B tubular motor website foundation
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#A8B3C2] sm:text-lg">
          Stage 1 initializes the Next.js App Router, TypeScript, Tailwind CSS,
          and ESLint foundation. Product data, CMS, 3D, inquiry email, and
          deployment are intentionally left for later stages.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex h-12 items-center justify-center rounded-sm bg-[#2F7DFF] px-6 text-sm font-semibold text-white transition hover:bg-[#1f6bed] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF]"
            href="#stage-scope"
          >
            View Stage Scope
          </a>
          <a
            className="inline-flex h-12 items-center justify-center rounded-sm border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF]"
            href="mailto:sales@example.com"
          >
            Contact Sales
          </a>
        </div>
      </section>
      <DesignSystemPreview />
      <section
        id="stage-scope"
        className="border-t border-white/10 bg-[#0B0F14] px-6 py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {["No CMS", "No 3D", "No Fabricated Specs"].map((item) => (
            <div key={item} className="rounded-sm border border-white/10 p-6">
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-[#A8B3C2]">
                Reserved for the appropriate later stage.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
