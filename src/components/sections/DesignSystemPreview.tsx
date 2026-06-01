import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { CTAGroup } from "@/components/ui/CTAGroup";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpecBadge } from "@/components/ui/SpecBadge";

export function DesignSystemPreview() {
  return (
    <section className="border-t border-white/10 bg-[#05070A] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          cta={
            <Button size="sm" variant="ghost">
              Temporary only
            </Button>
          }
          description="This temporary preview is for Stage 3 component validation only. It is not the formal homepage design and can be replaced in Stage 4."
          eyebrow="Temporary Design System Preview"
          title="Reusable industrial UI primitives"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card interactive className="p-5" variant="tech">
            <CardHeader className="p-0">
              <h3 className="text-lg font-semibold">Button variants</h3>
            </CardHeader>
            <CardContent className="p-0 pt-5">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="text">Text</Button>
                <Button disabled>Disabled</Button>
              </div>
            </CardContent>
          </Card>

          <Card interactive className="p-5" variant="base">
            <CardHeader className="p-0">
              <h3 className="text-lg font-semibold">Badge variants</h3>
            </CardHeader>
            <CardContent className="p-0 pt-5">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="series">Product Series</Badge>
                <Badge variant="spec">Spec Placeholder</Badge>
              </div>
            </CardContent>
          </Card>

          <GlassPanel className="p-6">
            <h3 className="text-lg font-semibold">GlassPanel</h3>
            <p className="mt-3 text-sm leading-6 text-[#A8B3C2]">
              Semi-transparent dark panel for future hero, product, and specs
              areas.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <SpecBadge label="Torque" value="TODO" />
              <SpecBadge label="Voltage" value="待补充" />
              <SpecBadge label="Control Type" value="placeholder" />
            </div>
          </GlassPanel>

          <Card className="p-6" variant="tech">
            <h3 className="text-lg font-semibold">CTAGroup</h3>
            <p className="mt-3 text-sm leading-6 text-[#A8B3C2]">
              Primary and secondary action pairing for future hero and page-end
              calls to action.
            </p>
            <CTAGroup
              className="mt-5"
              primaryHref="/contact"
              primaryLabel="Get Quote"
              secondaryHref="/products"
              secondaryLabel="Explore Products"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
