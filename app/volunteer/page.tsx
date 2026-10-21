"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const departments = [
  {
    title: "Ark Food Bank & Outreach",
    desc: "Sorting, packing, and distributing monthly food rations and relief materials to 20,000 less privileged families.",
  },
  {
    title: "Broadcast Studio & Media",
    desc: "Operating broadcast cameras, audio consoles, video editing, graphics, and live international webcasts.",
  },
  {
    title: "Sanctuary Protocol & Ushering",
    desc: "Warmly receiving worshippers, guiding delegates and pilgrims, and preserving sanctuary decorum.",
  },
  {
    title: "Medical & Emergency Care",
    desc: "Medical professionals and first responders delivering on-site emergency care and community health screenings.",
  },
  {
    title: "Children’s Church Education",
    desc: "Nurturing children with interactive Bible lessons, creative learning, and safe classroom management.",
  },
  {
    title: "Logistics & Facility Maintenance",
    desc: "Assisting with campus setup, technical staging, traffic coordination, and welcoming accommodations.",
  },
];

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    department: "Ark Food Bank & Outreach",
    availability: "Sundays & Wednesdays",
    experience: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                "url(https://arkoflightforallnations.com/wp-content/uploads/2025/02/OPEN-PANTRY-DECEMBER-2024-79.webp)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/60"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              Volunteer Community
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Join a Dedicated Family of 1,500+ Volunteers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Serve with joy, develop your gifts, and be the hands and feet of Christ to thousands of families and worshippers every week.
            </p>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="border-b border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center sm:grid-cols-4">
            <div>
              <div className="font-display text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                1,500+
              </div>
              <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Active Volunteers
              </div>
            </div>
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
                20+
              </div>
              <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Community Projects
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                25
              </div>
              <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Nations Impacted
              </div>
            </div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
              Service Opportunities
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
              Where You Can Make a Difference
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              There is an opportunity tailored to your schedule, passions, and professional skills.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="font-display text-xl font-bold text-zinc-950 dark:text-zinc-50">
                  {dept.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {dept.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Application Form */}
        <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
                Get Started
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                Volunteer Registration Form
              </h2>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                Fill in your details below and our volunteer coordination team will get in touch with orientation schedules.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10 dark:border-zinc-800 dark:bg-zinc-900">
              {submitted ? (
                <div className="py-10 text-center">
                  <h3 className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                    Welcome to the Volunteer Team!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
                    Thank you, {formData.fullName}. Your registration has been received. Our team will contact you via email and WhatsApp with next steps and department onboarding times.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        city: "",
                        department: "Ark Food Bank & Outreach",
                        availability: "Sundays & Wednesdays",
                        experience: "",
                      });
                    }}
                    className="mt-6 rounded-full bg-amber-500 px-7 py-3 text-xs font-semibold text-white hover:bg-amber-600 transition-colors"
                  >
                    Register Another Person
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Your full name"
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-amber-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-amber-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+234 ..."
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-amber-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Residential Area / City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        placeholder="E.g. Ikeja, Ojota, Lekki, or Online"
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-amber-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Department Preference *
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) =>
                          setFormData({ ...formData, department: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-amber-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      >
                        {departments.map((d) => (
                          <option key={d.title} value={d.title}>
                            {d.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        Availability *
                      </label>
                      <select
                        value={formData.availability}
                        onChange={(e) =>
                          setFormData({ ...formData, availability: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-amber-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                      >
                        <option value="Sundays & Wednesdays">Sundays &amp; Wednesdays</option>
                        <option value="Sundays Only">Sundays Only</option>
                        <option value="Wednesdays Only">Wednesdays Only</option>
                        <option value="Weekday Community Outreaches">Weekday Community Outreaches</option>
                        <option value="Flexible / On Call">Flexible / On Call</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      Skills, Background or Notes (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      placeholder="Tell us briefly about your profession, skills, or what motivates you to serve..."
                      className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-900 outline-none transition-colors focus:border-amber-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-amber-500/25 transition-opacity hover:opacity-90"
                  >
                    Submit Volunteer Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
