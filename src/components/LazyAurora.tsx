"use client";

import { useEffect, useRef, useState } from "react";
import SoftAurora from "./SoftAurora";

export function LazyAurora(props: React.ComponentProps<typeof SoftAurora>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // triggers when 10% of the section is visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      {isVisible && <SoftAurora {...props} />}
    </div>
  );
}