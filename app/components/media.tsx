const VIDEO_ID = "XbDzuHtGlzE";

export default function Media() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-stone-900 border-b border-stone-200/80">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-amber-100/50 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
          Featured Media
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance text-stone-950 sm:text-5xl">
          Faith World TV goes to Nigeria
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-stone-600">
          An unforgettable encounter with Prophet Isaiah Macwealth at the G3
          Summit — straight from the Ark of Light for All Nations.
        </p>

        <div className="relative mt-12 aspect-video overflow-hidden rounded-3xl border border-stone-200/80 shadow-2xl shadow-stone-200/50">
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="Faith World TV Goes To Nigeria — An Unforgettable Encounter With Isaiah Macwealth For The G3 Summit"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <p className="mt-6 text-sm font-medium text-amber-600">#Arkoflightforallnations</p>
      </div>
    </section>
  );
}
