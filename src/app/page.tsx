import { ApplicationShowcase } from "@/components/sections/ApplicationShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProductSeriesGrid } from "@/components/sections/ProductSeriesGrid";
import { TechnologyHighlights } from "@/components/sections/TechnologyHighlights";
import { VideoPreviewSection } from "@/components/sections/VideoPreviewSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070A] text-[#F4F7FA]">
      <HomeHero />
      <section
        aria-hidden="true"
        className="h-8 border-y border-white/10 bg-[linear-gradient(180deg,#05070A_0%,#08111A_50%,#05070A_100%)] md:h-14"
      />
      <VideoPreviewSection />
      <ProductSeriesGrid />
      <ApplicationShowcase />
      <TechnologyHighlights />
      <FinalCTA />
    </main>
  );
}
