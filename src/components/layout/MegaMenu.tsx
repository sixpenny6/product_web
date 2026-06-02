import Link from "next/link";

const productLinks = [
  {
    description: "Compact drive category for shading and curtain systems.",
    href: "/products",
    label: "Small Tubular Motors"
  },
  {
    description: "Platform category for compact shutter and door systems.",
    href: "/products",
    label: "59 Series Motors"
  },
  {
    description: "Heavy-duty category for garage and large shutter systems.",
    href: "/products",
    label: "92 Series Motors"
  },
  {
    description: "Precision-control category for advanced opening systems.",
    href: "/products",
    label: "92 Servo Motors"
  },
  {
    description: "Control options prepared for tubular motor applications.",
    href: "/products#control-system",
    label: "Control System"
  },
  {
    description: "Mounting and installation accessory category.",
    href: "/products#accessory",
    label: "Accessory"
  }
];

export function MegaMenu() {
  return (
    <div className="group relative">
      <Link
        className="font-medium text-slate-100 transition hover:text-cyan-300 focus:outline-none focus-visible:text-cyan-300 focus-visible:ring-2 focus-visible:ring-[#00D5FF]"
        href="/products"
      >
        Products
      </Link>

      <div className="hidden md:block">
        <div className="invisible absolute left-0 top-full z-[80] w-[34rem] pt-3 opacity-0 transition duration-150 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <div className="rounded-sm border border-white/15 bg-[#0B0F14] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.55)] ring-1 ring-[#00D5FF]/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Product Series
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {productLinks.map((item) => (
                <Link
                  className="rounded-sm border border-transparent px-3 py-3 text-sm text-slate-200 transition hover:border-[#00D5FF]/30 hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:border-[#00D5FF]/60 focus-visible:bg-white/[0.08]"
                  href={item.href}
                  key={item.label}
                >
                  <span className="block font-semibold text-white">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-400">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
