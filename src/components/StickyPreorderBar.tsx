// NEXT-SPRINT: Stripe + Analytics

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyPreorderBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreorderForm, setShowPreorderForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px (past hero section)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-brand-900/95 via-black/95 to-brand-900/95 backdrop-blur-lg border-t border-brand-500/30 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="hidden sm:block">
                    <p className="text-white font-semibold text-sm">
                      🇲🇦 Morocco's First Prop Firm
                    </p>
                    <p className="text-brand-300 text-xs">
                      Limited Early Access • Q4 2025 Launch
                    </p>
                  </div>
                  <div className="sm:hidden">
                    <p className="text-white font-semibold text-sm">
                      🇲🇦 Early Access Available
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <a
                    href="#pricing"
                    className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-lg text-sm border border-green-400/40"
                  >
                    Order Now
                  </a>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stripe-only: no preorder modal */}
    </>
  );
}