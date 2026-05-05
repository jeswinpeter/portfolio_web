'use client';

import { motion, useInView, type Transition } from 'framer-motion';
import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
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
    id: 'seed',
    title: 'Seed Website',
    description: 'A single promt website created with antigravity. Showcases modern scroll animation and clever use of tools like Flow and Whisk',
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
    id: 'portfolio',
    title: 'Portfolio',
    description: 'A personal portfolio website. Built with a modern, animated design using Next.js, React 19, Tailwind CSS, ShadCN components, Framer Motion for animations, and custom WebGL backgrounds—designed to showcase both technical skills and creative approach to building. ',
    type: 'Website',
    status: 'Ongoing',
  },
  {
    id: 'fitpro',
    title: 'Fitpro',
    description: 'Fitpro is a mobile app to help tracki your progress in gym. It is intended to store workout history and suggest new workout with incresed rep or weight for progressively overloading.',
    type: 'Mobile app',
    status: 'Ongoing',
  },
  {
    id: 'textile',
    title: 'Urban Weaves',
    description: 'A modern e-commerce web application for textile products designed to showcase a seamless shopping experience. Users can browse through a curated collection of textiles and explore different categories. The application is built with cutting-edge technologies to ensure fast performance, responsive design across all devices, and an intuitive user interface.',
    type: 'Website',
    status: 'Deployed',
  },
];

type SlotKey = -1 | 0 | 1 | 'hiddenLeft' | 'hiddenRight';

const slotPositions: Record<SlotKey, { x: number; y: number; scale: number; opacity: number; zIndex: number }> = {
  [-1]: { x: 320, y: 32, scale: 0.86, opacity: 0.6, zIndex: 10 },
  0: { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 40 },
  1: { x: -320, y: 32, scale: 0.86, opacity: 0.6, zIndex: 10 },
  hiddenLeft: { x: 520, y: 20, scale: 0.72, opacity: 0, zIndex: 0 },
  hiddenRight: { x: -520, y: 20, scale: 0.72, opacity: 0, zIndex: 0 },
};

const cardTransition: Transition = { duration: 0.555, ease: [0.22, 0.61, 0.36, 1] };

const previewLimit = 350;

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

const getPreviewText = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  }

  const cutoff = text.slice(0, limit);
  const lastSpace = cutoff.lastIndexOf(' ');
  const trimmed = (lastSpace > 0 ? cutoff.slice(0, lastSpace) : cutoff).trimEnd();

  return `${trimmed}...`;
};

export function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [collapseDirection, setCollapseDirection] = useState<'left' | 'right' | null>(null);
  const [collapseTarget, setCollapseTarget] = useState<string | null>(null);
  const collapseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sectionInView = useInView(sectionRef, { amount: 0.4, once: false });

  useEffect(() => {
    if (isPaused || !sectionInView) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [isPaused, current, sectionInView]);

  useEffect(() => {
    if (!collapseTarget) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setCollapseTarget(null);
      setCollapseDirection(null);
    }, (cardTransition.duration ?? 0.55) * 1000);

    return () => clearTimeout(timeout);
  }, [collapseTarget]);

  const goNext = () => {
    if (isPaused) {
      setCollapseDirection('right');
      setCollapseTarget(projects[current]?.id ?? null);
    }
    setIsPaused(false);
    if (isPaused) {
      if (collapseTimerRef.current) {
        clearTimeout(collapseTimerRef.current);
      }
      const durationMs = (cardTransition.duration ?? 0.55) * 1000;
      collapseTimerRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % projects.length);
      }, durationMs);
      return;
    }
    setCurrent((prev) => (prev + 1) % projects.length);
  };
  const goPrev = () => {
    if (isPaused) {
      setCollapseDirection('left');
      setCollapseTarget(projects[current]?.id ?? null);
    }
    setIsPaused(false);
    if (isPaused) {
      if (collapseTimerRef.current) {
        clearTimeout(collapseTimerRef.current);
      }
      const durationMs = (cardTransition.duration ?? 0.55) * 1000;
      collapseTimerRef.current = setTimeout(() => {
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
      }, durationMs);
      return;
    }
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
      ref={sectionRef}
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

          {/*Card styling*/}
          <motion.div
            layout
            transition={cardTransition}
            className={`relative flex w-full max-w-4xl items-center justify-center ${
              isPaused ? 'h-[min(75vh,42rem)]' : 'h-[30rem]'
            }`}
          >
            {orderedProjects.map((project, index) => {
              const slot = getSlotForIndex(index, current, orderedProjects.length);
              const position = slotPositions[slot];
              const isActive = slot === 0;
              const isExpanded = isActive && isPaused;
              const isCollapsing = !isPaused && collapseTarget === project.id;
              const description = project.description.trim();
              const previewText = getPreviewText(description, previewLimit);
              const isTruncated = description.length > previewLimit;
              const cardSizeClass = isExpanded
                ? 'w-full max-w-4xl h-[min(75vh,42rem)]'
                : 'w-full max-w-md h-[26rem]';
              const descriptionClass = isExpanded
                ? 'mt-4 flex-1 min-h-0 overflow-y-auto pr-2 text-lg leading-relaxed text-muted-foreground'
                : 'mt-4 flex-1 min-h-0 overflow-hidden text-lg leading-relaxed text-muted-foreground';
              const targetScale = isExpanded ? position.scale : position.scale + (isActive ? 0.04 : 0);
              const originX = isCollapsing && collapseDirection ? (collapseDirection === 'right' ? 1 : 0) : 0.5;

              return (
                <motion.article
                  layout
                  key={project.id}
                  onClick={(event) => handleCardClick(event, isActive)}
                  className={`absolute ${
                    cardSizeClass
                  } flex min-h-0 flex-col rounded-3xl border border-border bg-card/95 px-10 py-12 shadow-[0_25px_90px_-35px_rgba(15,23,42,0.65)] backdrop-blur`}
                  animate={{
                    x: position.x,
                    y: position.y,
                    scale: targetScale,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    filter: isActive ? 'blur(0px)' : 'blur(0.15rem)',
                  }}
                  transition={cardTransition}
                  style={{ pointerEvents: isActive ? 'auto' : 'none', originX, originY: 0.5 }}
                >
                  <div className="flex flex-wrap items-center gap-3 text-left">
                    <h3 className="text-4xl font-bold tracking-tight">{project.title}</h3>
                    <span className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 shadow-inner">
                      {project.type}
                    </span>
                  </div>
                  <p className={descriptionClass}>
                    {isExpanded ? description : previewText}
                    {!isExpanded && isTruncated ? (
                      <span className="ml-2 inline-flex items-center rounded-full border border-border/70 bg-background/70 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground/70">
                        more
                      </span>
                    ) : null}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold tracking-wide">
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
          </motion.div>

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
