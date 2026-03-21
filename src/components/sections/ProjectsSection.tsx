const placeholders = ["Project One", "Project Two", "Project Three"];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:grid lg:min-h-[36rem] lg:grid-cols-[8rem,1fr] lg:gap-8"
    >

      {/* Left edge */}
      <div className="pointer-events-none fixed left-25 top-1/2 z-0 -translate-y-1/2 -translate-x-1/2">
        <h2 className="-rotate-90 text-[clamp(5rem,18vw,16rem)] font-black tracking-tight text-foreground/10 whitespace-nowrap">
          Projects
        </h2>
      </div>

      {/* Right edge */}
      <div className="pointer-events-none fixed right-25 top-1/2 z-0 -translate-y-1/2 translate-x-1/2">
        <h2 className="rotate-90 text-[clamp(5rem,18vw,16rem)] font-black tracking-tight text-foreground/10 whitespace-nowrap">
          Projects
        </h2>
      </div>

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