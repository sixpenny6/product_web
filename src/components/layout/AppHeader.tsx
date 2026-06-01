import Link from "next/link";
import { MegaMenu } from "./MegaMenu";

const navLinks = [
  { href: "/applications", label: "Applications" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" }
];

export function AppHeader() {
  return (
    <header className="relative z-50 border-b border-white/10 bg-[#05070A]/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link className="text-base font-semibold text-white" href="/">
          Tubular Motor Systems
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-col gap-4 text-sm md:flex-row md:items-center">
            <li>
              <MegaMenu />
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="font-medium text-slate-100 transition hover:text-cyan-300"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="inline-flex rounded-sm border border-cyan-400/70 px-4 py-2 font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
                href="/contact"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
