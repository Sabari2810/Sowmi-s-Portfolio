"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import ProjectArt from "./ProjectArt";

export default function Work() {
  const [current, setCurrent] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

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
    <>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
        {projects.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`${p.title} — view project`}
            className="group block w-full text-left"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <ProjectArt
                slug={p.slug}
                alt={p.alt}
                className="transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
            <div className="flex items-baseline justify-between gap-4 pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] transition-colors group-hover:text-accent">
                {p.title}
              </h3>
              <span className="text-sm text-ink-soft">{p.year}</span>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{p.kind}</p>
          </button>
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
        className="m-auto max-h-[92dvh] w-[min(1040px,94vw)] max-w-none overflow-auto bg-paper p-0 text-ink backdrop:bg-ink/50 open:grid md:grid-cols-[1.2fr_1fr]"
      >
        <div className="aspect-[4/3] md:aspect-auto md:min-h-[440px]">
          <ProjectArt slug={p.slug} alt={p.alt} />
        </div>
        <div className="grid content-start gap-4 p-6 sm:p-8 lg:p-10">
          <p className="label">{p.kind}</p>
          <h2 id="project-title" className="title">
            {p.title}
          </h2>
          <p className="text-[0.95rem] text-ink-soft">
            {p.blurb} {p.text}
          </p>
          <dl className="mt-2 grid grid-cols-2 gap-x-6 text-sm">
            {[
              ["Place", p.place],
              ["Year", p.year],
              ["Role", p.role],
              ["Tools", p.tools],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line py-3">
                <dt className="label">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-2 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.14em]">
            <span className="flex gap-5">
              <button type="button" onClick={() => step(-1)} className="py-2 hover:text-accent">
                ← Prev
              </button>
              <button type="button" onClick={() => step(1)} className="py-2 hover:text-accent">
                Next →
              </button>
            </span>
            <button type="button" onClick={() => dialog.current?.close()} className="py-2 hover:text-accent">
              Close ×
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
