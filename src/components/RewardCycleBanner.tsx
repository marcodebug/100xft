// NEXT-SPRINT: Stripe + Analytics

'use client';

import { motion } from 'framer-motion';
import SwipeRow from './SwipeRow';

export default function RewardCycleBanner() {
  const rewards = [
    { icon: "🏆", text: "Pass Challenge", color: "text-yellow-400" },
    { icon: "💰", text: "Get Funded", color: "text-green-400" },
    { icon: "📈", text: "Trade & Earn", color: "text-brand-400" },
    { icon: "🎯", text: "Scale Up", color: "text-blue-400" },
    { icon: "🚀", text: "Repeat Cycle", color: "text-purple-400" }
  ];

  const Step = ({ icon, label, color }: { icon: string; label: string; color: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center group cursor-pointer min-w-[120px]"
    >
      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className={`text-sm font-semibold ${color} group-hover:text-white transition-colors duration-300`}>
        {label}
      </span>
    </motion.div>
  );

  return (
    <section className="section-pad relative overflow-hidden">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl border-y border-white/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6"
          >
            <span className="text-purple-400 text-sm font-medium">SUCCESS PATHWAY</span>
          </motion.div>
          <h3 className="section-title">
            The 100XFT <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Success Cycle</span>
          </h3>
          <p className="section-sub text-white/80">
            Your journey from challenge to funded trader
          </p>
        </div>

        <SwipeRow>
          <Step icon="🏆" label="Pass Challenge" color="text-yellow-400" />
          <Step icon="💰" label="Get Funded" color="text-green-400" />
          <Step icon="📈" label="Trade & Earn" color="text-brand-400" />
          <Step icon="🚀" label="Scale Up" color="text-blue-400" />
          <Step icon="🔁" label="Repeat Cycle" color="text-purple-400" />
        </SwipeRow>

        <div className="text-center mt-12">
          <p className="text-brand-300 text-sm font-medium">
            Join 1,000+ traders in the 100XFT ecosystem
          </p>
        </div>
      </div>
    </section>
  );
}