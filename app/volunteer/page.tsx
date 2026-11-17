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
              Volunteer Community
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Join a Dedicated Family of 1,500+ Volunteers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Serve with joy, develop your gifts, and be the hands and feet of Christ to thousands of families and worshippers every week.
            </p>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="border-b border-stone-200/80 bg-stone-50/70 py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center sm:grid-cols-4">
            <div>
              <div className="font-display text-3xl font-bold text-stone-950">
                1,500+
              </div>
              <div className="mt-1 text-xs text-stone-500">
                Active Volunteers
              </div>
            </div>
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
                20+
              </div>
              <div className="mt-1 text-xs text-stone-500">
                Community Projects
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-stone-950">
                25
              </div>
              <div className="mt-1 text-xs text-stone-500">
                Nations Impacted
              </div>
            </div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
              Service Opportunities
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
              Where You Can Make a Difference
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-stone-600">
              There is an opportunity tailored to your schedule, passions, and professional skills.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="rounded-3xl border border-stone-200/80 bg-white p-7 shadow-xs transition-shadow hover:shadow-md hover:border-amber-300"
              >
                <h3 className="font-display text-xl font-bold text-stone-950">
                  {dept.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-stone-600">
                  {dept.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Application Form */}
        <section className="border-t border-stone-200/80 bg-stone-50/60 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Get Started
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
                Volunteer Registration Form
              </h2>
              <p className="mt-2 text-xs text-stone-600">
                Fill in your details below and our volunteer coordination team will get in touch with orientation schedules.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xs sm:p-10">
              {submitted ? (
                <div className="py-10 text-center">
                  <h3 className="font-display text-2xl font-bold text-stone-950">
                    Welcome to the Volunteer Team!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-stone-600">
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
                    className="mt-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3 text-xs font-semibold text-white shadow-md shadow-amber-500/25 hover:opacity-90 transition-opacity"
                  >
                    Register Another Person
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-stone-700">
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
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700">
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
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-stone-700">
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
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700">
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
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-stone-700">
                        Department Preference *
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) =>
                          setFormData({ ...formData, department: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
                      >
                        {departments.map((d) => (
                          <option key={d.title} value={d.title}>
                            {d.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700">
                        Availability *
                      </label>
                      <select
                        value={formData.availability}
                        onChange={(e) =>
                          setFormData({ ...formData, availability: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
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
                    <label className="block text-xs font-medium text-stone-700">
                      Skills, Background or Notes (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      placeholder="Tell us briefly about your profession, skills, or what motivates you to serve..."
                      className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 p-4 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
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
