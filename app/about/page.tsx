import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "About Us — Ark of Light for All Nations",
  description:
    "Learn about the founding vision, miraculous 4-month construction, leadership, and 15 humanitarian NGOs of the Ark of Light for All Nations in Lagos, Nigeria.",
};

const ngos = [
  { name: "The Empowerment Network (TEN)", desc: "Poverty alleviation, business grants, and vocational training across Nigeria." },
  { name: "Five Loaves", desc: "Hunger relief and consistent food pantry supplies for underprivileged households." },
  { name: "City Inner Missions", desc: "Slum outreach, child education support, and community development." },
  { name: "Barnabas", desc: "Missionary care, pastoral welfare, and church planter support across rural fields." },
  { name: "Father's Orphanage", desc: "Compassionate shelter, nutrition, healthcare, and schooling for vulnerable orphans." },
  { name: "Healing Care", desc: "Free medical screenings, surgeries support, and primary healthcare outreaches." },
  { name: "Paul & Silas Foundation", desc: "Prison ministry, legal advocacy, and rehabilitation for inmates." },
  { name: "Trusted Friends", desc: "Mental health guidance, crisis counseling, and youth mentorship programs." },
  { name: "Love Makeover", desc: "Dignified clothing drives, personal grooming, and essentials distribution." },
  { name: "Lifted", desc: "Micro-credit support and sustainable empowerment for widows and single mothers." },
  { name: "Elders Support Programme", desc: "Elderly welfare, monthly stipends, and medical checkups for senior citizens." },
  { name: "Pact for Israel", desc: "Intercessory prayer and international cultural fellowship." },
  { name: "First World Africa", desc: "Grassroots community initiatives driving economic self-sufficiency." },
  { name: "Joint Church Action", desc: "Inter-denominational collaboration for regional humanitarian response." },
  { name: "Youth Empowerment", desc: "Tech skills incubation, leadership training, and educational scholarships." },
];

const practices = [
  {
    title: "Improve Health and Well-being",
    desc: "Delivering free medical outreaches, mental health counseling, trauma-informed care, and clean water boreholes to underserved neighborhoods.",
  },
  {
    title: "Encourage Economic Empowerment",
    desc: "Equipping youths, widows, and vulnerable families with marketable skills, business seed capital, and financial literacy training.",
  },
  {
    title: "Build Community and Collaboration",
    desc: "Uniting faith bodies, volunteers, and civil authorities to address social challenges with compassion and structured organization.",
  },
  {
    title: "Promote Sustainable Living",
    desc: "Creating lasting community lifelines — from continuous multi-storage food banks to enduring education and scholarship foundations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-zinc-950 py-24 text-white md:py-32">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url(https://arkoflightforallnations.com/wp-content/uploads/2025/09/MAIN-HALL-4.jpg)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/50"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              About the Ark
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              A City of Refuge Built on Prophetic Mandate
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              The global headquarters of Gospel Pillars International Churches — dedicated as a sanctuary of faith, a multi-storage food bank, and an emergency crisis relief centre for all nations.
            </p>
          </div>
        </section>

        {/* Founding Scripture & History */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
                Founding Story
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                Four Months From Foundation to Commissioning
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  In early 2023, Dr. Isaiah Macwealth received the divine mandate to establish an extraordinary city of refuge for the nations in these last days, anchored on two scriptures:
                </p>
                <blockquote className="border-l-2 border-amber-500 pl-4 italic text-zinc-800 dark:text-zinc-200">
                  &ldquo;The cities which you shall give to the Levites shall be the six cities of refuge…&rdquo; — Numbers 35:6a
                  <br />
                  &ldquo;For mine house shall be called a house of prayer for all people.&rdquo; — Isaiah 56:7
                </blockquote>
                <p>
                  Spanning approximately 8,900 square metres along Kudirat Abiola Way in Alausa, Ikeja, the multi-billion Naira sanctuary was constructed in an unprecedented four months of round-the-clock determination, faith, and discipline.
                </p>
                <p>
                  On November 11, 2023, dignitaries and worshippers from across the globe gathered for the grand ribbon-cutting and dedication. Bishop David Oyedepo attended as chief guest, with Bishop Wesley Arije presiding, Prophet Isaac Anto of Ghana, and international gospel ministers including Ron Kenoly, Panam Percy Paul, and Chioma Jesus.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl dark:border-zinc-800">
                <Image
                  src="https://arkoflightforallnations.com/wp-content/uploads/2025/09/main-hall-1-1.jpg"
                  alt="Main Worship Hall of the Ark of Light"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                <div>
                  <div className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                    10,000
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Auditorium Capacity
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                    ~8,900m²
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Campus Size
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                    4 Months
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Record Build
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
                Spiritual Leadership
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                Guided by Compassion &amp; Purpose
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                  Dr. Isaiah Macwealth
                </h3>
                <p className="mt-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
                  Founder &amp; Senior Pastor
                </p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p>
                    Dr. Isaiah Macwealth is an internationally recognized author of over 100 books, an anointed songwriter, prophet to nations, and philanthropist whose ministry started from humble beginnings as a university graduate.
                  </p>
                  <p>
                    He serves as the Senior Pastor of Gospel Pillars International Churches, overseeing dozens of branches across 5 continents, including the United Kingdom, United States, Canada, and the Philippines. Through The Isaiah Wealth Initiative (TIWI), he has established 15 non-governmental organizations providing holistic assistance to women, children, and vulnerable families worldwide.
                  </p>
                </div>
              </article>

              <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                  Prophetess Lily Anita Macwealth
                </h3>
                <p className="mt-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
                  Co-Senior Pastor &amp; Charity Director
                </p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <p>
                    Prophetess Lily Anita Macwealth ministers alongside her husband with deep passion for intercessory prayer, spiritual discipleship, and welfare operations.
                  </p>
                  <p>
                    She directly oversees welfare initiatives, women empowerment seminars, and seasonal distributions at the Ark Food Bank, ensuring that everyone who visits the Ark experiences the unconditional love of Yeshua.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 15 NGOs Section */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
              Humanitarian Impact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              15 NGOs Under The Isaiah Wealth Initiative
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              Each specialized non-governmental organization addresses a critical human need — bringing relief, dignity, and sustainable transformation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ngos.map((ngo) => (
              <div
                key={ngo.name}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {ngo.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {ngo.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4 Best Practices */}
        <section className="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
                Core Principles
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                Best Practices We Champion
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {practices.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="font-display text-2xl font-bold text-amber-600 dark:text-amber-400">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-3 font-semibold text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-zinc-950 px-8 py-16 text-center text-white dark:bg-zinc-900">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Be a Part of What God Is Doing at the Ark
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400">
              Whether worshipping with us in person, volunteering in community outreaches, or partnering financially, there is a place for you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/volunteer"
                className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-opacity hover:opacity-90"
              >
                Become a Volunteer
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
