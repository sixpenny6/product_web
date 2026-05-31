import Link from "next/link";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070A]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>Tubular Motor Systems</p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-cyan-300" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
