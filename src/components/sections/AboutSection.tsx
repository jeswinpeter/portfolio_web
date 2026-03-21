export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden pt-28 pb-16">
      <div className="relative h-full">
        {/* Top-left "About" */}
        <div className="pointer-events-none fixed left-0 top-2 z-0">
          <h2 className="text-[clamp(5rem,18vw,16rem)] font-black leading-[0.82] tracking-tight text-foreground/10">
            About
          </h2>
        </div>

        {/* Bottom-right "About" */}
        <div className="pointer-events-none fixed bottom-0 right-0 z-0">
          <h2 className="text-[clamp(5rem,18vw,16rem)] font-black leading-[0.82] tracking-tight text-foreground/10">
            About
          </h2>
        </div>

        {/* Content container */}
        <div className="relative z-10 h-full w-full px-6 sm:px-8 lg:px-12">
          {/* Left column: heading + 1st paragraph */}
          <div className="pt-48 lg:pt-30 pl-2 max-w-md">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi I am Jeswin Peter
            </h1>
            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              I like building things that combine software and hardware, especially in areas like robotics, IoT, and assistive technology. Bionic arms and exoskeletons fascinate me.
            </p>
          </div>

          {/* Right column: 2nd paragraph - vertically centered, positioned to the right */}
          <div className="absolute top-80 right-20 sm:right-24 lg:right-32 w-full max-w-lg -translate-y-1/2">
            <p className="text-lg leading-8 text-muted-foreground">
              I like to take an understanding-first approach, focusing on learning the fundamentals before jumping into implementation, letting me build with more clarity and purpose.
            </p>
          </div>

          {/* Bottom left: 3rd paragraph (offset to center) */}
          <div className="absolute bottom-8 left-6 sm:left-8 lg:left-24 max-w-lg">
            <p className="text-lg leading-8 text-muted-foreground">
              I also work on mobile app development, mainly to create simple and useful ways for users to interact with the systems I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}