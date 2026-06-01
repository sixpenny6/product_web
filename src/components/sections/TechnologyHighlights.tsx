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
              className="relative min-h-[250px] overflow-hidden p-5 md:p-6"
              interactive
              key={item.title}
              variant="tech"
            >
              <div className="absolute right-4 top-4 text-5xl font-semibold text-white/[0.04]">
                0{index + 1}
              </div>
              <Badge variant="spec">{item.badge}</Badge>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-[#00D5FF] via-[#C8783A]/70 to-transparent" />
              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#A8B3C2]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
