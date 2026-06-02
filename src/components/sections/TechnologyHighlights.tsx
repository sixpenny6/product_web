import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { technologyHighlights } from "@/lib/homepage-content";

export function TechnologyHighlights() {
  return (
    <section className="bg-[#05070A] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          description="General technology advantages are shown as directional homepage messaging without claiming verified technical specifications."
          eyebrow="Technology"
          title="Built for Dependable Motion"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {technologyHighlights.map((item, index) => (
            <Card
              className="relative min-h-[380px] overflow-hidden p-0"
              interactive
              key={item.title}
              variant="tech"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                <Image
                  alt={`${item.title} placeholder`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/65 via-transparent to-transparent" />
              </div>
              <div className="absolute right-4 top-4 text-5xl font-semibold text-white/[0.08]">
                0{index + 1}
              </div>
              <div className="p-5 md:p-6">
                <Badge variant="spec">{item.badge}</Badge>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-[#00D5FF] via-[#C8783A]/70 to-transparent" />
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A8B3C2]">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
