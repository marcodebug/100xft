// NEXT-SPRINT: Stripe + Analytics

'use client';

import { useState } from 'react';
// Preorder removed in favor of Stripe checkout

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white red-text-glow mb-4">
            100<span className="text-brand-500">X</span>FT
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-brand-500 to-brand-600 mx-auto rounded-full"></div>
        </div>

        {/* Main headline */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          The First Moroccan Prop Trading Firm — <span className="text-brand-500">100XFT</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Empowering traders worldwide (yes, US clients welcome). Experience elite prop trading with up to 
          <span className="text-brand-500 font-semibold"> 90% profit split</span> and
          <span className="text-brand-500 font-semibold"> zero profit caps</span>.
        </p>

        {/* Trust Ribbon */}
        <div className="mb-8 flex justify-center">
          <div className="px-4 py-2 bg-brand-900/30 border border-brand-500/30 rounded-full text-brand-400 text-sm font-medium backdrop-blur-sm">
            🇲🇦 Morocco — 🇺🇸 Accepting US Traders
          </div>
        </div>

        {/* Email signup */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
            <a
              href="#pricing"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 border border-green-400/40 text-center"
            >
              Get Early Access
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#pricing"
            className="px-8 py-4 bg-transparent border-2 border-green-500 text-green-500 font-bold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 min-w-[200px]"
          >
            Get Early Access
          </a>
        </div>

        {/* Launch info */}
        <div className="mt-12 text-gray-400">
          <p className="text-sm">
            🚀 Launching Q4 2025 • Limited Early Access Spots
          </p>
        </div>
      </div>

      {/* No preorder modal in Stripe version */}
    </section>
  );
}