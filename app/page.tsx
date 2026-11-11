import Work from "@/components/Work";

/* ------------------------------------------------------------------ */
/* Content — everything below is placeholder text; replace as needed.  */
/* ------------------------------------------------------------------ */

const contact = {
  email: "hello@example.com",
  phone: "+00 00000 00000",
  instagram: "@your.handle",
};

const facts = [
  {
    heading: "Experience",
    items: ["Junior Architect, Studio name — 2024 to present", "Architectural Intern, Firm name — 2023"],
  },
  {
    heading: "Education",
    items: ["B.Arch, University name — 2019 to 2024"],
  },
  {
    heading: "Software",
    items: ["AutoCAD, Revit, SketchUp", "3ds Max, V-Ray, Adobe Suite"],
  },
];

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="wrap flex items-center justify-between py-4">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.22em]">
            Sowmya
          </a>
          <nav aria-label="Primary" className="flex gap-5 text-[0.7rem] uppercase tracking-[0.16em] sm:gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-1 transition-colors hover:text-accent">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* INTRO */}
        <section className="wrap pb-16 pt-20 md:pb-24 md:pt-32">
          <p className="label">Architecture portfolio</p>
          <h1 className="mt-5 font-serif leading-[0.86]">
            <span className="block text-[clamp(3.5rem,13vw,8.5rem)] uppercase tracking-tight">Sowmya</span>
            <span className="-mt-[0.14em] block pl-[0.4em] text-[clamp(3.5rem,13vw,8.5rem)] font-light italic text-ink-soft">
              Portfolio
            </span>
          </h1>
          <div className="mt-10 h-px w-14 bg-accent" />
          <p className="mt-6 max-w-md text-ink-soft">
            Architect working across housing, cultural buildings and interiors. Selected
            academic, competition and freelance work, 2022–2026.
          </p>
        </section>

        {/* WORK */}
        <section id="work" className="wrap scroll-mt-16 border-t border-line py-16 md:py-24">
          <h2 className="title mb-10 md:mb-14">Selected work</h2>
          <Work />
        </section>

        {/* ABOUT */}
        <section id="about" className="wrap scroll-mt-16 border-t border-line py-16 md:py-24">
          <h2 className="title mb-10 md:mb-14">About</h2>
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
            {/* Portrait placeholder — replace with a photo */}
            <svg
              viewBox="0 0 300 380"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden
              className="aspect-[3/3.8] w-40 md:w-full"
            >
              <rect width="300" height="380" fill="#e2e0dc" />
              <circle cx="150" cy="145" r="54" fill="#c4c2be" />
              <path d="M40 380c0-88 50-136 110-136s110 48 110 136z" fill="#c4c2be" />
            </svg>
            <div>
              <p className="max-w-2xl font-serif text-2xl leading-snug md:text-[1.75rem]">
                I’m Sowmya, an architect who believes good buildings start with careful looking —
                at the site, the light, and the people who will use them.
              </p>
              <p className="mt-5 max-w-2xl text-ink-soft">
                My work moves between hand sketches, physical models and digital drawings. I’m
                currently open to full-time roles and freelance commissions.
              </p>
              <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                {facts.map((f) => (
                  <div key={f.heading} className="border-t border-line pt-4">
                    <dt className="label">{f.heading}</dt>
                    {f.items.map((item) => (
                      <dd key={item} className="mt-2 text-sm">
                        {item}
                      </dd>
                    ))}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="wrap scroll-mt-16 border-t border-line py-16 md:py-24">
          <h2 className="title mb-10 md:mb-14">Contact</h2>
          <a
            href={`mailto:${contact.email}`}
            className="break-all font-serif text-[clamp(1.9rem,6vw,4rem)] leading-tight underline decoration-accent decoration-1 underline-offset-8 transition-colors hover:text-accent"
          >
            {contact.email}
          </a>
          <p className="mt-6 flex flex-wrap gap-x-8 gap-y-1 text-sm text-ink-soft">
            <span>{contact.phone}</span>
            <span>{contact.instagram}</span>
          </p>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="wrap flex justify-between gap-4 py-6 text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
          <p>© {new Date().getFullYear()} Sowmya</p>
          <a className="hover:text-accent" href="#top">
            Top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
