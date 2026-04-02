"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "scale-up";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const variantStyles: Record<AnimationVariant, { from: string; to: string }> = {
  "fade-up": {
    from: "translate-y-8 opacity-0",
    to: "translate-y-0 opacity-100",
  },
  "fade-left": {
    from: "-translate-x-8 opacity-0",
    to: "translate-x-0 opacity-100",
  },
  "fade-right": {
    from: "translate-x-8 opacity-0",
    to: "translate-x-0 opacity-100",
  },
  "scale-up": {
    from: "scale-95 opacity-0",
    to: "scale-100 opacity-100",
  },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = "",
  once = true,
}: ScrollRevealProps): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const style = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={`transition-all will-change-transform ${isVisible ? style.to : style.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
