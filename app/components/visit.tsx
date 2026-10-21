const services = [
  { name: "Sunday Service", time: "8:15 AM – 11:00 AM" },
  { name: "Wednesday Service", time: "7:00 PM – 9:00 PM" },
];

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=11C+Kudirat+Abiola+Way+Alausa+Ikeja+Lagos+Nigeria";

export default function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
            Visit Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance text-zinc-950 sm:text-5xl dark:text-zinc-50">
            Come and see the last-day move of God
          </h2>
          <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">
            Every week, thousands gather at the Ark to worship, fellowship and
            receive from God&rsquo;s word. Doors are open to all people,
            regardless of nationality, ethnicity or religion — everyone has a
            place here.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {service.name}
                </span>
                <span className="flex items-center gap-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                  {service.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-amber-50/40 p-8 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-amber-500/5">
          <h3 className="font-display text-xl font-semibold text-zinc-950 dark:text-zinc-50">
            Find us at the Ark
          </h3>

          <ul className="mt-6 flex flex-col gap-5 text-sm">
            <li className="flex gap-3.5">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-white text-amber-600 shadow-sm dark:bg-zinc-800 dark:text-amber-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="leading-6 text-zinc-600 dark:text-zinc-400">
                Ark of Light for All Nations
                <br />
                11C Kudirat Abiola Way, Alausa, Ikeja
                <br />
                Lagos, Nigeria
              </span>
            </li>
            <li className="flex gap-3.5">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-white text-amber-600 shadow-sm dark:bg-zinc-800 dark:text-amber-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <div className="flex flex-col gap-0.5 text-zinc-600 dark:text-zinc-400">
                <a href="tel:+2347069980367" className="transition-colors hover:text-amber-600">
                  +234 706 998 0367
                </a>
                <a href="tel:+2348090111194" className="transition-colors hover:text-amber-600">
                  +234 809 011 1194
                </a>
              </div>
            </li>
            <li className="flex gap-3.5">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-white text-amber-600 shadow-sm dark:bg-zinc-800 dark:text-amber-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </span>
              <div className="flex flex-col gap-0.5 text-zinc-600 dark:text-zinc-400">
                <a href="mailto:info@arkoflightforallnations.com" className="transition-colors hover:text-amber-600">
                  info@arkoflightforallnations.com
                </a>
                <a href="mailto:office@arkoflightforallnations.com" className="transition-colors hover:text-amber-600">
                  office@arkoflightforallnations.com
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <iframe
              src="https://maps.google.com/maps?q=Ark%20of%20Light%20for%20All%20Nations%2C%2011C%20Kudirat%20Abiola%20Way%2C%20Alausa%2C%20Ikeja%2C%20Lagos%2C%20Nigeria&z=15&output=embed"
              title="Map — Ark of Light for All Nations, Alausa, Ikeja, Lagos"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-64 w-full border-0"
            />
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-amber-700 transition-colors hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300"
          >
            Open in Google Maps
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
