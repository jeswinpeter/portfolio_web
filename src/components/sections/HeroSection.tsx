import SplitText from "@/components/SplitText";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      {/* Bottom Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "96px 64px",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 85% at 50% 100%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 95% 85% at 50% 100%, #000 60%, transparent 100%)",
        }}
      />
        <section
          id="hero"
          className="relative min-h-screen w-full overflow-hidden pt-28"
        >
          <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-end px-6 pb-8 sm:px-10 sm:pb-10 lg:grid-cols-2 lg:px-14 lg:pb-14">
            <div className="pointer-events-none absolute bottom-0 left-0">
              <Image
                src="/hero_v2.png"
                alt="Hero visual"
                width={640}
                height={640}
                priority
                className="h-auto w-[180px] sm:w-[280px] lg:w-[380px]"
              />
            </div>

            <div className="hidden lg:block" aria-hidden="true" />

            <div className="relative z-10 text-right">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Portfolio
              </p>
              {/* <h1 className="mt-2 text-[clamp(4.5rem,16vw,15rem)] font-black leading-[0.82] tracking-tight">
                How you doin&apos;
              </h1> */}
              <SplitText
                text="How you doin'"
                className="mt-2 text-[clamp(4.5rem,16vw,15rem)] font-black leading-[0.82] tracking-tight"
                delay={50}
                duration={2.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="right"
              />
            </div>
          </div>
        </section>
    </div>
    
  );
}