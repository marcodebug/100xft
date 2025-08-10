'use client';

// NEXT-SPRINT: Stripe + Analytics

import { motion, PanInfo } from 'framer-motion';
import { useState } from 'react';

export default function WhyChooseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: "🚫",
      title: "Zero Profit Cap",
      description: "No limits on your earning potential. Trade without artificial profit restrictions on funded accounts.",
      bgColor: "from-brand-600 to-red-600",
      borderColor: "border-brand-500/50",
      glowColor: "shadow-brand-500/30"
    },
    {
      icon: "💰",
      title: "Up to 90% Profit Split",
      description: "Keep up to 90% of your profits. Industry-leading profit sharing that rewards your trading skills.",
      bgColor: "from-red-600 to-orange-600",
      borderColor: "border-red-500/50",
      glowColor: "shadow-red-500/30"
    },
    {
      icon: "⚡",
      title: "Trade Crypto & FX",
      description: "Access both cryptocurrency and forex markets with institutional-grade execution and spreads.",
      bgColor: "from-orange-600 to-yellow-600",
      borderColor: "border-orange-500/50",
      glowColor: "shadow-orange-500/30"
    },
    {
      icon: "🔥",
      title: "Instant Funded Available",
      description: "Skip the evaluation phase with our instant funded accounts. Start trading with real capital immediately.",
      bgColor: "from-yellow-600 to-amber-600",
      borderColor: "border-yellow-500/50",
      glowColor: "shadow-yellow-500/30"
    }
  ];

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      // Swipe right - go to previous (with looping)
      setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    } else if (info.offset.x < -threshold) {
      // Swipe left - go to next (with looping)
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient transition from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-gray-950" />
      
      {/* Subtle animated orbs for continuity */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-brand-600/10 via-red-600/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tl from-red-700/8 via-brand-700/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-600/20 to-red-600/20 backdrop-blur-sm border border-brand-500/30 rounded-full text-brand-400 text-sm font-medium mb-6">
              <span className="text-xl">⭐</span>
              ELITE ADVANTAGES
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                100XFT
              </span>?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience elite prop trading with unmatched benefits
            </p>
          </motion.div>
        </div>

        {/* Mobile: Fan-Style Card Stack */}
        <div className="relative max-w-4xl mx-auto md:hidden">
          {/* Card Stack Container */}
          <div className="relative h-[500px] flex items-center justify-center card-stack-container">
            {features.map((feature, index) => {
              const position = (index - currentIndex + features.length) % features.length;
              const isActive = position === 0;
              
              // Calculate stacked positioning - fan style
              const offsetX = position * 15; // Horizontal offset for stack effect
              const offsetY = position * 8;  // Vertical offset for depth
              const offsetZ = -position * 20; // Z-depth for 3D effect
              const rotation = position * 3;  // Slight rotation for fan effect
              const scale = isActive ? 1 : 0.95 - position * 0.02;
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-80 h-96 cursor-grab active:cursor-grabbing card-stack-item"
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  animate={{
                    x: offsetX,
                    y: offsetY,
                    z: offsetZ,
                    scale: scale,
                    rotateZ: rotation,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    zIndex: features.length - position, // Higher z-index for cards in front
                  }}
                >
                  {/* Card */}
                  <div 
                    className={`relative w-full h-full bg-gradient-to-br ${feature.bgColor} rounded-3xl border-2 ${feature.borderColor} ${isActive ? 'card-stack-shadow-active' : 'card-stack-shadow'} overflow-hidden transition-all duration-300`}
                  >
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-3xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center text-white">
                      {/* Icon */}
                      <div className={`mb-6 transition-all duration-300 ${
                        isActive ? 'text-6xl' : 'text-5xl'
                      }`}>
                        {feature.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className={`font-bold mb-4 transition-all duration-300 ${
                        isActive ? 'text-2xl' : 'text-xl'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      {/* Description - only show on active card */}
                      <motion.p 
                        className="text-sm leading-relaxed"
                        animate={{ 
                          opacity: isActive ? 1 : 0,
                          height: isActive ? 'auto' : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full shadow-lg"
                      />
                    )}
                    
                    {/* Stack position number removed per request */}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevCard}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:border-brand-400/50 transition-all duration-300"
            >
              ←
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-brand-500 shadow-lg shadow-brand-500/50' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextCard}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:border-brand-400/50 transition-all duration-300"
            >
              →
            </motion.button>
          </div>

          {/* Mobile swipe hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-6"
          >
            <p className="text-gray-500 text-xs">← Swipe to cycle through cards →</p>
            <p className="text-gray-600 text-xs mt-1">🃏 Card stack • All features visible</p>
          </motion.div>
        </div>

        {/* Desktop: Original Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.7,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Container with glass morphism matching hero */}
              <div className="relative h-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-brand-500/50 transition-all duration-500">
                {/* Premium glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.bgColor.split(' ')[1]}/20 to-${feature.bgColor.split(' ')[3]}/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}></div>
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500/30 via-red-500/30 to-brand-500/30 rounded-3xl blur-sm"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon with glow */}
                  <div className="relative">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-500/20 to-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-sm transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Subtle accent line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-brand-500 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-brand-500/50"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            Ready to experience elite prop trading? 
            <span className="text-brand-400 ml-1">Scroll down to choose your challenge</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-1 h-1 bg-brand-500 rounded-full animate-pulse"></div>
            <p className="text-gray-600 text-xs">🃏 Stacked deck • Swipe to explore</p>
            <div className="w-1 h-1 bg-brand-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}