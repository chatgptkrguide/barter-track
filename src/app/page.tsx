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
      viewBox="0 0 120 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 md:w-28 lg:w-32 h-auto animate-float"
    >
      <rect x="38" y="8" width="44" height="80" rx="6" fill="#2d2520" stroke="#4a3f35" strokeWidth="2" />
      <rect x="48" y="12" width="24" height="6" rx="2" fill="#c45d3e" />
      <line x1="60" y1="20" x2="60" y2="84" stroke="#4a3f35" strokeWidth="1" opacity="0.4" />
      <path d="M82 16 L90 16 L90 72 L84 78 L82 78 Z" fill="#8a7560" stroke="#4a3f35" strokeWidth="1.5" />
      <rect x="40" y="88" width="40" height="220" rx="3" fill="#1a1512" stroke="#4a3f35" strokeWidth="1.5" />
      <rect x="44" y="110" width="32" height="80" rx="2" fill="#faf8f5" opacity="0.9" />
      <rect x="48" y="116" width="24" height="4" rx="1" fill="#c45d3e" />
      <rect x="50" y="124" width="20" height="2" rx="1" fill="#b8a48e" />
      <rect x="52" y="130" width="16" height="2" rx="1" fill="#b8a48e" />
      <rect x="48" y="140" width="24" height="24" rx="2" fill="none" stroke="#c45d3e" strokeWidth="1.5" />
      <text x="60" y="157" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#c45d3e">153</text>
      <rect x="50" y="170" width="20" height="2" rx="1" fill="#b8a48e" />
      <rect x="52" y="176" width="16" height="2" rx="1" fill="#b8a48e" />
      <rect x="42" y="308" width="36" height="40" rx="2" fill="#2d2520" stroke="#4a3f35" strokeWidth="1" />
      {[48, 54, 60, 66, 72].map((x) => (
        <line key={x} x1={x} y1="312" x2={x} y2="344" stroke="#4a3f35" strokeWidth="0.5" opacity="0.5" />
      ))}
      <path d="M42 348 L78 348 L64 390 L56 390 Z" fill="#b8a48e" stroke="#8a7560" strokeWidth="1" />
      <path d="M56 390 L64 390 L61 398 L59 398 Z" fill="#4a3f35" />
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
    <div className="flex items-center gap-3 md:gap-4 animate-slide-in-right">
      {items.map((item, i) => (
        <div key={`flow-${item}-${i}`} className="flex items-center gap-3 md:gap-4">
          <div
            className={`
              flex items-center justify-center rounded-full border
              ${i === 0
                ? "w-12 h-12 md:w-14 md:h-14 border-accent bg-accent/10 text-accent text-xs md:text-sm font-bold"
                : i === items.length - 1
                  ? "w-14 h-14 md:w-16 md:h-16 border-warm-600 border-dashed bg-warm-800/50 text-warm-400 text-lg md:text-xl font-light animate-pulse-soft"
                  : "w-12 h-12 md:w-14 md:h-14 border-warm-600 bg-warm-800/30 text-warm-200 text-xs md:text-sm font-medium"
              }
            `}
          >
            {item}
          </div>
          {i < items.length - 1 && (
            <svg width="32" height="8" viewBox="0 0 32 8" className="text-warm-600 shrink-0">
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
    <main className="min-h-screen relative">
      <GrainOverlay />
      <FloatingElements />

      {/* ===== HERO ===== */}
      <section className="grain relative overflow-hidden bg-warm-900 text-warm-50 min-h-[90vh] md:min-h-screen flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="absolute -top-16 -right-8 md:right-8 text-[12rem] md:text-[20rem] lg:text-[28rem] font-black text-warm-800/20 leading-none select-none tracking-tighter">
            {trades.length}
          </span>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.04] to-transparent" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-800 to-transparent opacity-40" />
          <div className="absolute bottom-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-800 to-transparent opacity-20" />
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center min-h-[70vh]">

            {/* Left column (7 cols) */}
            <div className="md:col-span-7 space-y-8 md:space-y-10">
              <div className="animate-fade-in-up">
                <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-warm-600 uppercase">
                  Barter Track — since 2026
                </p>
              </div>

              <div className="animate-fade-in-up-delayed space-y-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                  <span className="block text-warm-50">볼펜</span>
                  <span className="block text-warm-50/40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mt-1">
                    하나에서 시작된
                  </span>
                  <span className="block mt-2">
                    <span className="text-accent relative">
                      교환
                      <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                        <path d="M0 8 Q50 0 100 6 T200 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-warm-50/60">의 여정</span>
                  </span>
                </h1>
              </div>

              <div className="animate-fade-in-up-delayed-2 flex items-start gap-4 border-l-2 border-accent/40 pl-5">
                <p className="text-warm-400 text-sm md:text-base leading-relaxed max-w-sm">
                  모르는 사람과의 물물교환.
                  <br />
                  하나의 볼펜이 어디까지 갈 수 있을까.
                </p>
              </div>

              <div className="pt-2 md:pt-4">
                <TradeFlowChain />
              </div>

              <div className="animate-fade-in-up-delayed-2 flex items-center gap-4">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-warm-600 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  ROUND {String(trades.length).padStart(2, "0")} IN PROGRESS
                </span>
                <span className="h-px flex-1 max-w-16 bg-warm-800" />
              </div>
            </div>

            {/* Right column (5 cols) - Pen */}
            <div className="md:col-span-5 flex justify-center md:justify-end items-center relative">
              <div className="relative">
                <div className="absolute inset-0 scale-150 bg-accent/[0.08] rounded-full blur-[80px]" />
                <HeroPenSvg />
                <div className="absolute -left-20 md:-left-28 top-1/3 animate-float-delayed">
                  <div className="flex items-center gap-2 text-[10px] text-warm-600 font-mono">
                    <span className="h-px w-8 bg-warm-700" />
                    모나미 153
                  </div>
                </div>
                <div className="absolute -right-16 md:-right-24 bottom-1/3 animate-float-slow">
                  <div className="flex items-center gap-2 text-[10px] text-warm-600 font-mono">
                    ₩1,000
                    <span className="h-px w-8 bg-warm-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up-delayed-2">
          <span className="text-[10px] font-mono text-warm-600 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-warm-600 to-transparent" />
        </div>
      </section>

      {/* ===== MARQUEE DIVIDER ===== */}
      <ParallaxText
        text="물물교환"
        separator=" · "
        speed={25}
        className="py-4 bg-warm-900 text-warm-800 text-6xl md:text-8xl font-black opacity-20 border-b border-warm-200"
      />

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 md:py-24 border-b border-warm-200">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <Counter end={trades.length} className="text-5xl md:text-7xl font-black text-accent" suffix="" />
                <p className="text-xs font-mono text-warm-400 mt-2 tracking-wider uppercase">교환 횟수</p>
              </div>
              <div className="text-center">
                <Counter end={trades.length + 1} className="text-5xl md:text-7xl font-black text-warm-800" suffix="" />
                <p className="text-xs font-mono text-warm-400 mt-2 tracking-wider uppercase">물건 수</p>
              </div>
              <div className="text-center">
                <Counter end={trades.length} className="text-5xl md:text-7xl font-black text-warm-800" suffix="" />
                <p className="text-xs font-mono text-warm-400 mt-2 tracking-wider uppercase">만난 사람</p>
              </div>
              <div className="text-center">
                <span className="text-5xl md:text-7xl font-black text-accent">∞</span>
                <p className="text-xs font-mono text-warm-400 mt-2 tracking-wider uppercase">가능성</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <ScrollReveal>
          <div className="mb-14 md:mb-20">
            <p className="text-[10px] font-mono tracking-[0.3em] text-accent uppercase mb-3">
              Exchange Log
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-warm-900 leading-tight">
              교환 기록
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-accent/40" />
          </div>
        </ScrollReveal>

        <TradeTimeline trades={trades} />
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-warm-900 text-warm-400 py-12">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm tracking-wider text-warm-600">BARTER TRACK</p>
            <p className="text-xs mt-1">학교 과제 — 물물교환 프로젝트</p>
          </div>
          <p className="text-[10px] font-mono text-warm-600">
            모나미 153에서 시작
          </p>
        </div>
      </footer>
    </main>
  );
}
