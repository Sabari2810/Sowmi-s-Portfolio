/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import Render, { type RenderImage } from "@/components/Render";

export const metadata: Metadata = {
  title: "Client Projects | Sowmya P",
  description:
    "Client workplace interiors: an Accenture reception, and corridor ceiling and pantry details at WorkEZ Park Centre.",
};

/* ------------------------------------------------------------------ */
/* Content. Descriptions are written from the renders and drawings;     */
/* edit them freely. Files are in /public/images/client-projects.       */
/* The PDF sheets were rendered to images; select a sheet on the page   */
/* to open it full size.                                                */
/* ------------------------------------------------------------------ */

const dir = "/images/client-projects";

const accentureRender: RenderImage = { src: `${dir}/accenture/reception-render.webp`, w: 1600, h: 900 };

type SheetData = { src: string; w: number; h: number; alt: string; caption: string };

const accentureSheets: SheetData[] = [
  { src: `${dir}/accenture/niche-wall.webp`, w: 2400, h: 1697, alt: "Detail drawing of the arched niche wall: plan, elevation and sections", caption: "DD-005 Niche wall detail" },
  { src: `${dir}/accenture/planter.webp`, w: 2400, h: 1697, alt: "Detail drawing of the stepped planter: plan, elevation and sections", caption: "DD-006 Planter detail" },
  { src: `${dir}/accenture/reception-table.webp`, w: 2400, h: 1697, alt: "Detail drawing of the reception table: plan, views and section", caption: "DD-007 Reception table detail" },
  { src: `${dir}/accenture/logo-wall.webp`, w: 2400, h: 1697, alt: "Detail drawing of the logo backwall: plan, elevation and sections", caption: "DD-008 Logo backwall" },
];

const ceilingSheet: SheetData = {
  src: `${dir}/park-centre/corridor-ceiling.webp`,
  w: 2400,
  h: 1697,
  alt: "Reflected ceiling plan and sections of the first-floor corridor ceiling",
  caption: "Corridor ceiling, 1st floor",
};

const pantrySheet: SheetData = {
  src: `${dir}/park-centre/pantry-corridor.webp`,
  w: 2800,
  h: 3961,
  alt: "Detail drawing sheet of the pantry and common corridor: plan, elevations, details and material schedule",
  caption: "Pantry and common corridor, 3rd floor",
};

/* ------------------------------------------------------------------ */

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 10" aria-hidden className={`h-2.5 w-7 flex-none ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 5h27M22.5 1l4.5 4-4.5 4" />
    </svg>
  );
}

/** A drawing sheet shown whole; selecting it opens the full-size file. */
function Sheet({ d }: { d: SheetData }) {
  return (
    <figure className="min-w-0">
      <a
        href={d.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${d.caption} full size`}
        className="group block overflow-hidden border border-line bg-white"
      >
        <img
          src={d.src}
          width={d.w}
          height={d.h}
          alt={d.alt}
          loading="lazy"
          className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
        />
      </a>
      <figcaption className="mt-3 text-[0.78rem] italic tracking-[0.03em] text-ink/80">{d.caption}</figcaption>
    </figure>
  );
}

function Opener({ n, label, title }: { n: string; label: string; title: React.ReactNode }) {
  return (
    <div>
      <p className="label flex gap-3 font-semibold text-wine">
        <span className="lining-nums">{n}</span>
        <span aria-hidden>/</span>
        <span>{label}</span>
      </p>
      <h2 className="display mt-6 text-[clamp(2.2rem,3.6vw,3.2rem)]">{title}</h2>
      <span className="rule mt-7" />
    </div>
  );
}

export default function ClientProjects() {
  return (
    <div className="mx-auto max-w-[1440px]">
      {/* HEADER */}
      <header className="gutter flex items-center justify-between gap-6 pt-8 lg:pt-12">
        <Link href="/" aria-label="Sowmya, home" className="font-serif text-[2rem] font-medium leading-none tracking-[-0.01em] text-wine">
          Sowmya.
        </Link>
        <Link href="/#projects" className="label group inline-flex items-center gap-3 text-wine">
          <Arrow className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1.5" />
          All projects
        </Link>
      </header>

      <main>
        {/* INTRO */}
        <section className="gutter pb-12 pt-12 lg:pb-16 lg:pt-20">
          <p className="label flex flex-wrap gap-x-4 gap-y-1 font-semibold text-wine">
            <span>Client projects</span>
            <span aria-hidden>/</span>
            <span>Workplace interiors</span>
          </p>
          <h1 className="display mt-7 text-[clamp(3rem,8vw,6.5rem)]">
            Client <em>Projects</em>
          </h1>
          <p className="body mt-7 max-w-xl">
            Reception, ceiling and pantry designs for client workplaces, shown as renders and
            detail drawings.
          </p>
        </section>

        {/* 01 ACCENTURE */}
        <section className="gutter border-t border-line py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[34%_1fr] lg:gap-0">
            <Opener n="01" label="Accenture" title={<>Second-floor <em>reception</em></>} />
            <div className="lg:pl-[8%]">
              <p className="font-serif text-[clamp(1.35rem,1.9vw,1.7rem)] leading-snug text-ink">
                A reception built around a back-lit logo wall in rust-toned laminate.
              </p>
              <p className="body mt-5 max-w-2xl">
                A curved white reception desk sits in front of the wall, with flap-barrier gates
                controlling the entry. Arched niche walls with LED cove lighting, stepped planters
                and a sinuous line of light above the logo make the arrival warm and considered.
              </p>
            </div>
          </div>

          <figure className="mt-12 lg:mt-16">
            <Render image={accentureRender} label="the Accenture reception" file={`${dir}/accenture/reception-render.webp`} eager />
            <figcaption className="label mt-3 text-ink/60">Reception render</figcaption>
          </figure>

          <div className="mt-14 lg:mt-20">
            <p className="label font-semibold text-wine">Detail drawings</p>
            <p className="label mt-2 text-ink/60">Select a drawing to open it full size</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:gap-10">
              {accentureSheets.map((d) => (
                <Sheet key={d.src} d={d} />
              ))}
            </div>
          </div>
        </section>

        {/* 02 PARK CENTRE */}
        <section className="gutter border-t border-line py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[34%_1fr] lg:gap-0">
            <Opener n="02" label="WorkEZ Park Centre" title={<>Corridor ceiling <em>and pantry</em></>} />
            <div className="lg:pl-[8%]">
              <p className="font-serif text-[clamp(1.35rem,1.9vw,1.7rem)] leading-snug text-ink">
                Detail drawings for two areas of Park Centre.
              </p>
              <p className="body mt-5 max-w-2xl">
                The first-floor corridor gets a designer ceiling of polished timber beading over
                black laminate, with slim black profile lights and openable access panels that keep
                the services above reachable. The third-floor pantry and common corridor are drawn
                in plan, elevation and construction detail, with a material schedule covering Corian
                counters, walnut laminate, terracotta-stone cabinetry, marfil floor tile and a black
                granite threshold.
              </p>
            </div>
          </div>

          <p className="label mt-12 text-ink/60 lg:mt-16">Select a drawing to open it full size</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <Sheet d={ceilingSheet} />
            <Sheet d={pantrySheet} />
          </div>
        </section>

        <section className="gutter py-10">
          <Link href="/#projects" className="label group inline-flex items-center gap-4 text-wine">
            Back to all projects
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="gutter flex flex-col gap-5 pb-10 pt-2 sm:flex-row sm:items-center sm:gap-12">
        <span aria-hidden className="h-px w-full bg-maroon/40 sm:w-auto sm:flex-1" />
        <a href="mailto:ar.sowmya24@gmail.com" className="text-[0.8rem] tracking-[0.04em] hover:text-maroon">
          ar.sowmya24@gmail.com
        </a>
      </footer>
    </div>
  );
}
