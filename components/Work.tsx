"use client";

import { useEffect, useRef, useState } from "react";
import { categories, projects, type Category } from "@/lib/projects";
import ProjectArt from "./ProjectArt";
import Reveal from "./Reveal";

export default function Work() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [current, setCurrent] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const visible = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => filter === "all" || p.cat === filter);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (current !== null && !d.open) d.showModal();
    if (current !== null) d.scrollTop = 0;
  }, [current]);

  const step = (n: number) =>
    setCurrent((c) => (c === null ? c : (c + n + projects.length) % projects.length));

  const p = projects[current ?? 0];

  return (
    <section id="work" className="section">
      <div className="mb-10 grid grid-cols-1 gap-4 md:mb-16">
        <Reveal>
          <p className="eyebrow">01 — Selected work</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)]">Recent projects</h2>
        </Reveal>
        <Reveal delay={140}>
          {/* Scrolls sideways on narrow phones rather than wrapping to three rows */}
          <div
            role="group"
            aria-label="Filter projects by type"
            className="-mx-5 mt-2 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={filter === c.id}
                onClick={() => setFilter(c.id)}
                className={`flex-none rounded-full border px-4 py-2 text-sm transition-colors ${
                  filter === c.id
                    ? "border-ink bg-ink text-paper"
                    : "border-line hover:border-ink"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:gap-x-12 lg:gap-y-16">
        {visible.map(({ p, i }, n) => (
          <Reveal key={p.slug} className={n % 2 === 1 ? "sm:mt-[clamp(0px,7vw,110px)]" : ""}>
            <button
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`${p.title} — view project`}
              className="group block w-full text-left"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-paper-2">
                <ProjectArt
                  slug={p.slug}
                  alt={p.alt}
                  className="transition-transform duration-[900ms] ease-out group-hover:scale-105 group-focus-visible:scale-105"
                />
              </div>
              <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3.5 gap-y-1 pt-4">
                <span className="text-xs tabular-nums text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl transition-colors group-hover:text-accent md:text-3xl">
                  {p.title}
                </h3>
                <span className="text-xs tabular-nums text-ink-soft">{p.year}</span>
                <p className="col-start-2 text-sm text-ink-soft">
                  {p.type} · {p.location}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Project detail */}
      <dialog
        ref={dialog}
        aria-labelledby="project-title"
        onClose={() => setCurrent(null)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
        className="m-auto max-h-[92dvh] w-[min(1180px,94vw)] max-w-none overflow-auto rounded bg-paper p-0 text-ink backdrop:bg-ink/60 backdrop:backdrop-blur-sm open:grid md:grid-cols-[1.1fr_1fr]"
      >
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label="Close project"
          className="absolute right-3 top-3 z-10 rounded-full border border-ink bg-paper px-3.5 py-1.5 text-sm hover:bg-ink hover:text-paper"
        >
          Close ×
        </button>
        <div className="aspect-[4/3] bg-paper-2 md:aspect-auto md:min-h-[480px]">
          <ProjectArt slug={p.slug} alt={p.alt} />
        </div>
        <div className="grid content-start gap-4 p-6 sm:p-8 lg:p-14">
          <p className="eyebrow">
            {p.type} — {p.year}
          </p>
          <h2 id="project-title" className="text-[clamp(2.2rem,4vw,3.6rem)]">
            {p.title}
          </h2>
          <p className="text-lg leading-normal md:text-xl">{p.blurb}</p>
          <p className="text-ink-soft">{p.text}</p>
          <dl className="mt-3 grid grid-cols-2 gap-x-8">
            {[
              ["Location", p.location],
              ["Year", p.year],
              ["Area", p.area],
              ["Status", p.status],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line py-3">
                <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-soft">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-3 flex gap-2.5">
            <button type="button" onClick={() => step(-1)} className="btn btn-line flex-1 sm:flex-none">
              ← Previous
            </button>
            <button type="button" onClick={() => step(1)} className="btn btn-line flex-1 sm:flex-none">
              Next →
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
