import { Button } from "@/components/ui/Button";

type EmptyStateProps = {
  onClear: () => void;
};

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="rounded-sm border border-dashed border-white/20 bg-white/[0.03] px-6 py-14 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D5FF]">
        No Results
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white">
        No placeholder products match these filters
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#A8B3C2]">
        Clear the filters to return to the full stage 5 mock product dataset.
      </p>
      <Button className="mt-6" onClick={onClear} variant="primary">
        Clear filters
      </Button>
    </div>
  );
}
