// NEXT-SPRINT: Stripe + Analytics

'use client';

import { useState } from 'react';
import PreorderForm from './PreorderForm';

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
          Morocco's First Prop Trading Firm — <span className="text-brand-500">100XFT</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Proudly built in Tangier, empowering traders worldwide (yes, US clients welcome). 
          Experience elite prop trading with up to <span className="text-brand-500 font-semibold">90% profit split</span> and 
          <span className="text-brand-500 font-semibold"> zero profit caps</span>.
        </p>

        {/* Trust Ribbon */}
        <div className="mb-8 flex justify-center">
          <div className="px-4 py-2 bg-brand-900/30 border border-brand-500/30 rounded-full text-brand-400 text-sm font-medium backdrop-blur-sm">
            🇲🇦 Made in Morocco — 🇺🇸 Accepting US Traders
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
            <button className="px-8 py-4 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 btn-glow transition-all duration-300">
              Get Early Access
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => setShowDemoForm(true)}
            className="px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold rounded-lg red-glow hover:from-brand-700 hover:to-brand-800 btn-glow transition-all duration-300 min-w-[200px]"
          >
            Join Demo Challenge
          </button>
          <button 
            onClick={() => setShowPreorderForm(true)}
            className="px-8 py-4 bg-transparent border-2 border-brand-500 text-brand-500 font-bold rounded-lg hover:bg-brand-500 hover:text-white transition-all duration-300 min-w-[200px]"
          >
            Preorder Now
          </button>
        </div>

        {/* Launch info */}
        <div className="mt-12 text-gray-400">
          <p className="text-sm">
            🚀 Launching Q4 2025 • Limited Early Access Spots
          </p>
        </div>
      </div>

      {/* Preorder Modal */}
      {(showPreorderForm || showDemoForm) && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="max-w-2xl w-full max-h-screen overflow-y-auto">
            <PreorderForm
              defaultPlanId={showDemoForm ? 'two-phase-fx' : 'two-phase-fx'}
              defaultAccountSize={20000}
              onSuccess={() => {
                setShowPreorderForm(false);
                setShowDemoForm(false);
              }}
              onClose={() => {
                setShowPreorderForm(false);
                setShowDemoForm(false);
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}