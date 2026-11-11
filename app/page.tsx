/* eslint-disable @next/next/no-img-element */

/* ------------------------------------------------------------------ */
/* Content: taken from Sowmya's resume (2026). Edit here.             */
/* ------------------------------------------------------------------ */

const contact = {
  email: "ar.sowmya24@gmail.com",
  location: "Chennai, India",
};

const photo = {
  // Hero is a stock photo from Unsplash (their CDN), standing in until a real project photo is available.
  hero: "https://images.unsplash.com/photo-1792553532354-fe35685ae490?auto=format&fit=crop&w=1800&q=72",
  // Project photos are from WorkEZ's own website (workez.in).
  parkCentre: "/images/park-centre.webp",
  vivera: "/images/vivera.webp",
  portrait: "/images/sowmya.jpg",
};

const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

const overview = [
  { value: "10+", label: "Projects Completed", big: true },
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
    src: photo.parkCentre,
    alt: "Lounge at WorkEZ Park Centre with a curved sofa, timber wall and glass-block screens",
  },
  {
    title: "WorkEZ Vivera",
    type: "Workplace",
    place: "Coimbatore",
    facts: "~100,000 sq. ft. · 2,250+ seats · 3 floors",
    text: "Contributed to the end-to-end delivery of this premium managed office facility, covering GFC documentation, consultant and vendor coordination, design and site resolution, and execution.",
    src: photo.vivera,
    alt: "Reception at WorkEZ Vivera with a stone desk and the WorkEZ sign",
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

const details = [
  ["Clients", "PwC, Accenture, Tata Technologies, Psiog, Everstage, Bluepond AI"],
  ["Languages", "Tamil, English"],
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

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label="Sowmya, home" className={`font-serif text-[2rem] font-medium leading-none tracking-[-0.01em] text-wine ${className}`}>
      Sowmya.
    </a>
  );
}

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-[1440px]">
      {/* HEADER */}
      <header className="gutter flex flex-wrap items-center justify-between gap-x-8 gap-y-5 pb-2 pt-8 lg:pt-12">
        <Logo />
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
              alt="Courtyard with a tree, concrete walls and terracotta benches"
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
              Managed workplace projects delivered with WorkEZ, from design development to
              on-site execution.
            </p>
          </div>

          {projects.map((p) => (
            <article key={p.title} className="group lg:pt-3">
              <div className="overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="block aspect-[1.92/1] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
              <h3 className="pt-3 font-serif text-[1.6rem] tracking-[-0.01em] text-wine">{p.title}</h3>
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
              {details.map(([k, v]) => (
                <div key={k} className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                  <dt className="label pt-0.5 font-semibold text-wine">{k}</dt>
                  <dd className="text-[0.82rem] leading-relaxed tracking-[0.03em]">{v}</dd>
                </div>
              ))}
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
      <footer className="gutter flex flex-col gap-6 pb-10 pt-6 sm:flex-row sm:items-center sm:gap-12">
        <Logo className="!text-[1.65rem]" />
        <span aria-hidden className="hidden h-px flex-1 bg-maroon/40 sm:block" />
        <div className="flex flex-col gap-3 text-[0.8rem] tracking-[0.04em] sm:flex-row sm:items-center sm:gap-8">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-maroon">
            <svg viewBox="0 0 20 16" aria-hidden className="h-3.5 w-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.3">
              <rect x="1" y="1" width="18" height="14" rx="1.5" />
              <path d="M1.5 2l8.5 7 8.5-7" />
            </svg>
            {contact.email}
          </a>
          <span aria-hidden className="hidden h-4 w-px bg-ink/40 sm:block" />
          <span>{contact.location}</span>
        </div>
      </footer>
    </div>
  );
}
