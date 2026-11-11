/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Carousel, { type Slide } from "@/components/Carousel";
import Neural from "@/components/Neural";

/* ------------------------------------------------------------------ */
/* Content: taken from Sowmya's resume (2026). Edit here.             */
/* ------------------------------------------------------------------ */

const contact = {
  email: "ar.sowmya24@gmail.com",
};

const photo = {
  // Photos are from WorkEZ's own website (workez.in).
  hero: "/images/park-centre/lounge.webp",
  portrait: "/images/sowmya-portrait.jpg",
};

const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

const overview = [
  { value: "30+", label: "Projects Completed", big: true },
  { value: "5+", label: "Years of Practice", big: true },
  { value: "Workplace, Residential & Civic", label: "Project Typologies" },
  { value: "COA Registered Architect", label: "CA/2023/155850" },
];

const projects = [
  {
    title: "WorkEZ Park Centre",
    type: "Workplace",
    place: "Alwarpet, Chennai",
    facts: "~35,000 sq. ft. · 600+ seats · 4 floors",
    text: "Handled end-to-end, from design development and GFC documentation to consultant and vendor coordination, site resolution and execution. Also designed the cafeteria and pantry interiors.",
    // Captions are a first reading of each photo; edit them to say what Sowmya wants to explain.
    // The Park Centre lounge photo is used as the page's hero image, so it isn't repeated here.
    slides: [
      {
        caption: "The building at dusk",
        images: [{ src: "/images/park-centre/exterior.webp", alt: "Brick-clad WorkEZ Park Centre building lit at dusk" }],
      },
      {
        caption: "Boardroom and cafeteria",
        images: [
          { src: "/images/park-centre/space-2.webp", alt: "Boardroom with a long timber table and cane-backed chairs" },
          { src: "/images/park-centre/space-3.webp", alt: "Cafeteria with round tables, pendant lights and planting" },
        ],
      },
      {
        caption: "Waiting lounge and breakout seating",
        images: [
          { src: "/images/park-centre/space-1.webp", alt: "Waiting lounge with leather armchairs and a timber wall" },
          { src: "/images/park-centre/space-4.webp", alt: "Breakout seating nook with small round tables" },
        ],
      },
    ] satisfies Slide[],
  },
  {
    title: "WorkEZ Vivera",
    type: "Workplace",
    place: "Coimbatore",
    facts: "~100,000 sq. ft. · 2,250+ seats · 3 floors",
    text: "Contributed to the end-to-end delivery of this premium managed office facility, covering GFC documentation, consultant and vendor coordination, design and site resolution, and execution.",
    slides: [
      {
        caption: "Reception",
        images: [{ src: "/images/vivera/reception.webp", alt: "Reception with a stone desk and the WorkEZ sign" }],
      },
      {
        caption: "The building",
        images: [{ src: "/images/vivera/exterior.webp", alt: "WorkEZ Vivera building with blue glazed facade" }],
      },
      {
        caption: "Lounge and window-side seating",
        images: [
          { src: "/images/vivera/space-1.webp", alt: "Lounge with a curved yellow sofa" },
          { src: "/images/vivera/space-2.webp", alt: "Bar-height seating along a window with planting" },
        ],
      },
      {
        caption: "Meeting room and games area",
        images: [
          { src: "/images/vivera/space-3.webp", alt: "Meeting room with a long table and orange chairs" },
          { src: "/images/vivera/space-4.png", alt: "Games area with a foosball table and pool table" },
        ],
      },
    ] satisfies Slide[],
  },
];

const experience = [
  {
    when: "Feb 2024 – Present",
    role: "Executive Designer",
    firm: "WorkEZ Space Solutions",
    city: "Chennai",
    text: "Corporate workplace interiors: space planning, design development, GFC documentation and working drawings, coordinating clients, consultants, vendors and site teams through to execution.",
  },
  {
    when: "Oct 2022 – Jan 2024",
    role: "Junior Architect",
    firm: "GW Architects",
    city: "Jamaica",
    text: "Schematic and conceptual design, sketches and 3D perspectives, and full construction drawing sets in Vectorworks for projects including MBJ Airport, Spanish Town Hospital and Dundee Villa Development.",
  },
  {
    when: "2017 – 2022",
    role: "Bachelor of Architecture",
    firm: "Hindustan University",
    city: "",
    text: "Including a 2020 exchange semester at TH OWL University of Applied Sciences and Arts.",
  },
];

// Client logos (files in /public/icons/clients), shown as plain wine silhouettes, in the same order
// as the names in the sentence above them. Keep the two in step: every name has a logo and vice versa.
// BigID shows its icon, not its wordmark. The Tata emblem stands in for Tata Technologies.
// w and h are the file's pixel size; `show` is the height they are displayed at, in px.
const clients: { name: string; icon: string; w: number; h: number; show: number }[] = [
  { name: "Accenture", icon: "/icons/clients/accenture.png", w: 228, h: 240, show: 26 },
  { name: "PwC", icon: "/icons/clients/pwc.png", w: 168, h: 82, show: 30 },
  { name: "Siemens", icon: "/icons/clients/siemens.png", w: 240, h: 40, show: 15 },
  { name: "Renault", icon: "/icons/clients/renault.png", w: 182, h: 240, show: 32 },
  { name: "Willis Towers Watson", icon: "/icons/clients/wtw.png", w: 499, h: 164, show: 24 },
  { name: "Colliers", icon: "/icons/clients/colliers.png", w: 620, h: 150, show: 22 },
  { name: "BigID", icon: "/icons/clients/bigid.png", w: 225, h: 227, show: 30 },
  { name: "Tata Technologies", icon: "/icons/clients/tata.png", w: 240, h: 162, show: 28 },
  { name: "Psiog", icon: "/icons/clients/psiog.png", w: 844, h: 238, show: 26 },
  { name: "Everstage", icon: "/icons/clients/everstage.png", w: 1198, h: 228, show: 20 },
  { name: "Bluepond AI", icon: "/icons/clients/bluepond.png", w: 2259, h: 240, show: 14 },
];

// Icons are the ones used in her resume (files in /public/icons).
const software: { name: string; icon: string }[] = [
  { name: "Revit", icon: "/icons/revit.png" },
  { name: "AutoCAD", icon: "/icons/autocad.png" },
  { name: "Vectorworks", icon: "/icons/vectorworks.png" },
  { name: "SketchUp", icon: "/icons/sketchup.png" },
  { name: "Photoshop", icon: "/icons/photoshop.png" },
  { name: "Lumion", icon: "/icons/lumion.png" },
];

/* ------------------------------------------------------------------ */

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 10" aria-hidden className={`h-2.5 w-7 flex-none ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 5h27M22.5 1l4.5 4-4.5 4" />
    </svg>
  );
}

/** Name block: "Architect Portfolio" over "Architect Sowmya" in the header, just the name in the footer. */
function Logo({ stacked = false, className = "" }: { stacked?: boolean; className?: string }) {
  return (
    <a href="#top" aria-label="Architect Sowmya, home" className={`block leading-none text-wine ${className}`}>
      {stacked && <span className="label mb-2.5 block font-semibold">Architect Portfolio</span>}
      <span className="block font-serif text-[2rem] font-medium leading-none tracking-[-0.01em]">
        Architect Sowmya
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-[1440px]">
      {/* HEADER */}
      <header className="gutter flex flex-wrap items-center justify-between gap-x-8 gap-y-5 pb-2 pt-8 lg:pt-12">
        <Logo stacked />
        <nav aria-label="Primary" className="flex w-full justify-between gap-6 text-[0.9rem] tracking-[0.02em] sm:w-auto sm:justify-start sm:gap-10 lg:mr-[1.5%] lg:gap-12">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              className={`border-b pb-2 transition-colors hover:border-maroon hover:text-maroon ${
                i === 0 ? "border-maroon" : "border-transparent"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="relative lg:grid lg:grid-cols-[36%_1fr]">
          {/* maroon block behind the photo's lower-right corner */}
          <div aria-hidden className="absolute bottom-0 right-0 top-[46%] hidden w-[26%] bg-maroon lg:block" />

          <div className="gutter relative pb-10 pt-10 lg:pb-16 lg:pl-[18.3%] lg:pr-0 lg:pt-[4.5rem]">
            <p className="label flex flex-wrap gap-x-4 gap-y-1 font-semibold text-wine">
              <span>Architect</span>
              <span aria-hidden>/</span>
              <span>Interior &amp; Workplace Designer</span>
            </p>
            <h1 className="display mt-7 text-[clamp(3rem,4.2vw,4.4rem)] lg:whitespace-nowrap">
              Spaces for
              <br />
              <em>People</em> and <em>Place</em>
            </h1>
            <span className="rule mt-8" />
            <p className="body mt-8 max-w-[21rem]">
              Workplace interiors and architecture, taken from client brief and space planning
              through detailed design, documentation and execution.
            </p>
            <a href="#projects" className="label group mt-10 inline-flex items-center gap-4 text-wine">
              Explore projects
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>

          <div className="relative pb-6 pl-6 sm:pl-10 lg:pb-8 lg:pl-0 lg:pr-[8.3%] lg:pt-6">
            <div aria-hidden className="absolute bottom-0 right-0 top-[45%] w-[42%] bg-maroon lg:hidden" />
            <img
              src={photo.hero}
              alt="Lounge at WorkEZ Park Centre with a curved sofa, timber wall and glass-block screens"
              className="relative block aspect-[4/3] w-[calc(100%-1.5rem)] object-cover sm:w-[calc(100%-2.5rem)] lg:aspect-[1.74/1] lg:w-full"
            />
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" aria-labelledby="overview-title" className="gutter mt-10 scroll-mt-6 bg-sand py-9 lg:mt-7">
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-[13.5%_1fr_0.85fr_1.1fr_1fr] lg:items-center lg:gap-0">
            <h2 id="overview-title" className="label font-semibold text-wine sm:col-span-2 lg:col-span-1">
              Overview
            </h2>
            {overview.map((o, i) => (
              <div key={o.label} className={`border-l py-1 pl-6 lg:pl-[22%] ${i === 0 ? "border-maroon" : "border-line"}`}>
                <p
                  className={`font-serif lining-nums tracking-[-0.01em] text-wine ${
                    o.big ? "text-[2.7rem] leading-none" : "max-w-[12rem] text-[1.4rem] leading-[1.15]"
                  }`}
                >
                  {o.value}
                </p>
                <p className="mt-2.5 text-[0.8rem] tracking-[0.03em]">{o.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTED PROJECTS */}
        <section id="projects" className="gutter grid scroll-mt-6 gap-10 py-12 lg:grid-cols-[21%_1fr_1fr] lg:gap-x-6 lg:pb-10 lg:pt-9">
          <div className="lg:pr-4">
            <p className="label font-semibold text-wine">Projects</p>
            <h2 className="display mt-6 text-[clamp(2.5rem,4vw,3.5rem)] lg:mt-7">
              Selected
              <br />
              <em>Projects</em>
            </h2>
            <span className="rule mt-7" />
            <p className="body mt-7 max-w-[17rem] lg:max-w-[12rem]">
              A research-led concept project on the workplace and the mind, and managed
              workplace projects delivered with WorkEZ.
            </p>
          </div>

          {/* Concept project, opens its own project page */}
          <Link
            href="/projects/cognitive-playground"
            className="group relative grid min-w-0 overflow-hidden border border-line transition-colors hover:border-maroon sm:grid-cols-[1.15fr_1fr] lg:col-span-2 lg:col-start-2"
          >
            {/* The image fills its own box (fixed shape on a phone, full card height beside the text on
                larger screens). It is absolutely positioned so Safari can't stretch it over the text. */}
            <div className="relative aspect-[16/9] overflow-hidden sm:aspect-auto">
              <img
                src="/images/cognitive-playground/reception-1.webp"
                width={1920}
                height={1080}
                alt="Render of the Cognitive Playground reception"
                loading="lazy"
                className="absolute inset-0 block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
            </div>
            <div className="relative flex flex-col justify-between gap-8 overflow-hidden px-6 py-7 sm:px-8">
              <Neural className="pointer-events-none absolute -right-10 bottom-0 h-3/4 w-full text-maroon/10 transition-colors group-hover:text-maroon/25" />
              <div className="relative">
                <p className="label flex flex-wrap gap-x-4 gap-y-1 font-normal">
                  <span>Concept project</span>
                  <span aria-hidden>/</span>
                  <span>Workplace design</span>
                </p>
                <h3 className="mt-4 font-serif text-[clamp(1.9rem,3vw,2.6rem)] leading-none tracking-[-0.01em] text-wine">
                  Cognitive <em>Playground</em>
                </h3>
                <p className="mt-3 max-w-md text-[0.85rem] leading-relaxed tracking-[0.03em]">
                  A Neuroscience-Inspired, Biomimetic Workplace. Circulation planned like a nervous
                  system, with each zone keeping its own identity.
                </p>
              </div>
              <span className="label relative inline-flex items-center gap-4 text-wine">
                View project
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </div>
          </Link>

          {projects.map((p, i) => (
            <article key={p.title} className={`min-w-0 lg:pt-3 ${i === 0 ? "lg:col-start-2" : ""}`}>
              <Carousel slides={p.slides} label={`${p.title} photos`} />
              <h3 className="pt-4 font-serif text-[1.6rem] tracking-[-0.01em] text-wine">{p.title}</h3>
              <p className="label mt-2.5 flex flex-wrap gap-x-4 gap-y-1 font-normal">
                <span>{p.type}</span>
                <span aria-hidden>/</span>
                <span>{p.place}</span>
              </p>
              <p className="mt-3 text-[0.8rem] font-medium tracking-[0.03em] text-wine lining-nums">{p.facts}</p>
              <p className="mt-2 max-w-[30rem] text-[0.8rem] leading-relaxed tracking-[0.03em]">{p.text}</p>
            </article>
          ))}
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="gutter grid scroll-mt-6 gap-10 bg-sand py-10 lg:grid-cols-[22%_1fr] lg:gap-0 lg:py-9">
          <div>
            <p className="label font-semibold text-wine">Experience</p>
            <h2 className="display mt-6 text-[clamp(2.3rem,3.4vw,3rem)] italic">
              A Journey
              <br />
              in Practice
            </h2>
            <span className="rule mt-7" />
          </div>

          <ol>
            {experience.map((e, i) => (
              <li
                key={e.when}
                className="grid grid-cols-[2rem_1fr] gap-x-4 pb-7 last:pb-0 lg:grid-cols-[9.5rem_3rem_1fr_1.35fr] lg:gap-x-5 lg:pb-6"
              >
                <p className="col-start-2 text-[0.78rem] tracking-[0.03em] text-wine lg:col-start-1 lg:row-start-1 lg:pl-[10%] lg:pt-1.5">
                  {e.when}
                </p>
                <div aria-hidden className="relative col-start-1 row-span-3 row-start-1 lg:col-start-2 lg:row-span-1">
                  {i < experience.length - 1 && (
                    <span className="absolute left-[5px] top-3 h-[calc(100%+1.75rem)] w-px bg-maroon/70 lg:top-4 lg:h-[calc(100%+1.5rem)]" />
                  )}
                  <span className="relative mt-1 block h-[11px] w-[11px] rounded-full border border-maroon bg-sand lg:mt-2" />
                </div>
                <div className="col-start-2 mt-1 lg:col-start-3 lg:row-start-1 lg:mt-0">
                  <h3 className="font-serif text-[1.35rem] tracking-[-0.01em] text-wine">{e.role}</h3>
                  <p className="label mt-1 flex flex-wrap gap-x-4 font-normal">
                    <span>{e.firm}</span>
                    {e.city && (
                      <>
                        <span aria-hidden>/</span>
                        <span>{e.city}</span>
                      </>
                    )}
                  </p>
                </div>
                <p className="col-start-2 mt-2 text-[0.8rem] leading-relaxed tracking-[0.03em] lg:col-start-4 lg:row-start-1 lg:mt-0 lg:max-w-[24rem]">
                  {e.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ABOUT */}
        <section id="about" className="grid scroll-mt-6 items-center gap-10 py-10 lg:grid-cols-[44%_1fr] lg:gap-0 lg:py-8">
          <div className="relative pb-4 pl-6 pr-6 sm:pl-10 sm:pr-10 lg:pb-[1.1rem] lg:pl-[14%] lg:pr-0">
            {/* maroon block behind the portrait's lower-left corner */}
            <div aria-hidden className="absolute bottom-0 left-0 top-[58%] w-[45%] bg-maroon sm:left-4 lg:left-[8.5%] lg:w-[33%]" />
            {/* The portrait has a white background; multiply blends it into the panel colour. */}
            <div className="relative aspect-[1.3/1] overflow-hidden bg-[#e4ddd4]">
              <img
                src={photo.portrait}
                alt="Portrait of Sowmya"
                loading="lazy"
                className="absolute left-1/2 top-[-22%] h-[160%] w-auto max-w-none -translate-x-1/2 mix-blend-multiply"
              />
            </div>
          </div>
          <div className="gutter lg:pl-[16%] lg:pr-[10%]">
            <p className="label font-semibold text-wine">About</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,3.3vw,2.9rem)] italic">
              A Practice Rooted in
              <br />
              Context and Care
            </h2>
            <span className="rule mt-6" />
            <p className="body mt-6">
              I’m Sowmya, a Chennai-based architect and interior &amp; workplace designer,
              registered with the Council of Architecture. My experience spans workplace
              interiors, architectural design, technical documentation and project coordination.
            </p>
            <p className="body mt-4">
              I work with corporate clients, consultants, vendors and site teams to turn
              functional requirements into efficient, buildable and visually considered spaces,
              where design thinking, technical detailing and execution meet.
            </p>
            <dl className="mt-7 grid gap-3 border-t border-line pt-6">
              <div className="grid gap-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                <dt className="label pt-1 font-semibold text-wine">Clients</dt>
                <dd>
                  <p className="mb-4 text-[0.82rem] leading-relaxed tracking-[0.03em]">
                    Delivered projects for 20+ global enterprises and high-growth startups, including
                    Accenture, PwC, Siemens, Renault, Willis Towers Watson, Colliers, BigID, Tata Technologies, Psiog, Everstage and Bluepond AI.
                  </p>
                  <ul className="flex flex-wrap items-center gap-x-8 gap-y-5">
                    {clients.map((c) => (
                      <li key={c.name}>
                        {/* The logo is used as a mask so every one takes the same wine colour. */}
                        <span
                          role="img"
                          aria-label={c.name}
                          className="block bg-wine"
                          style={{
                            height: c.show,
                            aspectRatio: `${c.w} / ${c.h}`,
                            mask: `url(${c.icon}) center / contain no-repeat`,
                            WebkitMask: `url(${c.icon}) center / contain no-repeat`,
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="grid gap-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                <dt className="label pt-2 font-semibold text-wine">Software</dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-6 gap-y-4">
                    {software.map((s) => (
                      <li key={s.name} className="flex w-[3.6rem] flex-col items-center gap-2 text-center">
                        {/* The icon is used as a mask so every logo takes the same wine colour. */}
                        <span
                          aria-hidden
                          className="block h-10 w-10 bg-wine"
                          style={{
                            mask: `url(${s.icon}) center / contain no-repeat`,
                            WebkitMask: `url(${s.icon}) center / contain no-repeat`,
                          }}
                        />
                        <span className="text-[0.62rem] uppercase leading-tight tracking-[0.1em]">{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="gutter flex flex-col gap-5 pb-10 pt-6 sm:flex-row sm:items-center sm:gap-12">
        <span aria-hidden className="h-px w-full bg-maroon/40 sm:w-auto sm:flex-1" />
        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-[0.8rem] tracking-[0.04em] hover:text-maroon">
          <svg viewBox="0 0 20 16" aria-hidden className="h-3.5 w-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.3">
            <rect x="1" y="1" width="18" height="14" rx="1.5" />
            <path d="M1.5 2l8.5 7 8.5-7" />
          </svg>
          {contact.email}
        </a>
      </footer>
    </div>
  );
}
