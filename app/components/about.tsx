import Image from "next/image";

const aboutImage =
  "https://arkoflightforallnations.com/wp-content/uploads/2025/09/MAIN-HALL-4.jpg";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl">
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
          <div
            aria-hidden
            className="absolute -top-8 -left-8 -z-10 h-48 w-48 rounded-full bg-amber-300/30 blur-3xl"
          />
        </div>

        <div>
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
            About the Ark
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight font-bold tracking-tight text-balance text-zinc-950 sm:text-5xl dark:text-zinc-50">
            A beacon of hope and a lifeline to those in need
          </h2>
          <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
            The Ark of Light for All Nations is the global headquarters of
            Gospel Pillars International Churches, on almost 9,000 square
            metres along Kudirat Abiola Way in the Ikeja axis of Lagos.
          </p>
          <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
            Built in just four months and launched on November 11, 2023, this
            multi-billion Naira sanctuary seats 10,000 worshippers across its
            multi-roomed auditoriums — while housing a food and emergency bank
            serving communities in Lagos and beyond with free food, clothing
            and relief supplies. It has welcomed pilgrims from over 30 nations
            and 4 continents, including delegates to the Greater Glory
            Gathering (G3) International Conference.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-amber-500" />
              ~9,000 sqm campus
            </span>
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-amber-500" />
              10,000-seat capacity
            </span>
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-amber-500" />
              Iconic arch architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
