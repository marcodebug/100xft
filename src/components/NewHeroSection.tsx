// NEXT-SPRINT: Stripe + Analytics

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewHeroSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Red Laser Beams Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            {/* Red beam gradients */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.linearGradient
                key={i}
                id={`beam-${i}`}
                gradientUnits="userSpaceOnUse"
                initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "90%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", "95%"],
                }}
                transition={{
                  duration: 8 + Math.random() * 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 4,
                }}
              >
                <stop offset="0%" stopColor="#FF0000" stopOpacity="0" />
                <stop offset="30%" stopColor="#FF3333" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#FF1F1F" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
              </motion.linearGradient>
            ))}
          </defs>

          {/* Animated beam paths */}
          {[
            "M0 100L1000 600",
            "M200 0L800 500",
            "M0 300L900 700",
            "M300 0L1100 800",
            "M0 500L700 400",
            "M400 0L1200 600",
            "M0 200L600 700",
            "M500 0L900 800",
            "M0 400L800 300",
            "M100 0L1000 500",
            "M0 600L500 200",
            "M600 0L1100 400",
            "M0 700L400 100",
            "M700 0L1200 300",
            "M0 800L300 0"
          ].map((path, i) => (
            <motion.path
              key={i}
              d={path}
              stroke={`url(#beam-${i})`}
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </svg>

        {/* Additional animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Logo */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight"
        >
          100XFT
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
        >
          Morocco's First Prop Trading Firm — 100XFT
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Proudly built in Tangier, empowering traders worldwide (yes, US clients welcome). Experience elite
          prop trading with up to <span className="text-red-400 font-bold">90% profit split</span> and{' '}
          <span className="text-red-400 font-bold">zero profit caps</span>.
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-full mb-12"
        >
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-white font-medium">Made in Morocco</span>
          <span className="text-gray-400">—</span>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-white font-medium">Accepting US Traders</span>
        </motion.div>

        {/* Email Signup Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8"
        >
          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-80 px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-1">Get Early</h3>
            <h3 className="text-white font-semibold text-lg">Access</h3>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-red-600/80 backdrop-blur-sm border border-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
            Join Demo Challenge
          </button>
          <a href="#pricing" className="px-8 py-4 bg-transparent backdrop-blur-sm border border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
            Order Now
          </a>
        </motion.div>

        {/* Launch Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-400 text-sm mt-8"
        >
          🚀 Launching Q4 2025 • Limited Early Access Spots
        </motion.p>
      </div>
    </section>
  );
}