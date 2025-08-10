import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profit Splits | 100XFT',
  description: 'Understand profit sharing by challenge type at 100XFT.'
};

export default function ProfitSplitsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Profit Splits</h1>
      <p className="text-gray-300 leading-relaxed mb-8">
        We align incentives with traders. Profit sharing varies by challenge type and is paid out on a bi‑weekly schedule.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">FX Challenges</h2>
          <p className="text-brand-300 text-sm font-semibold">80% profit split</p>
          <p className="text-gray-300 text-sm mt-2">One‑Phase and Two‑Phase FX with fair risk limits.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">Crypto Challenges</h2>
          <p className="text-brand-300 text-sm font-semibold">Up to 90% profit split</p>
          <p className="text-gray-300 text-sm mt-2">Transparent caps and clear targets.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">Futures Challenges</h2>
          <p className="text-brand-300 text-sm font-semibold">Up to 90% profit split</p>
          <p className="text-gray-300 text-sm mt-2">Structured multi‑phase evaluation.</p>
        </div>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-3">Payouts & Policy</h2>
        <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2">
          <li>Bi‑weekly payouts; minimum $50</li>
          <li>No profit caps on funded accounts</li>
          <li>Compliance checks may apply before first payout</li>
        </ul>
      </div>
    </section>
  );
}

