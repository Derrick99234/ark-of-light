"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Pillars", href: "#pillars" },
  { label: "Facilities", href: "#facilities" },
  { label: "Projects", href: "#projects" },
  { label: "Visit", href: "#visit" },
];

const donateUrl = "https://gospelpillars.org/give/";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <Image
            src="/ark-logo.png"
            alt="Ark of Light for All Nations — home"
            width={56}
            height={35}
            className="h-9 w-auto"
            priority
          />
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-400">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-500/25 transition-opacity hover:opacity-90"
          >
            Donate Today
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid size-9 place-items-center rounded-lg border border-zinc-200 text-zinc-700 md:hidden dark:border-zinc-800 dark:text-zinc-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-center font-semibold text-white"
              >
                Donate Today
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
