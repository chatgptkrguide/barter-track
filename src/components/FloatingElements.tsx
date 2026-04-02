"use client";

import { useEffect, useState, type ReactNode } from "react";

interface ShapeConfig {
  id: string;
  svg: ReactNode;
  style: React.CSSProperties;
  animClass: string;
}

export default function FloatingElements(): ReactNode {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  const shapes: ShapeConfig[] = [
    {
      id: "circle-1",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#c45d3e" strokeWidth="1.5" opacity="0.25" />
        </svg>
      ),
      style: { top: "12%", left: "8%", animationDuration: "18s" },
      animClass: "floating-drift-a",
    },
    {
      id: "dot-cluster",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="6" cy="6" r="2.5" fill="#c45d3e" opacity="0.15" />
          <circle cx="18" cy="10" r="1.5" fill="#c45d3e" opacity="0.12" />
          <circle cx="10" cy="22" r="2" fill="#e8a690" opacity="0.18" />
        </svg>
      ),
      style: { top: "28%", right: "6%", animationDuration: "22s" },
      animClass: "floating-drift-b",
    },
    {
      id: "line-1",
      svg: (
        <svg width="40" height="2" viewBox="0 0 40 2" fill="none">
          <line x1="0" y1="1" x2="40" y2="1" stroke="#c45d3e" strokeWidth="1" opacity="0.15" />
        </svg>
      ),
      style: { top: "45%", left: "4%", animationDuration: "20s" },
      animClass: "floating-drift-c",
    },
    {
      id: "cross-1",
      svg: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v12M2 8h12" stroke="#e8a690" strokeWidth="1" opacity="0.2" />
        </svg>
      ),
      style: { top: "60%", right: "10%", animationDuration: "16s" },
      animClass: "floating-drift-a",
    },
    {
      id: "ring-1",
      svg: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#8a7560" strokeWidth="1" opacity="0.12" strokeDasharray="3 3" />
        </svg>
      ),
      style: { top: "75%", left: "12%", animationDuration: "24s" },
      animClass: "floating-drift-b",
    },
    {
      id: "triangle-1",
      svg: (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
          <path d="M10 2L18 16H2L10 2Z" stroke="#c45d3e" strokeWidth="1" opacity="0.12" />
        </svg>
      ),
      style: { top: "35%", right: "3%", animationDuration: "19s" },
      animClass: "floating-drift-c",
    },
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.animClass}`}
          style={shape.style}
        >
          {shape.svg}
        </div>
      ))}
    </div>
  );
}
