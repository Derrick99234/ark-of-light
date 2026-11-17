const heroImage =
  "https://arkoflightforallnations.com/wp-content/uploads/2025/09/1-scaled.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-stone-50 text-stone-900">
      {/* Background Building Image — clear, vivid, and uncovered to the right */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Light gradient shield: solid on the left to ensure crystal-clear text contrast, feathering to 100% transparent on the right so the Ark building is fully visible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/95 via-40% to-transparent sm:via-stone-50/90 sm:via-45% lg:from-stone-50 lg:via-stone-50/80 lg:via-45% lg:to-transparent"
      />

      {/* Smooth top and bottom blends */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-stone-50/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-50 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28">
        <p className="mb-6 text-xs font-semibold tracking-widest text-amber-700 uppercase">
          Global Headquarters · Lagos, Nigeria
        </p>

        <h1 className="max-w-2xl font-display text-5xl leading-tight font-bold tracking-tight text-balance text-stone-950 sm:text-6xl lg:text-7xl">
          A City of Refuge for{" "}
          <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            All Nations
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-pretty text-stone-700">
          &ldquo;Mine house shall be called a house of prayer for all people&rdquo; — Isaiah 56:7.
          Home to thousands of worshippers every week, and a lifeline of food,
          clothing and emergency relief across nations.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#visit"
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-opacity hover:opacity-90"
          >
            Plan Your Visit
          </a>
          <a
            href="/give"
            className="rounded-full border border-stone-300 bg-white/90 px-7 py-3.5 text-center text-sm font-semibold text-stone-800 shadow-xs backdrop-blur-xs transition-colors hover:bg-white hover:border-stone-400"
          >
            Donate Today
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-stone-300/80 pt-8 text-sm text-stone-700">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-amber-500" />
            <span className="font-semibold text-stone-900">Sunday Service</span> — 8:15 AM
          </div>
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-amber-500" />
            <span className="font-semibold text-stone-900">Wednesday Service</span> — 7:00 PM
          </div>
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-amber-500" />
            <span className="font-semibold text-stone-900">10,000-seat sanctuary</span>
          </div>
        </div>
      </div>
    </section>
  );
}
