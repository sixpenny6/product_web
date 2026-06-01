import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { productSeries } from "@/lib/homepage-content";

export function ProductSeriesGrid() {
  return (
    <section className="overflow-hidden bg-[#05070A] px-3 py-16 md:px-5 md:py-20">
      <div className="mx-auto max-w-4xl px-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D5FF]">
          Product Series
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
          Four tubular motor platforms
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#A8B3C2]">
          Static category cards only. Model-level specifications and verified
          performance data remain TODO for later stages.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1680px] gap-3 md:grid-cols-2 md:gap-5">
        {productSeries.map((series) => (
          <Link
            className="group relative min-h-[390px] overflow-hidden border border-white/10 bg-[#0B0F14] outline-none transition hover:border-[#00D5FF]/45 focus-visible:border-[#00D5FF] focus-visible:ring-2 focus-visible:ring-[#00D5FF] md:min-h-[520px]"
            href="/products"
            key={series.name}
          >
            <Image
              alt={`${series.name} placeholder`}
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src={series.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/92 via-[#05070A]/38 to-[#05070A]/5" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <Badge variant="series">{series.name}</Badge>
              <h3 className="mt-4 max-w-xl text-2xl font-semibold text-white md:text-4xl">
                {series.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#DCE5EF] md:text-base">
                {series.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Badge variant="spec">{series.specsLabel}</Badge>
                <span
                  className={buttonVariants({
                    className: "pointer-events-none",
                    variant: "secondary"
                  })}
                >
                  Explore
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
