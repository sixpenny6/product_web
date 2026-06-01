import { CTAGroup } from "@/components/ui/CTAGroup";

export function FinalCTA() {
  return (
    <section className="border-y border-white/10 bg-[linear-gradient(135deg,#05070A_0%,#0B1722_48%,#05070A_100%)] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D5FF]">
          Inquiry
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
          Need help choosing the right tubular motor?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#A8B3C2]">
          Share your application, tube size and control requirements. Our team
          will help you prepare the right product direction.
        </p>
        <CTAGroup
          className="mt-8 justify-center"
          primaryHref="/contact"
          primaryLabel="Get Quote"
          secondaryHref="/contact"
          secondaryLabel="Contact Sales"
        />
      </div>
    </section>
  );
}
