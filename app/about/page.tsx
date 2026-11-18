import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "About Ark of Light for All Nations",
  description:
    "Ark of Light for all Nations is the global headquarters of the ministry of Prophet Isaiah Macwealth, launched on the 11th of November 2023 as a base for his global ministry operations, missions, and charity.",
};

const amenities = [
  "Bible School",
  "Tuition Free Primary & Secondary Schools",
  "Music Recording Studios",
  "Conference Rooms",
  "Prayer Mountain",
  "Lounges & Lodges",
  "Multipurpose Event Halls",
  "Christian Bookshop",
];

export default function AboutPage() {
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
                "url(https://arkoflightforallnations.com/wp-content/uploads/2025/09/MAIN-HALL-4.jpg)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-700 uppercase">
              About Ark of Light for All Nations
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Global Headquarters of Prophet Isaiah Macwealth
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-700">
              Ark of Light for all Nations is the global headquarters of the ministry of Prophet Isaiah Macwealth, launched on the 11th of November 2023 as a base for his global ministry operations, missions, and charity.
            </p>
          </div>
        </section>

        {/* Narrative & Photo Section */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6 text-base leading-relaxed text-stone-700">
              <p>
                Ark of Light for all Nations is the global headquarters of the ministry of Prophet Isaiah Macwealth, launched on the 11th of November 2023 as a base for his global ministry operations, missions, and charity.
              </p>
              <p>
                The facility which sits on almost 9,000 square meters of prime property located in the high value commercial area of Oregun, Ikeja, serves as a sanctuary of refuge, food bank and emergency response center for local, national and international charity efforts.
              </p>
              <p>
                The multi-billion Naira facility has a combined capacity of 10,000 worshippers in its multi-roomed auditoriums, hosting thousands of worshippers weekly while housing a Food and Emergency Bank that serves various communities in Lagos and environs with free food, clothing, and emergency supplies.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl">
                <Image
                  src="https://arkoflightforallnations.com/wp-content/uploads/2025/09/main-hall-1-1.jpg"
                  alt="Main Worship Hall of the Ark of Light"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-stone-200/80 pt-6">
                <div>
                  <div className="font-display text-2xl font-bold text-stone-950">
                    10,000
                  </div>
                  <div className="mt-1 text-xs text-stone-500">
                    Combined Capacity
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-stone-950">
                    ~9,000m²
                  </div>
                  <div className="mt-1 text-xs text-stone-500">
                    Oregun, Ikeja
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-stone-950">
                    Nov 11, 2023
                  </div>
                  <div className="mt-1 text-xs text-stone-500">
                    Launch Date
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Landmark & Amenities */}
        <section className="border-y border-stone-200/80 bg-stone-50/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Architectural Landmark
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                Iconic Arches, Paved Grounds &amp; Garden Scenery
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-stone-700">
                This architectural landmark which features iconic arches, 100% paved floors, and beautiful garden scenery also houses:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs transition-colors hover:border-amber-300"
                >
                  <span className="size-2 rounded-full bg-amber-500 shrink-0" />
                  <span className="font-display text-base font-semibold text-stone-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm font-medium text-stone-600">
              and other amenities for a serene atmosphere of prayer, fellowship and worship.
            </p>
          </div>
        </section>

        {/* International Visitors & G3 Conference Section */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 p-8 shadow-sm md:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                  Global Gatherings &amp; Delegations
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                  Greater Glory Gathering (G3) Intl. Conference
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone-700">
                  Since its launch in November 2023, the Ark of Light for all Nations has received visitors from many parts of the world who have come to witness the grace of God, including at the annual Greater Glory Gathering (G3) Intl. Conference which had guests and delegates from over 30 nations and 4 continents in attendance.
                </p>
                <p className="mt-4 text-sm font-semibold text-stone-900">
                  To attend conferences at the Ark of Light for all Nations or to access the annual programme itinerary, please visit www.arkoflightforallnations.org
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                <a
                  href="https://www.arkoflightforallnations.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Visit arkoflightforallnations.org &rarr;
                </a>
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-stone-300 bg-white px-7 py-3.5 text-center text-sm font-semibold text-stone-800 shadow-xs transition-colors hover:bg-stone-50 hover:border-stone-400 sm:w-auto"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
