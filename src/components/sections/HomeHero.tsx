"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/lib/homepage-content";

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex] ?? heroSlides[0];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-73px)] overflow-hidden border-b border-white/10 bg-[#05070A]">
      <div className="absolute inset-0 bg-[#05070A]">
        {heroSlides.map((slide, index) => (
          <Image
            alt={`${slide.title} placeholder`}
            className={cn(
              "object-cover transition-opacity duration-700",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
            fill
            key={slide.title}
            priority={index === 0}
            sizes="100vw"
            src={slide.image}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/72 via-[#05070A]/30 to-[#05070A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,10,0.18)_48%,rgba(5,7,10,0.78)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-5xl items-start justify-center px-6 pb-16 pt-[12vh] text-center md:pt-[10vh]">
        <div className="mx-auto max-w-3xl">
          <Badge variant="series">B2B tubular motor website</Badge>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#DCE5EF] md:text-xl">
            {activeSlide.subtitle}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className={buttonVariants({ variant: "primary" })}
              href={activeSlide.primaryHref}
            >
              {activeSlide.primaryLabel}
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href={activeSlide.secondaryHref}
            >
              {activeSlide.secondaryLabel}
            </Link>
          </div>

          <div className="mt-10 flex justify-center gap-2" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                aria-label={`Show ${slide.title}`}
                className={cn(
                  "h-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5FF]",
                  index === activeIndex
                    ? "w-10 bg-[#00D5FF]"
                    : "w-5 bg-white/35 hover:bg-white/60"
                )}
                key={slide.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
