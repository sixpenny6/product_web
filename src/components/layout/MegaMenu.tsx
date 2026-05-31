import Link from "next/link";

const productSeries = [
  "Small Tubular Motors",
  "59 Series Motors",
  "92 Series Motors",
  "92 Servo Motors"
];

export function MegaMenu() {
  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none text-sm font-medium text-slate-100 transition hover:text-cyan-300">
        Products
      </summary>
      <div className="mt-3 rounded border border-white/10 bg-[#0B0F14] p-4 shadow-xl md:absolute md:left-0 md:top-full md:w-72">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
          Product Series
        </p>
        <div className="mt-3 grid gap-2">
          {productSeries.map((series) => (
            <Link
              className="rounded px-2 py-2 text-sm text-slate-200 transition hover:bg-white/5 hover:text-cyan-300"
              href="/products"
              key={series}
            >
              {series}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}
