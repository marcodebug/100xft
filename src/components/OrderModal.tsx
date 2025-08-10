'use client';

import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email'),
  country: z.string().min(2, 'Enter your country'),
  accept: z.boolean().refine(v => v === true, { message: 'Please accept the terms' })
});

type FormValues = z.infer<typeof schema>;

interface OrderModalProps {
  planId: string;
  accountSize: number;
  open: boolean;
  onClose: () => void;
}

export default function OrderModal({ planId, accountSize, open, onClose }: OrderModalProps) {
  const [values, setValues] = useState<FormValues>({ name: '', email: '', country: '', accept: false });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const update = (key: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(v => ({ ...v, [key]: key === 'accept' ? e.target.checked : e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const err: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path[0] as keyof FormValues;
        err[path] = issue.message;
      }
      setErrors(err);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          accountSize,
          name: values.name,
          email: values.email,
          country: values.country
        })
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || 'Checkout failed');
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl p-6" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-bold">Get Early Access</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">×</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-black/30 border border-white/10 rounded-xl p-3 text-sm text-gray-300">
            <div className="flex items-center justify-between">
              <span>Selected</span>
              <span className="font-semibold">{planId.replace(/-/g,' ').toUpperCase()} • {(accountSize/1000)}K</span>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              value={values.name}
              onChange={update('name')}
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              placeholder="Jane Doe"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={values.email}
              onChange={update('email')}
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Country</label>
            <input
              type="text"
              value={values.country}
              onChange={update('country')}
              className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              placeholder="Morocco"
            />
            {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
          </div>

          <label className="flex items-center gap-3 text-sm text-gray-300">
            <input type="checkbox" checked={values.accept} onChange={update('accept')} className="w-4 h-4" />
            I accept the terms.
          </label>

          <p className="text-sm text-gray-400 mt-2">Questions? Email <a href="mailto:contact@100xft.com" className="text-brand-400">contact@100xft.com</a></p>
          {errors.accept && <p className="text-red-400 text-xs -mt-2">{errors.accept}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 disabled:opacity-60 border border-green-400/40"
          >
            {submitting ? 'Redirecting…' : 'Proceed to Checkout'}
          </button>
        </form>
      </div>
    </div>
  );
}


