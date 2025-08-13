'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ThankYouPage() {
  const params = useSearchParams();
  const router = useRouter();
  const sessionId = params.get('session_id');

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://t.me/I00XFT?start=start';
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg mx-auto"
      >
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-3">Thank you for your purchase!</h1>
        <p className="text-gray-300 mb-6">
          Your checkout was successful. We’re redirecting you to our Telegram now for onboarding and support.
        </p>
        <a
          href="https://t.me/I00XFT?start=start"
          className="inline-block px-6 py-3 bg-gradient-to-r from-brand-600 to-red-600 text-white font-semibold rounded-lg hover:from-brand-700 hover:to-red-700 transition-all duration-300"
        >
          Go to Telegram
        </a>
        <p className="text-gray-500 text-xs mt-4">Order Ref: {sessionId?.slice(0, 8) ?? '—'}</p>
      </motion.div>
    </div>
  );
}


