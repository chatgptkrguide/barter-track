"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import type { Trade } from "@/data/trades";

interface TradeCardProps {
  trade: Trade;
  index: number;
}

function PlaceholderArt({ side }: { side: "given" | "received" }): React.JSX.Element {
  return (
    <div className="absolute inset-0 bg-warm-100 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%234a3f35'/%3E%3C/svg%3E")`,
        backgroundSize: "20px 20px",
      }} />
      {/* Decorative ring */}
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-warm-200/60" />
      <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-warm-300/50" />
      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
        {side === "given" ? (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-warm-400/50 w-8 h-8 sm:w-9 sm:h-9">
            <path d="M18 4v28M4 18h28" stroke="currentColor" strokeWidth="1" />
            <rect x="8" y="8" width="20" height="20" rx="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
          </svg>
        ) : (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-accent/40 w-8 h-8 sm:w-9 sm:h-9">
            <path d="M10 18h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1" />
          </svg>
        )}
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] text-warm-400/70 uppercase">
          {side === "given" ? "photo" : "photo"}
        </span>
      </div>
      {/* Corner accent */}
      <div className={`absolute ${side === "given" ? "top-3 left-3 sm:top-4 sm:left-4" : "top-3 right-3 sm:top-4 sm:right-4"}`}>
        <div className={`w-6 h-6 sm:w-8 sm:h-8 border-t border-l ${side === "given" ? "border-warm-300/40" : "border-accent/20"} ${side === "received" ? "border-l-0 border-r" : ""}`} />
      </div>
      <div className={`absolute ${side === "given" ? "bottom-3 right-3 sm:bottom-4 sm:right-4" : "bottom-3 left-3 sm:bottom-4 sm:left-4"}`}>
        <div className={`w-6 h-6 sm:w-8 sm:h-8 border-b border-r ${side === "given" ? "border-warm-300/40" : "border-accent/20"} ${side === "received" ? "border-r-0 border-l" : ""}`} />
      </div>
    </div>
  );
}

function ItemImage({
  src,
  alt,
  side,
}: {
  src: string;
  alt: string;
  side: "given" | "received";
}): React.JSX.Element {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
      {!imgError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setImgError(true)}
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 45vw, 280px"
        />
      ) : (
        <PlaceholderArt side={side} />
      )}
      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-warm-900/70 via-warm-900/20 to-transparent pointer-events-none" />
      {/* Item name */}
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
        <p className="text-white text-xs sm:text-sm md:text-base font-medium drop-shadow-lg leading-tight">
          {alt}
        </p>
      </div>
    </div>
  );
}

function DramaticConnector(): React.JSX.Element {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="relative">
        <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-accent/10 blur-xl" />
        <svg
          width="44"
          height="44"
          viewBox="0 0 56 56"
          fill="none"
          className="relative drop-shadow-lg w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14"
        >
          <circle cx="28" cy="28" r="26" stroke="var(--color-accent-light)" strokeWidth="1" opacity="0.4" />
          <circle cx="28" cy="28" r="20" fill="var(--color-accent)" />
          <path
            d="M18 28h14m0 0l-5-5m5 5l-5 5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="connector-draw"
          />
        </svg>
      </div>
    </div>
  );
}

export default function TradeCard({ trade, index }: TradeCardProps): React.JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative ${isVisible ? "card-animate" : "opacity-0"}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Round number */}
      <div
        className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 ${isEven ? "md:justify-end" : ""}`}
      >
        <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-warm-200/70 font-mono leading-none select-none">
          {String(trade.round).padStart(2, "0")}
        </span>
        <div className={`flex flex-col ${isEven ? "md:items-end" : ""}`}>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-warm-400 uppercase">
            Round
          </span>
          <span className="text-[10px] sm:text-xs text-warm-400 font-mono">{trade.date}</span>
        </div>
      </div>

      {/* Main card */}
      <div
        className={`
          group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden
          border border-warm-200/80
          transition-all duration-500 ease-out
          ${isHovered ? "shadow-2xl shadow-warm-900/10 -translate-y-1" : "shadow-md shadow-warm-900/5"}
          ${isEven ? "md:ml-12" : "md:mr-12"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image area */}
        <div className="relative flex">
          <div className="flex-1 min-w-0">
            <ItemImage src={trade.givenImage} alt={trade.givenItem} side="given" />
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
              <span className="inline-block px-1.5 py-0.5 sm:px-2 bg-warm-900/50 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-mono tracking-wider rounded-sm uppercase">
                내놓은 것
              </span>
            </div>
          </div>

          <DramaticConnector />

          <div className="flex-1 min-w-0">
            <ItemImage src={trade.receivedImage} alt={trade.receivedItem} side="received" />
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
              <span className="inline-block px-1.5 py-0.5 sm:px-2 bg-accent/80 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-mono tracking-wider rounded-sm uppercase">
                받은 것
              </span>
            </div>
          </div>
        </div>

        {/* Info strip - always visible on mobile, hover on desktop */}
        <div
          className={`
            relative px-3 sm:px-5 overflow-hidden transition-all duration-500 ease-out
            max-h-40 py-3 opacity-100
            md:py-0 md:max-h-0 md:opacity-0
            ${isHovered ? "md:max-h-40 md:py-4 md:opacity-100" : ""}
          `}
        >
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              {trade.note && (
                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed italic border-l-2 border-accent/40 pl-2 sm:pl-3">
                  &ldquo;{trade.note}&rdquo;
                </p>
              )}
            </div>
            <div className="shrink-0 text-right">
              {trade.personName !== "???" && (
                <p className="text-[10px] sm:text-xs text-warm-400 font-mono">
                  with <span className="text-warm-600">{trade.personName}</span>
                </p>
              )}
              {trade.location !== "???" && (
                <p className="text-[9px] sm:text-[10px] text-warm-400 font-mono mt-0.5">
                  {trade.location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className={`h-0.5 transition-all duration-500 ease-out ${isHovered ? "bg-accent" : "bg-warm-200/50"}`}
        />
      </div>
    </div>
  );
}
