import { trades } from "@/data/trades";
import TradeTimeline from "@/components/TradeTimeline";
import GrainOverlay from "@/components/GrainOverlay";
import FloatingElements from "@/components/FloatingElements";
import ParallaxText from "@/components/ParallaxText";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";

function HeroPenSvg(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 180 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto animate-float drop-shadow-2xl"
    >
      {/* === Cap === */}
      <rect x="52" y="6" width="76" height="108" rx="8" fill="#1e1a16" />
      <rect x="52" y="6" width="76" height="108" rx="8" stroke="#3d352d" strokeWidth="1.5" />
      {/* Cap top highlight */}
      <rect x="58" y="10" width="64" height="100" rx="5" fill="url(#capGrad)" opacity="0.3" />
      {/* Cap red band */}
      <rect x="62" y="14" width="56" height="10" rx="3" fill="#c45d3e" />
      <rect x="62" y="14" width="56" height="5" rx="2" fill="#d46e52" opacity="0.6" />
      {/* Cap center line */}
      <line x1="90" y1="30" x2="90" y2="108" stroke="#3d352d" strokeWidth="0.8" opacity="0.3" />
      {/* Cap bottom rim */}
      <rect x="54" y="102" width="72" height="12" rx="3" fill="#2d2520" stroke="#3d352d" strokeWidth="1" />

      {/* === Clip === */}
      <path d="M128 14 L142 14 Q146 14 146 18 L146 92 Q146 96 142 96 L134 104 L128 104 Z" fill="#a08e78" />
      <path d="M128 14 L142 14 Q146 14 146 18 L146 92 Q146 96 142 96 L134 104 L128 104 Z" stroke="#8a7560" strokeWidth="1" />
      {/* Clip highlight */}
      <rect x="131" y="18" width="4" height="78" rx="1" fill="#c4b8a6" opacity="0.4" />
      {/* Clip ball */}
      <circle cx="138" cy="96" r="4" fill="#8a7560" />
      <circle cx="137" cy="95" r="1.5" fill="#b8a890" opacity="0.5" />

      {/* === Body === */}
      <rect x="54" y="114" width="72" height="290" rx="4" fill="#121010" />
      <rect x="54" y="114" width="72" height="290" rx="4" stroke="#2d2520" strokeWidth="1.5" />
      {/* Body side highlights */}
      <rect x="56" y="118" width="3" height="282" rx="1.5" fill="#2a2420" opacity="0.5" />
      <rect x="121" y="118" width="3" height="282" rx="1.5" fill="#2a2420" opacity="0.5" />

      {/* === Label area (white sticker) === */}
      <rect x="60" y="140" width="60" height="120" rx="3" fill="#f5f0ea" />
      <rect x="60" y="140" width="60" height="120" rx="3" stroke="#e0d5c8" strokeWidth="0.5" />
      {/* MONAMI text */}
      <text x="90" y="157" textAnchor="middle" fontSize="8" fontWeight="600" fill="#8a7560" letterSpacing="2" fontFamily="system-ui">MONAMI</text>
      {/* Red line under MONAMI */}
      <rect x="68" y="160" width="44" height="2" rx="1" fill="#c45d3e" />
      {/* 153 big number */}
      <rect x="66" y="170" width="48" height="44" rx="3" fill="none" stroke="#c45d3e" strokeWidth="2" />
      <text x="90" y="202" textAnchor="middle" fontSize="28" fontWeight="900" fill="#c45d3e" fontFamily="system-ui">153</text>
      {/* Small text lines */}
      <rect x="70" y="222" width="40" height="2" rx="1" fill="#d0c4b4" />
      <rect x="74" y="228" width="32" height="2" rx="1" fill="#d0c4b4" />
      <rect x="76" y="234" width="28" height="1.5" rx="0.75" fill="#d0c4b4" opacity="0.6" />
      {/* Barcode-like lines */}
      <g opacity="0.3">
        <rect x="70" y="244" width="1.5" height="8" fill="#8a7560" />
        <rect x="73" y="244" width="2.5" height="8" fill="#8a7560" />
        <rect x="77" y="244" width="1" height="8" fill="#8a7560" />
        <rect x="80" y="244" width="3" height="8" fill="#8a7560" />
        <rect x="84.5" y="244" width="1.5" height="8" fill="#8a7560" />
        <rect x="87.5" y="244" width="2" height="8" fill="#8a7560" />
        <rect x="91" y="244" width="1" height="8" fill="#8a7560" />
        <rect x="93.5" y="244" width="2.5" height="8" fill="#8a7560" />
        <rect x="97.5" y="244" width="1.5" height="8" fill="#8a7560" />
        <rect x="100.5" y="244" width="2" height="8" fill="#8a7560" />
        <rect x="104" y="244" width="1" height="8" fill="#8a7560" />
        <rect x="106.5" y="244" width="3" height="8" fill="#8a7560" />
      </g>

      {/* === Grip section === */}
      <rect x="56" y="404" width="68" height="52" rx="3" fill="#2d2520" />
      <rect x="56" y="404" width="68" height="52" rx="3" stroke="#3d352d" strokeWidth="1" />
      {/* Grip ridges */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <line key={`grip-${i}`} x1={62 + i * 6} y1="408" x2={62 + i * 6} y2="452" stroke="#3d352d" strokeWidth="0.6" opacity="0.4" />
      ))}
      {/* Grip horizontal bands */}
      <rect x="58" y="414" width="64" height="1" fill="#3d352d" opacity="0.3" />
      <rect x="58" y="430" width="64" height="1" fill="#3d352d" opacity="0.3" />
      <rect x="58" y="446" width="64" height="1" fill="#3d352d" opacity="0.3" />

      {/* === Tip cone === */}
      <path d="M56 456 L124 456 L102 500 L78 500 Z" fill="#a08e78" stroke="#8a7560" strokeWidth="1" />
      {/* Tip highlight */}
      <path d="M80 456 L90 456 L86 498 L82 498 Z" fill="#c4b8a6" opacity="0.25" />
      {/* Ball point tip */}
      <path d="M78 500 L102 500 L94 514 L86 514 Z" fill="#4a3f35" />
      <path d="M86 514 L94 514 L91 518 L89 518 Z" fill="#2d2520" />
      {/* Ink point */}
      <circle cx="90" cy="518" r="1.5" fill="#1a1512" />

      {/* Gradients */}
      <defs>
        <linearGradient id="capGrad" x1="52" y1="6" x2="128" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.08" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TradeFlowChain(): React.ReactElement {
  const lastTrade = trades[trades.length - 1];
  const items = [
    "볼펜",
    ...(lastTrade && lastTrade.receivedItem !== "???" ? [lastTrade.receivedItem] : []),
    "?",
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 animate-slide-in-right flex-wrap">
      {items.map((item, i) => (
        <div key={`flow-${item}-${i}`} className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div
            className={`
              flex items-center justify-center rounded-full border
              ${i === 0
                ? "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-accent bg-accent/10 text-accent text-[10px] sm:text-xs md:text-sm font-bold"
                : i === items.length - 1
                  ? "w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 border-warm-600 border-dashed bg-warm-800/50 text-warm-400 text-base sm:text-lg md:text-xl font-light animate-pulse-soft"
                  : "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-warm-600 bg-warm-800/30 text-warm-200 text-[10px] sm:text-xs md:text-sm font-medium"
              }
            `}
          >
            {item}
          </div>
          {i < items.length - 1 && (
            <svg width="24" height="8" viewBox="0 0 32 8" className="text-warm-600 shrink-0 w-5 sm:w-6 md:w-8">
              <line x1="0" y1="4" x2="24" y2="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M22 1 L28 4 L22 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <GrainOverlay />
      <FloatingElements />

      {/* ===== HERO ===== */}
      <section className="grain relative overflow-hidden bg-warm-900 text-warm-50 min-h-[100svh] flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute -top-8 -right-4 sm:right-4 md:right-8 text-[10rem] sm:text-[14rem] md:text-[20rem] lg:text-[28rem] font-black text-warm-800/15 leading-none select-none tracking-tighter">
            {trades.length}
          </span>
          <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-gradient-to-l from-accent/[0.04] to-transparent" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 sm:w-[400px] md:w-[500px] h-64 sm:h-[400px] md:h-[500px] rounded-full bg-accent/[0.06] blur-[80px] md:blur-[120px]" />
          <div className="hidden sm:block absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-800 to-transparent opacity-40" />
          <div className="hidden sm:block absolute bottom-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-800 to-transparent opacity-20" />
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-0">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-4 items-center md:min-h-[70vh]">

            {/* Left column */}
            <div className="md:col-span-7 space-y-6 sm:space-y-8 md:space-y-10 order-2 md:order-1">
              <div className="animate-fade-in-up">
                <p className="font-mono text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] text-warm-600 uppercase">
                  Barter Track — since 2026
                </p>
              </div>

              <div className="animate-fade-in-up-delayed space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                  <span className="block text-warm-50">볼펜</span>
                  <span className="block text-warm-50/40 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mt-1">
                    하나에서 시작된
                  </span>
                  <span className="block mt-2">
                    <span className="text-accent relative">
                      교환
                      <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-accent/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                        <path d="M0 8 Q50 0 100 6 T200 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-warm-50/60">의 여정</span>
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up-delayed-2 flex items-start gap-4 border-l-2 border-accent/40 pl-4 sm:pl-5">
                <p className="text-warm-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm">
                  모르는 사람과의 물물교환.
                  <br />
                  하나의 볼펜이 어디까지 갈 수 있을까.
                </p>
              </div>

              <div className="pt-1 sm:pt-2 md:pt-4">
                <TradeFlowChain />
              </div>

              <div className="animate-fade-in-up-delayed-2 flex items-center gap-3 sm:gap-4">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-warm-600 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  ROUND {String(trades.length).padStart(2, "0")} IN PROGRESS
                </span>
                <span className="h-px flex-1 max-w-16 bg-warm-800" />
              </div>
            </div>

            {/* Right column - Pen (first on mobile) */}
            <div className="md:col-span-5 flex justify-center md:justify-end items-center relative order-1 md:order-2 py-4 md:py-0">
              <div className="relative">
                <div className="absolute inset-0 scale-125 sm:scale-150 bg-accent/[0.08] rounded-full blur-[60px] md:blur-[80px]" />
                <HeroPenSvg />
                {/* Annotations - hidden on very small screens */}
                <div className="hidden sm:block absolute -left-24 md:-left-28 top-1/3 animate-float-delayed">
                  <div className="flex items-center gap-2 text-[10px] text-warm-600 font-mono">
                    <span className="h-px w-6 sm:w-8 bg-warm-700" />
                    모나미 153
                  </div>
                </div>
                <div className="hidden sm:block absolute -right-20 md:-right-24 bottom-1/3 animate-float-slow">
                  <div className="flex items-center gap-2 text-[10px] text-warm-600 font-mono">
                    ₩1,000
                    <span className="h-px w-6 sm:w-8 bg-warm-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up-delayed-2">
          <span className="text-[9px] sm:text-[10px] font-mono text-warm-600 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-warm-600 to-transparent" />
        </div>
      </section>

      {/* ===== MARQUEE DIVIDER ===== */}
      <ParallaxText
        text="물물교환"
        separator=" · "
        speed={25}
        className="py-3 sm:py-4 bg-warm-900 text-warm-800 text-4xl sm:text-6xl md:text-8xl font-black opacity-20 border-b border-warm-200"
      />

      {/* ===== STATS SECTION ===== */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-warm-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
              <div className="text-center">
                <Counter end={trades.length} className="text-4xl sm:text-5xl md:text-7xl font-black text-accent" />
                <p className="text-[10px] sm:text-xs font-mono text-warm-400 mt-1.5 sm:mt-2 tracking-wider uppercase">교환 횟수</p>
              </div>
              <div className="text-center">
                <Counter end={trades.length + 1} className="text-4xl sm:text-5xl md:text-7xl font-black text-warm-800" />
                <p className="text-[10px] sm:text-xs font-mono text-warm-400 mt-1.5 sm:mt-2 tracking-wider uppercase">물건 수</p>
              </div>
              <div className="text-center">
                <Counter end={trades.length} className="text-4xl sm:text-5xl md:text-7xl font-black text-warm-800" />
                <p className="text-[10px] sm:text-xs font-mono text-warm-400 mt-1.5 sm:mt-2 tracking-wider uppercase">만난 사람</p>
              </div>
              <div className="text-center">
                <span className="text-4xl sm:text-5xl md:text-7xl font-black text-accent">∞</span>
                <p className="text-[10px] sm:text-xs font-mono text-warm-400 mt-1.5 sm:mt-2 tracking-wider uppercase">가능성</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="max-w-3xl mx-auto px-4 sm:px-5 py-12 sm:py-16 md:py-24">
        <ScrollReveal>
          <div className="mb-10 sm:mb-14 md:mb-20">
            <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] text-accent uppercase mb-2 sm:mb-3">
              Exchange Log
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-warm-900 leading-tight">
              교환 기록
            </h2>
            <div className="mt-2 sm:mt-3 w-10 sm:w-12 h-0.5 bg-accent/40" />
          </div>
        </ScrollReveal>

        <TradeTimeline trades={trades} />
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-warm-900 text-warm-400 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs sm:text-sm tracking-wider text-warm-600">BARTER TRACK</p>
            <p className="text-[10px] sm:text-xs mt-1">학교 과제 — 물물교환 프로젝트</p>
          </div>
          <p className="text-[9px] sm:text-[10px] font-mono text-warm-600">
            모나미 153에서 시작
          </p>
        </div>
      </footer>
    </main>
  );
}
