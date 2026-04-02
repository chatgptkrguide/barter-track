"use client";

import type { Trade } from "@/data/trades";
import TradeCard from "./TradeCard";

interface TradeTimelineProps {
  trades: Trade[];
}

export default function TradeTimeline({ trades }: TradeTimelineProps): React.JSX.Element {
  return (
    <div className="relative">
      {/* Cards */}
      <div className="space-y-12 md:space-y-16">
        {trades.map((trade, index) => (
          <div key={trade.id} data-trade-card>
            <TradeCard trade={trade} index={index} />
          </div>
        ))}
      </div>

      {/* End marker */}
      <div className="mt-12 md:mt-16">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-3 h-3 rounded-full border-2 border-warm-300 bg-warm-50" />
            <div className="absolute inset-0 w-3 h-3 rounded-full border-2 border-warm-300 animate-ping opacity-40" />
          </div>
          <div>
            <p className="text-sm text-warm-400 italic">
              다음 교환을 기다리는 중...
            </p>
            <p className="text-[10px] text-warm-400/60 font-mono mt-0.5">
              이야기는 계속됩니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
