'use client';

// NEXT-SPRINT: Stripe + Analytics

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { plans, accountSizes, futuresAccountSizes, formatAccountSize, isEarlyAccessActive, earlyAccess } from '@/data/plans';
import { AccountSize } from '@/types/plan';
// Removed PreorderForm usage in favor of Stripe Checkout
import ChallengeCard from './ChallengeCard';
import ChallengeCarousel from './ChallengeCarousel';
import OrderModal from './OrderModal';

export default function PricingCalculator() {
  const [selectedAccountSize, setSelectedAccountSize] = useState<AccountSize>(20000);
  const [selectedPlanId, setSelectedPlanId] = useState('two-phase-fx');
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  const [comparingPlans, setComparingPlans] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'grid' | 'comparison'>('grid');
  const [filterType, setFilterType] = useState<'fx' | 'crypto' | 'futures'>('fx');
  const [orderOpen, setOrderOpen] = useState(false);

  // Ensure selected account size is valid when switching filters (futures has custom sizes)
  useEffect(() => {
    const list = filterType === 'futures' ? futuresAccountSizes : accountSizes;
    if (!list.includes(selectedAccountSize)) {
      setSelectedAccountSize(list[0] as AccountSize);
    }
  }, [filterType]);

  // Filter plans - Show instant card in Forex, also in Crypto and Futures per request
  const filteredPlans = useMemo(() => {
    const fxPlans = plans.filter(p => p.id.includes('fx'));
    const cryptoPlans = plans.filter(p => p.id.includes('crypto'));
    const instantPlan = plans.filter(p => p.id === 'instant');
    const futuresPlans = plans.filter(p => p.id === 'futures');
    
    switch (filterType) {
      case 'fx':
        return [...fxPlans, ...instantPlan];
      case 'crypto':
        return [...cryptoPlans, ...instantPlan];
      case 'futures':
        return [...futuresPlans, ...instantPlan];
      default:
        return [...fxPlans, ...instantPlan];
    }
  }, [filterType]);

  const handleCompareToggle = () => {};

  const startCheckout = async (planId: string) => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, accountSize: selectedAccountSize })
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout failed');
      }
      window.location.href = data.url;
    } catch (err) {
      console.error('Stripe checkout failed', err);
    }
  };

  // Comparison mode view
  if (false) {
    return (
      <section className="relative py-24 overflow-hidden">
        {/* Premium Background matching hero & WhyChoose sections */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-brand-600/20 via-red-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-red-700/15 via-brand-700/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,31,31,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,31,31,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Challenge Comparison</h2>
            <button
              onClick={() => setViewMode('grid')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              ← Back to Challenges
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from(comparingPlans).map(planId => {
              const plan = filteredPlans.find(p => p.id === planId);
              if (!plan) return null;
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <ChallengeCard
                    plan={plan}
                    accountSize={selectedAccountSize}
                    isSelected={selectedPlanId === plan.id}
                    isComparing={false}
                    onSelect={() => setSelectedPlanId(plan.id)}
                    onPreorder={() => setOrderOpen(true)}
                    onCompare={() => {}}
                  />
                  
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Smooth gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-900" />
      
      {/* Central focus with subtle glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-brand-600/6 via-transparent to-red-600/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-red-700/8 via-brand-700/5 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header matching hero style */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-600/20 to-red-600/20 backdrop-blur-sm border border-brand-500/30 rounded-full text-brand-400 text-sm font-medium mb-6">
              <span className="text-xl">🎯</span>
              ELITE CHALLENGES
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Challenge
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Elite trading challenges designed for every skill level
            </p>
          </motion.div>
          
          {/* Premium Controls matching hero style */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Enhanced Filter Tabs */}
            <div className="flex justify-center">
              <div className="flex bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                {[
                  { id: 'fx', name: 'Forex', icon: '💱' },
                  { id: 'crypto', name: 'Crypto', icon: '₿' },
                  { id: 'futures', name: 'Futures', icon: '🚀' }
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setFilterType(filter.id as any)}
                    className={`relative px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      filterType === filter.id
                        ? 'bg-gradient-to-r from-brand-600 to-red-600 text-white shadow-lg shadow-brand-500/40 scale-105'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-102'
                    }`}
                  >
                    <span className="mr-2 text-lg">{filter.icon}</span>
                    <span className="hidden sm:inline">{filter.name}</span>
                    <span className="sm:hidden">{filter.name}</span>
                    
                    {filterType === filter.id && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-gradient-to-r from-brand-600 to-red-600 rounded-xl -z-10 shadow-lg shadow-brand-500/30"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Account Size Control */}
            <div className="flex justify-center">
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 min-w-[450px] shadow-2xl hover:border-brand-500/30 transition-all duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-white mb-1">Account Size</h3>
                  {isEarlyAccessActive() && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-green-300 bg-green-700/20 border border-green-500/30 mb-3">
                      Early Access {earlyAccess.discountPercent}% OFF · Ends Sep 1
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      key={selectedAccountSize}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="bg-gradient-to-r from-brand-600 to-red-600 px-8 py-4 rounded-2xl text-white font-bold text-3xl shadow-lg shadow-brand-500/40 border border-brand-400/20"
                    >
                      {formatAccountSize(selectedAccountSize)}
                    </motion.div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="range"
                    min={0}
                    max={(filterType === 'futures' ? futuresAccountSizes : accountSizes).length - 1}
                    value={(filterType === 'futures' ? futuresAccountSizes : accountSizes).indexOf(selectedAccountSize)}
                    onChange={(e) => {
                      const list = filterType === 'futures' ? futuresAccountSizes : accountSizes;
                      setSelectedAccountSize(list[parseInt(e.target.value)] as AccountSize);
                    }}
                    className="w-full h-3 bg-gray-800/50 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    {(filterType === 'futures' ? futuresAccountSizes : accountSizes).map((size) => (
                      <span key={size} className="font-medium">{formatAccountSize(size)}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Challenge Carousel */}
        <div className="mt-16">
          <ChallengeCarousel
            plans={filteredPlans}
            accountSize={selectedAccountSize}
            selectedPlanId={selectedPlanId}
            comparingPlans={comparingPlans}
            onSelect={setSelectedPlanId}
            onPreorder={() => setOrderOpen(true)}
            onCompare={handleCompareToggle}
          />
          {isEarlyAccessActive() && (
            <p className="text-center text-sm text-gray-400 mt-4">Early Access discount applied at checkout automatically.</p>
          )}
        </div>

        {/* Enhanced Compare hint */}
        {comparingPlans.size === 0 && viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 text-sm">
              Ready to compare challenges? 
              <span className="text-brand-400 ml-1">Check "Compare" on multiple cards to analyze side by side</span>
            </p>
          </motion.div>
        )}
      </div>

      {/* Global Order Modal */}
      <OrderModal
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        planId={selectedPlanId}
        accountSize={selectedAccountSize}
      />
    </section>
  );
}