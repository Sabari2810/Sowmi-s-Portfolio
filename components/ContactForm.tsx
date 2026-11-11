"use client";

import { useState, type FormEvent } from "react";

// No backend: submitting opens the visitor's email app with the enquiry pre-filled.
// Change STUDIO_EMAIL, or replace onSubmit with a call to a form service or API route.
const STUDIO_EMAIL = "studio@example.com";

const label = "grid gap-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-ink-soft";
const field =
  "w-full rounded-none border-0 border-b border-ink bg-transparent py-2.5 text-base normal-case tracking-normal text-ink outline-none focus:border-accent focus:shadow-[0_1px_0_var(--color-accent)]";

export default function ContactForm() {
  const [note, setNote] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Project enquiry — ${d.get("type")}`;
    const body = `${d.get("message")}\n\n${d.get("name")}\n${d.get("email")}`;
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setNote("Opening your email app to send the enquiry…");
  };

  return (
    <form onSubmit={onSubmit} className="grid content-start gap-6">
      <label className={label}>
        Name
        <input className={field} type="text" name="name" autoComplete="name" required />
      </label>
      <label className={label}>
        Email
        <input className={field} type="email" name="email" autoComplete="email" required />
      </label>
      <label className={label}>
        Project type
        <select className={field} name="type">
          <option>New house</option>
          <option>Renovation or extension</option>
          <option>Public or cultural building</option>
          <option>Workplace</option>
          <option>Something else</option>
        </select>
      </label>
      <label className={label}>
        About your project
        <textarea className={`${field} resize-y`} name="message" rows={5} required />
      </label>
      <button type="submit" className="btn btn-solid w-full sm:w-auto sm:justify-self-start">
        Send enquiry
      </button>
      <p role="status" className="min-h-6 text-sm text-ink-soft">
        {note}
      </p>
    </form>
  );
}
