const heroImage =
  "https://arkoflightforallnations.com/wp-content/uploads/2025/09/main-hall-2-1.jpg";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/20"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/4 h-96 w-[60rem] rounded-full bg-amber-500/15 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28">
        <p className="mb-6 text-xs font-semibold tracking-widest text-amber-400 uppercase">
          Global Headquarters · Lagos, Nigeria
        </p>

        <h1 className="max-w-3xl font-display text-5xl leading-tight font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          A City of Refuge for{" "}
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            All Nations
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-pretty text-zinc-300">
          &ldquo;Mine house shall be called a house of prayer for all people&rdquo; — Isaiah 56:7.
          Home to thousands of worshippers every week, and a lifeline of food,
          clothing and emergency relief across nations.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#visit"
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-amber-500/25 transition-opacity hover:opacity-90"
          >
            Plan Your Visit
          </a>
          <a
            href="https://gospelpillars.org/give/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Donate Today
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-sm text-zinc-400">
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-amber-400" />
            Sunday Service — 8:15 AM
          </div>
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-amber-400" />
            Wednesday Service — 7:00 PM
          </div>
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-amber-400" />
            10,000-seat sanctuary
          </div>
        </div>
      </div>
    </section>
  );
}
