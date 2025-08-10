import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | 100XFT',
  description: 'Join 100XFT to build the next generation prop trading platform.'
};

export default function CareersPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Careers at 100XFT</h1>
      <p className="text-gray-300 leading-relaxed mb-6">
        We’re assembling a small, world‑class team to build a prop trading platform that is fast,
        fair, and trader‑centric. If you’re exceptional at your craft and want meaningful ownership,
        we’d love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">Open Roles</h2>
          <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2">
            <li>Senior Full‑Stack Engineer (Next.js, TypeScript)</li>
            <li>Product Designer (UI systems, motion)</li>
            <li>Trader Success Lead (Ops & Support)</li>
          </ul>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">What We Value</h2>
          <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2">
            <li>Bias for shipping and ownership</li>
            <li>High bar for quality and detail</li>
            <li>Kindness, candor, and responsibility</li>
          </ul>
        </div>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-2">How to Apply</h2>
        <p className="text-gray-300 text-sm">
          Send your resume/portfolio to{' '}
          <a className="text-brand-400" href="mailto:contact@100xft.com?subject=Careers%20at%20100XFT">
            contact@100xft.com
          </a>.
        </p>
      </div>
    </section>
  );
}


