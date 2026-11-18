import Image from "next/image";
import Link from "next/link";

const aboutImage =
  "https://arkoflightforallnations.com/wp-content/uploads/2025/09/MAIN-HALL-4.jpg";

const keyAmenities = [
  "Bible School",
  "Tuition Free Primary & Secondary Schools",
  "Music Recording Studios",
  "Conference Rooms",
  "Prayer Mountain",
  "Lounges & Lodges",
  "Multipurpose Event Halls",
  "Christian Bookshop",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl">
            <Image
              src={aboutImage}
              alt="Inside the main worship hall of the Ark of Light"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 px-6 py-5 text-white shadow-lg sm:-right-6">
            <div className="font-display text-3xl font-bold">2023</div>
            <div className="text-xs font-medium tracking-wide uppercase opacity-90">
              Launched Nov 11
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
            About Ark of Light for All Nations
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-stone-950 sm:text-4xl lg:text-5xl">
            Global Headquarters of the Ministry of Prophet Isaiah Macwealth
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-700">
            Ark of Light for all Nations is the global headquarters of the ministry of Prophet Isaiah Macwealth, launched on the 11th of November 2023 as a base for his global ministry operations, missions, and charity.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            The facility which sits on almost 9,000 square meters of prime property located in the high value commercial area of Oregun, Ikeja, serves as a sanctuary of refuge, food bank and emergency response center for local, national and international charity efforts.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            The multi-billion Naira facility has a combined capacity of 10,000 worshippers in its multi-roomed auditoriums, hosting thousands of worshippers weekly while housing a Food and Emergency Bank that serves various communities in Lagos and environs with free food, clothing, and emergency supplies.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5">
            <p className="text-xs font-semibold tracking-wider text-amber-900 uppercase">
              Architectural Landmark Features
            </p>
            <p className="mt-1 text-sm leading-relaxed text-stone-700">
              This architectural landmark which features <strong className="text-stone-900">iconic arches</strong>, <strong className="text-stone-900">100% paved floors</strong>, and <strong className="text-stone-900">beautiful garden scenery</strong> also houses:
            </p>
            <div className="mt-3 flex flex-wrap gap-2 pt-2">
              {keyAmenities.map((amenity) => (
                <span
                  key={amenity}
                  className="rounded-lg border border-stone-200 bg-white px-2.5 py-1 text-xs font-medium text-stone-800 shadow-2xs"
                >
                  {amenity}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-stone-600 italic">
              and other amenities for a serene atmosphere of prayer, fellowship and worship.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-amber-500/20 transition-opacity hover:opacity-90"
            >
              Read Full Story &amp; Leadership
            </Link>
            <a
              href="https://www.arkoflightforallnations.org"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-semibold text-stone-800 shadow-xs transition-colors hover:bg-stone-50 hover:border-stone-400"
            >
              Annual Programme Itinerary &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
