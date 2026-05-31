import { AppHeader } from "./AppHeader";
import { Footer } from "./Footer";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#05070A] text-[#F4F7FA]">
      <AppHeader />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
