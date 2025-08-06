// NEXT-SPRINT: Stripe + Analytics

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AccountSize } from '@/types/plan';
import { plans, formatAccountSize, formatPrice } from '@/data/plans';

const preorderSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  planId: z.enum(['one-phase-fx', 'two-phase-fx', 'crypto-one', 'crypto-two', 'instant', 'futures']),
  accountSize: z.enum([10000, 20000, 50000, 100000, 200000, 400000] as const),
  joinDemo: z.boolean().default(false)
});

type PreorderFormData = z.infer<typeof preorderSchema>;

interface PreorderFormProps {
  defaultPlanId?: string;
  defaultAccountSize?: AccountSize;
  onSuccess?: () => void;
  onClose?: () => void;
}

export default function PreorderForm({ 
  defaultPlanId = 'two-phase-fx', 
  defaultAccountSize = 20000,
  onSuccess,
  onClose 
}: PreorderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<PreorderFormData>({
    resolver: zodResolver(preorderSchema),
    defaultValues: {
      planId: defaultPlanId as any,
      accountSize: defaultAccountSize,
      joinDemo: false
    }
  });

  const selectedPlanId = watch('planId');
  const selectedAccountSize = watch('accountSize');

  const selectedPlan = plans.find(p => p.id === selectedPlanId);
  const selectedRule = selectedPlan?.rules[selectedAccountSize];

  const onSubmit = async (data: PreorderFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/preorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit preorder');
      }

      setSubmitStatus('success');
      onSuccess?.();
    } catch (error) {
      console.error('Preorder submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-gray-900 rounded-2xl p-8 border border-green-500/30 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-4">You're on the list!</h3>
        <p className="text-gray-300 mb-6">
          We've added you to our exclusive waitlist. You'll receive early access to the {selectedPlan?.label} challenge.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">Preorder Challenge</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Plan Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Challenge Type
          </label>
          <select
            {...register('planId')}
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          >
            {plans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.label}
              </option>
            ))}
          </select>
        </div>

        {/* Account Size */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Account Size
          </label>
          <select
            {...register('accountSize', { valueAsNumber: true })}
            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
          >
            {[10000, 25000, 50000, 100000, 200000].map((size) => (
              <option key={size} value={size}>
                {formatAccountSize(size as AccountSize)}
              </option>
            ))}
          </select>
        </div>

        {/* Challenge Details */}
        {selectedRule && (
          <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
            <h4 className="text-lg font-semibold text-white mb-3">Challenge Details</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {selectedRule.profitTarget && (
                <div>
                  <span className="text-gray-400">Profit Target:</span>
                  <span className="text-white ml-2">{selectedRule.profitTarget}%</span>
                </div>
              )}
              <div>
                <span className="text-gray-400">Daily Loss:</span>
                <span className="text-white ml-2">{selectedRule.dailyLossLimit}%</span>
              </div>
              <div>
                <span className="text-gray-400">Max Drawdown:</span>
                <span className="text-white ml-2">{selectedRule.maxDrawdown}%</span>
              </div>
              <div>
                <span className="text-gray-400">Profit Split:</span>
                <span className="text-red-500 ml-2 font-semibold">{selectedRule.profitSplit}%</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Challenge Price:</span>
                <span className="text-red-500 text-xl font-bold">
                  {formatPrice(selectedRule.price)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Demo Checkbox */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            {...register('joinDemo')}
            id="joinDemo"
            className="w-5 h-5 bg-black/50 border border-gray-600 rounded focus:ring-red-500 focus:ring-2 text-red-500"
          />
          <label htmlFor="joinDemo" className="text-gray-300 text-sm">
            Also sign me up for the free demo challenge
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg red-glow hover:from-red-700 hover:to-red-800 btn-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Secure My Spot'}
        </button>

        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      <p className="text-gray-500 text-xs text-center mt-4">
        🔒 Your information is secure. We'll only contact you about 100XFT updates.
      </p>
    </div>
  );
}