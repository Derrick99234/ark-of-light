"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const serviceTimes = [
  { day: "Sunday Service", time: "8:15 AM – 11:00 AM", desc: "Vibrant worship, apostolic teaching, and healing prayers" },
  { day: "Wednesday Service", time: "7:00 PM – 9:00 PM", desc: "Midweek word communion, discipleship, and prayer" },
];

const phoneDesks = [
  { region: "Nigeria (Main Desks)", numbers: ["+234 706 998 0367", "+234 809 011 1194", "+234 805 123 3486"] },
  { region: "United Kingdom", numbers: ["+44 7493 345 240"] },
  { region: "United States", numbers: ["+1 682 410 0027"] },
  { region: "Canada", numbers: ["+1 647 563 8691"] },
  { region: "South Africa & Africa", numbers: ["+27 73 110 9815"] },
];

export default function ContactPage() {
  const [formType, setFormType] = useState<"general" | "prayer" | "visit">("general");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Nigeria",
    subject: "",
    message: "",
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
                "url(https://arkoflightforallnations.com/wp-content/uploads/2025/09/reception-1.jpg)",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-700 uppercase">
              Contact &amp; Visit
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              We Would Love to Welcome &amp; Connect With You
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Whether you are planning a visit, seeking prayer, requesting pastoral guidance, or making international pilgrim travel inquiries, our team is ready to serve you.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Contact Info & Schedules */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Direct Information
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-950">
                Sanctuary Address &amp; Lines
              </h2>

              <div className="mt-8 space-y-6">
                {/* Physical Location */}
                <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs">
                  <h3 className="font-semibold text-stone-950">
                    Physical Address
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    Ark of Light for All Nations
                    <br />
                    Plot 11C Kudirat Abiola Way,
                    <br />
                    Alausa, Ikeja, Lagos, Nigeria
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=11C+Kudirat+Abiola+Way+Alausa+Ikeja+Lagos+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>

                {/* Service Schedule */}
                <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs">
                  <h3 className="font-semibold text-stone-950">
                    Weekly Worship Hours
                  </h3>
                  <div className="mt-4 space-y-4">
                    {serviceTimes.map((s) => (
                      <div key={s.day} className="border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-stone-900 text-sm">
                            {s.day}
                          </span>
                          <span className="text-xs font-semibold text-amber-700">
                            {s.time}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-stone-500">
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regional Phone Desks */}
                <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs">
                  <h3 className="font-semibold text-stone-950">
                    Phone &amp; International Desks
                  </h3>
                  <div className="mt-4 space-y-3">
                    {phoneDesks.map((desk) => (
                      <div key={desk.region} className="text-xs">
                        <span className="font-semibold text-stone-800">
                          {desk.region}:
                        </span>{" "}
                        <span className="text-stone-600">
                          {desk.numbers.join(" · ")}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-600">
                    <strong>Email:</strong> info@arkoflightforallnations.com
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-xs">
                <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                  Send a Message
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-stone-950">
                  How Can We Assist You?
                </h3>

                {/* Form type tabs */}
                <div className="mt-6 flex gap-2 border-b border-stone-200 pb-3">
                  <button
                    type="button"
                    onClick={() => setFormType("general")}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                      formType === "general"
                        ? "bg-amber-500 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-950 bg-stone-50"
                    }`}
                  >
                    General Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType("prayer")}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                      formType === "prayer"
                        ? "bg-amber-500 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-950 bg-stone-50"
                    }`}
                  >
                    Prayer Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType("visit")}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
                      formType === "visit"
                        ? "bg-amber-500 text-white shadow-xs"
                        : "text-stone-600 hover:text-stone-950 bg-stone-50"
                    }`}
                  >
                    Pilgrim / Visit Notice
                  </button>
                </div>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-amber-50/80 border border-amber-200/70 p-8 text-center">
                    <h4 className="font-display text-xl font-bold text-amber-900">
                      Message Received
                    </h4>
                    <p className="mt-2 text-sm text-stone-600">
                      Thank you for contacting the Ark of Light for All Nations. Our pastoral care team will review your message and reach out shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          country: "Nigeria",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-amber-500/25 hover:opacity-90 transition-opacity"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-stone-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
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

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-stone-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
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
                          Country / City
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({ ...formData, country: e.target.value })
                          }
                          placeholder="Nigeria, UK, USA..."
                          className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700">
                        {formType === "prayer"
                          ? "Prayer Request Title"
                          : formType === "visit"
                          ? "Intended Date of Visit / Group Size"
                          : "Subject"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder={
                          formType === "prayer"
                            ? "E.g. Healing, Family Breakthrough, Direction"
                            : formType === "visit"
                            ? "E.g. Visiting Sunday Nov 15th with 4 family members"
                            : "E.g. General Inquiry about Service times"
                        }
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700">
                        {formType === "prayer"
                          ? "Your Prayer Details"
                          : "Message Details"}
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Write your message here..."
                        className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50/50 p-4 text-sm text-stone-900 outline-none transition-colors focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-amber-500/25 transition-opacity hover:opacity-90"
                    >
                      {formType === "prayer"
                        ? "Submit Prayer Request"
                        : formType === "visit"
                        ? "Submit Visit Notification"
                        : "Send Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map Preview Section */}
        <section className="border-t border-stone-200/80 bg-stone-50/60 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                Interactive Location
              </p>
              <h3 className="font-display text-2xl font-bold text-stone-950">
                Finding the Ark in Ikeja
              </h3>
              <p className="mt-1 text-xs text-stone-500">
                Located right along Kudirat Abiola Way, easily accessible from Ojota, Ikeja City Mall, and the Lagos State Secretariat.
              </p>
            </div>
            <div className="aspect-[21/9] w-full overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-100 shadow-xs">
              <iframe
                title="Ark of Light Location Map"
                src="https://maps.google.com/maps?q=11C%20Kudirat%20Abiola%20Way%2C%20Alausa%2C%20Ikeja%2C%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
