// NEXT-SPRINT: Stripe / Analytics

import { motion } from 'framer-motion';

export default function SupportedPlatformsSection() {
  const platforms = [
    'mt5.svg',
    'tradingview.svg', 
    'ctrader.svg',
    'matchtrader.svg',
    'tradelocker.svg'
  ];

  return (
    <section className="section-pad relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/20 to-pink-900/10"></div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6"
          >
            <span className="text-pink-400 text-sm font-medium">TRADING PLATFORMS</span>
          </motion.div>
          <h2 className="section-title">
            Trade on Your <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Favourite Platforms</span>
          </h2>
          <p className="section-sub text-white/80">
            Professional-grade platforms for every trading style
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
          <div className="relative p-8">
            <div className="flex gap-8 overflow-x-auto marquee justify-center items-center py-4">
              {platforms.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
                >
                  <img 
                    src={`/platforms/${src}`} 
                    alt={src.replace('.svg', '').replace(/([a-z])([A-Z])/g, '$1 $2')} 
                    className="h-12 w-auto grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-110" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}