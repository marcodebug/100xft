import type { Metadata } from 'next';

const platforms = [
  { id: 'mt5', name: 'MetaTrader 5', logo: '/platforms/mt5.svg' },
  { id: 'ctrader', name: 'cTrader', logo: '/platforms/ctrader.svg' },
  { id: 'matchtrader', name: 'MatchTrader', logo: '/logos/logo7.svg' },
  { id: 'tradelocker', name: 'TradeLocker', logo: '/logos/logo4.png' },
  { id: 'tradingview', name: 'TradingView', logo: '/logos/tradingview.svg' },
];

export const metadata: Metadata = {
  title: 'Platforms | 100XFT',
  description: 'Supported trading platforms at 100XFT.'
};

export default function PlatformsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Supported Platforms</h1>
      <p className="text-gray-300 leading-relaxed mb-6">
        Trade on battle‑tested platforms trusted by professionals worldwide. Availability can vary by
        challenge type.
      </p>
      <ul className="text-gray-400 text-sm list-disc ml-5 mb-8 space-y-1">
        <li>Real‑time data with reliable execution</li>
        <li>Advanced charting and custom indicators</li>
        <li>Risk management tools and order controls</li>
      </ul>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {platforms.map(p => (
          <div key={p.id} className="bg-black/30 border border-white/10 rounded-xl p-4 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.logo} alt={p.name} className="h-10 w-auto object-contain" />
          </div>
        ))}
      </div>

      {/* Detailed descriptions */}
      <div className="mt-12 grid gap-6">
        {/* MT5 */}
        <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/platforms/mt5.svg" alt="MetaTrader 5" className="h-6 w-6" />
            <h2 className="text-white font-semibold">MetaTrader 5</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The industry standard for algorithmic FX/CFD trading. Powerful charting, strategy testing, and wide
            broker support.
          </p>
          <ul className="text-gray-400 text-sm list-disc ml-5 space-y-1">
            <li>Expert Advisors (EAs) and backtesting</li>
            <li>Dozens of built‑in indicators and drawing tools</li>
            <li>Lightning‑fast one‑click trade tickets</li>
          </ul>
        </div>

        {/* cTrader */}
        <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <img src="/platforms/ctrader.svg" alt="cTrader" className="h-6 w-6" />
            <h2 className="text-white font-semibold">cTrader</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            A modern platform focused on execution quality and depth‑of‑market visibility—great for active day‑traders.
          </p>
          <ul className="text-gray-400 text-sm list-disc ml-5 space-y-1">
            <li>Advanced DOM and order controls</li>
            <li>Clean UI with detachable panels</li>
            <li>cBots for automation</li>
          </ul>
        </div>

        {/* MatchTrader */}
        <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logos/logo7.svg" alt="MatchTrader" className="h-6 w-6" />
            <h2 className="text-white font-semibold">MatchTrader</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            An intuitive multi‑asset platform with efficient order routing and solid mobile apps.
          </p>
          <ul className="text-gray-400 text-sm list-disc ml-5 space-y-1">
            <li>Fast performance on desktop and mobile</li>
            <li>Simple, clean layout for quick decision making</li>
          </ul>
        </div>

        {/* TradeLocker */}
        <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logos/logo4.png" alt="TradeLocker" className="h-6 w-6" />
            <h2 className="text-white font-semibold">TradeLocker</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            A lightweight browser‑based terminal—ideal for quick access, fast tickets, and on‑the‑go trading.
          </p>
          <ul className="text-gray-400 text-sm list-disc ml-5 space-y-1">
            <li>Zero installs, runs in any modern browser</li>
            <li>Responsive UI optimized for speed</li>
          </ul>
        </div>

        {/* TradingView */}
        <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logos/tradingview.svg" alt="TradingView" className="h-6 w-6" />
            <h2 className="text-white font-semibold">TradingView</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            The world’s most popular charting ecosystem, with social sharing and Pine Script for custom indicators.
          </p>
          <ul className="text-gray-400 text-sm list-disc ml-5 space-y-1">
            <li>Pro‑level charting and alerts</li>
            <li>Massive library of community scripts</li>
            <li>Multi‑device synch and collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


