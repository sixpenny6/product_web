"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { applications } from "@/lib/homepage-content";
import { cn } from "@/lib/utils";

const transitionDuration = 650;

export function ApplicationMediaRail() {
  const count = applications.length;
  const trackSlides = [
    applications[count - 1],
    ...applications,
    applications[0]
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [trackOffset, setTrackOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSnapReset, setIsSnapReset] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLAnchorElement | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);
  const trackIndexRef = useRef(trackIndex);

  const updateTrackOffset = useCallback(() => {
    const viewport = viewportRef.current;
    const firstCard = firstCardRef.current;

    if (!viewport || !firstCard) {
      return;
    }

    const track = firstCard.parentElement;
    const computedTrack = track ? window.getComputedStyle(track) : null;
    const gap = computedTrack
      ? Number.parseFloat(computedTrack.columnGap || "0")
      : 0;
    const cardWidth = firstCard.offsetWidth;
    const step = cardWidth + gap;
    const centeredOffset =
      viewport.offsetWidth / 2 - cardWidth / 2 - trackIndex * step;

    setTrackOffset(centeredOffset);
  }, [trackIndex]);

  useLayoutEffect(() => {
    updateTrackOffset();
  }, [updateTrackOffset]);

  useEffect(() => {
    window.addEventListener("resize", updateTrackOffset);

    return () => {
      window.removeEventListener("resize", updateTrackOffset);
    };
  }, [updateTrackOffset]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const setTrackPosition = (nextTrackIndex: number) => {
    trackIndexRef.current = nextTrackIndex;
    setTrackIndex(nextTrackIndex);
  };

  const unlockTransition = () => {
    const currentTrackIndex = trackIndexRef.current;

    if (currentTrackIndex === 0) {
      setIsSnapReset(true);
      setTrackPosition(count);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsSnapReset(false));
      });
    }

    if (currentTrackIndex === count + 1) {
      setIsSnapReset(true);
      setTrackPosition(1);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsSnapReset(false));
      });
    }

    setIsTransitioning(false);
    transitionTimeoutRef.current = null;
  };

  const startTransition = (nextTrackIndex: number, nextActiveIndex: number) => {
    if (isTransitioning) {
      return;
    }

    setIsSnapReset(false);
    setIsTransitioning(true);
    setActiveIndex(nextActiveIndex);
    setTrackPosition(nextTrackIndex);

    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = window.setTimeout(
      unlockTransition,
      transitionDuration + 80
    );
  };

  const showPrevious = () => {
    startTransition(trackIndex - 1, (activeIndex - 1 + count) % count);
  };

  const showNext = () => {
    startTransition(trackIndex + 1, (activeIndex + 1) % count);
  };

  const showSlide = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    startTransition(index + 1, index);
  };

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#0B0F14] px-4 py-16 md:px-6 md:py-20">
      <div className="flex w-full justify-center px-6 text-center">
        <SectionHeader
          className="mx-auto w-full max-w-3xl items-center text-center md:flex-col md:items-center md:justify-center"
          description="Application directions are shown as placeholder media until verified project material is available."
          eyebrow="Applications"
          title="Opening systems by scenario"
        />
      </div>

      <div
        className="relative mx-auto mt-10 h-[460px] max-w-[1680px] overflow-hidden md:h-[640px]"
        ref={viewportRef}
      >
        <div
          className={cn(
            "flex h-full gap-4 will-change-transform md:gap-6",
            isSnapReset
              ? "transition-none"
              : "transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          )}
          style={{ transform: `translate3d(${trackOffset}px, 0, 0)` }}
        >
          {trackSlides.map((item, slideIndex) => {
            const distance = Math.abs(slideIndex - trackIndex);
            const isActive = distance === 0;
            const isSideCard = distance === 1;

            return (
              <Link
                aria-hidden={!isActive}
                className={cn(
                  "relative block h-full w-[86vw] max-w-[1040px] shrink-0 overflow-hidden border bg-[#05070A] shadow-[0_30px_90px_rgba(0,0,0,0.36)] outline-none transition-[opacity,transform,border-color,filter] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:border-[#00D5FF] focus-visible:ring-2 focus-visible:ring-[#00D5FF] md:w-[70vw]",
                  isActive &&
                    "pointer-events-auto z-20 border-[#00D5FF]/45 opacity-100 brightness-100",
                  isSideCard &&
                    "pointer-events-none z-10 scale-[0.98] border-white/10 opacity-90 brightness-90",
                  !isActive &&
                    !isSideCard &&
                    "pointer-events-none z-0 scale-[0.98] border-white/5 opacity-0 brightness-75"
                )}
                href="/applications"
                key={`${item.title}-${slideIndex}`}
                ref={slideIndex === 0 ? firstCardRef : undefined}
                tabIndex={isActive ? 0 : -1}
              >
                <Image
                  alt={`${item.title} placeholder`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 70vw, 86vw"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/88 via-[#05070A]/25 to-transparent" />
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/35 backdrop-blur md:h-14 md:w-14">
                  <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <Badge variant="series">placeholder media</Badge>
                  <h3 className="mt-4 max-w-2xl text-3xl font-semibold text-white md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DCE5EF] md:text-base">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <button
          aria-label="Show previous application"
          className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white shadow-[0_10px_36px_rgba(0,0,0,0.4)] backdrop-blur transition hover:border-[#00D5FF]/60 hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF] md:left-8 md:h-12 md:w-12"
          onClick={showPrevious}
          type="button"
        >
          <ChevronLeft aria-hidden="true" className="h-6 w-6" />
        </button>
        <button
          aria-label="Show next application"
          className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white shadow-[0_10px_36px_rgba(0,0,0,0.4)] backdrop-blur transition hover:border-[#00D5FF]/60 hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF] md:right-8 md:h-12 md:w-12"
          onClick={showNext}
          type="button"
        >
          <ChevronRight aria-hidden="true" className="h-6 w-6" />
        </button>

        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {applications.map((item, index) => (
            <button
              aria-label={`Show ${item.title}`}
              className={cn(
                "h-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF]",
                index === activeIndex
                  ? "w-10 bg-[#00D5FF]"
                  : "w-5 bg-white/35 hover:bg-white/60"
              )}
              key={item.title}
              onClick={() => showSlide(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
