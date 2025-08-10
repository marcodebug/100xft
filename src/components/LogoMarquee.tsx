'use client';

import React, { useEffect, useRef, useState } from 'react';

type LogoItem = { id: number; src: string; alt: string };

// Use the uploaded PNG logos from /public instead of placeholder icons
const customLogos: LogoItem[] = [
  { id: 1, src: '/logos/logo1.png', alt: 'Logo 1' },
  { id: 2, src: '/logos/logo2.png', alt: 'Logo 2' },
  { id: 3, src: '/logos/logo3.png', alt: 'Logo 3' },
  { id: 4, src: '/logos/logo4.png', alt: 'Logo 4' },
];

// Create two rows from the same set in different orders for variety
const logosRow1: LogoItem[] = customLogos;
const logosRow2: LogoItem[] = [...customLogos].reverse();

function Row({ items, reverse = false, durationSec = 16 }: { items: LogoItem[]; reverse?: boolean; durationSec?: number }) {
  const direction = reverse ? 'reverse' : 'normal';
  const speed = `${durationSec}s`;
  const box = 140; // px
  const gap = 22; // px

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [baseItems, setBaseItems] = useState<LogoItem[]>(items);

  useEffect(() => {
    const compute = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const singleTrackWidth = items.length * box + (items.length - 1) * gap;
      const repeatCount = Math.max(1, Math.ceil((containerWidth + 1) / singleTrackWidth));
      const extended: LogoItem[] = Array.from({ length: repeatCount })
        .flatMap((_, i) => items.map(it => ({ ...it, id: it.id })));
      setBaseItems(extended);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [items]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent, white 1rem, white calc(100% - 1rem), transparent)' } as React.CSSProperties}>
      <div
        className="flex w-max"
        style={{
          animation: `logo-marquee ${speed} linear infinite`,
          animationDirection: direction as any,
          gap: `${gap}px`,
          willChange: 'transform'
        }}
      >
        {[...baseItems, ...baseItems].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="relative flex-shrink-0 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-colors"
            style={{ width: box, height: box, boxShadow: '0 10px 30px rgba(30, 64, 175, 0.12) inset, 0 2px 10px rgba(0,0,0,0.25)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} className="w-12 h-12 object-contain opacity-90" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Deep navy base to match reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0b1426] to-[#0b1220]" />
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-[#0b1220]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-16 bg-gradient-to-t from-transparent to-[#0b1220]" />

      <div className="relative w-full px-2 sm:px-4">
        <div className="space-y-6">
          {/* First row: move right (reverse) a bit slower */}
          <Row items={logosRow1} reverse durationSec={22} />
          {/* Second row: move left (normal) a bit faster */}
          <Row items={logosRow2} durationSec={12} />
        </div>
      </div>

      <style jsx global>{`
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}


