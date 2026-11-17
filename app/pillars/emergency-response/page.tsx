import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata: Metadata = {
  title: "Emergency Response Centre — Ark of Light for All Nations",
  description:
    "Providing immediate humanitarian assistance, disaster relief, medical support, and emergency rescue in times of community crises.",
};

const capabilities = [
  {
    title: "Rapid Deployment Teams",
    desc: "Mobilizing trained volunteers and first responders equipped with relief logistics, vehicles, and direct aid within hours of a verified community disaster.",
  },
  {
    title: "Emergency Survival Bundles",
    desc: "Pre-assembled kits containing clean potable water, non-perishable nutrition, essential medication, clean bedding, and hygiene supplies for displaced victims.",
  },
  {
    title: "Medical & Trauma Care",
    desc: "Deploying medical professionals to stabilize injuries, administer first aid, distribute medications, and coordinate referrals to specialized medical centers.",
  },
  {
    title: "Civil Safety Collaboration",
    desc: "Partnering closely with state civil defence, fire services, and emergency rescue agencies to ensure rapid, orderly, and life-saving interventions.",
  },
];

const pastOutreaches = [
  {
    title: "Community Rescue — Ajegunle, Lagos",
    desc: "Delivering emergency relief materials, sanitation aids, and food parcels to families affected by urban hardship and environmental degradation.",
  },
  {
    title: "Alausa Clean Water Borehole Project",
    desc: "Constructing and commissioning sustainable solar-powered deep borehole water infrastructure to provide free, clean water to the Alausa community.",
  },
  {
    title: "Pandemic & Crisis Direct Relief",
    desc: "Disbursing millions of Naira in direct emergency cash assistance and thousands of food hampers to vulnerable households during lockdown periods.",
  },
];

export default function EmergencyResponsePage() {
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
                "url(https://arkoflightforallnations.com/wp-content/uploads/2025/02/Emergency-Response.webp)",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-700 uppercase">
              Third Pillar
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Emergency Response Centre
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Immediate humanitarian assistance, medical support, and emergency relief supplies in times of natural disasters, crises, and displacement.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Rapid Relief
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                When Crisis Strikes, Every Second Counts
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone-600">
                <p>
                  The Emergency Response Centre at the Ark of Light is built to act as a permanent base for rapid humanitarian action.
                </p>
                <p>
                  Whether responding to localized urban fires, seasonal flooding, displacement from civil conflicts, or acute medical emergencies, our teams are structured to mobilize resources, relief materials, and trained personnel swiftly.
                </p>
                <p>
                  Through structured partnerships with community leaders and emergency relief authorities, we bridge the gap between catastrophe and recovery, ensuring that affected families receive immediate shelter, nutrition, and medical attention.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl">
              <Image
                src="https://arkoflightforallnations.com/wp-content/uploads/2025/02/Emergency-Response.webp"
                alt="Emergency response team preparing relief parcels"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mt-20">
            <div className="mb-10 text-center">
              <h3 className="font-display text-2xl font-bold text-stone-950 sm:text-3xl">
                Core Emergency Protocols
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xs transition-shadow hover:shadow-md hover:border-amber-300"
                >
                  <h4 className="font-display text-xl font-bold text-stone-950">
                    {c.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-stone-600">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Past Interventions */}
          <div className="mt-20 rounded-3xl border border-stone-200/80 bg-stone-50/70 p-8 sm:p-12">
            <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
              Documented Interventions
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-stone-950">
              Proven Community Response
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pastOutreaches.map((p) => (
                <div key={p.title} className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs">
                  <h4 className="font-semibold text-stone-950">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600">
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
              Help Us Stock Emergency Relief Supplies
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-stone-600">
              By partnering with the emergency fund, you ensure emergency kits, medical supplies, and relief vehicles are on standby before crisis strikes.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/give"
                className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3 text-xs font-semibold text-white shadow-md shadow-amber-500/25 transition-opacity hover:opacity-90"
              >
                Donate to Emergency Relief
              </Link>
              <Link
                href="/volunteer"
                className="rounded-full border border-stone-300 bg-white px-7 py-3 text-xs font-semibold text-stone-800 shadow-xs transition-colors hover:bg-stone-50 hover:border-stone-400"
              >
                Join Emergency Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
