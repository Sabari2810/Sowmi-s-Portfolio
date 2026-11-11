import ContactForm from "@/components/ContactForm";
import Nav from "@/components/Nav";
import ProjectArt from "@/components/ProjectArt";
import Reveal from "@/components/Reveal";
import Work from "@/components/Work";
import { projects } from "@/lib/projects";

const stats = [
  ["48", "Built projects"],
  ["13", "Years of practice"],
  ["9", "Design awards"],
  ["4", "Countries"],
];

const facts = [
  ["Education", "M.Arch, Royal Academy of Fine Arts"],
  ["Registered", "Chartered architect since 2009"],
  ["Teaching", "Visiting critic, School of Architecture"],
  ["Team", "Seven architects & designers"],
];

const steps = [
  ["Listen", "We start with long conversations and a slow walk of the site, mapping sun, wind, views and the way you actually live or work."],
  ["Draw", "Hand sketches and physical models come first. We test many ideas quickly, then refine one with you until it feels inevitable."],
  ["Detail", "Every junction is drawn and costed. We work with engineers and makers early so the design survives contact with the budget."],
  ["Build", "We stay on site through construction, administering the contract and protecting the details that make the building yours."],
];

const services = [
  "Architecture",
  "Interior design",
  "Feasibility studies",
  "Adaptive reuse",
  "Masterplanning",
  "Furniture & joinery",
];

const awards = [
  ["2025", "National Architecture Award", "Halden House — House of the Year"],
  ["2024", "Civic Trust Commendation", "Kiln Court Library"],
  ["2024", "Featured, The Architectural Review", "“Brick, again” — studio profile"],
  ["2023", "Housing Design Award", "Terrace Nine — Best small scheme"],
  ["2021", "Emerging Practice of the Year", "Shortlisted"],
];

const h2 = "text-[clamp(2.4rem,5vw,4.5rem)]";

export default function Home() {
  const hero = projects[0];

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2.5 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />

      <main id="top">
        {/* HERO */}
        <section className="grid min-h-svh items-center gap-8 px-5 pb-8 pt-24 md:px-10 md:pt-32 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-16">
          <div className="grid gap-6 md:gap-7">
            <Reveal>
              <p className="eyebrow">Architecture &amp; interiors — est. 2012</p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="text-[clamp(2.9rem,8.4vw,8rem)]">
                Buildings that <em>listen</em> to their ground.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="max-w-xl text-ink-soft md:text-lg">
                We are a small studio designing houses, public rooms and cultural spaces. Each
                project begins with the site — its light, its weather, its neighbours — and ends
                with something built to be lived in for a hundred years.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-solid" href="#work">
                  View selected work
                </a>
                <a className="btn btn-line" href="#contact">
                  Get in touch
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <figure>
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-paper-2 lg:aspect-[4/5]">
                <ProjectArt slug={hero.slug} alt={hero.alt} />
              </div>
              <figcaption className="mt-3 flex justify-between gap-3 text-xs text-ink-soft md:text-sm">
                <span>{hero.title}</span>
                <span>Coastal residence, {hero.year}</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <ul
              aria-label="Studio in numbers"
              className="grid grid-cols-2 border-t border-line md:grid-cols-4"
            >
              {stats.map(([n, label]) => (
                <li key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-3 md:py-5">
                  <strong className="font-serif text-4xl font-normal leading-none md:text-[2.6rem]">
                    {n}
                  </strong>
                  <span className="text-sm text-ink-soft">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* WORK */}
        <Work />

        {/* STUDIO */}
        <section
          id="studio"
          className="section grid gap-10 bg-paper-2 md:grid-cols-[minmax(220px,.7fr)_1.3fr] md:gap-16 lg:gap-28"
        >
          <Reveal>
            <p className="eyebrow">02 — Studio</p>
            <div aria-hidden className="mt-6 aspect-[3/3.8] max-w-[260px] overflow-hidden rounded-sm md:max-w-none">
              <svg viewBox="0 0 300 380" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
                <rect width="300" height="380" fill="#cfc6b6" />
                <rect y="250" width="300" height="130" fill="#24221f" />
                <circle cx="150" cy="140" r="52" fill="#24221f" />
                <path d="M50 380c0-80 45-130 100-130s100 50 100 130z" fill="#b5532a" />
              </svg>
            </div>
            <p className="mt-2.5 text-sm text-ink-soft">Nora Halden, founding architect</p>
          </Reveal>

          <div className="grid content-start gap-6">
            <Reveal>
              <h2 className={h2}>
                A small practice, <em>on purpose</em>.
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <p className="max-w-2xl text-lg leading-normal md:text-[1.35rem]">
                Nora founded the studio in 2012 after a decade working on libraries, schools and
                housing across northern Europe. We stay small so the people who draw your building
                are the same people who walk the site with you.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="max-w-2xl text-ink-soft">
                Our work is quiet rather than loud: honest materials, careful proportions and
                daylight treated as a building material in its own right. We take on a handful of
                commissions each year and see every one through from first sketch to final
                handover.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <dl className="mt-4 grid gap-x-8 sm:grid-cols-2">
                {facts.map(([k, v]) => (
                  <div key={k} className="border-t border-line py-3.5">
                    <dt className="text-[0.7rem] uppercase tracking-[0.12em] text-ink-soft">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" className="section bg-ink text-paper">
          <div className="mb-10 grid gap-4 md:mb-16">
            <Reveal>
              <p className="eyebrow !text-[#a39d90]">03 — Approach</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className={h2}>How we work</h2>
            </Reveal>
          </div>
          <ol className="grid border-t border-[#3a3833] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], i) => (
              <li
                key={title}
                className="border-b border-[#3a3833] py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-7 lg:py-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <Reveal delay={i * 70}>
                  <span className="text-xs tracking-widest text-accent">0{i + 1}</span>
                  <h3 className="mb-3 mt-4 text-4xl lg:mt-12">{title}</h3>
                  <p className="text-[0.95rem] text-[#b9b3a6]">{text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal>
            <ul aria-label="Services" className="mt-10 flex flex-wrap gap-2.5 md:mt-20">
              {services.map((s) => (
                <li key={s} className="rounded-full border border-[#4a4741] px-4 py-2 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* RECOGNITION */}
        <section id="recognition" className="section">
          <div className="mb-10 grid gap-4 md:mb-16">
            <Reveal>
              <p className="eyebrow">04 — Recognition</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className={h2}>Awards &amp; press</h2>
            </Reveal>
          </div>
          <ul className="border-b border-line">
            {awards.map(([year, title, detail]) => (
              <li key={title} className="border-t border-line py-5">
                <Reveal className="grid grid-cols-[52px_1fr] items-baseline gap-x-4 gap-y-1 md:grid-cols-[90px_1.2fr_1fr]">
                  <span className="text-sm tabular-nums text-ink-soft">{year}</span>
                  <strong className="font-serif text-2xl font-normal leading-tight md:text-[1.6rem]">
                    {title}
                  </strong>
                  <span className="col-start-2 text-[0.95rem] text-ink-soft md:col-start-3">
                    {detail}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal>
            <blockquote className="mt-14 max-w-3xl font-serif text-[clamp(1.6rem,3.4vw,3rem)] leading-[1.15] md:mt-28">
              <p>
                “Nora’s team gave us a house that feels as though it has always been here. Three
                winters in, we are still discovering how the light moves through it.”
              </p>
              <cite className="mt-5 block font-sans text-sm not-italic text-ink-soft">
                — Client, Halden House
              </cite>
            </blockquote>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section grid gap-12 bg-paper-2 md:grid-cols-2 md:gap-16 lg:gap-28">
          <div className="grid content-start gap-6">
            <Reveal>
              <p className="eyebrow">05 — Contact</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className={h2}>
                Have a site, a brief, or just <em>an idea</em>?
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="max-w-md text-ink-soft">
                Tell us a little about it. We reply to every enquiry within three working days.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <address className="grid justify-items-start gap-1.5 not-italic">
                <a
                  href="mailto:studio@example.com"
                  className="break-all border-b border-line font-serif text-2xl transition-colors hover:border-accent hover:text-accent"
                >
                  studio@example.com
                </a>
                <a
                  href="tel:+10000000000"
                  className="border-b border-line font-serif text-2xl transition-colors hover:border-accent hover:text-accent"
                >
                  +1 (000) 000-0000
                </a>
                <span className="mt-3 text-[0.95rem] text-ink-soft">
                  12 Foundry Lane, Studio 3
                  <br />
                  Your City, 00000
                </span>
              </address>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </section>
      </main>

      <footer className="flex flex-col gap-4 bg-ink px-5 py-7 text-sm text-[#b9b3a6] sm:flex-row sm:flex-wrap sm:justify-between md:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Nora Halden Architecture</p>
        <nav aria-label="Social" className="flex gap-6">
          <a className="hover:text-paper" href="#">Instagram</a>
          <a className="hover:text-paper" href="#">LinkedIn</a>
          <a className="hover:text-paper" href="#">Journal</a>
        </nav>
        <a className="hover:text-paper" href="#top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
