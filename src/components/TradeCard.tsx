"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import type { Trade } from "@/data/trades";

interface TradeCardProps {
  trade: Trade;
  index: number;
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

  const clipPath =
    side === "given"
      ? "polygon(0 0, 92% 0, 100% 100%, 0 100%)"
      : "polygon(8% 0, 100% 0, 100% 100%, 0 100%)";

  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      {!imgError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 45vw, 280px"
          style={{ clipPath }}
        />
      ) : (
        <div
          className="absolute inset-0 placeholder-shimmer grain-overlay"
          style={{ clipPath }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-warm-400/60"
            >
              <rect
                x="4"
                y="8"
                width="32"
                height="24"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="14" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M4 28l8-6 5 4 7-8 12 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-warm-400/80 text-xs font-mono tracking-wider">
              사진 준비 중
            </span>
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-warm-900/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white text-sm md:text-base font-medium drop-shadow-lg leading-tight">
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
        <div className="absolute -inset-4 rounded-full bg-accent/10 blur-xl" />
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          className="relative drop-shadow-lg"
        >
          <circle
            cx="28"
            cy="28"
            r="26"
            stroke="var(--color-accent-light)"
            strokeWidth="1"
            opacity="0.4"
          />
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
      { threshold: 0.15 }
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
        className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : ""}`}
      >
        <span className="text-6xl md:text-8xl font-bold text-warm-200/70 font-mono leading-none select-none">
          {String(trade.round).padStart(2, "0")}
        </span>
        <div className={`flex flex-col ${isEven ? "md:items-end" : ""}`}>
          <span className="text-[10px] font-mono tracking-[0.2em] text-warm-400 uppercase">
            Round
          </span>
          <span className="text-xs text-warm-400 font-mono">{trade.date}</span>
        </div>
      </div>

      {/* Main card */}
      <div
        className={`
          group relative bg-white rounded-2xl overflow-hidden
          border border-warm-200/80
          transition-all duration-500 ease-out
          ${isHovered ? "shadow-2xl shadow-warm-900/10 -translate-y-1" : "shadow-md shadow-warm-900/5"}
          ${isEven ? "md:ml-12" : "md:mr-12"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex">
          <div className="flex-1">
            <ItemImage
              src={trade.givenImage}
              alt={trade.givenItem}
              side="given"
            />
            <div className="absolute top-3 left-3 z-20">
              <span className="inline-block px-2 py-0.5 bg-warm-900/50 backdrop-blur-sm text-white text-[10px] font-mono tracking-wider rounded-sm uppercase">
                내놓은 것
              </span>
            </div>
          </div>

          <DramaticConnector />

          <div className="flex-1">
            <ItemImage
              src={trade.receivedImage}
              alt={trade.receivedItem}
              side="received"
            />
            <div className="absolute top-3 right-3 z-20">
              <span className="inline-block px-2 py-0.5 bg-accent/80 backdrop-blur-sm text-white text-[10px] font-mono tracking-wider rounded-sm uppercase">
                받은 것
              </span>
            </div>
          </div>
        </div>

        {/* Hover info strip */}
        <div
          className={`
            relative px-5 overflow-hidden transition-all duration-500 ease-out
            ${isHovered ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}
          `}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {trade.note && (
                <p className="text-sm text-warm-600 leading-relaxed italic border-l-2 border-accent/40 pl-3">
                  &ldquo;{trade.note}&rdquo;
                </p>
              )}
            </div>
            <div className="shrink-0 text-right">
              {trade.personName !== "???" && (
                <p className="text-xs text-warm-400 font-mono">
                  with <span className="text-warm-600">{trade.personName}</span>
                </p>
              )}
              {trade.location !== "???" && (
                <p className="text-[10px] text-warm-400 font-mono mt-0.5">
                  {trade.location}
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          className={`h-0.5 transition-all duration-500 ease-out ${isHovered ? "bg-accent" : "bg-warm-200/50"}`}
        />
      </div>
    </div>
  );
}
