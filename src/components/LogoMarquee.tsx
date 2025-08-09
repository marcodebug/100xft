'use client';

import React, { useEffect } from 'react';

type LogoItem = { id: number; src: string; alt: string };

const logosRow1: LogoItem[] = [
  { id: 1, src: '/platforms/mt5.svg', alt: 'MetaTrader 5' },
  { id: 2, src: '/platforms/tradingview.svg', alt: 'TradingView' },
  { id: 3, src: '/platforms/tradelocker.svg', alt: 'TradeLocker' },
  { id: 4, src: '/platforms/ctrader.svg', alt: 'cTrader' },
];

const logosRow2: LogoItem[] = [
  { id: 5, src: '/platforms/matchtrader.svg', alt: 'Match Trader' },
  { id: 6, src: '/platforms/tradingview.svg', alt: 'TradingView' },
  { id: 7, src: '/platforms/ctrader.svg', alt: 'cTrader' },
  { id: 8, src: '/platforms/mt5.svg', alt: 'MetaTrader 5' },
];

function Row({ items, reverse = false }: { items: LogoItem[]; reverse?: boolean }) {
  const direction = reverse ? 'reverse' : 'normal';
  const speed = '26s';
  const box = 120; // px
  const gap = 18; // px

  return (
    <div className="overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 3rem, black calc(100% - 3rem), transparent)' } as React.CSSProperties}>
      <div
        className="flex w-max"
        style={{
          animation: `logo-marquee ${speed} linear infinite`,
          animationDirection: direction as any,
          gap: `${gap}px`,
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex-shrink-0 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:border-brand-500/40 hover:bg-white/10 transition-colors"
            style={{ width: box, height: box }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} className="w-12 h-12 opacity-95" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes logo-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <section className="relative py-14 bg-transparent">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="space-y-5">
          <Row items={logosRow1} />
          <Row items={logosRow2} reverse />
        </div>
      </div>
    </section>
  );
}


