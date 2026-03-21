import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden pt-28"
    >
      <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-end px-6 pb-8 sm:px-10 sm:pb-10 lg:grid-cols-2 lg:px-14 lg:pb-14">
        <div className="pointer-events-none absolute bottom-0 left-0">
          <Image
            src="/hero.png"
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
          <h1 className="mt-2 text-[clamp(4.5rem,16vw,15rem)] font-black leading-[0.82] tracking-tight">
            How you doin&apos;
          </h1>
        </div>
      </div>
    </section>
  );
}