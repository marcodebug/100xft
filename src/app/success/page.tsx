'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function SuccessPage() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Redirect to Telegram after countdown
          window.location.href = 'https://t.me/I00XFT?start=start';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTelegramRedirect = () => {
    window.location.href = 'https://t.me/I00XFT?start=start';
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundBeams className="opacity-30" />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex justify-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </motion.div>

            {/* Main Message */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Payment Successful!
              </h1>
              <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
                Thank you for choosing 100XFT! Your challenge purchase has been confirmed.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">What's Next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="text-white font-semibold">Check Your Email</h3>
                    <p className="text-gray-400 text-sm">You'll receive challenge details and login instructions shortly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="text-white font-semibold">Join Our Community</h3>
                    <p className="text-gray-400 text-sm">Get support, tips, and connect with other traders on Telegram.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h3 className="text-white font-semibold">Start Trading</h3>
                    <p className="text-gray-400 text-sm">Begin your funded trading journey with 100XFT!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Telegram Redirect */}
            <div className="space-y-4">
              <motion.button
                onClick={handleTelegramRedirect}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 border border-blue-400/40"
              >
                Join Telegram Community Now
              </motion.button>
              
              <p className="text-gray-400 text-sm">
                Redirecting to Telegram in <span className="text-blue-400 font-mono">{countdown}</span> seconds...
              </p>
            </div>

            {/* Home Link */}
            <div className="pt-4">
              <Link 
                href="/" 
                className="text-brand-400 hover:text-brand-300 transition-colors text-sm"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
