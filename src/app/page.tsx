import { trades } from "@/data/trades";
import TradeCard from "@/components/TradeCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-900 text-warm-50 py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-3xl mx-auto px-5 relative">
          <p className="text-accent-light font-mono text-sm tracking-widest mb-4">
            BARTER TRACK
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            모나미 볼펜에서<br />
            <span className="text-accent">어디까지</span> 갈 수 있을까?
          </h1>
          <p className="mt-6 text-warm-400 text-lg md:text-xl max-w-xl leading-relaxed">
            모르는 사람들과의 물물교환 여정.
            <br className="hidden md:block" />
            하나의 볼펜이 어떤 물건으로 바뀌어 가는지 기록합니다.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-warm-400">
            <span className="inline-flex items-center gap-1.5 bg-warm-800 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {trades.length}번째 교환 진행 중
            </span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-2xl mx-auto px-5 py-12 md:py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-warm-900">
            교환 기록
          </h2>
          <p className="mt-2 text-warm-400 text-sm">
            시간순으로 정렬된 교환 히스토리
          </p>
        </div>

        <div>
          {trades.map((trade, index) => (
            <TradeCard
              key={trade.id}
              trade={trade}
              isLast={index === trades.length - 1}
            />
          ))}
        </div>

        {/* End marker */}
        <div className="flex items-center gap-4 mt-4">
          <div className="w-8 flex justify-center">
            <div className="w-3 h-3 rounded-full border-2 border-warm-200 bg-warm-50" />
          </div>
          <p className="text-sm text-warm-400 italic">
            다음 교환을 기다리는 중...
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-warm-200 py-8 text-center text-xs text-warm-400">
        <p>학교 과제 — 물물교환 프로젝트</p>
      </footer>
    </main>
  );
}
