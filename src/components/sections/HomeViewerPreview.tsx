import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpecBadge } from "@/components/ui/SpecBadge";
import { viewerPreview } from "@/lib/homepage-content";

export function HomeViewerPreview() {
  return (
    <section className="border-y border-white/10 bg-[#0B0F14] px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            description={viewerPreview.description}
            eyebrow="Future viewer"
            title={viewerPreview.title}
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <SpecBadge label="Torque" value="TODO" />
            <SpecBadge label="Voltage" value="待补充" />
            <SpecBadge label="Control Type" value="placeholder" />
          </div>
        </div>

        <GlassPanel className="overflow-hidden p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <Badge variant="series">Poster fallback only</Badge>
            <Button disabled size="sm" variant="secondary">
              3D not implemented
            </Button>
          </div>
          <div className="relative aspect-[16/10] rounded-sm bg-black/20">
            <Image
              alt="92 Series motor viewer placeholder"
              className="object-contain p-4"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              src={viewerPreview.image}
            />
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
