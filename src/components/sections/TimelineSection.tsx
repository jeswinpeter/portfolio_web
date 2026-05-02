const milestones = [
  { year: "2023 SEP", title: "Started BTech at SJCET", kind: "Education" },
  { year: "2025 DEC", title: "Built First Major App", kind: "Project" },
  { year: "2026 JAN", title: "Started Internship at Wesprime", kind: "Experience" },
];

const kindStyles: Record<string, { dot: string; badge: string }> = {
  Education:  { dot: "bg-sky-400",    badge: "bg-sky-400/15 text-sky-300 ring-sky-400/30" },
  Project:    { dot: "bg-violet-400", badge: "bg-violet-400/15 text-violet-300 ring-violet-400/30" },
  Experience: { dot: "bg-emerald-400",badge: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30" },
};

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-transparent px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative h-[min(99.2vw,43.6rem)] w-[min(99.2vw,43.6rem)] origin-center scale-[2.75]">
          <div className="absolute inset-0 spin-medium-reverse">
            <img
              src="/outer.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full select-none object-contain opacity-45"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[87%] w-[87%] -translate-x-1/2 -translate-y-[48%]">
            <div className="h-full w-full spin-medium">
              <img
                src="/inner.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full select-none object-contain opacity-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl">

        {/* Section heading */}
        <p className="mb-1 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Journey
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Timeline
        </h2>

        {/* ── Timeline list ── */}
        <ol className="relative">

          {/* Vertical spine — left on mobile, centered on desktop */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute bottom-0 top-0 w-px
              left-4 sm:left-1/2 sm:-translate-x-1/2
              bg-gradient-to-b from-transparent via-border to-transparent
            "
          />

          {milestones.map((item, i) => {
            const isRight = i % 2 === 0; // even → card on right on desktop
            const s = kindStyles[item.kind] ?? kindStyles["Education"];

            return (
              <li
                key={`${item.year}-${item.title}`}
                className="
                  relative mb-10 last:mb-0
                  flex items-center
                  pl-12 sm:pl-0
                "
              >
                {/*
                  ── Dot + connector wrapper ──
                  On mobile: dot sits at left-4 (on the spine).
                  On desktop: dot sits at 50%, connector extends left or right.
                */}
                <div
                  aria-hidden="true"
                  className="
                    absolute flex items-center
                    left-4 -translate-x-1/2
                    sm:left-1/2 sm:-translate-x-1/2
                  "
                >
                  {/* connector — only visible on desktop, direction flips */}
                  <span
                    className={`
                      hidden sm:block h-px w-8 bg-border
                      ${isRight ? "order-first" : "order-last"}
                    `}
                  />
                  {/* dot */}
                  <span className={`block h-3 w-3 rounded-full ring-2 ring-background ${s.dot}`} />
                </div>

                {/*
                  ── Card ──
                  Mobile: full width (pl-12 handled by li).
                  Desktop: ~44 % wide, pushed left or right of center.
                */}
                <div
                  className={`
                    w-full
                    sm:w-[44%]
                    ${isRight
                      ? "sm:ml-[56%]"   // right side
                      : "sm:mr-[56%]"   // left side
                    }
                    rounded-2xl border border-white/10
                    bg-white/5 backdrop-blur-md
                    px-5 py-4 shadow-lg shadow-black/20
                    transition-colors duration-200 hover:bg-white/8
                  `}
                >
                  {/* year chip */}
                  <span className="mb-2 inline-block rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.year}
                  </span>

                  <p className="text-sm font-semibold leading-snug text-foreground">
                    {item.title}
                  </p>

                  {/* kind badge */}
                  <span
                    className={`
                      mt-2 inline-flex items-center rounded-full px-2 py-0.5
                      text-[10px] font-medium ring-1 ring-inset
                      ${s.badge}
                    `}
                  >
                    {item.kind}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
