"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from "react";

export type Drawing = { src: string; alt: string; caption: string };

function Chevron({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 10 16" aria-hidden className={`h-3.5 w-2.5 ${flip ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 1l6 7-6 7" />
    </svg>
  );
}

/**
 * Carousel for drawings (sketches and plans): shows three at a time on desktop, two on a tablet
 * and one on a phone. Each image is shown whole, has its own caption, and opens full size when clicked.
 * The arrows move one drawing at a time.
 */
export default function DrawingCarousel({ items, label }: { items: Drawing[]; label: string }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [first, setFirst] = useState(0);
  const [count, setCount] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Work out which drawings are fully in view, and whether we are at either end.
  const measure = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    const left = el.scrollLeft;
    const right = left + el.clientWidth;
    let f = -1;
    let n = 0;
    kids.forEach((k, i) => {
      if (k.offsetLeft >= left - 2 && k.offsetLeft + k.offsetWidth <= right + 2) {
        if (f < 0) f = i;
        n += 1;
      }
    });
    setFirst(Math.max(f, 0));
    setCount(Math.max(n, 1));
    setAtStart(left <= 2);
    setAtEnd(left + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = (i: number) => {
    const el = scroller.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    const target = kids[Math.max(0, Math.min(items.length - 1, i))];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: target.offsetLeft, behavior: reduce ? "auto" : "smooth" });
  };

  const arrow =
    "absolute top-[38%] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-wine shadow-sm transition hover:bg-cream disabled:pointer-events-none disabled:opacity-0";

  return (
    <div>
      <div className="relative">
        <div
          ref={scroller}
          role="group"
          aria-roledescription="carousel"
          aria-label={label}
          tabIndex={0}
          onScroll={measure}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") { e.preventDefault(); goTo(first - 1); }
            if (e.key === "ArrowRight") { e.preventDefault(); goTo(first + 1); }
          }}
          className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((d, i) => (
            <figure
              key={d.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}: ${d.caption}`}
              className="w-full flex-none snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
            >
              <a href={d.src} target="_blank" rel="noreferrer" aria-label={`Open ${d.caption} full size`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <img
                    src={d.src}
                    alt={d.alt}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="absolute inset-0 block h-full w-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
              </a>
              <figcaption className="mt-3 flex items-baseline gap-3 text-[0.78rem] italic tracking-[0.03em] text-ink/80">
                <span className="label not-italic text-ink/50 lining-nums">{String(i + 1).padStart(2, "0")}</span>
                {d.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <button type="button" aria-label="Previous drawing" disabled={atStart} onClick={() => goTo(first - 1)} className={`${arrow} -left-2 sm:left-2`}>
          <Chevron flip />
        </button>
        <button type="button" aria-label="Next drawing" disabled={atEnd} onClick={() => goTo(first + 1)} className={`${arrow} -right-2 sm:right-2`}>
          <Chevron />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="label text-ink/60">Select a drawing to open it full size</p>
        <div className="flex flex-none gap-1.5">
          {items.map((d, i) => {
            const active = i >= first && i < first + count;
            return (
              <button
                key={d.src}
                type="button"
                aria-label={`Show drawing ${i + 1}: ${d.caption}`}
                aria-current={active}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${active ? "w-5 bg-maroon" : "w-1.5 bg-line hover:bg-maroon/50"}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
