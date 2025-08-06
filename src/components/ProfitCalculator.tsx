// NEXT-SPRINT: Stripe + Analytics

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AccountSize } from '@/types/plan';
import { formatAccountSize, formatPrice } from '@/data/plans';

interface ProfitCalculatorProps {
  accountSize: AccountSize;
  profitSplit: number;
  className?: string;
}

export default function ProfitCalculator({ accountSize, profitSplit, className = '' }: ProfitCalculatorProps) {
  const [profitPercentage, setProfitPercentage] = useState(10);
  
  const accountValue = accountSize;
  const profitAmount = (accountValue * profitPercentage) / 100;
  const yourShare = (profitAmount * profitSplit) / 100;
  const monthlyPotential = yourShare * 4; // 4 weeks

  return (
    <div className={`bg-gradient-to-br from-brand-900/20 to-brand-800/10 rounded-xl p-6 border border-brand-500/30 backdrop-blur-sm ${className}`}>
      <h4 className="text-brand-300 text-sm font-semibold mb-4 flex items-center">
        💰 Profit Calculator
      </h4>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">
            Weekly Profit Target: {profitPercentage}%
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={profitPercentage}
            onChange={(e) => setProfitPercentage(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-black/30 rounded-lg p-3">
            <div className="text-gray-400 text-xs">Profit Amount</div>
            <div className="text-brand-400 font-bold">{formatPrice(profitAmount)}</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3">
            <div className="text-gray-400 text-xs">Your Share ({profitSplit}%)</div>
            <div className="text-green-400 font-bold">{formatPrice(yourShare)}</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-900/20 to-brand-900/20 rounded-lg p-3 border border-green-500/20">
          <div className="text-green-300 text-xs">Monthly Potential</div>
          <div className="text-green-400 font-bold text-lg">{formatPrice(monthlyPotential)}</div>
        </div>
      </div>
    </div>
  );
}