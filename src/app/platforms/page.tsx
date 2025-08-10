import type { Metadata } from 'next';

const platforms = [
  { id: 'mt5', name: 'MetaTrader 5', logo: '/platforms/mt5.svg' },
  { id: 'tradingview', name: 'TradingView', logo: '/platforms/tradingview.svg' },
  { id: 'ctrader', name: 'cTrader', logo: '/platforms/ctrader.svg' },
  { id: 'matchtrader', name: 'MatchTrader', logo: '/platforms/matchtrader.svg' },
  { id: 'tradelocker', name: 'TradeLocker', logo: '/platforms/tradelocker.svg' },
];

export const metadata: Metadata = {
  title: 'Platforms | 100XFT',
  description: 'Explore supported trading platforms at 100XFT.'
};

export default function PlatformsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Supported Platforms</h1>
      <p className="text-gray-300 leading-relaxed mb-8">
        Professional‑grade trading platforms. Availability may vary by challenge.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {platforms.map(p => (
          <div key={p.id} className="bg-black/30 border border-white/10 rounded-xl p-4 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.logo} alt={p.name} className="h-10 w-auto grayscale hover:grayscale-0 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}

