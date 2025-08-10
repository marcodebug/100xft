import type { Metadata } from 'next';

const platforms = [
  { id: 'mt5', name: 'MetaTrader 5', logo: '/logos/logo8.svg' },
  { id: 'ctrader', name: 'cTrader', logo: '/logos/logo5.svg' },
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
    </section>
  );
}


