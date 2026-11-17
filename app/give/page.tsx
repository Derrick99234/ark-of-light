"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const localAccounts = [
  {
    purpose: "Ark Food Bank & Charity Outreaches",
    bank: "Zenith Bank",
    accountNumber: "1228490214",
    accountName: "OneSound Charity / Ark of Light",
  },
  {
    purpose: "Tithes & General Ministry",
    bank: "Zenith Bank",
    accountNumber: "1013402839",
    accountName: "Gospel Pillars International Churches",
  },
  {
    purpose: "Building & Campus Expansion",
    bank: "Access Bank",
    accountNumber: "0058291048",
    accountName: "Ark of Light for All Nations Project",
  },
];

export default function GivePage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (accNum: string, index: number) => {
    navigator.clipboard.writeText(accNum);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-stone-900">
        {/* Page Hero */}
        <section className="relative overflow-hidden border-b border-stone-200/80 bg-gradient-to-b from-stone-50 via-white to-amber-50/30 py-20 md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url(https://arkoflightforallnations.com/wp-content/uploads/2025/02/OPEN-PANTRY-DECEMBER-2024-4-1.webp)",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-700 uppercase">
              Giving &amp; Partnership
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Partner With the Ark — Transform Lives Across Nations
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Your generosity directly sustains weekly sanctuary worship, feeding 20,000 less privileged families every year, and rapid humanitarian relief in crises.
            </p>
          </div>
        </section>

        {/* Scripture Quote */}
        <section className="border-b border-stone-200/80 bg-stone-50/70 py-10">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <blockquote className="font-display text-lg italic text-stone-800 sm:text-xl">
              &ldquo;Whoever is kind to the poor lends to the Lord, and He will reward them for what they have done.&rdquo;
            </blockquote>
            <p className="mt-2 text-xs font-semibold tracking-wider text-amber-700 uppercase">
              Proverbs 19:17
            </p>
          </div>
        </section>

        {/* Giving Methods */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Local Bank Transfer Details */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Direct Bank Transfer
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950">
                Local Accounts (Nigeria)
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                You can transfer directly into any of the dedicated project accounts below:
              </p>

              <div className="mt-8 space-y-5">
                {localAccounts.map((acc, i) => (
                  <div
                    key={acc.purpose}
                    className="rounded-3xl border border-stone-200/80 bg-white p-7 shadow-xs transition-shadow hover:shadow-md hover:border-amber-300"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <span className="text-xs font-semibold text-amber-700">
                          {acc.purpose}
                        </span>
                        <div className="mt-1 font-mono text-2xl font-bold tracking-wider text-stone-950">
                          {acc.accountNumber}
                        </div>
                        <div className="mt-1 text-xs text-stone-600">
                          <strong>{acc.bank}</strong> · {acc.accountName}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopy(acc.accountNumber, i)}
                        className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${copiedIndex === i
                          ? "bg-emerald-600 text-white"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                          }`}
                      >
                        {copiedIndex === i ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            Copy Account
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Online Giving & International Wires */}
            <div className="lg:col-span-5 space-y-6">
              {/* Online Giving Card */}
              <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50/40 p-8 shadow-xs">
                <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                  Instant Online Portal
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-stone-950">
                  Give With Debit or Credit Card
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  Support securely from any country using Visa, Mastercard, Apple Pay, or international cards through our global ministry portal.
                </p>
                <div className="mt-6">
                  <a
                    href="https://gospelpillars.org/give/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-amber-500/25 transition-opacity hover:opacity-90"
                  >
                    Proceed to Online Giving &rarr;
                  </a>
                </div>
              </div>

              {/* International Wire Info */}
              <div className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xs">
                <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                  International Pilgrims &amp; Partners
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-stone-950">
                  International Wire Transfers
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-stone-600">
                  For partners giving in USD ($), GBP (&pound;), or EUR (&euro;), please reach out directly to our international finance desk for corresponding SWIFT and IBAN details:
                </p>
                <ul className="mt-4 space-y-2 text-xs text-stone-600">
                  <li><strong>United Kingdom:</strong> +44 7493 345 240</li>
                  <li><strong>United States:</strong> +1 682 410 0027</li>
                  <li><strong>Canada:</strong> +1 647 563 8691</li>
                  <li><strong>Finance Desk Email:</strong> office@arkoflightforallnations.com</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accountability Pledge */}
        <section className="border-t border-stone-200/80 bg-stone-50/60 py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h3 className="font-display text-2xl font-bold text-stone-950">
              Our Commitment to Faithful Stewardship
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-stone-600">
              Every seed sown into the Ark of Light for All Nations is audited, faithfully allocated, and invested directly into community feeding programs, crisis intervention, vulnerable families care, and gospel advancement.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
