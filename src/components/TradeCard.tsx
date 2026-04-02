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

const TILT_MAX = 4;

// Warm linen dot pattern — provides visual unity across all photo backgrounds
const LINEN_BG = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='0.8' fill='%234a3f35' opacity='0.09'/%3E%3C/svg%3E")`;

function PhotoPlaceholder({ itemName }: { itemName: string }): React.JSX.Element {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-warm-100">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: LINEN_BG, backgroundSize: "20px 20px" }}
      />
      <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-warm-300/25" />
      <div className="relative z-10 placeholder-bob">
        <ItemIllustration itemName={itemName} className="w-32 h-32 sm:w-40 sm:h-40" />
      </div>
      {/* Corner tick marks */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-warm-400/25" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-warm-400/25" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-warm-400/25" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-warm-400/25" />
    </div>
  );
}

function TradePhoto({
  src,
  alt,
  itemName,
  cutout,
  className = "",
}: {
  src: string;
  alt: string;
  itemName: string;
  cutout?: string;
  className?: string;
}): React.JSX.Element {
  const [imgError, setImgError] = useState(false);
  const [cutoutError, setCutoutError] = useState(false);

  // Cutout(누끼) 사진이 있으면 린넨 배경 위에 표시 — 모든 제품이 같은 배경 공유
  if (cutout && !cutoutError) {
    return (
      <div className={`relative overflow-hidden bg-warm-100 flex items-center justify-center ${className}`}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: LINEN_BG, backgroundSize: "20px 20px" }}
        />
        {/* Subtle radial vignette for depth */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(224,213,200,0.35) 100%)" }}
        />
        <div className="relative z-10 w-[66%] h-[66%] placeholder-bob">
          <Image
            src={cutout}
            alt={alt}
            fill
            className="object-contain drop-shadow-[0_6px_20px_rgba(45,37,32,0.20)]"
            onError={() => setCutoutError(true)}
            sizes="(max-width: 640px) 45vw, 300px"
          />
        </div>
      </div>
    );
  }

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

// Thin, hand-drawn feel exchange icon — ring outline only, no solid fill
function ExchangeIcon(): React.JSX.Element {
  return (
    <div className="relative flex items-center justify-center">
      {/* Very soft halo */}
      <div className="absolute -inset-2 rounded-full bg-warm-100/80 blur-sm" />
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="relative w-8 h-8 sm:w-10 sm:h-10 drop-shadow-sm"
      >
        {/* White ring with warm border — sits on top of divider line */}
        <circle cx="20" cy="20" r="17" fill="var(--color-warm-50)" stroke="var(--color-warm-300)" strokeWidth="1" />
        {/* Top arrow: accent color, given to received */}
        <path
          d="M13 17h12m0 0-4-3.5m4 3.5-4 3.5"
          stroke="var(--color-accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="connector-draw"
        />
        {/* Bottom arrow: muted warm, reversed flow */}
        <path
          d="M27 23H15m0 0 4-3.5M15 23l4 3.5"
          stroke="var(--color-warm-600)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.55"
          className="connector-draw"
        />
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
    setTilt({ rotateX: -percentY * TILT_MAX, rotateY: percentX * TILT_MAX, shadowX: percentX * 6, shadowY: percentY * 6 });
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
            relative overflow-hidden rounded-xl sm:rounded-2xl
            border border-warm-200/60 grain-overlay
            ${isEven ? "md:ml-16" : "md:mr-16"}
          `}
          style={{
            backgroundColor: "var(--color-warm-50)",
            transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transition: tilt.rotateX === 0 && tilt.rotateY === 0
              ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease"
              : "transform 0.1s ease-out, box-shadow 0.1s ease-out",
            transformStyle: "preserve-3d",
            boxShadow: isActive
              ? `${tilt.shadowX}px ${tilt.shadowY + 8}px 32px rgba(45,37,32,0.13), 0 2px 8px rgba(45,37,32,0.06)`
              : "0 2px 12px rgba(45,37,32,0.06), 0 1px 3px rgba(45,37,32,0.03)",
          }}
        >

          {/* ── Photo area ─────────────────────────────────────── */}
          <div className="trade-split relative w-full flex aspect-[5/3] sm:aspect-[16/9] lg:aspect-[2/1]">

            {/* Left panel — given item, intentionally narrower (45%) */}
            <div className="trade-given relative overflow-hidden" style={{ width: "45%" }}>
              <TradePhoto
                src={trade.givenImage}
                alt={trade.givenItem}
                itemName={trade.givenItem}
                cutout={trade.givenCutout}
                className="w-full h-full"
              />
              {/* Bottom-only gradient — no side darkening that buries the product */}
              <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-warm-900/58 via-warm-900/18 to-transparent pointer-events-none" />

              {/* "내놓은 것" label — top-right corner, intentionally subdued */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 pointer-events-none">
                <span className="text-[7px] sm:text-[8px] font-mono tracking-[0.18em] text-white/35 uppercase">내놓은 것</span>
              </div>

              {/* Item name — bottom left */}
              <div className="absolute bottom-0 inset-x-0 px-3 pb-3 sm:px-4 sm:pb-3.5 z-10 pointer-events-none">
                <p
                  className="text-white/92 text-xs sm:text-sm font-semibold leading-snug line-clamp-2 break-keep max-w-[88%]"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.45)" }}
                >
                  {trade.givenItem}
                </p>
              </div>
            </div>

            {/* ── Divider + exchange icon ─────────────────────── */}
            <div
              className="absolute z-20 top-0 bottom-0 pointer-events-none"
              style={{ left: "45%", width: "10%" }}
            >
              {/* Vertical rule — warm-toned, not stark white */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-warm-400/20" />
              {/* Exchange icon floats centered on the rule */}
              <div className="trade-arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ExchangeIcon />
              </div>
            </div>

            {/* Right panel — received item, intentionally wider (55%) */}
            <div className="trade-received relative overflow-hidden ml-auto" style={{ width: "55%" }}>
              <TradePhoto
                src={trade.receivedImage}
                alt={trade.receivedItem}
                itemName={trade.receivedItem}
                cutout={trade.receivedCutout}
                className="w-full h-full"
              />
              <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-warm-900/58 via-warm-900/18 to-transparent pointer-events-none" />

              {/* "받은 것" label — accent-light color, top-left */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 pointer-events-none">
                <span
                  className="text-[7px] sm:text-[8px] font-mono tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-accent-light)", opacity: 0.85 }}
                >
                  받은 것
                </span>
              </div>

              {/* Item name — bottom left */}
              <div className="absolute bottom-0 inset-x-0 px-3 pb-3 sm:px-4 sm:pb-3.5 z-10 pointer-events-none">
                <p
                  className="text-white/92 text-xs sm:text-sm font-semibold leading-snug line-clamp-2 break-keep"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.45)" }}
                >
                  {trade.receivedItem}
                </p>
              </div>
            </div>

            {/* Round stamp — top-left ghost, extremely subtle */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 pointer-events-none select-none">
              <span className="block text-[8px] sm:text-[9px] font-mono tracking-[0.22em] text-white/25 uppercase leading-none">
                Round
              </span>
              <span className="block text-3xl sm:text-4xl font-black font-mono leading-none text-white/10 -mt-0.5">
                {String(trade.round).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── Info section ───────────────────────────────────── */}
          <div className="relative px-4 sm:px-5 pt-3 pb-3.5 overflow-hidden">
            {/* Ghost round number watermark — right side, behind content */}
            <span
              className="absolute right-2 top-1/2 -translate-y-1/2 font-black font-mono leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(3rem, 8vw, 5rem)", color: "var(--color-warm-200)", opacity: 0.55 }}
              aria-hidden="true"
            >
              {String(trade.round).padStart(2, "0")}
            </span>

            <div className="relative z-10">
              {/* Note — full width, border-left accent detail */}
              {trade.note && (
                <p className="text-xs sm:text-sm text-warm-700 leading-relaxed border-l-2 border-accent/30 pl-3 break-keep mb-2.5">
                  {trade.note}
                </p>
              )}

              {/* Meta row — date · person · location, dot-separated */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] sm:text-[11px] font-mono text-warm-400">{trade.date}</span>
                {trade.personName !== "???" && (
                  <>
                    <span className="text-warm-300 text-[9px]">&middot;</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-warm-500">
                      with <span className="text-warm-700">{trade.personName}</span>
                    </span>
                  </>
                )}
                {trade.location !== "???" && (
                  <>
                    <span className="text-warm-300 text-[9px]">&middot;</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-warm-400">{trade.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Bottom accent — gradient rule instead of solid line */}
          <div className="h-px bg-gradient-to-r from-transparent via-warm-300/45 to-transparent" />
        </div>
      </div>
    </div>
  );
}
