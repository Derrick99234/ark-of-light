const projects = [
  {
    title: "Children's Feeding",
    location: "Oshodi, Lagos, Nigeria",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-9.5-9C.7 8.6 2.5 5 6 5c2 0 3.2 1 4 2.2C10.8 6 12 5 14 5c3.5 0 5.3 3.6 3.5 7C15 16.5 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: "Food Bank Storage Launch",
    location: "Alausa, Ikeja, Lagos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8l8-5 8 5v10l-8 5-8-5V8z" />
        <path d="M4 8l8 5 8-5M12 13v9" />
      </svg>
    ),
  },
  {
    title: "Community Rescue",
    location: "Ajegunle, Lagos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3M12 3v12M6 9l6-6 6 6" />
      </svg>
    ),
  },
  {
    title: "Alausa Borehole Project",
    location: "Alausa, Lagos",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2s5 5.5 5 10a5 5 0 0 1-10 0c0-4.5 5-10 5-10z" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
            Latest Works
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance text-zinc-950 sm:text-5xl dark:text-zinc-50">
            Transforming communities across the globe
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-5 grid size-11 place-items-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-400">
                {project.icon}
              </div>
              <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {project.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
