"use client";

import { useEffect, useState } from "react";

/** A small round button that appears once the page is scrolled and returns to the top. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-wine text-white shadow-md ring-1 ring-white/30 transition duration-300 hover:bg-maroon ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 16 10" aria-hidden className="h-2.5 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 9l7-7 7 7" />
      </svg>
    </button>
  );
}
