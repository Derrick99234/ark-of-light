import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata: Metadata = {
  title: "Sanctuary of Refuge — Ark of Light for All Nations",
  description:
    "A vibrant weekly worship sanctuary and safe haven offering accommodation, spiritual discipleship, and trauma-informed care for displaced individuals and families.",
};

const services = [
  {
    title: "Weekly Worship & Fellowship",
    desc: "Sunday morning celebration service (8:15 AM) and Wednesday midweek communion (7:00 PM), gathering thousands under powerful apostolic teaching, vibrant praise, and healing prayers.",
  },
  {
    title: "Safe Haven Accommodation",
    desc: "Secure, dignified visitor and emergency lodging for individuals and families escaping conflict, natural disasters, persecution, or severe displacement.",
  },
  {
    title: "Trauma-Informed Pastoral Care",
    desc: "Trained pastoral counselors and mental health advocates providing compassionate emotional and psychological support.",
  },
  {
    title: "Rehabilitation & Life-Skills Workshops",
    desc: "Empowering vulnerable pilgrims and guests with practical vocational training, literacy, and community reintegration resources.",
  },
];

export default function SanctuaryOfRefugePage() {
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
                "url(https://arkoflightforallnations.com/wp-content/uploads/2024/03/Sanctuary-of-Refuge-2-1-1.webp)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/60"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              First Pillar
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Sanctuary of Refuge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              A vibrant home of worship every week and a secure haven of hope for individuals and families escaping conflict, persecution, and displacement.
            </p>
          </div>
        </section>

        {/* Biblical Foundation */}
        <section className="border-b border-zinc-200 bg-zinc-50 py-10 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <blockquote className="font-display text-lg italic text-zinc-800 sm:text-xl dark:text-zinc-200">
              &ldquo;The cities which you shall give to the Levites shall be the six cities of refuge, which you shall appoint for the manslayer to flee into…&rdquo;
            </blockquote>
            <p className="mt-2 text-xs font-semibold tracking-wider text-amber-600 uppercase dark:text-amber-400">
              Numbers 35:6a
            </p>
          </div>
        </section>

        {/* Detailed Overview */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
                Core Purpose
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                A Safe Haven for Every Soul
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  At the heart of the Ark of Light for All Nations is the belief that the house of God must be a genuine refuge — spiritually, emotionally, and physically.
                </p>
                <p>
                  Doors are open to every person without distinction of tribe, race, or religion. Here, weary souls find peace in God&rsquo;s presence, while families confronting crisis or sudden destitution receive warm shelter, basic sustenance, and spiritual restoration.
                </p>
                <p className="font-medium text-zinc-900 dark:text-zinc-200 italic">
                  &ldquo;Offering a safe haven not only protects individuals, but provides the critical first step toward rebuilding their lives with dignity, faith, and purpose.&rdquo;
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl dark:border-zinc-800">
              <Image
                src="https://arkoflightforallnations.com/wp-content/uploads/2025/09/MAIN-HALL-4.jpg"
                alt="Sanctuary of Refuge interior"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Pillars services grid */}
          <div className="mt-20">
            <div className="mb-10 text-center">
              <h3 className="font-display text-2xl font-bold text-zinc-950 sm:text-3xl dark:text-zinc-50">
                Key Components of the Sanctuary
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <h4 className="font-display text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {s.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {s.desc}
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
              Experience the Sanctuary in Person
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Join us for Sunday worship at 8:15 AM or Wednesday service at 7:00 PM at Plot 11C Kudirat Abiola Way, Alausa, Ikeja.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3 text-xs font-semibold text-white shadow-md shadow-amber-500/25 transition-opacity hover:opacity-90"
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
