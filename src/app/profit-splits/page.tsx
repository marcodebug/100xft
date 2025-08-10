import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profit Splits | 100XFT',
  description: 'Profit sharing structure for FX, Crypto, and Futures challenges at 100XFT.'
};

export default function ProfitSplitsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Profit Splits</h1>
      <p className="text-gray-300 leading-relaxed mb-8">
        Our profit sharing is straightforward and rewards discipline. Based on current pricing and rules:
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">FX Challenges</h2>
          <p className="text-brand-300 text-sm font-semibold">80% profit split</p>
          <p className="text-gray-300 text-sm mt-2">Transparent rules, one‑time fee by account size.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">Crypto Challenges</h2>
          <p className="text-brand-300 text-sm font-semibold">Up to 90% profit split</p>
          <p className="text-gray-300 text-sm mt-2">Clear targets and risk limits; early access discounts may apply.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">Futures</h2>
          <p className="text-brand-300 text-sm font-semibold">Up to 90% profit split</p>
          <p className="text-gray-300 text-sm mt-2">Structured multi‑phase evaluation with consistent payout terms.</p>
        </div>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-3">Payouts & Policy</h2>
        <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2">
          <li>Bi‑weekly payouts; minimum $50</li>
          <li>No profit caps on funded accounts</li>
          <li>Same risk parameters apply after funding</li>
        </ul>
      </div>
    </section>
  );
}


