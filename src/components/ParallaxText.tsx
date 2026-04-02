"use client";

import { useEffect, useState, type ReactNode } from "react";

interface ParallaxTextProps {
  text?: string;
  speed?: number;
  className?: string;
  separator?: string;
}

export default function ParallaxText({
  text = "물물교환",
  speed = 30,
  className = "",
  separator = " · ",
}: ParallaxTextProps): ReactNode {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(!prefersReduced);
  }, []);

  const repeatedText = Array.from({ length: 12 })
    .map(() => text)
    .join(separator);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={enabled ? "parallax-marquee" : ""}
        style={enabled ? { animationDuration: `${speed}s` } : undefined}
      >
        <span className="inline-block pr-4">{repeatedText}</span>
        <span className="inline-block pr-4">{repeatedText}</span>
      </div>
    </div>
  );
}
