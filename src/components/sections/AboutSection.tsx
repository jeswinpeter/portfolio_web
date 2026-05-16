import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden lg:h-screen lg:min-h-screen"
    >
      <div className="relative h-full">
        {/* Top-left "About" */}
        <div className="pointer-events-none absolute left-0 top-2 z-11">
          <h2 className="text-[clamp(5rem,18vw,16rem)] font-black leading-[0.82] tracking-tight text-foreground/10">
            About
          </h2>
        </div>

        {/* Bottom-right "About" */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-11">
          <h2 className="text-[clamp(5rem,18vw,16rem)] font-black leading-[0.82] tracking-tight text-foreground/10">
            About
          </h2>
        </div>

        {/* Content container */}
        <div className="relative z-10 flex w-full flex-col gap-8 px-6 py-24 sm:px-8 lg:h-screen lg:flex-row lg:justify-around lg:px-12 lg:py-0">

          {/* 1st sticky note */}
          <div className="relative w-full lg:top-[20%] lg:w-xl lg:max-w-3xl lg:max-h-sm">
            <div
              className="mx-auto aspect-square w-full max-w-sm rotate-[-4deg] bg-[url('/Colour=Soft_yellow.png')] bg-[length:100%_95%] bg-center bg-no-repeat text-center flex flex-col items-center justify-center sm:max-w-xl"
            >
              <h3 className={`mx-auto max-w-[22rem] pl-15 text-lg leading-8 text-black sm:max-w-[28rem] sm:text-7xl sm:leading-15 ${caveat.className}`}>
                Hi I am Jeswin Peter
              </h3>
              <p
                className={`mx-auto max-w-[22rem] pl-15 text-lg leading-8 text-gray-600 sm:max-w-[28rem] sm:text-3xl sm:leading-15 ${caveat.className}`}
              >
                I like building things that combine{" "}
                <span className="text-black font-bold ">software and hardware</span>, especially in areas like{" "}
                <span className="text-black font-bold">robotics, IoT, and assistive technology</span>. Bionic arms and exoskeletons fascinate me.
              </p>
            </div>
          </div>

          {/* 2nd sticky note */}
          <div className="relative w-full lg:top-[20%] lg:w-xl lg:max-w-3xl">
            <div
              className="mx-auto aspect-square w-full max-w-sm rotate-[4deg] bg-[url('/Colour=Red.png')] bg-[length:100%_95%] bg-center bg-no-repeat text-center flex items-center justify-center sm:max-w-2xl"
            >
              <p
                className={`mx-auto max-w-[22rem] pl-15 text-lg leading-8 text-gray-600 sm:max-w-[28rem] sm:text-3xl sm:leading-15 ${caveat.className}`}
              >
                I like to take an{" "}
                <span className="text-black font-bold">understanding-first approach</span>, focusing on learning the fundamentals before jumping into implementation, letting me build with more clarity and purpose.
              </p>
            </div>
          </div>

          {/* 3rd sticky note */}
          <div className="relative w-full lg:top-[20%] lg:w-xl lg:max-w-3xl">
            <div
              className="mx-auto aspect-square w-full max-w-sm rotate-[-4deg] bg-[url('/Colour=Green.png')] bg-[length:100%_95%] bg-center bg-no-repeat p-12 text-center flex items-center justify-center sm:max-w-2xl sm:p-16"
            >
              <p
                className={`mx-auto max-w-[22rem] pl-15 text-lg leading-8 text-gray-600 sm:max-w-[28rem] sm:text-3xl sm:leading-15 ${caveat.className}`}
              >
                I also work on{" "}
                <span className="text-black font-bold">mobile app development</span>, mainly to create simple and useful ways for users to interact with the systems I build.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
