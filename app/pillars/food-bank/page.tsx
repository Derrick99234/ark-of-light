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
      <main className="flex-1 bg-white text-stone-900">
        {/* Page Hero */}
        <section className="relative overflow-hidden border-b border-stone-200/80 bg-gradient-to-b from-stone-50 via-white to-amber-50/30 py-20 md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url(https://arkoflightforallnations.com/wp-content/uploads/2025/02/OPEN-PANTRY-DECEMBER-2024-79.webp)",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-700 uppercase">
              Second Pillar
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Ark Food Bank &amp; Relief
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Training, providing food, and distributing critical relief items to 20,000 less privileged families every year — operated by OneSound Charity under The Isaiah Wealth Initiative.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-stone-200/80 bg-stone-50/70 py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center sm:grid-cols-4">
            <div>
              <div className="font-display text-3xl font-bold text-stone-950">
                20,000
              </div>
              <div className="mt-1 text-xs text-stone-500">
                Families Fed Annually
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-stone-950">
                5,000+
              </div>
              <div className="mt-1 text-xs text-stone-500">
                Direct Beneficiaries Per Drive
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-stone-950">
                Multi-Storage
              </div>
              <div className="mt-1 text-xs text-stone-500">
                On-Site Food Facility
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-stone-950">
                100% Free
              </div>
              <div className="mt-1 text-xs text-stone-500">
                Unconditional Relief
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Narrative */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Feeding Hope
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                A Sustained Lifeline Against Poverty and Hunger
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone-600">
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

            <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl">
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
              <h3 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">
                How the Ark Food Bank Operates
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {pillarsData.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xs transition-shadow hover:shadow-md hover:border-amber-300"
                >
                  <h4 className="font-display text-xl font-bold text-stone-950">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-stone-600">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-stone-200/80 bg-stone-50/60 py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h3 className="font-display text-2xl font-bold text-stone-950">
              Support the Next Food Bank Distribution
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-stone-600">
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
                className="rounded-full border border-stone-300 bg-white px-7 py-3 text-xs font-semibold text-stone-800 shadow-xs transition-colors hover:bg-stone-50 hover:border-stone-400"
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
