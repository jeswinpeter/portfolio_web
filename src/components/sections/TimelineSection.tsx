const milestones = [
  { year: "2022", title: "Started Degree", kind: "Education" },
  { year: "2023", title: "Built First Major App", kind: "Project" },
  { year: "2024", title: "Internship", kind: "Experience" },
];

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="flex min-h-screen w-full items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Timeline</h2>
        <p className="mt-2 text-muted-foreground">
          Placeholder for your interactive education and project journey.
        </p>

        <ol className="mt-6 space-y-3">
          {milestones.map((item) => (
            <li
              key={`${item.year}-${item.title}`}
              className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
            >
              <span className="mt-1 inline-flex min-w-14 justify-center rounded-full bg-muted px-2 py-1 text-xs font-semibold text-muted-foreground">
                {item.year}
              </span>
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.kind}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}