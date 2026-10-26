import Link from "next/link";

export default function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-8 py-20 text-center dark:bg-zinc-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-36 mx-auto h-72 max-w-2xl rounded-full bg-gradient-to-t from-amber-500/30 to-transparent blur-3xl"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            Join Us in Touching Lives Across the Nations
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-zinc-400">
            Partner with the Ark — give towards the food bank, or volunteer
            with the 1,500+ team serving 20,000 families every year.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/give"
              className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-opacity hover:opacity-90"
            >
              Donate Today
            </Link>
            <Link
              href="/volunteer"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
