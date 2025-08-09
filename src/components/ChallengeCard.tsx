// NEXT-SPRINT: Stripe + Analytics

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plan, AccountSize } from '@/types/plan';
import { formatAccountSize, formatPrice } from '@/data/plans';
import AnimatedNumber from './AnimatedNumber';
import ProfitCalculator from './ProfitCalculator';

interface ChallengeCardProps {
  plan: Plan;
  accountSize: AccountSize;
  isSelected: boolean;
  isComparing: boolean;
  onSelect: () => void;
  onPreorder: () => void;
  onCompare: () => void;
}

export default function ChallengeCard({
  plan,
  accountSize,
  isSelected,
  isComparing,
  onSelect,
  onPreorder,
  onCompare
}: ChallengeCardProps) {
  const [showCalculator, setShowCalculator] = useState(false);
  const rule = plan.rules[accountSize];
  if (!rule) {
    // If the selected size isn't available for this plan (e.g., switching filters),
    // avoid rendering to prevent runtime errors. Parent will adjust size shortly.
    return null;
  }

  const formatProfitTarget = () => {
    if (plan.id === 'instant') return 'N/A';
    if (plan.id === 'two-phase-fx') return `${rule.profitTarget}% → 5%`;
    if (plan.id === 'crypto-two') return `${rule.profitTarget}% → 9%`;
    return `${rule.profitTarget}%`;
  };

  const getBadgeColor = () => {
    switch (plan.id) {
      case 'two-phase-fx': return 'bg-blue-500';
      case 'one-phase-fx': return 'bg-purple-500';
      case 'crypto-one': return 'bg-orange-500';
      case 'crypto-two': return 'bg-yellow-500';
      case 'instant': return 'bg-green-500';
      default: return 'bg-brand-500';
    }
  };

  const getStepsBadge = () => {
    const stepCount = plan.steps.length;
    if (stepCount === 1) return { text: 'INSTANT', color: 'text-green-400' };
    if (stepCount === 2) return { text: '1-PHASE', color: 'text-purple-400' };
    return { text: '2-PHASE', color: 'text-blue-400' };
  };

  const stepsBadge = getStepsBadge();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`relative group cursor-pointer transition-all duration-200 ${
        isSelected ? 'z-10' : ''
      }`}
      onClick={onSelect}
    >
      {/* Glass morphism card */}
      <div
        className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border-2 transition-all duration-200 h-full flex flex-col ${
          isSelected
            ? 'bg-gradient-to-br from-brand-900/20 to-brand-800/10 border-brand-400/60 shadow-lg shadow-brand-500/20'
            : 'bg-gradient-to-br from-gray-900/50 to-black/40 border-gray-600/60 hover:border-brand-400/60 hover:shadow-xl hover:shadow-brand-500/20'
        }`}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
        
        {/* Compact Header */}
        <div className="relative p-4 pb-3 flex-shrink-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-2.5 h-2.5 rounded-full ${getBadgeColor()} shadow-lg`} />
                <h3 className="text-lg font-bold text-white">{plan.label}</h3>
              </div>
              <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${stepsBadge.color} bg-white/10`}>
                {stepsBadge.text}
              </div>
            </div>
            
            {/* Compare checkbox (desktop only) */}
            <div className="hidden md:flex items-center space-x-1">
              <input
                type="checkbox"
                id={`compare-${plan.id}-${accountSize}`}
                checked={isComparing}
                onChange={(e) => {
                  e.stopPropagation();
                  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                    onCompare();
                  }
                }}
                className="w-3.5 h-3.5 text-brand-600 bg-gray-900 border-gray-600 rounded focus:ring-brand-500 focus:ring-2"
              />
              <label 
                htmlFor={`compare-${plan.id}-${accountSize}`}
                className="text-xs text-gray-400 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Compare
              </label>
            </div>
          </div>

          {/* Account size badge */}
          <div className="inline-flex items-center px-2.5 py-0.5 bg-brand-600/20 border border-brand-500/30 rounded-full text-brand-300 text-xs font-semibold">
            {formatAccountSize(accountSize)} Account
          </div>
        </div>

        {/* Compact Stats */}
        <div className="relative px-4 pb-4 flex-grow flex flex-col">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-black/30 rounded-lg p-2.5 border border-white/20 backdrop-blur-sm">
              <div className="text-gray-400 text-xs mb-0.5 font-medium">Profit Target</div>
              <div className="text-white font-semibold text-sm">
                <AnimatedNumber value={formatProfitTarget()} />
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-2.5 border border-white/20 backdrop-blur-sm">
              <div className="text-gray-400 text-xs mb-0.5 font-medium">
                {plan.id.includes('crypto') ? 'Daily Cap Limit' : 'Daily Loss'}
              </div>
              <div className="text-white font-semibold text-sm">
                <AnimatedNumber 
                  value={rule.dailyCapLimit ? `±${rule.dailyCapLimit}%` : `${rule.dailyLossLimit}%`} 
                />
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-2.5 border border-white/20 backdrop-blur-sm">
              <div className="text-gray-400 text-xs mb-0.5 font-medium">Max Drawdown</div>
              <div className="text-white font-semibold text-sm">
                <AnimatedNumber value={rule.maxDrawdown || 0} suffix="%" />
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-2.5 border border-white/20 backdrop-blur-sm">
              <div className="text-gray-400 text-xs mb-0.5 font-medium">Profit Split</div>
              <div className="text-brand-400 font-semibold text-sm">
                <AnimatedNumber value={rule.profitSplit || 0} suffix="%" />
              </div>
            </div>
          </div>

          {/* Compact Price section */}
          <div className="bg-gradient-to-r from-brand-900/40 to-brand-800/30 rounded-lg p-3 border border-brand-500/40 mb-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-brand-300 text-xs mb-0.5 font-medium">Challenge Price</div>
                <div className="text-brand-400 text-xl font-bold">
                  <AnimatedNumber value={formatPrice(rule.price)} />
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-xs">One-time fee</div>
                <div className="text-green-400 text-xs font-medium">Refundable*</div>
              </div>
            </div>
          </div>

          {/* Profit Calculator */}
          {showCalculator && rule.profitSplit && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <ProfitCalculator 
                accountSize={accountSize}
                profitSplit={rule.profitSplit}
              />
            </motion.div>
          )}

          {/* Compact Action buttons */}
          <div className="mt-auto space-y-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCalculator(!showCalculator);
              }}
              className="w-full px-3 py-2 bg-black/40 hover:bg-black/60 border border-white/30 text-white text-xs font-medium rounded-lg transition-all duration-200 backdrop-blur-sm hover:border-brand-400/50"
            >
              {showCalculator ? 'Hide' : 'Show'} Profit Calculator
            </button>
            
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onPreorder();
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full px-4 py-2.5 font-bold rounded-lg transition-all duration-300 text-sm bg-gradient-to-r from-green-600 to-emerald-700 text-white border border-green-400/40"
            >
              Order with Stripe
            </motion.button>
          </div>
        </div>

        {/* Selection indicator */}
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}