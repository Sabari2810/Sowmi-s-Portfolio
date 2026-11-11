import type { Metadata } from "next";
import Link from "next/link";
import Carousel, { type Slide } from "@/components/Carousel";
import Neural from "@/components/Neural";
import Render, { type RenderImage } from "@/components/Render";

export const metadata: Metadata = {
  title: "Cognitive Playground | Sowmya P",
  description:
    "Cognitive Playground: a neuroscience-inspired, biomimetic workplace concept that translates the structure of neural networks into spatial planning.",
};

/* ------------------------------------------------------------------ */
/* Renders                                                             */
/*                                                                     */
/* Files live in /public/images/cognitive-playground (compressed WebP, */
/* 1920 px wide). To swap one, replace the file or change `src` here;  */
/* w and h are its pixel size. A slot set to undefined shows a labelled */
/* placeholder instead.                                                */
/* ------------------------------------------------------------------ */

const dir = "/images/cognitive-playground";
const img = (name: string, w: number, h: number): RenderImage => ({ src: `${dir}/${name}.webp`, w, h });

const renders: Record<string, RenderImage | undefined> = {
  hero: img("reception-1", 1920, 1080), // "Reception 01"
  reception: img("reception-2", 1920, 1080), // "Reception 02"
  workspace: img("work-zone-1", 1920, 1080), // "Work Zone"
  workspaceView2: img("work-zone-2", 1920, 1080), // "Work Zone 02"
  focus: img("focus-zone", 1920, 1080), // "Focus Zone"
  fitness: img("fitness-zone", 1920, 1080), // "Fitness Zone"
  zen: img("zen-zone", 1280, 800), // "Zen Zone"
  pantry: img("pantry", 1536, 1024), // "Pantry"
  closing: img("informal-zone", 1920, 1080), // "Informal Zone"
};

/* ------------------------------------------------------------------ */
/* Content, as supplied by Sowmya. Nothing here is invented.           */
/* ------------------------------------------------------------------ */

/**
 * Concept derivations: sketches and plans, in the order Sowmya numbered them (01 to 06).
 * Captions simply describe what each image shows; edit them freely.
 * Files are in /public/images/cognitive-playground/derivations. 03 and 05 were PDFs and are
 * rendered to images with their empty page margins trimmed.
 */
const derivations: Slide[] = [
  {
    caption: "Sketch 01",
    images: [{ src: `${dir}/derivations/01.webp`, alt: "Charcoal sketch of a branching network of cells" }],
  },
  {
    caption: "Sketch 02",
    images: [{ src: `${dir}/derivations/02.webp`, alt: "Pen and pencil sketch of a branching network of cells" }],
  },
  {
    caption: "Plan with circulation",
    images: [{ src: `${dir}/derivations/03.webp`, alt: "Floor plan with the circulation paths shaded blue" }],
  },
  {
    caption: "Plan with zones",
    images: [{ src: `${dir}/derivations/04.webp`, alt: "Watercolour floor plan with each zone in a different colour" }],
  },
  {
    caption: "Detailed plan",
    images: [{ src: `${dir}/derivations/05.webp`, alt: "Floor plan with furniture layout and labelled spaces" }],
  },
  {
    caption: "Top view",
    images: [{ src: `${dir}/derivations/06.webp`, alt: "Top-down render of the whole floor" }],
  },
];

/** Extra views under the Open Workspace. Add more here as needed. */
const workspaceViews = [
  {
    image: renders.workspaceView2,
    label: "the open workspace, second view",
    file: `${dir}/work-zone-2.webp`,
    caption: "Work Zone 02",
  },
];

const flow = ["Neuroscience", "Biomimicry", "Spatial Translation", "Cognitive Playground"];

const principles = [
  ["Neural Connectivity", "Circulation and interconnected spatial planning."],
  ["Spatial Differentiation", "Visually connected but functionally distinct zones."],
  ["Adaptive Boundaries", "Flexible meeting spaces."],
  ["Cognitive Stimulation", "Activity-oriented spaces."],
  ["Restoration", "Spaces for calm and relaxation."],
];

const spaces = [
  {
    key: "reception" as const,
    name: "Reception",
    heading: "The first point of arrival",
    text: "The reception introduces the project’s overall design language and establishes the conceptual identity of Cognitive Playground.",
  },
  {
    key: "focus" as const,
    name: "Focus Zone",
    heading: "Quiet within the open plan",
    // Wording written from the render and the project's idea of zones that stay visually connected.
    // Replace with Sowmya's own description if she prefers.
    text: "A zone for focused work within the open plan. Semi-enclosed booths with arched openings and perforated screens give each person a sense of separation, while the zone stays visually connected to the rest of the workspace.",
  },
  {
    key: "fitness" as const,
    name: "Fitness Zone",
    heading: "Movement and the mind",
    text: "A space that encourages physical movement and active engagement, representing the relationship between physical activity and cognitive well-being.",
  },
  {
    key: "zen" as const,
    name: "Zen Zone",
    heading: "A place to pause",
    text: "A restorative environment for mental relaxation, pause and sensory calm. It creates a balance between stimulation and restoration.",
  },
  {
    key: "pantry" as const,
    name: "Pantry",
    heading: "Unplanned conversations",
    text: "An informal social space that encourages spontaneous conversations and human connection.",
  },
];

const narrative = [
  ["Neural networks", "Circulation", "Just as nerves connect different parts of the body, interconnected circulation pathways connect the different functional zones."],
  ["Connectivity", "Open planning", "The workspace is visually open and interconnected, while each zone keeps its own functional identity."],
  ["Negative spaces", "Activity zones", "Residual spaces are transformed into purposeful activity zones rather than being treated as leftovers."],
  ["Cognitive functions", "Spatial experiences", "The project explores how architecture can influence movement, interaction, cognitive stimulation, collaboration, focus and relaxation."],
];

/* ------------------------------------------------------------------ */

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 10" aria-hidden className={`h-2.5 w-7 flex-none ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 5h27M22.5 1l4.5 4-4.5 4" />
    </svg>
  );
}

/** Section opener: number and label on the left, heading beside it. */
function Opener({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label flex gap-3 font-semibold text-wine">
        <span className="lining-nums">{n}</span>
        <span aria-hidden>/</span>
        <span>{label}</span>
      </p>
      <h2 className="display mt-6 text-[clamp(2.2rem,3.6vw,3.2rem)]">{children}</h2>
      <span className="rule mt-7" />
    </div>
  );
}

export default function CognitivePlayground() {
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
        {/* HERO */}
        <section className="gutter relative pb-10 pt-12 lg:pt-20">
          <Neural className="pointer-events-none absolute right-0 top-0 hidden h-[78%] w-[46%] text-maroon/20 lg:block" />
          <p className="label relative flex flex-wrap gap-x-4 gap-y-1 font-semibold text-wine">
            <span>Concept project</span>
            <span aria-hidden>/</span>
            <span>Workplace design</span>
          </p>
          <h1 className="display relative mt-7 text-[clamp(3.1rem,9vw,8rem)]">
            Cognitive
            <br />
            <em>Playground</em>
          </h1>
          <p className="relative mt-6 max-w-xl font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-ink">
            A Neuroscience-Inspired, Biomimetic Workplace
          </p>
        </section>

        <div className="relative">
          <div aria-hidden className="absolute bottom-0 right-0 top-[40%] w-[26%] bg-maroon" />
          <div className="relative pb-6 pl-6 pr-6 sm:pl-10 sm:pr-10 lg:pb-8 lg:pl-[6.6%] lg:pr-[8.3%]">
            <Render image={renders.hero} label="the reception, hero view" file={`${dir}/reception-1.webp`} eager />
          </div>
        </div>

        <section className="gutter py-16 lg:py-24">
          <p className="mx-auto max-w-4xl text-center font-serif text-[clamp(1.9rem,4.2vw,3.6rem)] italic leading-[1.12] text-wine">
            “What if a workplace could function like the human brain?”
          </p>
        </section>

        {/* 01 THE CONCEPT */}
        <section id="concept" className="gutter grid scroll-mt-4 gap-10 border-t border-line py-14 lg:grid-cols-[34%_1fr] lg:gap-0 lg:py-20">
          <Opener n="01" label="The concept">
            From the nervous system
            <br />
            <em>to the floor plan</em>
          </Opener>
          <div className="lg:pl-[8%]">
            <p className="max-w-2xl font-serif text-[clamp(1.35rem,1.9vw,1.7rem)] leading-snug text-ink">
              Cognitive Playground is a research-driven workplace concept inspired by neuroscience,
              the human nervous system and biomimicry.
            </p>
            <p className="body mt-6 max-w-2xl">
              The central idea is to translate the interconnected structure of neural networks into
              architectural planning and spatial experiences. Just as nerves connect different parts
              of the human body, the design uses interconnected circulation pathways to connect
              different functional zones.
            </p>
            <p className="body mt-4 max-w-2xl">
              This is not a conventional office interior. It is an exploration of how the human mind
              can inspire the built environment.
            </p>

            {/* Concept diagram */}
            <ol aria-label="Concept sequence" className="mt-12 grid gap-0 sm:grid-cols-4">
              {flow.map((step, i) => (
                <li key={step} className="relative flex items-center gap-4 pb-6 sm:block sm:pb-0 sm:pr-4">
                  {/* connector */}
                  {i < flow.length - 1 && (
                    <span aria-hidden className="absolute left-[5px] top-3 h-full w-px bg-maroon/50 sm:left-3 sm:top-[5px] sm:h-px sm:w-full" />
                  )}
                  <span
                    aria-hidden
                    className={`relative block h-[11px] w-[11px] flex-none rounded-full border border-maroon ${
                      i === flow.length - 1 ? "bg-maroon" : "bg-cream"
                    }`}
                  />
                  <span className="sm:mt-4 sm:block">
                    <span className="label block text-ink/60 lining-nums">0{i + 1}</span>
                    <span className="mt-1 block font-serif text-[1.25rem] leading-tight text-wine">{step}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONCEPT DERIVATIONS: sketches and plans, as a carousel */}
        <section id="derivations" aria-labelledby="derivations-title" className="gutter scroll-mt-4 pb-16 lg:pb-24">
          <p className="label font-semibold text-wine">Concept derivations</p>
          <h2 id="derivations-title" className="display mt-5 text-[clamp(1.9rem,2.8vw,2.5rem)]">
            From sketch <em>to plan</em>
          </h2>
          <span className="rule mt-6" />
          <div className="mt-8 lg:mt-10">
            <Carousel slides={derivations} label="Concept derivations" variant="drawing" />
          </div>
        </section>

        {/* 02 THE DESIGN APPROACH */}
        <section id="approach" className="gutter grid scroll-mt-4 gap-10 bg-sand py-14 lg:grid-cols-[34%_1fr] lg:gap-0 lg:py-20">
          <Opener n="02" label="The design approach">
            Five principles,
            <br />
            <em>one connected plan</em>
          </Opener>
          <ol className="lg:pl-[8%]">
            {principles.map(([title, text], i) => (
              <li key={title} className="grid gap-x-8 gap-y-1 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[3rem_1fr_1.1fr] sm:items-baseline">
                <span className="label text-ink/60 lining-nums">0{i + 1}</span>
                <h3 className="font-serif text-[1.55rem] leading-tight tracking-[-0.01em] text-wine">{title}</h3>
                <p className="body">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 03 SPATIAL EXPERIENCE */}
        <section id="spaces" className="scroll-mt-4 py-14 lg:py-20">
          <div className="gutter">
            <Opener n="03" label="Spatial experience">
              Six spaces,
              <br />
              <em>each with its own identity</em>
            </Opener>
          </div>

          {/* Reception */}
          <Space index={1} space={spaces[0]} image={renders.reception} />

          {/* Open Workspace: the centre of the concept, given the most room */}
          <article className="mt-16 lg:mt-24">
            <div className="gutter">
              <figure>
                <Render image={renders.workspace} label="the open workspace" file={`${dir}/work-zone-1.webp`} />
                <figcaption className="label mt-3 text-ink/60">Work Zone</figcaption>
              </figure>
            </div>
            <div className="gutter mt-8 grid gap-8 lg:grid-cols-[34%_1fr] lg:gap-0">
              <div>
                <p className="label flex gap-3 text-ink/60">
                  <span className="lining-nums">02</span>
                  <span aria-hidden>/</span>
                  <span>Open Workspace</span>
                </p>
                <h3 className="display mt-4 text-[clamp(1.9rem,2.8vw,2.5rem)]">
                  Corridors as <em>nerve networks</em>
                </h3>
              </div>
              <div className="lg:pl-[8%]">
                <p className="body max-w-2xl">
                  The workspace is inspired by the interconnected structure of neural pathways, and
                  its circulation corridors are conceptualised as nerve networks. Different zones
                  remain visually connected, while functional zoning creates distinct experiences
                  within an open-plan environment.
                </p>
                <p className="body mt-4 max-w-2xl">
                  Negative spaces are converted into purposeful spatial zones rather than left over.
                </p>
              </div>
            </div>
            {/* More views of the workspace: add entries here; two or more sit side by side. */}
            <div className={`gutter mt-10 grid gap-6 ${workspaceViews.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {workspaceViews.map((v) => (
                <figure key={v.file}>
                  <Render image={v.image} label={v.label} file={v.file} />
                  <figcaption className="label mt-3 text-ink/60">{v.caption}</figcaption>
                </figure>
              ))}
            </div>
          </article>

          <Space index={3} space={spaces[1]} image={renders.focus} flip />
          <Space index={4} space={spaces[2]} image={renders.fitness} />
          <Space index={5} space={spaces[3]} image={renders.zen} flip />
          <Space index={6} space={spaces[4]} image={renders.pantry} />
        </section>

        {/* 04 THE DESIGN NARRATIVE */}
        <section id="narrative" className="gutter relative scroll-mt-4 overflow-hidden bg-maroon py-14 text-cream lg:py-20">
          <Neural className="pointer-events-none absolute inset-0 h-full w-full text-cream/10" />
          <div className="relative grid gap-10 lg:grid-cols-[34%_1fr] lg:gap-0">
            <div>
              <p className="label flex gap-3 font-semibold">
                <span className="lining-nums">04</span>
                <span aria-hidden>/</span>
                <span>The design narrative</span>
              </p>
              <h2 className="mt-6 font-serif text-[clamp(2.2rem,3.6vw,3.2rem)] font-medium leading-[1.02] tracking-[-0.01em]">
                From concept
                <br />
                <em>to spatial experience</em>
              </h2>
              <span className="mt-7 block h-px w-7 bg-cream/80" />
            </div>
            <ul className="lg:pl-[8%]">
              {narrative.map(([from, to, text]) => (
                <li key={from} className="border-t border-cream/25 py-6 first:border-t-0 first:pt-0">
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-1 font-serif text-[1.5rem] leading-tight tracking-[-0.01em]">
                    <span>{from}</span>
                    <Arrow className="text-cream/70" />
                    <em>{to}</em>
                  </p>
                  <p className="body mt-3 max-w-2xl text-cream/85">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 CLOSING */}
        <section className="gutter py-16 lg:py-24">
          <p className="mx-auto max-w-4xl text-center font-serif text-[clamp(1.9rem,4.2vw,3.6rem)] italic leading-[1.12] text-wine">
            “A workplace designed not just for productivity, but for the human mind.”
          </p>
        </section>

        <figure className="gutter">
          <Render image={renders.closing} label="the informal zone" file={`${dir}/informal-zone.webp`} />
          <figcaption className="label mt-3 text-ink/60">Informal Zone</figcaption>
        </figure>

        <section className="gutter grid gap-8 py-12 sm:grid-cols-[1fr_auto] sm:items-end lg:py-16">
          <dl className="grid gap-x-12 gap-y-4 sm:grid-cols-3">
            {[
              ["Project", "Cognitive Playground"],
              ["Type", "Workplace design concept"],
              ["Design", "Sowmya P"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line pt-3">
                <dt className="label font-semibold text-wine">{k}</dt>
                <dd className="mt-1 font-serif text-[1.2rem] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <Link href="/#projects" className="label group inline-flex items-center gap-4 text-wine">
            Back to all projects
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="gutter flex flex-col gap-6 pb-10 pt-2 sm:flex-row sm:items-center sm:gap-12">
        <Link href="/" className="font-serif text-[1.65rem] font-medium leading-none tracking-[-0.01em] text-wine">
          Sowmya.
        </Link>
        <span aria-hidden className="hidden h-px flex-1 bg-maroon/40 sm:block" />
        <a href="mailto:ar.sowmya24@gmail.com" className="text-[0.8rem] tracking-[0.04em] hover:text-maroon">
          ar.sowmya24@gmail.com
        </a>
      </footer>
    </div>
  );
}

/** One space: large render with a short editorial text block beside it, alternating sides. */
function Space({
  index,
  space,
  image,
  caption,
  flip = false,
}: {
  index: number;
  space: { key: string; name: string; heading: string; text: string };
  image?: RenderImage;
  /** The render's own name, when it differs from the space's. */
  caption?: string;
  flip?: boolean;
}) {
  return (
    <article className="gutter mt-16 grid items-end gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-10">
      <figure className={`lg:col-span-8 ${flip ? "lg:order-2" : ""}`}>
        <Render image={image} label={space.name} file={`${dir}/${space.key}.webp`} />
        {caption && <figcaption className="label mt-3 text-ink/60">{caption}</figcaption>}
      </figure>
      <div className={`lg:col-span-4 lg:pb-4 ${flip ? "lg:order-1" : ""}`}>
        <p className="label flex gap-3 text-ink/60">
          <span className="lining-nums">0{index}</span>
          <span aria-hidden>/</span>
          <span>{space.name}</span>
        </p>
        <h3 className="display mt-4 text-[clamp(1.7rem,2.3vw,2.1rem)]">{space.heading}</h3>
        <span className="rule mt-5" />
        {space.text && <p className="body mt-5">{space.text}</p>}
      </div>
    </article>
  );
}
