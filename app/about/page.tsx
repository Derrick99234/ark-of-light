import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "About Ark of Light for All Nations",
  description:
    "The Global headquarters of the ministry of Prophet Isaiah Macwealth in Lagos, Nigeria — a 10,000-capacity architectural landmark, place of worship, food bank, emergency relief base, and host of global conferences.",
};

const amenities = [
  {
    title: "Bible School",
    desc: "Rigorous biblical training, theological studies, and ministerial equipping for believers and leaders.",
  },
  {
    title: "Tuition-Free Schools",
    desc: "Tuition-free primary and secondary schools providing quality education to underserved children.",
  },
  {
    title: "Music Recording Studios",
    desc: "State-of-the-art audio production facilities producing anointed worship music, anthems, and albums.",
  },
  {
    title: "Conference Rooms",
    desc: "Fully equipped executive boardrooms and breakout halls for international summits, planning, and seminars.",
  },
  {
    title: "Prayer Mountain",
    desc: "Dedicated sanctuary spaces set apart for quiet communion, deep intercession, fasting, and answered prayers.",
  },
  {
    title: "Lounges & Lodges",
    desc: "Comfortable hospitality suites, guest lodges, and pastoral lounges welcoming local and international pilgrims.",
  },
  {
    title: "Multipurpose Event Halls",
    desc: "Flexible gathering auditoriums designed for ministry programs, youth summits, banquets, and exhibitions.",
  },
  {
    title: "Christian Bookshop",
    desc: "Resource centre housing over 100 authored titles by Dr. Isaiah Macwealth, study aids, and spiritual media.",
  },
];

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
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Global Headquarters of the Ministry of Prophet Isaiah Macwealth
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-600">
              The Ark of Light for all Nations is the Global headquarters of the ministry of Prophet Isaiah Macwealth where he hosts conferences, programmes and major ministry events annually.
            </p>
          </div>
        </section>

        {/* Core Overview & Landmark Story */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                A City of Refuge &amp; Hope
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                Serving Humanity in Faith, Worship &amp; Charity
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-stone-600">
                <p>
                  Launched in November 2023, the facility sits on almost 9,000 square meters land in the Ikeja axis of Lagos, serving as a place of worship and base for his local, national and international charity efforts.
                </p>
                <p>
                  The multi-billion Naira facility has a combined capacity of 10,000 worshippers in its multi-roomed auditoriums, hosting thousands of worshippers every week while housing a Food and Emergency Bank that serves various communities in Lagos and environs with free food, clothing, and emergency supplies.
                </p>
                <p>
                  This architectural landmark features iconic arches, 100% paved floors, and beautiful garden scenery, creating a serene atmosphere of prayer, fellowship and worship.
                </p>
                <p>
                  Spanning approximately 8,900 square metres along Kudirat Abiola Way in Alausa, Ikeja, the multi-billion Naira sanctuary was constructed in an unprecedented four months of round-the-clock determination, faith, and discipline.
                </p>
                <p>
                  On November 11, 2023, dignitaries and worshippers from across the globe gathered for the grand ribbon-cutting and dedication, with Bishop Wesley Arije presiding, alongside Prophet Isaac Anto of Ghana, and international gospel ministers including Ron Kenoly, Panam Percy Paul, and Chioma Jesus.
                </p>
              </div>
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
                    Auditorium Capacity
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-stone-950">
                    ~9,000m²
                  </div>
                  <div className="mt-1 text-xs text-stone-500">
                    Campus Size
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-stone-950">
                    Nov 2023
                  </div>
                  <div className="mt-1 text-xs text-stone-500">
                    Launched
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Landmark & Campus Amenities */}
        <section className="border-y border-stone-200/80 bg-stone-50/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Campus Amenities
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                Built for Prayer, Fellowship &amp; Ministry
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
                Featuring iconic arches, 100% paved floors, beautiful garden scenery, and purpose-built facilities for a serene atmosphere of prayer, discipleship, and community impact.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs transition-shadow hover:shadow-md hover:border-amber-300"
                >
                  <h3 className="font-display text-lg font-bold text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Visitors & G3 Conference */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="rounded-3xl border border-stone-200/80 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 p-8 shadow-sm md:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                  Global Pilgrimage &amp; Annual Conferences
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                  Welcoming Delegations From 30+ Nations &amp; 4 Continents
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone-600">
                  Since its launch, the Ark of Light for all Nations has received visitors from many parts of the world who have come to witness the grace of God, including at the annual Greater Glory Gathering (G3) Intl. Conference which had guests and delegates from over 30 nations and 4 continents in attendance.
                </p>
                <p className="mt-3 text-sm font-medium text-stone-700">
                  To attend conferences at the Ark of Light for all Nations or to access the annual programme itinerary, please visit the official conference portal:
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

        {/* Leadership Section */}
        <section className="border-y border-stone-200/80 bg-stone-50/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Spiritual Leadership
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                Guided by Compassion &amp; Purpose
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <article className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xs">
                <h3 className="font-display text-2xl font-bold text-stone-950">
                  Dr. Isaiah Macwealth
                </h3>
                <p className="mt-1 text-sm font-semibold text-amber-700">
                  Founder &amp; Senior Pastor
                </p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
                  <p>
                    Dr. Isaiah Macwealth is an internationally recognized author of over 100 books, an anointed songwriter, prophet to nations, and philanthropist whose ministry started from humble beginnings as a university graduate.
                  </p>
                  <p>
                    He serves as the Senior Pastor of Gospel Pillars International Churches, overseeing dozens of branches across 5 continents, including the United Kingdom, United States, Canada, and the Philippines. Through The Isaiah Wealth Initiative (TIWI), he has established 15 non-governmental organizations providing holistic assistance to women, children, and vulnerable families worldwide.
                  </p>
                </div>
              </article>

              <article className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xs">
                <h3 className="font-display text-2xl font-bold text-stone-950">
                  Prophetess Lily Anita
                </h3>
                <p className="mt-1 text-sm font-semibold text-amber-700">
                  Co-Senior Pastor &amp; Charity Director
                </p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
                  <p>
                    Prophetess Lily Anita ministers alongside her husband with deep passion for intercessory prayer, spiritual discipleship, and welfare operations.
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
            <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
              Humanitarian Impact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
              15 NGOs Under The Isaiah Wealth Initiative
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-stone-600">
              Each specialized non-governmental organization addresses a critical human need — bringing relief, dignity, and sustainable transformation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ngos.map((ngo) => (
              <div
                key={ngo.name}
                className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs transition-shadow hover:shadow-md hover:border-amber-300"
              >
                <h3 className="font-semibold text-stone-950">
                  {ngo.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  {ngo.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4 Best Practices */}
        <section className="border-y border-stone-200/80 bg-stone-50/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Core Principles
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                Best Practices We Champion
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {practices.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs"
                >
                  <div className="font-display text-2xl font-bold text-amber-700">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-3 font-semibold text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-500/10 via-amber-50/70 to-orange-500/10 px-8 py-16 text-center shadow-lg shadow-amber-500/5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
              Be a Part of What God Is Doing at the Ark
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-stone-600">
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
                className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-800 shadow-xs transition-colors hover:bg-stone-50 hover:border-stone-400"
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
