import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | 100XFT',
  description: 'Build the next generation prop firm. Join 100XFT.'
};

export default function CareersPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Careers at 100XFT</h1>
      <p className="text-gray-300 leading-relaxed mb-8">
        We’re a lean team building a world-class prop trading platform. If you’re
        exceptional at your craft and want high ownership, we want to hear from you.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">Open Roles</h2>
        <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2">
          <li>Senior Full-Stack Engineer (Next.js, TypeScript)</li>
          <li>Product Designer (Design Systems, Motion)</li>
          <li>Trader Success Lead (Operations, Support)</li>
        </ul>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-3">How to Apply</h2>
        <p className="text-gray-300 text-sm">
          Send your resume and portfolio to <a className="text-brand-400" href="mailto:contact@100xft.com">contact@100xft.com</a> with the subject “Careers – [Role]”.
        </p>
      </div>
    </section>
  );
}

