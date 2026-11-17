const stats = [
  { value: "5,000+", label: "Beneficiaries" },
  { value: "1,500+", label: "Volunteers" },
  { value: "20+", label: "Successful Projects" },
  { value: "25", label: "Countries Covered" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-amber-200/70 bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-500/10 py-16 text-stone-900">
      <div
        aria-hidden
        className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 text-center sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-bold text-amber-700 sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-semibold tracking-widest text-stone-600 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
