'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            100XFT
          </div>
          
          {/* Loading spinner */}
          <div className="relative w-16 h-16 mx-auto">
            <motion.div
              className="absolute inset-0 border-4 border-brand-600/30 rounded-full"
            />
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-brand-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm mt-4"
          >
            Loading amazing content...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}