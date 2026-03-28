import { LazyAurora } from "@/components/LazyAurora";

const milestones = [
  { year: "2023 SEP", title: "Started BTech at SJCET", kind: "Education" },
  { year: "2025 DEC", title: "Built First Major App", kind: "Project" },
  { year: "2026 JAN", title: "Started Internship at Wesprime", kind: "Experience" },
];

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative flex min-h-screen w-full items-center bg-transparent px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      
      <LazyAurora
        speed={1.5}
        scale={1.4}
        brightness={1}
        color1="#3edab3"
        color2="#80ff00"
        noiseFrequency={2.5}
        noiseAmplitude={3}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction={false}
        mouseInfluence={0.15}
      />
    

      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-border bg-card/75 p-6 backdrop-blur-md sm:p-8">

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