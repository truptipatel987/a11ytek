"use client";

import { useEffect, useState, useRef, useMemo } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Accessibility Audits Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 50, suffix: "+", label: "Organizations Helped" },
  { value: 15, suffix: "+", label: "Years Combined Experience" },
];

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  // Check for reduced motion preference once
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // If user prefers reduced motion, just show the final value
  const initialValue = prefersReducedMotion ? value : 0;
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (!isVisible) return;

    // Skip animation if reduced motion is preferred
    if (prefersReducedMotion) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isVisible, prefersReducedMotion]);

  return (
    <span aria-label={`${value}${suffix} ${suffix === "%" ? "percent" : ""}`}>
      {count}
      {suffix}
    </span>
  );
}

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground"
      aria-labelledby="stats-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">
          Our Impact in Numbers
        </h2>

        <ul
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <div className="text-sm sm:text-base text-primary-foreground/80">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
