"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#approach", label: "Approach" },
  { href: "#recognition", label: "Recognition" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 transition-all duration-300 md:px-10 lg:px-16 ${
        solid
          ? "bg-paper/90 py-3 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "py-4 md:py-5"
      }`}
    >
      <a
        href="#top"
        aria-label="Nora Halden Architecture — home"
        className="flex items-center gap-2.5 whitespace-nowrap font-semibold"
      >
        <span aria-hidden className="h-[18px] w-[18px] flex-none rounded-t-full bg-accent" />
        Nora Halden
        <em className="hidden font-serif text-xl font-normal text-ink-soft min-[380px]:inline">
          Architecture
        </em>
      </a>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
        className="rounded-full border border-ink px-4 py-2 text-sm font-medium md:hidden"
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav
        id="nav-links"
        aria-label="Primary"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
        className={`absolute inset-x-0 top-full flex-col border-b border-line bg-paper px-5 pb-5 pt-2 text-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:text-sm lg:gap-9 ${
          open ? "flex" : "hidden"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="border-b border-line py-3.5 underline-offset-8 hover:text-accent md:border-0 md:py-1 md:hover:text-ink md:hover:underline"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mt-4 rounded-full border border-ink px-5 py-3 text-center text-base transition-colors hover:bg-ink hover:text-paper md:mt-0 md:py-2 md:text-sm"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
