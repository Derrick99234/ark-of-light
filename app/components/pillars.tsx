import Image from "next/image";
import Link from "next/link";

const BASE = "https://arkoflightforallnations.com/wp-content/uploads";

const pillars = [
  {
    title: "Sanctuary of Refuge",
    href: "/pillars/sanctuary-of-refuge",
    description:
      "Vibrant worship every week, where people from all walks of life meet to fellowship with God's word in an atmosphere of joy and faith — and a safe haven for families escaping conflict, persecution or displacement.",
    image: `${BASE}/2024/03/Sanctuary-of-Refuge-2-1-1.webp`,
    alt: "Congregation gathered in the Sanctuary of Refuge",
  },
  {
    title: "Ark Food Bank",
    href: "/pillars/food-bank",
    description:
      "Training, food and relief items for 20,000 less privileged families every year — operated by OneSound Charity, an arm of The Isaiah Wealth Initiative, serving communities with free food and clothing.",
    image: `${BASE}/2025/02/OPEN-PANTRY-DECEMBER-2024-79.webp`,
    alt: "Open pantry distribution at the Ark Food Bank",
  },
  {
    title: "Emergency Response Centre",
    href: "/pillars/emergency-response",
    description:
      "Immediate assistance and support in times of crisis, natural disasters, and humanitarian emergencies — rapid relief when communities need it most.",
    image: `${BASE}/2025/02/Emergency-Response.webp`,
    alt: "Emergency response team delivering relief supplies",
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="border-y border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
            Our Three Pillars
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance text-zinc-950 sm:text-5xl dark:text-zinc-50">
            One house, three lifelines
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-zinc-600 dark:text-zinc-400">
            Working together to build a brighter future for all — worship,
            provision and protection, for every nation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-7">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-950 transition-colors group-hover:text-amber-600 dark:text-zinc-50 dark:group-hover:text-amber-400">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <span>Explore Pillar</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
