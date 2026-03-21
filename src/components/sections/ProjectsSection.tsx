const placeholders = ["Project One", "Project Two", "Project Three"];
const titleLetters = "PROJECTS".split("");

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:grid lg:min-h-[36rem] lg:grid-cols-[8rem,1fr] lg:gap-8"
    >
      <aside
        aria-hidden="true"
        className="hidden h-full flex-col items-center justify-between border-r border-border pr-4 lg:flex"
      >
        {titleLetters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="text-4xl font-extrabold leading-none tracking-tight text-foreground/90 xl:text-5xl"
          >
            {letter}
          </span>
        ))}
      </aside>

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-muted-foreground">
          A preview grid for your featured work.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((project) => (
            <article
              key={project}
              className="rounded-xl border border-border bg-background p-4"
            >
              <h3 className="font-medium">{project}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Add a short project summary, stack, and links.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}