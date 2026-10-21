const stats = [
  { value: "5,000+", label: "Beneficiaries" },
  { value: "1,500+", label: "Volunteers" },
  { value: "20+", label: "Successful Projects" },
  { value: "25", label: "Countries Covered" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden
        className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 text-center sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-medium tracking-widest text-zinc-400 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
