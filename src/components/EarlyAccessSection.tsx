// NEXT-SPRINT: Stripe + Analytics

'use client';

import { useState, useEffect } from 'react';
// Preorder removed in favor of Stripe checkout

export default function EarlyAccessSection() {
  const [email, setEmail] = useState('');
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to Q4 2025 (October 1, 2025)
  useEffect(() => {
    const targetDate = new Date('2025-10-01T00:00:00Z').getTime();

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

  return (
    <section className="section-pad bg-gradient-to-b from-transparent to-black/70">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="section-title">
            Get <span className="bg-gradient-to-r from-brand-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent">Early Access</span>
          </h2>
          <p className="section-sub mb-8">
            Be among the first to experience the future of prop trading. Limited spots available for our exclusive early access program.
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-black/50 rounded-2xl p-8 border border-red-500/30 mb-12 red-glow">
            <h3 className="text-2xl font-bold text-white mb-6">Launch Countdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-500 mb-2">{timeLeft.days}</div>
                <div className="text-gray-400 text-sm">Days</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-500 mb-2">{timeLeft.hours}</div>
                <div className="text-gray-400 text-sm">Hours</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-500 mb-2">{timeLeft.minutes}</div>
                <div className="text-gray-400 text-sm">Minutes</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-500 mb-2">{timeLeft.seconds}</div>
                <div className="text-gray-400 text-sm">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Signup */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            Reserve Your Spot
          </h3>
          <div className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
              <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 btn-glow transition-all duration-300 whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            🔒 We'll never spam you. Unsubscribe at any time.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/30 rounded-lg p-6 border border-gray-800">
            <div className="text-3xl mb-4">🚀</div>
            <h4 className="text-lg font-bold text-white mb-2">Early Access</h4>
            <p className="text-gray-400 text-sm">Be the first to access our platform before public launch</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6 border border-gray-800">
            <div className="text-3xl mb-4">💎</div>
            <h4 className="text-lg font-bold text-white mb-2">Exclusive Pricing</h4>
            <p className="text-gray-400 text-sm">Special launch prices for early adopters</p>
          </div>
          <div className="bg-black/30 rounded-lg p-6 border border-gray-800">
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-lg font-bold text-white mb-2">Demo Access</h4>
            <p className="text-gray-400 text-sm">Free demo challenges to test your skills</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#pricing"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 mr-4 border border-green-400/40"
          >
            Order Now
          </a>
          <p className="text-gray-400 text-sm mt-4">
            🚀 Launching Q4 2025 • Limited Early Access Spots Available
          </p>
        </div>

        {/* No preorder modal */}
      </div>
    </section>
  );
}