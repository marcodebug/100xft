import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | 100XFT',
  description: 'Learn about 100XFT: our mission, values, and how we support traders worldwide.'
};

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">About 100XFT</h1>
      <p className="text-gray-300 leading-relaxed mb-8">
        100XFT is a proprietary trading firm built to back skilled traders with clear rules, fair pricing,
        and aligned incentives. We design challenges that reward consistency and risk management, then fund
        the traders who pass.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-3">Our Mission</h2>
          <p className="text-gray-300 text-sm">
            Give talented traders access to capital, high‑quality tools, and fast payouts—without
            unnecessary friction.
          </p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-3">What We Value</h2>
          <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2">
            <li>Transparent rules and pricing</li>
            <li>Risk‑first trading discipline</li>
            <li>Responsive support and timely payouts</li>
            <li>Continuous product improvement</li>
          </ul>
        </div>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
        <p className="text-gray-300 text-sm">
          Questions or partnerships: <a className="text-brand-400" href="mailto:contact@100xft.com">contact@100xft.com</a>
        </p>
      </div>
    </section>
  );
}


