"use client";

import Image from "next/image";
import { useState } from "react";
import type { Trade } from "@/data/trades";

interface TradeCardProps {
  trade: Trade;
  isLast: boolean;
}

function ItemBox({
  label,
  itemName,
  imageSrc,
}: {
  label: string;
  itemName: string;
  imageSrc: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex-1 min-w-0">
      <span className="text-xs font-mono tracking-wider text-warm-400 uppercase">
        {label}
      </span>
      <div className="mt-2 aspect-square rounded-lg bg-warm-100 border border-warm-200 overflow-hidden relative group">
        {!imgError ? (
          <Image
            src={imageSrc}
            alt={itemName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 40vw, 200px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-warm-400 text-sm">
            사진 준비 중
          </div>
        )}
      </div>
      <p className="mt-2 font-medium text-warm-800 text-sm truncate">
        {itemName}
      </p>
    </div>
  );
}

export default function TradeCard({ trade, isLast }: TradeCardProps) {
  return (
    <div className="relative flex gap-4 md:gap-8">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center w-8 shrink-0">
        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-mono text-sm font-bold shadow-md shadow-accent/20 z-10">
          {trade.round}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-warm-200 mt-2" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-10 md:pb-14">
        <div className="bg-white rounded-2xl border border-warm-200 p-5 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-warm-400 font-mono mb-4">
            <span>{trade.date}</span>
            {trade.location !== "???" && <span>{trade.location}</span>}
            {trade.personName !== "???" && (
              <span className="text-warm-600">with {trade.personName}</span>
            )}
          </div>

          {/* Items exchange */}
          <div className="flex items-start gap-3 md:gap-5">
            <ItemBox
              label="내놓은 것"
              itemName={trade.givenItem}
              imageSrc={trade.givenImage}
            />

            {/* Arrow */}
            <div className="flex items-center self-center pt-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="text-accent shrink-0"
              >
                <path
                  d="M6 16h20m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <ItemBox
              label="받은 것"
              itemName={trade.receivedItem}
              imageSrc={trade.receivedImage}
            />
          </div>

          {/* Note */}
          {trade.note && (
            <p className="mt-4 text-sm text-warm-600 leading-relaxed border-l-2 border-accent-light pl-3 italic">
              {trade.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
