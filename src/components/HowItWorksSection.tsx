'use client';

// NEXT-SPRINT: Stripe + Analytics

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to official launch (September 1, 2025)
  useEffect(() => {
    const targetDate = new Date('2025-09-01T00:00:00Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      step: "01",
      icon: "🎯",
      title: "Choose a Challenge",
      description: "Select from our range of FX, Crypto, or Instant Funded challenges that match your trading style and experience level."
    },
    {
      step: "02", 
      icon: "📈",
      title: "Trade & Hit Objectives",
      description: "Demonstrate your trading skills by meeting the profit targets while staying within the risk parameters."
    },
    {
      step: "03",
      icon: "💎",
      title: "Get Funded, Earn 90%",
      description: "Once successful, receive funded capital and keep up to 90% of your profits with no profit caps."
    }
  ];

  return (
    <section className="relative pt-12 md:pt-24 pb-20 overflow-hidden">
      {/* Final gradient transition leading to footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-neutral-950" />
      
      {/* Gentle orbs for final section */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-600/8 via-red-600/4 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-red-700/6 via-brand-700/4 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-brand-600/30 to-red-600/30 backdrop-blur-sm border border-brand-500/40 rounded-full text-brand-300 text-base font-semibold tracking-wide shadow-[0_0_20px_rgba(255,31,31,0.15)] mb-6">
              <span className="text-2xl">🚀</span>
              Trading Journey
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              How It{' '}
              <span className="bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your path to becoming a funded trader in three simple steps
            </p>
          </motion.div>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex items-start gap-6 group"
              >
                {/* Step indicator with connecting line */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/30 border border-brand-400/20">
                    {step.step}
                  </div>
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-0.5 h-12 bg-gradient-to-b from-brand-500/50 to-transparent -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{step.icon}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Countdown & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
              {/* Launch Badge */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  EARLY ACCESS
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Start Your{' '}
                  <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,64,64,0.35)]">
                    Trading Journey?
                  </span>
                </h3>
                <p className="text-gray-300 text-lg">
                  Join traders who have chosen 100XFT for their prop trading career
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mb-8">
                <h4 className="text-center text-gray-400 text-sm font-semibold mb-6 tracking-wider">
                  EARLY ACCESS ENDS • SEPTEMBER 1
                </h4>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 lg:p-6 min-h-[100px] flex flex-col items-center justify-center">
                        <motion.div
                          key={item.value}
                          initial={{ scale: 1.1, opacity: 0.7 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl lg:text-3xl font-bold text-white mb-1 font-mono tabular-nums leading-none"
                        >
                          {item.value.toString().padStart(2, '0')}
                        </motion.div>
                        <div className="text-xs lg:text-sm text-gray-400 font-medium uppercase tracking-wider">
                          {item.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center space-y-4">
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-block text-center bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 border border-green-400/40"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector('#pricing');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      window.location.hash = 'pricing';
                    }
                  }}
                >
                  Get Early Access
                </motion.a>
                
                <p className="text-gray-500 text-sm">
                  Secure checkout via Stripe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* No preorder modal */}
    </section>
  );
}