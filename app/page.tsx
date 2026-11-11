/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { Axon, FloorPlan, SiteMap } from "@/components/Drawings";

/* ------------------------------------------------------------------ */
/* Content — all text and photos below are placeholders; replace them. */
/* ------------------------------------------------------------------ */

const contact = {
  email: "hello@example.com",
  phone: "+00 00000 00000",
  instagram: "@your.handle",
};

// Stock photos from Unsplash, loaded from their CDN. To use Sowmya's own images,
// put files in /public/images and change these to paths such as "/images/museum.jpg".
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

const photo = {
  whiteBlocks: u("1547104984-924116a9c464", 1800),
  whiteStack: u("1459767129954-1b1c1f9b9ace"),
  whiteFacade: u("1667226614472-450b13a2e9ed"),
  whiteCurve: u("1483366774565-c783b9f70e2c"),
  whiteCorner: u("1564566698730-9903b9e4a08c"),
  brickHouse: u("1543071293-d91175a68672"),
  brickWindows: u("1759724076793-f28564126030"),
  brickArches: u("1767788840585-686ca0be9cb1"),
  interiorDark: u("1657934771872-2ded6ed63a34", 1800),
  stairsPale: u("1601993957728-1e56ab70c5a8"),
  stairsWood: u("1769738204142-35ce7b6ea0e9"),
  modelA: u("1624066969616-69b0b0301d4d"),
  modelB: u("1653164488636-7407bec89281"),
  marble: u("1566305977571-5666677c6e98"),
  stone: u("1603369425250-b276f2006ec0"),
  brownMarble: u("1633299264475-e8796606b870"),
  drafting: u("1503387837-b154d5074bd2", 900),
};

const lorem =
  "A short paragraph describing the idea behind this work — the site, the brief and the main design decision. Replace this with your own words.";

/* ------------------------------------------------------------------ */

function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} loading="lazy" className={`block h-full w-full object-cover ${className}`} />;
}

/** Serif capitals with an overlapping italic word, e.g. FIRST / Words. */
function Duo({ a, b, className = "" }: { a: string; b: string; className?: string }) {
  return (
    <span className={`block font-serif leading-[0.82] ${className}`}>
      <span className="block uppercase tracking-tight">{a}</span>
      <span className="-mt-[0.12em] block pl-[0.22em] font-light italic opacity-75">{b}</span>
    </span>
  );
}

/** Bold title top-left, pale page number top-right. */
function Head({ title, n }: { title: ReactNode; n: string }) {
  return (
    <div className="relative z-10 flex items-start justify-between px-6 pt-7 lg:px-14 lg:pt-10">
      <h2 className="sheet-title">{title}</h2>
      <span aria-hidden className="ghost">{n}</span>
    </div>
  );
}

function Crumb({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`crumb ${className}`}>{children}</p>;
}

const toc = [
  { href: "#about", label: "About", lines: ["My design philosophy", "Experience"] },
  { href: "#project-1", label: "Courtyard Museum", lines: ["Graduation project", "Academic / 2024"] },
  { href: "#competition", label: "Weavers’ Library", lines: ["Competition entry", "Second prize / 2023"] },
  { href: "#freelance", label: "Brick House", lines: ["Freelance renovation", "Private client / 2025"] },
  { href: "#process", label: "Process", lines: ["Detailed work, site analysis", "Materials"] },
  { href: "#contact", label: "Contact", lines: [] },
];

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-backdrop/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3.5 lg:px-0">
          <a href="#top" className="font-display text-sm font-bold uppercase tracking-[0.2em]">
            Sowmya
          </a>
          <nav aria-label="Primary" className="flex gap-5 text-[0.68rem] uppercase tracking-[0.16em] sm:gap-8">
            <a className="hover:text-accent" href="#about">About</a>
            <a className="hover:text-accent" href="#project-1">Projects</a>
            <a className="hover:text-accent" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex flex-col gap-6 px-3 pb-12 pt-16 sm:px-6 md:gap-10 lg:pt-20">
        {/* COVER */}
        <section className="sheet grid lg:grid-cols-[3fr_1fr]">
          <div className="flex flex-col justify-center px-7 py-16 lg:px-24 lg:py-0">
            <Crumb className="mb-6 text-ink-soft">Architecture portfolio / 2022 — 2026</Crumb>
            <h1 aria-label="Sowmya — Portfolio">
              <Duo a="Sowmya" b="Portfolio" className="text-[clamp(3.6rem,15vw,7.5rem)]" />
            </h1>
            <p className="copy mt-8 max-w-[19rem]">
              Selected academic, competition and freelance work by Sowmya, architect. Housing,
              cultural buildings and interiors — from first site study to detailed drawing.
            </p>
          </div>
          <div className="h-20 bg-rose lg:h-auto" />
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="sheet bg-rose text-white">
          <div className="fill grid gap-10 p-7 lg:grid-cols-2 lg:p-16">
            <ul className="grid content-start gap-4 lg:gap-5">
              {toc.map((t) => (
                <li key={t.href}>
                  <a href={t.href} className="text-base uppercase tracking-[0.06em] hover:underline lg:text-lg">
                    {t.label}
                  </a>
                  {t.lines.map((l) => (
                    <p key={l} className="text-[0.68rem] leading-snug text-white/65">{l}</p>
                  ))}
                </li>
              ))}
            </ul>
            <h2 className="self-end justify-self-start text-maroon lg:justify-self-end">
              <Duo a="Table of" b="Contents" className="text-5xl lg:text-7xl" />
            </h2>
          </div>
        </section>

        {/* 01 — ABOUT */}
        <section id="about" className="sheet">
          <Head title="About me" n="01" />
          <div className="grid gap-8 px-6 pb-8 pt-8 lg:absolute lg:inset-x-14 lg:bottom-0 lg:top-[27%] lg:grid-cols-[210px_1fr_auto] lg:gap-14 lg:p-0">
            <div className="max-w-[210px] bg-accent px-8 pb-6 pt-0 text-white lg:mt-[14%]">
              <div className="-mt-0 aspect-[3/4] overflow-hidden shadow-lg lg:-mt-[30%]">
                <Img src={photo.drafting} alt="Architect drafting at a desk" className="grayscale" />
              </div>
              <p className="crumb mt-6 text-center text-white/90">Architect</p>
            </div>
            <div className="grid content-center gap-6 lg:border-l lg:border-line lg:pb-16 lg:pl-14">
              <p className="copy max-w-md">
                I’m Sowmya, an architect who believes good buildings start with careful looking —
                at the site, the light, and the people who will use them. My work moves between
                hand sketches, physical models and digital drawings, and I enjoy the whole
                process: reading a site, shaping a concept, and resolving it down to the junction
                between two materials.
              </p>
              <ul className="meta grid gap-0.5">
                <li><a className="break-all hover:text-accent" href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li>{contact.phone}</li>
                <li>{contact.instagram}</li>
              </ul>
            </div>
            <p aria-hidden className="hidden self-center pb-16 text-sm uppercase tracking-[0.3em] [writing-mode:vertical-rl] lg:block">
              Contacts
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="sheet">
          <div className="fill grid lg:grid-cols-[47%_1fr]">
            <div className="bg-white px-6 pb-8 pt-6 lg:px-10 lg:pb-10 lg:pt-7">
              <Crumb>About / My design philosophy</Crumb>
              <div className="mt-4 aspect-[3/4] w-full max-w-[300px] overflow-hidden lg:mt-5 lg:aspect-auto lg:h-[88%] lg:w-[62%] lg:max-w-none">
                <Img src={photo.stairsPale} alt="Pale minimalist staircase" className="saturate-50" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-7 px-6 py-10 lg:-ml-[9%] lg:px-0 lg:pr-20">
              <h2>
                <Duo a="My design" b="Philosophy" className="text-5xl lg:text-6xl" />
              </h2>
              <p className="copy max-w-[19rem] lg:ml-[14%]">
                Keep what is already good. Add only what is needed. I look for quiet, well-lit
                spaces built from honest materials, where new work sits comfortably beside the old
                without copying it. Every project starts with a long look at the place and a
                conversation about how it will really be used.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="sheet">
          <div className="fill grid content-center gap-10 px-6 py-10 lg:grid-cols-2 lg:gap-16 lg:px-24">
            <Crumb className="lg:absolute lg:right-14 lg:top-9">About / Experience</Crumb>
            <div>
              <h2 className="mb-6 text-sm uppercase tracking-[0.12em]">Experience</h2>
              {[
                ["Junior Architect / Studio name", "2024 — Present"],
                ["Architectural Intern / Firm name", "2023"],
                ["Freelance Designer", "2022 — Present"],
              ].map(([role, when]) => (
                <div key={role} className="mb-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.08em]">{role}</p>
                  <p className="text-[0.66rem] font-semibold">{when}</p>
                  <p className="copy mt-2">
                    Short description of the role, the kind of projects worked on and the main
                    responsibilities held.
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="mb-6 text-sm uppercase tracking-[0.12em]">Education</h2>
              {[
                ["Degree / University", "2019 — 2024"],
                ["Workshop / Institute", "2022"],
              ].map(([what, when]) => (
                <div key={what} className="mb-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.08em]">{what}</p>
                  <p className="text-[0.66rem] font-semibold">{when}</p>
                  <p className="copy mt-2">Course focus, thesis title or notable result.</p>
                </div>
              ))}
              <h2 className="mb-5 mt-10 text-sm uppercase tracking-[0.12em]">Skills</h2>
              <ul className="copy grid list-disc grid-cols-2 gap-x-8 gap-y-1 pl-4">
                {["Concept design", "Project management", "Space planning", "3D visualisation", "Lighting design", "Construction drawings", "Sustainable design", "Architectural drawings"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 02 — SOFTWARE SKILLS */}
        <section className="sheet">
          <Head title="Software skills" n="02" />
          <div className="grid gap-8 pb-8 pt-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-[19%] lg:grid-cols-[58%_1fr] lg:gap-0 lg:p-0">
            <div className="relative px-6 lg:px-0">
              <div aria-hidden className="absolute bottom-0 left-6 top-0 w-[38%] bg-accent lg:left-[14%] lg:w-[44%]" />
              <div className="relative ml-[10%] py-8 lg:ml-[21%] lg:w-[76%] lg:py-[6%]">
                <div className="aspect-[4/3] overflow-hidden">
                  <Img src={photo.whiteStack} alt="White stacked concrete building" className="saturate-[.35]" />
                </div>
                <p className="crumb mt-3 flex justify-between font-normal normal-case tracking-normal text-ink-soft">
                  <span className="text-white/80">Date: 01/01/2024</span>
                  <span>Project name</span>
                </p>
              </div>
            </div>
            <dl className="grid content-center gap-7 px-6 lg:mb-[10%] lg:border-l lg:border-line lg:px-10">
              {[
                ["AutoCAD", "Plans, sections and full working-drawing sets."],
                ["Revit", "BIM modelling and coordinated documentation."],
                ["3ds Max", "Photoreal exterior and interior renders with V-Ray."],
              ].map(([name, text]) => (
                <div key={name}>
                  <dt className="text-sm uppercase tracking-[0.06em]">{name}:</dt>
                  <dd className="meta mt-1">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* PROJECT 01 — COVER */}
        <section id="project-1" className="sheet min-h-[480px] text-white">
          <div className="absolute inset-0">
            <Img src={photo.interiorDark} alt="Timber-lined interior with stone floor" />
          </div>
          <Crumb className="absolute left-6 top-6 text-white/80 lg:left-[9%] lg:top-[7%]">Selected work / Courtyard Museum</Crumb>
          <div className="absolute inset-x-6 bottom-8 top-14 flex flex-col justify-center bg-black/40 px-8 backdrop-blur-[1px] lg:inset-x-auto lg:bottom-[10%] lg:left-[8%] lg:top-[10%] lg:w-[42%] lg:px-14">
            <h2 className="font-serif text-4xl uppercase leading-[0.95] tracking-tight lg:text-5xl">
              Courtyard
              <br />
              Museum
            </h2>
            <p className="crumb mt-5 font-normal leading-relaxed text-white/85">
              Graduation project
              <br />
              Academic / 2024
            </p>
            <span aria-hidden className="absolute bottom-2 right-4 font-serif text-[6.5rem] font-light italic leading-none lg:-right-4 lg:bottom-0 lg:text-[9rem]">
              01
            </span>
          </div>
        </section>

        {/* 03 — GRADUATION PROJECT */}
        <section className="sheet">
          <Head title="Graduation project" n="03" />
          <p className="meta px-6 pt-2 lg:px-14 lg:pt-3">
            Project title: Courtyard Museum
            <br />
            Date: 01/06/2024
          </p>
          <div className="mt-6 aspect-[16/9] lg:absolute lg:inset-x-0 lg:bottom-[11%] lg:top-[34%] lg:mt-0 lg:aspect-auto">
            <Img src={photo.whiteBlocks} alt="White modernist buildings under an overcast sky" className="saturate-[.3]" />
          </div>
          <div className="h-6 lg:hidden" />
        </section>

        {/* 04 — COMPETITION PROJECTS */}
        <section id="competition" className="sheet">
          <Head title={<>Competition<br />projects</>} n="04" />
          <div className="grid gap-8 px-6 pb-8 pt-8 lg:absolute lg:inset-x-14 lg:bottom-[14%] lg:top-[30%] lg:grid-cols-[1fr_1.05fr_1.5fr] lg:gap-8 lg:p-0">
            <div>
              <p className="copy">About this project: {lorem}</p>
              <Axon className="mt-4 w-full max-w-[190px] text-accent" />
            </div>
            <div className="lg:border-l lg:border-line lg:pl-8">
              <p className="meta">
                Place: Textile district
                <br />
                Year: 2023
                <br />
                Prize: Second prize
                <br />
                Group members: Three
              </p>
              <p className="copy mt-4">
                About this project: a compact reading tower for a weaving community. Deep reveals
                shade the glass and turn every window into a seat.
              </p>
            </div>
            <div className="aspect-[4/3] lg:-mt-[18%] lg:aspect-auto lg:h-[118%]">
              <Img src={photo.brickArches} alt="Brick building with arched entrances" className="saturate-[.7]" />
            </div>
          </div>
        </section>

        {/* 05 — FREELANCING PROJECT */}
        <section id="freelance" className="sheet">
          <Head title={<>Freelancing<br />project</>} n="05" />
          <dl className="meta grid grid-cols-2 gap-x-10 px-6 pt-4 lg:absolute lg:left-[41%] lg:top-[17%] lg:p-0">
            <div><dt className="inline">Place: </dt><dd className="inline">Suburban plot</dd></div>
            <div><dt className="inline">Title: </dt><dd className="inline">Renovating an old house</dd></div>
            <div><dt className="inline">Year: </dt><dd className="inline">2025</dd></div>
            <div><dt className="inline">Role: </dt><dd className="inline">Working drawings</dd></div>
          </dl>
          <div className="grid gap-8 px-6 pb-8 pt-8 lg:absolute lg:inset-x-[13%] lg:bottom-[14%] lg:top-[30%] lg:grid-cols-3 lg:gap-0 lg:p-0">
            <div className="grid content-start gap-4 lg:pr-8">
              <p className="copy">About this project: {lorem}</p>
              <div className="aspect-[4/3]"><Img src={photo.brickHouse} alt="Brick and black timber house" className="saturate-[.6]" /></div>
            </div>
            <div className="grid content-start gap-4 lg:border-x lg:border-line lg:px-8">
              <div className="aspect-[4/3]"><Img src={photo.whiteFacade} alt="White rendered facade" className="saturate-[.3]" /></div>
              <p className="copy">About this project: {lorem}</p>
            </div>
            <div className="grid content-start gap-4 lg:pl-8">
              <p className="copy">About this project: {lorem}</p>
              <div className="aspect-[4/3]"><Img src={photo.brickWindows} alt="Brick wall with four windows" className="saturate-[.6]" /></div>
            </div>
          </div>
        </section>

        {/* 06 — DETAILED WORK */}
        <section id="process" className="sheet">
          <div className="fill grid lg:grid-cols-[36%_30%_34%]">
            <div className="flex flex-col px-6 pb-8 pt-7 lg:pb-0 lg:pl-14 lg:pr-6 lg:pt-10">
              <h2 className="sheet-title relative z-10 whitespace-nowrap">Detailed work</h2>
              <div className="my-auto pt-8 lg:pt-0">
                <p className="crumb mb-3 font-normal text-ink-soft">Write about the details, plans, sections or elevation.</p>
                <FloorPlan className="w-full max-w-[230px]" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 bg-accent px-6 py-12 text-white lg:py-0">
              <Axon className="w-full max-w-[260px]" />
              <p className="crumb max-w-[220px] text-center font-normal text-white/75">
                Structural axonometric — timber frame on a 1.2 m grid
              </p>
            </div>
            <div className="flex flex-col px-6 pb-8 pt-7 lg:pb-0 lg:pl-8 lg:pr-14 lg:pt-10">
              <span aria-hidden className="ghost hidden self-end lg:block">06</span>
              <div className="my-auto">
                <p className="crumb mb-3 font-normal text-ink-soft">Write about the details, plans, sections or elevation.</p>
                <div className="aspect-square max-w-[240px]">
                  <Img src={photo.whiteCurve} alt="Curved white concrete facade" className="saturate-[.3]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — DESIGN SKILLS */}
        <section className="sheet">
          <span aria-hidden className="ghost absolute right-6 top-7 lg:right-14 lg:top-10">07</span>
          <div className="grid gap-8 px-6 pb-8 pt-24 lg:absolute lg:inset-x-14 lg:bottom-[14%] lg:top-[26%] lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-0">
            <div className="lg:border-r lg:border-line lg:pr-10">
              <div className="aspect-[5/3] w-full lg:w-[72%]">
                <Img src={photo.modelA} alt="White and timber architectural model" className="saturate-50" />
              </div>
              <p className="meta mt-2 flex gap-10"><span>Date: 01/01/2023</span><span>Place: Studio</span></p>
              <h2 className="sheet-title mt-3">Design skills</h2>
              <p className="text-sm uppercase tracking-[0.04em]">Model-making</p>
              <p className="copy mt-3 max-w-sm">
                About this model: 1:100 study model in card and basswood, built to test the
                massing against its neighbours before the design was fixed.
              </p>
            </div>
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
              <Img src={photo.modelB} alt="Architectural model of a house on a table" className="saturate-50" />
            </div>
          </div>
        </section>

        {/* 08 — SITE ANALYSIS */}
        <section className="sheet">
          <div className="relative z-10 flex items-start justify-between px-6 pt-7 lg:pl-[15%] lg:pr-14 lg:pt-12">
            <h2 className="sheet-title">Site analysis</h2>
            <span aria-hidden className="ghost">08</span>
          </div>
          <div className="px-6 pb-10 pt-4 lg:absolute lg:inset-x-[15%] lg:bottom-[12%] lg:top-[26%] lg:p-0">
            <p className="meta flex flex-wrap gap-x-10">
              <span>Place: Town centre</span>
              <span>Title: Study of a commercial area</span>
            </p>
            <p className="meta">Year: 2023</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-3 lg:mt-[9%] lg:gap-10">
              {[
                ["Phase 1", "Surrounding areas"],
                ["Phase 2", "Main streets"],
                ["Phase 3", "Commercial axis"],
              ].map(([phase, label], i) => (
                <div key={phase}>
                  <p className="meta">{phase}</p>
                  <p className="meta mb-3 flex items-center gap-2">
                    {i === 0 ? (
                      <span aria-hidden className="h-2.5 w-2.5 rounded-full border border-accent" />
                    ) : (
                      <span aria-hidden>→</span>
                    )}
                    {label}
                  </p>
                  <SiteMap phase={(i + 1) as 1 | 2 | 3} className="w-full max-w-[240px]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE INSPIRATION */}
        <section className="sheet bg-white">
          <div className="fill grid lg:grid-cols-[22%_1fr]">
            <div className="h-44 lg:h-auto">
              <Img src={photo.stairsWood} alt="Timber staircase beside a slatted wall" />
            </div>
            <div className="relative grid gap-8 px-6 py-10 sm:grid-cols-[auto_1fr] lg:items-center lg:gap-16 lg:py-0 lg:pl-8 lg:pr-20">
              <Crumb className="lg:absolute lg:right-14 lg:top-9">Selected work / Courtyard Museum</Crumb>
              <ul aria-label="Colour palette" className="flex gap-2 sm:flex-col lg:gap-2.5">
                {["#4b3a35", "#6b2a12", "#8e8c93", "#b9b5b1"].map((c) => (
                  <li
                    key={c}
                    className="h-16 w-14 lg:h-[4.5rem] lg:w-[4.5rem]"
                    style={{ background: `linear-gradient(135deg, ${c} 0 68%, #fff 68% 74%, ${c} 74%)` }}
                  />
                ))}
              </ul>
              <div className="lg:justify-self-end">
                <h2>
                  <Duo a="The" b="Inspiration" className="text-5xl lg:text-6xl" />
                </h2>
                <p className="copy mt-8 max-w-[17rem] lg:ml-auto">
                  A restrained palette, chosen to age well: dark timber for anything the hand
                  touches, fired brick against white render, and stone or polished concrete
                  underfoot. Replace this with the story behind your own palette.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MATERIALS */}
        <section className="sheet">
          <div aria-hidden className="absolute inset-y-0 right-0 w-[16%] bg-maroon lg:w-[20%]" />
          <div className="relative px-6 pb-8 pt-6 lg:absolute lg:inset-0 lg:px-[7%] lg:pb-[7%] lg:pt-[5%]">
            <Crumb>Selected work / Courtyard Museum</Crumb>
            <div className="relative mt-4 grid h-[340px] grid-cols-[1fr_1.15fr] grid-rows-2 gap-2.5 lg:h-[92%]">
              <div className="row-span-2"><Img src={photo.marble} alt="Grey-veined marble" /></div>
              <div><Img src={photo.stone} alt="Light grey stone with a ridge" /></div>
              <div><Img src={photo.brownMarble} alt="Warm brown stone" /></div>
              <h2 className="pointer-events-none absolute -bottom-2 left-1 font-serif text-6xl font-light italic leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.3)] lg:left-3 lg:text-[7.5rem]">
                Materials
              </h2>
            </div>
          </div>
        </section>

        {/* THE FLOOR PLAN */}
        <section className="sheet">
          <div className="fill grid lg:grid-cols-[43%_1fr]">
            <div className="flex flex-col justify-end bg-maroon px-7 py-10 text-white lg:px-[13%] lg:pb-[13%]">
              <h2 className="text-lg uppercase tracking-[0.04em]">The floor plan</h2>
              <p className="mt-4 text-[0.8rem] leading-relaxed text-white/80 lg:text-justify">
                Living spaces open south to the garden; services and storage form a thick wall to
                the north. Replace this with a note on how the plan is organised and why.
              </p>
            </div>
            <div className="relative flex items-center justify-center px-6 py-12 lg:py-0">
              <Crumb className="absolute right-6 top-6 lg:right-14 lg:top-9">Selected work / Courtyard Museum</Crumb>
              <FloorPlan className="w-full max-w-[330px]" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="sheet bg-rose text-white">
          <div className="fill grid gap-10 p-7 lg:grid-cols-2 lg:p-16">
            <h2 className="text-maroon lg:self-end">
              <Duo a="Get in" b="Touch" className="text-6xl lg:text-8xl" />
            </h2>
            <ul className="grid content-start gap-5 lg:content-end lg:justify-self-end lg:text-right">
              <li>
                <p className="crumb font-normal text-white/65">Email</p>
                <a href={`mailto:${contact.email}`} className="break-all text-lg uppercase tracking-[0.06em] hover:underline">
                  {contact.email}
                </a>
              </li>
              <li>
                <p className="crumb font-normal text-white/65">Phone</p>
                <p className="text-lg uppercase tracking-[0.06em]">{contact.phone}</p>
              </li>
              <li>
                <p className="crumb font-normal text-white/65">Instagram</p>
                <p className="text-lg uppercase tracking-[0.06em]">{contact.instagram}</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="pb-8 text-center text-[0.65rem] uppercase tracking-[0.16em] text-ink-soft">
        © {new Date().getFullYear()} Sowmya · Photos: Unsplash (placeholders)
      </footer>
    </>
  );
}
