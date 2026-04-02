"use client";

import { useEffect, useState, type ReactNode } from "react";

interface GrainOverlayProps {
  opacity?: number;
  className?: string;
}

export default function GrainOverlay({
  opacity = 0.04,
  className = "",
}: GrainOverlayProps): ReactNode {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(!isMobile && !prefersReduced);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-40 ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg width="100%" height="100%" className="grain-animate">
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="200%"
          height="200%"
          x="-50%"
          y="-50%"
          filter="url(#grain-filter)"
        />
      </svg>
    </div>
  );
}
