import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata: Metadata = {
  title: "Ark Food Bank — Ark of Light for All Nations",
  description:
    "Providing training, nutrition, and essential relief items to 20,000 less privileged families every year, operated by OneSound Charity in Lagos, Nigeria.",
};

const pillarsData = [
  {
    title: "Continuous Food Bank Storage",
    desc: "A purpose-built multi-storage food warehouse within the Ark campus storing staple grains, cooking essentials, tubers, and non-perishables in hygienic, monitored conditions.",
  },
  {
    title: "Open Pantry Distributions",
    desc: "Monthly and seasonal open-pantry events distributing packed family sustenance parcels directly to thousands of pre-screened low-income families.",
  },
  {
    title: "Community Feeding Outreaches",
    desc: "Targeted direct outreach to high-density areas including Oshodi, Ajegunle, and Alausa community settlements, bringing hot meals and dry rations.",
  },
  {
    title: "Dignity & Skill Development",
    desc: "Pairing food support with vocational training, literacy workshops, and small business grants through The Empowerment Network (TEN) to help recipients achieve financial independence.",
  },
];

export default function FoodBankPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-zinc-950 py-24 text-white md:py-32">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{
              backgroundImage:
                "url(https://arkoflightforallnations.com/wp-content/uploads/2025/02/OPEN-PANTRY-DECEMBER-2024-79.webp)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/60"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              Second Pillar
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Ark Food Bank &amp; Relief
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Training, providing food, and distributing critical relief items to 20,000 less privileged families every year — operated by OneSound Charity under The Isaiah Wealth Initiative.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center sm:grid-cols-4">
            <div>
              <div className="font-display text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                20,000
              </div>
              <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Families Fed Annually
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                5,000+
              </div>
              <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Direct Beneficiaries Per Drive
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                Multi-Storage
              </div>
              <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                On-Site Food Facility
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                100% Free
              </div>
              <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Unconditional Relief
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Narrative */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
                Feeding Hope
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                A Sustained Lifeline Against Poverty and Hunger
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  In challenging economic climates, access to basic nutrition becomes an overwhelming burden for countless families. The Ark Food Bank was created as an organized, dependable response to eradicate hunger among the less privileged.
                </p>
                <p>
                  Operated by OneSound Charity, food drives are carried out with utmost dignity, care, and order. Beneficiaries receive substantial food packs containing staples such as rice, beans, garri, cooking oils, tomato purees, and vital vitamins.
                </p>
                <p>
                  Beyond food distribution, the initiative provides recipients with vocational skills workshops, career mentorship, and economic support to break the cycle of dependency and thrive.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl dark:border-zinc-800">
              <Image
                src="https://arkoflightforallnations.com/wp-content/uploads/2025/02/OPEN-PANTRY-DECEMBER-2024-4-1.webp"
                alt="Ark Food Bank pantry distribution in progress"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="mt-20">
            <div className="mb-10 text-center">
              <h3 className="font-display text-2xl font-bold text-zinc-950 sm:text-3xl dark:text-zinc-50">
                How the Ark Food Bank Operates
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {pillarsData.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h4 className="font-display text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h3 className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
              Support the Next Food Bank Distribution
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Your financial partnership or food donation feeds a family for an entire month. You can also join our packing and distribution volunteer team.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/give"
                className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3 text-xs font-semibold text-white shadow-md shadow-amber-500/25 transition-opacity hover:opacity-90"
              >
                Donate Towards Food Bank
              </Link>
              <Link
                href="/volunteer"
                className="rounded-full border border-zinc-300 px-7 py-3 text-xs font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
