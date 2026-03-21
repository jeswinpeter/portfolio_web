export function AboutSection() {
  return (
    <section
      id="about"
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="relative h-full">
        {/* Top-left "About" */}
        <div className="pointer-events-none absolute left-0 top-2 z-0">
          <h2 className="text-[clamp(5rem,18vw,16rem)] font-black leading-[0.82] tracking-tight text-foreground/10">
            About
          </h2>
        </div>

        {/* Bottom-right "About" */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-0">
          <h2 className="text-[clamp(5rem,18vw,16rem)] font-black leading-[0.82] tracking-tight text-foreground/10">
            About
          </h2>
        </div>

        {/* Content container */}
        <div className="relative z-10 h-full w-full px-6 sm:px-8 lg:px-12">

          {/* 1st — top left, overlapping the top-left "About" */}
          <div className="absolute top-37 left-6 sm:left-8 lg:left-24 max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi I am Jeswin Peter
            </h1>
            <p className="mt-4 text-xl leading-9 text-muted-foreground sm:text-3xl">
              I like building things that combine{" "} 
              <span className="text-black font-bold">software and hardware</span>, especially in areas like{" "} 
              <span className="text-black font-bold">robotics, IoT, and assistive technology</span>. Bionic arms and exoskeletons fascinate me.
            </p>
          </div>

          {/* 2nd — centered horizontally, middle of page */}
          <div className="absolute top-[60%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-full max-w-lg text-center">
            <p className="text-xl leading-9 text-muted-foreground sm:text-3xl">
              I like to take an{" "}
              <span className="text-black font-bold">understanding-first approach</span>, focusing on learning the fundamentals before jumping into implementation, letting me build with more clarity and purpose.
            </p>
          </div>

          {/* 3rd — bottom left */}
          <div className="absolute bottom-8 left-6 sm:left-8 lg:left-24 max-w-lg">
            <p className="text-xl leading-9 text-muted-foreground sm:text-3xl">
              I also work on{" "} 
              <span className="text-black font-bold">mobile app development</span>, mainly to create simple and useful ways for users to interact with the systems I build.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}