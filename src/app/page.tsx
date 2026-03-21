import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory bg-background text-foreground">
      <div className="snap-start">
        <HeroSection />
      </div>

      <div className="snap-start">
        <AboutSection />
      </div>

      <div className="snap-start">
        <ProjectsSection />
      </div>

      <div className="snap-start">
        <TimelineSection />
      </div>

      <div className="snap-start">
        <ContactSection />
      </div>
    </main>
  );
}
