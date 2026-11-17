const heroImage = "https://arkoflightforallnations.com/wp-content/uploads/2025/09/1-scaled.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-b from-stone-50 via-white to-amber-50/40 text-stone-900">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/4 h-96 w-[50rem] rounded-full bg-orange-200/30 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28">
        <p className="mb-6 text-xs font-semibold tracking-widest text-amber-700 uppercase">
          Global Headquarters · Lagos, Nigeria
        </p>

        <h1 className="max-w-3xl font-display text-5xl leading-tight font-bold tracking-tight text-balance text-stone-950 sm:text-6xl lg:text-7xl">
          A City of Refuge for{" "}
          <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            All Nations
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-pretty text-stone-600">
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
            className="rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-center text-sm font-semibold text-stone-800 shadow-xs transition-colors hover:bg-stone-50 hover:border-stone-400"
          >
            Donate Today
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-stone-200/80 pt-8 text-sm text-stone-600">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-amber-500" />
            <span className="font-medium text-stone-800">Sunday Service</span> — 8:15 AM
          </div>
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-amber-500" />
            <span className="font-medium text-stone-800">Wednesday Service</span> — 7:00 PM
          </div>
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-amber-500" />
            10,000-seat sanctuary
          </div>
        </div>
      </div>
    </section>
  );
}
