"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";

export type Slide = {
  /** One image fills the frame; two sit side by side (used for the smaller portrait photos). */
  images: {
    src: string;
    alt: string;
    /** "contain" shows the whole picture (for tall images in a wide frame); the default fills the frame. */
    fit?: "cover" | "contain";
    /** CSS background behind a "contain" picture, e.g. a gradient matching its edges. */
    backdrop?: string;
  }[];
  caption: string;
};

function Chevron({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 10 16" aria-hidden className={`h-3.5 w-2.5 ${flip ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 1l6 7-6 7" />
    </svg>
  );
}

/** Swipeable photo carousel with arrows, a counter and a caption per slide. */
export default function Carousel({ slides, label }: { slides: Slide[]; label: string }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (i: number) => {
    const el = scroller.current;
    if (!el) return;
    const next = Math.max(0, Math.min(slides.length - 1, i));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: next * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  const arrow =
    "absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-wine shadow-sm transition hover:bg-cream disabled:pointer-events-none disabled:opacity-0";

  return (
    <div>
      <div className="relative">
        <div
          ref={scroller}
          role="group"
          aria-roledescription="carousel"
          aria-label={label}
          tabIndex={0}
          onScroll={(e) => {
            const el = e.currentTarget;
            setIndex(Math.round(el.scrollLeft / el.clientWidth));
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
            if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
          }}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s, i) => (
            <div
              key={s.caption}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${s.caption}`}
              className="flex aspect-[1.92/1] w-full flex-none snap-center gap-1.5 bg-sand"
            >
              {s.images.map((im) => (
                // Each photo fills its own box; absolute positioning avoids Safari's percentage-height quirks.
                <div key={im.src} className="relative min-w-0 flex-1" style={im.backdrop ? { background: im.backdrop } : undefined}>
                  <img
                    src={im.src}
                    alt={im.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 block h-full w-full ${im.fit === "contain" ? "object-contain" : "object-cover"}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <button type="button" aria-label="Previous photo" disabled={index === 0} onClick={() => go(index - 1)} className={`${arrow} left-2.5`}>
          <Chevron flip />
        </button>
        <button type="button" aria-label="Next photo" disabled={index === slides.length - 1} onClick={() => go(index + 1)} className={`${arrow} right-2.5`}>
          <Chevron />
        </button>
        <span className="pointer-events-none absolute bottom-2.5 right-2.5 rounded-full bg-wine px-3 py-1.5 text-xs font-medium tracking-[0.1em] text-white ring-1 ring-white/40 lining-nums">
          {index + 1} / {slides.length}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <p aria-live="polite" className="text-[0.78rem] italic tracking-[0.03em] text-ink/80">
          {slides[index]?.caption}
        </p>
        <div className="flex flex-none gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.caption}
              type="button"
              aria-label={`Show photo ${i + 1}: ${s.caption}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-maroon" : "w-1.5 bg-line hover:bg-maroon/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
