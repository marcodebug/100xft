import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | 100XFT',
  description: 'Learn about 100XFT, our mission, values, and partners that power the trader experience.'
};

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">About 100XFT</h1>
      <p className="text-gray-300 leading-relaxed mb-8">
        100XFT is a proprietary trading firm built for serious traders. We design fair, transparent
        challenges, fund top performers, and support their journey with fast payouts and professional tools.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
          <p className="text-gray-300 text-sm">
            Give talented traders access to capital through clear rules, modern technology, and aligned incentives.
          </p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-3">What We Value</h2>
          <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2">
            <li>Risk-first rules and transparency</li>
            <li>Rapid, reliable payouts</li>
            <li>Respect for trader autonomy</li>
            <li>Continuous product improvement</li>
          </ul>
        </div>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-semibold text-white mb-3">Partners</h2>
        <p className="text-gray-300 text-sm">
          We collaborate with reputable infrastructure and platform partners in the US and globally to deliver
          robust execution, account security, and frictionless payments. Platform availability may vary by challenge type.
        </p>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
        <p className="text-gray-300 text-sm">
          General inquiries: <a className="text-brand-400" href="mailto:contact@100xft.com">contact@100xft.com</a>
        </p>
      </div>
    </section>
  );
}

