'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <img
            src="/Untitled%20design.svg"
            alt="100XFT logo"
            width={220}
            height={220}
            decoding="async"
            fetchPriority="high"
            className="w-40 sm:w-48 md:w-56 h-auto mx-auto drop-shadow-[0_8px_32px_rgba(255,0,0,0.35)]"
          />

          {/* Subtle loader under the logo */}
          <div className="relative w-16 h-16 mx-auto mt-4">
            <motion.div className="absolute inset-0 border-4 border-brand-600/20 rounded-full" />
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-brand-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="text-gray-400 text-sm mt-3"
          >
            Loading…
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}