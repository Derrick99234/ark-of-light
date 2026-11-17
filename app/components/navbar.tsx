"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pillars", href: "/#pillars" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md shadow-xs">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/ark-logo.png"
            alt="Ark of Light for All Nations — home"
            width={56}
            height={35}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-amber-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/give"
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-500/25 transition-opacity hover:opacity-90"
          >
            Donate Today
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid size-9 place-items-center rounded-lg border border-stone-200 text-stone-700 transition-colors hover:bg-stone-50 md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-stone-200 bg-white px-6 py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-stone-600">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block transition-colors hover:text-amber-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/give"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2.5 text-center font-semibold text-white shadow-md shadow-amber-500/25"
              >
                Donate Today
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
