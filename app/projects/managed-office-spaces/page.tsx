import type { Metadata } from "next";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { managedOffice } from "@/lib/managed-office";

export const metadata: Metadata = {
  title: "Managed Office Spaces | Sowmya P",
  description:
    "Managed workplaces delivered with WorkEZ: Park Centre in Alwarpet, Vivera in Coimbatore and Helix in Velachery.",
};

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 10" aria-hidden className={`h-2.5 w-7 flex-none ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 5h27M22.5 1l4.5 4-4.5 4" />
    </svg>
  );
}

export default function ManagedOfficeSpaces() {
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
            <span>Managed office spaces</span>
            <span aria-hidden>/</span>
            <span>WorkEZ</span>
          </p>
          <h1 className="display mt-7 text-[clamp(3rem,8vw,6.5rem)]">
            Managed Office <em>Spaces</em>
          </h1>
          <p className="body mt-7 max-w-xl">
            Managed workplaces delivered with WorkEZ: Park Centre in Alwarpet, Vivera in
            Coimbatore and Helix in Velachery.
          </p>
        </section>

        {/* THE WORKPLACES */}
        {managedOffice.map((p, i) => {
          const [first, ...rest] = p.title.split(" ");
          return (
            <section key={p.title} className="gutter border-t border-line py-14 lg:py-20">
              <div className="grid gap-10 lg:grid-cols-[34%_1fr] lg:gap-0">
                <div>
                  <p className="label flex gap-3 font-semibold text-wine">
                    <span className="lining-nums">0{i + 1}</span>
                    <span aria-hidden>/</span>
                    <span>{p.place}</span>
                  </p>
                  <h2 className="display mt-6 text-[clamp(2.2rem,3.6vw,3.2rem)]">
                    {first} <em>{rest.join(" ")}</em>
                  </h2>
                  <span className="rule mt-7" />
                </div>
                <div className="min-w-0 lg:pl-[8%]">
                  <Carousel slides={p.slides} label={`${p.title} photos`} />
                  <p className="mt-6 text-[0.85rem] font-medium tracking-[0.03em] text-wine lining-nums">{p.facts}</p>
                  <p className="body mt-3 max-w-2xl">{p.text}</p>
                </div>
              </div>
            </section>
          );
        })}

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
