"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import type { Trade } from "@/data/trades";
import ItemIllustration from "./ItemIllustration";

interface TradeCardProps {
  trade: Trade;
  index: number;
}

interface TiltState {
  rotateX: number;
  rotateY: number;
  shadowX: number;
  shadowY: number;
}

const TILT_MAX = 8;

function PhotoPlaceholder({
  itemName,
}: {
  itemName: string;
}): React.JSX.Element {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-warm-100">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%234a3f35'/%3E%3C/svg%3E")`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-warm-200/40" />
      <div className="relative z-10 placeholder-bob">
        <ItemIllustration itemName={itemName} className="w-36 h-36 sm:w-44 sm:h-44" />
      </div>
      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-warm-300/30" />
      <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-warm-300/30" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-warm-300/30" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-warm-300/30" />
    </div>
  );
}

function TradePhoto({
  src,
  alt,
  itemName,
  className = "",
}: {
  src: string;
  alt: string;
  itemName: string;
  className?: string;
}): React.JSX.Element {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imgError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 480px"
        />
      ) : (
        <PhotoPlaceholder itemName={itemName} />
      )}
    </div>
  );
}

function ExchangeArrow(): React.JSX.Element {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -inset-2 rounded-full bg-accent/10 blur-lg" />
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="relative drop-shadow-md w-8 h-8 sm:w-10 sm:h-10">
        <circle cx="20" cy="20" r="18" fill="var(--color-accent)" />
        <path d="M13 17h10m0 0l-4-4m4 4l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="connector-draw" />
        <path d="M27 23H17m0 0l4 4m-4-4l4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" className="connector-draw" />
      </svg>
    </div>
  );
}

export default function TradeCard({ trade, index }: TradeCardProps): React.JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [tapped, setTapped] = useState(false);
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0, shadowX: 0, shadowY: 0 });

  const isEven = index % 2 === 1;
  const isActive = tilt.rotateX !== 0 || tilt.rotateY !== 0 || tapped;

  useEffect(() => {
    const handleTouch = (): void => { setIsTouchDevice(true); };
    window.addEventListener("touchstart", handleTouch, { once: true });
    return () => { window.removeEventListener("touchstart", handleTouch); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { observer.disconnect(); };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const percentX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const percentY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ rotateX: -percentY * TILT_MAX, rotateY: percentX * TILT_MAX, shadowX: percentX * 14, shadowY: percentY * 14 });
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback((): void => {
    setTilt({ rotateX: 0, rotateY: 0, shadowX: 0, shadowY: 0 });
  }, []);

  const handleTap = useCallback((): void => {
    if (isTouchDevice) setTapped((prev) => !prev);
  }, [isTouchDevice]);

  return (
    <div
      ref={cardRef}
      className={`relative ${isVisible ? "card-animate" : "opacity-0"}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="card-perspective" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleTap}>
        <div
          className={`
            relative bg-white overflow-hidden rounded-xl sm:rounded-2xl
            border border-warm-200/80 grain-overlay
            ${isEven ? "md:ml-16" : "md:mr-16"}
          `}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transition: tilt.rotateX === 0 && tilt.rotateY === 0
              ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease"
              : "transform 0.1s ease-out, box-shadow 0.1s ease-out",
            transformStyle: "preserve-3d",
            boxShadow: isActive
              ? `${tilt.shadowX}px ${tilt.shadowY + 8}px 32px rgba(45,37,32,0.16), 0 2px 8px rgba(45,37,32,0.08)`
              : "0 4px 16px rgba(45,37,32,0.07), 0 1px 4px rgba(45,37,32,0.04)",
          }}
        >
          {/* Round badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 pointer-events-none">
            <div className="flex items-center gap-1.5">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/20 font-mono leading-none select-none drop-shadow-sm">
                {String(trade.round).padStart(2, "0")}
              </span>
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-white/50 uppercase">Round</span>
                <span className="text-[9px] sm:text-[10px] text-white/40 font-mono">{trade.date}</span>
              </div>
            </div>
          </div>

          {/* Photo area - stacked/overlapping */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/4]">
            {/* Background: given photo */}
            <div className="absolute inset-0">
              <TradePhoto src={trade.givenImage} alt={trade.givenItem} itemName={trade.givenItem} className="w-full h-full" />
              <div className="absolute inset-0 bg-warm-900/25" />
              <div className="absolute inset-0 bg-gradient-to-br from-warm-900/40 via-transparent to-warm-900/50" />
            </div>

            {/* Diagonal decoration */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden sm:block">
              <div className="absolute w-[200%] h-px bg-white/15" style={{ top: "58%", left: "-20%", transform: "rotate(-18deg)" }} />
            </div>

            {/* Given item label */}
            <div className="absolute top-12 left-3 sm:top-14 sm:left-4 z-20 pointer-events-none">
              <span className="inline-block px-2 py-0.5 bg-warm-900/50 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-mono tracking-wider rounded-sm">내놓은 것</span>
              <p className="mt-1 text-white/85 text-xs sm:text-sm font-medium drop-shadow-lg max-w-[55%] leading-snug line-clamp-2 break-keep">{trade.givenItem}</p>
            </div>

            {/* Foreground: received photo (overlapping frame) */}
            <div
              className="absolute z-20 right-3 bottom-3 sm:right-5 sm:bottom-5 lg:right-6 lg:bottom-6 w-[55%] sm:w-[48%] lg:w-[44%] aspect-[3/4] rounded-lg overflow-hidden border-2 border-white/80 shadow-xl shadow-warm-900/30"
              style={{ transform: "translateZ(20px)" }}
            >
              <TradePhoto src={trade.receivedImage} alt={trade.receivedItem} itemName={trade.receivedItem} className="w-full h-full" />
              <div className="absolute top-2 left-2 z-10">
                <span className="inline-block px-1.5 py-0.5 bg-accent/85 backdrop-blur-sm text-white text-[8px] sm:text-[10px] font-mono tracking-wider rounded-sm">받은 것</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-warm-900/70 to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 z-10">
                <p className="text-white text-xs sm:text-sm font-medium drop-shadow-lg leading-tight line-clamp-2 break-keep">{trade.receivedItem}</p>
              </div>
            </div>

            {/* Exchange arrow */}
            <div
              className="absolute z-20 pointer-events-none right-[52%] bottom-[40%] sm:right-[44%] sm:bottom-[36%] lg:right-[40%] lg:bottom-[34%]"
              style={{ transform: "translateZ(30px)" }}
            >
              <ExchangeArrow />
            </div>
          </div>

          {/* Info section */}
          <div className={`relative px-4 sm:px-5 overflow-hidden transition-all duration-500 ease-out py-3 max-h-44 opacity-100 md:py-0 md:max-h-0 md:opacity-0 ${isActive ? "md:max-h-44 md:py-4 md:opacity-100" : ""}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                {trade.note && (
                  <p className="text-xs sm:text-sm text-warm-600 leading-relaxed italic border-l-2 border-accent/40 pl-2 sm:pl-3 line-clamp-3 break-keep">
                    &ldquo;{trade.note}&rdquo;
                  </p>
                )}
              </div>
              <div className="shrink-0 text-right">
                {trade.personName !== "???" && (
                  <p className="text-[10px] sm:text-xs text-warm-400 font-mono">with <span className="text-warm-600">{trade.personName}</span></p>
                )}
                {trade.location !== "???" && (
                  <p className="text-[9px] sm:text-[10px] text-warm-400 font-mono mt-0.5">{trade.location}</p>
                )}
              </div>
            </div>
          </div>

          <div className={`h-0.5 transition-all duration-500 ease-out ${isActive ? "bg-accent" : "bg-warm-200/50"}`} />
        </div>
      </div>
    </div>
  );
}
