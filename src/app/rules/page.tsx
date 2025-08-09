import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Challenge Rules & Guidelines | 100XFT",
  description: "Comprehensive trading rules and guidelines for 100XFT challenges across Forex, Crypto, and Futures markets.",
};

const challengeRules = {
  forex: {
    title: "Forex Challenges",
    icon: "💱",
    rules: [
      {
        title: "One-Phase FX Challenge",
        requirements: {
          "Profit Target": "10% (Assessment) → No target (Funded)",
          "Daily Loss Limit": "5% of initial balance",
          "Max Drawdown": "6% of initial balance", 
          "Minimum Trading Days": "5 days",
          "Inactivity Period": "30 days maximum",
          "Profit Split": "80% trader / 20% firm",
          "Leverage": "1:50",
          "Weekend Holding": "Allowed"
        }
      },
      {
        title: "Two-Phase FX Challenge", 
        requirements: {
          "Phase 1 Profit Target": "8% of initial balance",
          "Phase 2 Profit Target": "5% of initial balance", 
          "Daily Loss Limit": "5% of initial balance",
          "Max Drawdown": "8% of initial balance",
          "Minimum Trading Days": "5 days per phase",
          "Inactivity Period": "30 days maximum",
          "Profit Split": "80% trader / 20% firm",
          "Leverage": "1:50", 
          "Weekend Holding": "Allowed"
        }
      }
    ]
  },
  crypto: {
    title: "Crypto Challenges",
    icon: "₿", 
    rules: [
      {
        title: "One-Phase Crypto Challenge",
        requirements: {
          "Profit Target": "9% (Assessment) → No target (Funded)",
          "Daily Cap Limit": "±3% of initial balance",
          "Max Drawdown": "6% of initial balance",
          "Minimum Trading Days": "5 days", 
          "Inactivity Period": "30 days maximum",
          "Profit Split": "90% trader / 10% firm",
          "Leverage": "5:1 BTC/ETH, 2:1 others",
          "Weekend Holding": "Allowed"
        }
      },
      {
        title: "Two-Phase Crypto Challenge",
        requirements: {
          "Phase 1 Profit Target": "6% of initial balance",
          "Phase 2 Profit Target": "9% of initial balance",
          "Daily Cap Limit": "±3% of initial balance", 
          "Max Drawdown": "9% of initial balance",
          "Minimum Trading Days": "5 days per phase",
          "Inactivity Period": "30 days maximum", 
          "Profit Split": "90% trader / 10% firm",
          "Leverage": "5:1 BTC/ETH, 2:1 others",
          "Weekend Holding": "Allowed"
        }
      }
    ]
  },
  futures: {
    title: "Futures Challenges",
    icon: "🚀",
    rules: [
      {
        title: "4-Phase Futures Challenge",
        requirements: {
          "Profit Target per Phase": "9% of initial balance",
          "Daily Loss Limit": "5% of initial balance",
          "Consistency Requirement": "25% maximum drawdown",
          "Inactivity Period": "14 days per phase",
          "Live Funded Inactivity": "7 days maximum",
          "Profit Split": "90% trader / 10% firm",
          "Leverage": "Varies by account size",
          "Contract Limits": "Varies by account size"
        }
      }
    ]
  }
};

const generalRules = [
  {
    title: "General Trading Rules",
    items: [
      "Account Usage: Trade only via the 100XFT platform or approved brokers. Sharing credentials is prohibited.",
      "Prohibited Strategies: No arbitrage, latency trading, or exploitation of platform errors. Trades must reflect genuine market analysis.",
      "Market Hours: Trade during standard hours; avoid news events unless specified.",
      "Communication: Use contact@100xft.com for inquiries; avoid public disclosure of account details."
    ]
  },
  {
    title: "Prohibited Trading Practices",
    items: [
      "High-frequency scalping (< 30 seconds)",
      "News trading during major announcements",
      "Hedging between multiple accounts", 
      "Copy trading or trade copying",
      "Expert Advisors (EAs) without approval",
      "Weekend gap trading",
      "Toxic flow strategies"
    ]
  },
  {
    title: "Account Management",
    items: [
      "One active challenge per trader initially",
      "Multiple accounts allowed after first success",
      "No sharing of login credentials", 
      "Regular password updates recommended",
      "Account monitoring for compliance",
      "Immediate notification of violations required"
    ]
  },
  {
    title: "Risk Management Requirements", 
    items: [
      "Position sizing must be reasonable",
      "Maximum 2% risk per trade recommended",
      "Stop losses encouraged but not mandatory",
      "Diversification across instruments recommended",
      "Regular monitoring of drawdown levels",
      "Conservative approach during evaluation"
    ]
  },
  {
    title: "Payout Policies",
    items: [
      "Minimum payout: $50",
      "Payout frequency: Bi-weekly (14 days)",
      "KYC verification required for payouts",
      "Bank details must match trader identity", 
      "Processing time: 1-3 business days",
      "Cryptocurrency payouts available"
    ]
  }
];

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <BackgroundBeams className="opacity-30" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors mb-8"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Challenge Rules &
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Guidelines
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive rules and requirements for all 100XFT trading challenges
            </p>
          </div>

          {/* Challenge-Specific Rules */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Challenge-Specific Rules</h2>

            {/* Introduction */}
            <div className="mx-auto max-w-3xl text-gray-300 mb-10 text-center">
              <p className="leading-relaxed">
                Welcome to 100XFT Inc., a proprietary trading firm offering evaluation challenges and funded
                accounts for forex, futures, and crypto markets. These rules ensure fair trading, protect capital,
                and promote disciplined behavior. Adhere to the following to maintain eligibility for funded
                accounts and payouts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {Object.entries(challengeRules).map(([key, challenge]) => (
                <div key={key} className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{challenge.icon}</div>
                    <h3 className="text-xl font-bold text-white">{challenge.title}</h3>
                  </div>
                  
                  {challenge.rules.map((rule, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-brand-400 mb-4">{rule.title}</h4>
                      <div className="space-y-2">
                        {Object.entries(rule.requirements).map(([req, value]) => (
                          <div key={req} className="flex justify-between items-start gap-2">
                            <span className="text-gray-400 text-sm">{req}:</span>
                            <span className="text-white text-sm font-medium text-right">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* General Rules */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">General Trading Rules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {generalRules.map((section, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-gradient-to-r from-brand-600 to-red-600 rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-brand-500 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-16 p-8 bg-gradient-to-r from-orange-900/20 to-red-900/20 backdrop-blur-xl border border-orange-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              Important Notice
            </h3>
            <p className="text-gray-300 leading-relaxed">
              These rules are subject to change based on market conditions and regulatory requirements. 
              All traders will be notified of any rule changes with adequate notice. Violation of these 
              rules may result in account termination without refund. For questions about specific rules, 
              please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}