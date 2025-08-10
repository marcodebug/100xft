// NEXT-SPRINT: Stripe + Analytics

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BackgroundBeams } from './ui/background-beams';

export default function VortexHeroSection() {
  const [email, setEmail] = useState('');
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative min-h-screen overflow-x-hidden bg-neutral-950">
      <BackgroundBeams />
      <div className="relative z-10 flex items-center flex-col justify-center px-6 md:px-8 lg:px-12 py-8 w-full h-full min-h-screen">
        {/* Content Container */}
        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-brand-600/20 to-red-600/20 backdrop-blur-sm border border-brand-500/30 rounded-full text-brand-400 text-xs sm:text-sm font-medium max-w-full"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            EARLY ACCESS • Official Launch September
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-[1.12] md:leading-[1.08] px-2">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block">
                Easiest prop firm challenges to pass!
              </span>
            </h1>
            {/* Centered large logo replacing the red 100XFT text */}
            <div className="flex justify-center">
              {logoError ? (
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  100XFT
                </span>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/Untitled%20design.svg"
                  alt="100XFT logo"
                  onError={() => setLogoError(true)}
                  className="h-28 sm:h-36 md:h-48 lg:h-64 xl:h-72 2xl:h-80 w-auto drop-shadow-[0_6px_28px_rgba(255,0,0,0.35)]"
                />
              )}
            </div>
            
            <div className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-snug sm:leading-normal px-4 mt-1">
              Unlock funded accounts with fair rules, rapid payouts, and professional support.
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-7 px-4 max-w-2xl mx-auto"
          >
            {/* Removed Demo CTA per request */}

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 border border-green-400/40 hover:from-green-700 hover:to-emerald-800 w-full sm:w-auto text-center text-sm sm:text-base"
            >
              Get Early Access
            </motion.a>
          </motion.div>

          {/* Trust Ribbon */}
          {/* Removed locality ribbon for neutral messaging */}

                    {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            {/* Mobile: Horizontal Swiper */}
            <div className="md:hidden">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-3 px-2 pb-4 snap-x snap-mandatory scroll-smooth">
                  {[
                    {
                      icon: "🚫",
                      title: "Zero Profit Cap",
                      description: "No limits on your earning potential"
                    },
                    {
                      icon: "💰",
                      title: "Up to 90% Profit Split", 
                      description: "Industry-leading profit sharing"
                    },
                    {
                      icon: "⚡",
                      title: "Instant Funded Available",
                      description: "Skip evaluation, start trading immediately"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                      className="group flex-shrink-0 w-72 snap-center"
                    >
                      <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-brand-500/30 transition-all duration-300 hover:bg-black/30 h-full">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors duration-300 text-center">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center text-sm leading-relaxed">
                          {feature.description}
                        </p>
              </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Mobile swipe hint */}
              <div className="text-center mt-4">
                <p className="text-gray-500 text-xs">← Swipe to explore features →</p>
              </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🚫",
                  title: "Zero Profit Cap",
                  description: "No limits on your earning potential"
                },
                {
                  icon: "💰",
                  title: "Up to 90% Profit Split",
                  description: "Industry-leading profit sharing"
                },
                {
                  icon: "⚡",
                  title: "Instant Funded Available",
                  description: "Skip evaluation, start trading immediately"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-brand-500/30 transition-all duration-300 hover:bg-black/30">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { number: "90%", label: "Profit Split" },
              { number: "400K", label: "Max Account Size" },
              { number: "24/7", label: "Support" },
              { number: "Q4 2025", label: "Launch" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-400 to-red-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
              </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider font-medium">
                  {stat.label}
              </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex justify-center mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-brand-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}