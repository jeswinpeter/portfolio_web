'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState, type MouseEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProjectStatus = 'Ongoing' | 'Deployed' | 'Upcoming';
type ProjectType = 'Mobile app' | 'Website';

const projects: Array<{
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  status: ProjectStatus;
}> = [
  {
    id: 'atlas',
    title: 'Project Atlas',
    description: 'A performant data viz dashboard with streaming metrics and anomaly alerts.',
    type: 'Website',
    status: 'Ongoing',
  },
  {
    id: 'nav-ez',
    title: 'NavEz',
    description: 'NavEz is a modern Android application designed to enhance the public commuting experience. It goes beyond simple navigation by providing "context-aware" travel advice, such as recommending which side of a bus to sit on to avoid direct sunlight, estimating auto-rickshaw fares, and providing emergency SOS features.',
    type: 'Mobile app',
    status: 'Ongoing',
  },
  {
    id: 'pulse',
    title: 'Pulse Mobile',
    description: 'Wellness companion that pairs AI journaling with adaptive breathing sessions.',
    type: 'Mobile app',
    status: 'Ongoing',
  },
  {
    id: 'forge',
    title: 'Forge Build Tools',
    description: 'DX toolkit that cuts CI feedback loops with smart caching and previews.',
    type: 'Website',
    status: 'Upcoming',
  },
  {
    id: 'tidal',
    title: 'Tidal Commerce',
    description: 'Composable storefront starter focused on speed, accessibility, and storytelling.',
    type: 'Website',
    status: 'Deployed',
  },
];

type SlotKey = -1 | 0 | 1 | 'hiddenLeft' | 'hiddenRight';

const slotPositions: Record<SlotKey, { x: number; y: number; scale: number; opacity: number; zIndex: number }> = {
  [-1]: { x: -320, y: 32, scale: 0.86, opacity: 0.6, zIndex: 10 },
  0: { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 40 },
  1: { x: 320, y: 32, scale: 0.86, opacity: 0.6, zIndex: 10 },
  hiddenLeft: { x: -520, y: 20, scale: 0.72, opacity: 0, zIndex: 0 },
  hiddenRight: { x: 520, y: 20, scale: 0.72, opacity: 0, zIndex: 0 },
};

const cardTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] };

const statusStyles: Record<ProjectStatus, string> = {
  Ongoing: 'border-amber-400/50 bg-amber-500/10 text-amber-200',
  Deployed: 'border-emerald-400/50 bg-emerald-500/10 text-emerald-200',
  Upcoming: 'border-sky-400/50 bg-sky-500/10 text-sky-200',
};

const getSlotForIndex = (index: number, current: number, total: number): SlotKey => {
  const normalized = (index - current + total) % total;
  if (normalized === 0) return 0;
  if (normalized === 1) return 1;
  if (normalized === total - 1) return -1;
  return normalized < total / 2 ? 'hiddenRight' : 'hiddenLeft';
};

export function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goNext = () => {
    setIsPaused(false);
    setCurrent((prev) => (prev + 1) % projects.length);
  };
  const goPrev = () => {
    setIsPaused(false);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const orderedProjects = useMemo(() => projects, []);

  const handleSectionClick = () => {
    if (isPaused) {
      setIsPaused(false);
    }
  };

  const handleCardClick = (event: MouseEvent, isActive: boolean) => {
    event.stopPropagation();
    if (isActive && !isPaused) {
      setIsPaused(true);
    }
  };

  return (
    <section
      id="projects"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8"
      onClick={handleSectionClick}
    >
      {/* Edge watermarks to frame the section */}
      <div className="pointer-events-none absolute left-25 top-1/2 z-0 -translate-y-1/2 -translate-x-1/2">
        <h2 className="-rotate-90 text-[clamp(5rem,18vw,16rem)] font-black tracking-tight text-foreground/10 whitespace-nowrap">
          Projects
        </h2>
      </div>
      <div className="pointer-events-none absolute right-25 top-1/2 z-0 -translate-y-1/2 translate-x-1/2">
        <h2 className="rotate-90 text-[clamp(5rem,18vw,16rem)] font-black tracking-tight text-foreground/10 whitespace-nowrap">
          Projects
        </h2>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={goPrev}
            className="rounded-xl border border-border p-3 shadow-sm transition-colors hover:bg-accent"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <div className="relative flex h-[30rem] w-full max-w-4xl items-center justify-center">
            {orderedProjects.map((project, index) => {
              const slot = getSlotForIndex(index, current, orderedProjects.length);
              const position = slotPositions[slot];
              const isActive = slot === 0;
              const targetScale = isActive && isPaused ? position.scale + 0.08 : position.scale;

              return (
                <motion.article
                  key={project.id}
                  onClick={(event) => handleCardClick(event, isActive)}
                  className="absolute w-full max-w-md rounded-3xl border border-border bg-card/95 px-10 py-12 shadow-[0_25px_90px_-35px_rgba(15,23,42,0.65)] backdrop-blur"
                  animate={{
                    x: position.x,
                    y: position.y,
                    scale: targetScale,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    filter: isActive ? 'blur(0px)' : 'blur(0.15rem)',
                  }}
                  transition={cardTransition}
                  style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                >
                  <div className="flex flex-wrap items-center gap-3 text-left">
                    <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                    <span className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 shadow-inner">
                      {project.type}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-10 flex flex-wrap gap-2 text-xs font-semibold tracking-wide">
                    <span className={`rounded-full border px-3 py-1 ${statusStyles[project.status]}`}>
                      {project.status}
                    </span>
                    <span className="rounded-full border border-border/80 px-3 py-1 text-foreground/70">
                      {index + 1}/{orderedProjects.length}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={goNext}
            className="rounded-xl border border-border p-3 shadow-sm transition-colors hover:bg-accent"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
