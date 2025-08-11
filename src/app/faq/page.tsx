import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | 100XFT",
  description: "Get answers to common questions about 100XFT trading challenges, rules, and requirements.",
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is 100XFT?",
        a: "100XFT is Morocco's first proprietary trading firm, providing funded trading opportunities to skilled traders worldwide. We offer Forex, Crypto, and Futures challenges with up to 90% profit splits."
      },
      {
        q: "Do you accept US traders?",
        a: "Yes! 100XFT welcomes traders from the United States and 195+ countries worldwide. We're proud to be internationally accessible while maintaining our Moroccan roots."
      },
      {
        q: "How do I get started?",
        a: "Simply choose your preferred challenge (Forex, Crypto, or Futures), select your account size, and complete the registration process. You can start trading immediately after payment confirmation."
      }
    ]
  },
  {
    category: "Trading Challenges",
    questions: [
      {
        q: "What challenge types do you offer?",
        a: "We offer One-Phase FX, Two-Phase FX, One-Phase Crypto, Two-Phase Crypto, Instant Funded, and 4-Phase Futures challenges with account sizes ranging from $10K to $400K."
      },
      {
        q: "What are the profit targets?",
        a: "Profit targets vary by challenge type: FX challenges require 8-10%, Crypto challenges require 6-9%, and Futures challenges require 9% per phase."
      },
      {
        q: "Can I trade multiple challenges simultaneously?",
        a: "Yes, you can purchase and trade multiple challenges simultaneously. Each challenge operates independently with its own rules and requirements."
      },
      {
        q: "What happens if I fail a challenge?",
        a: "If you don't meet the requirements, you can purchase a new challenge at any time. We also offer retake discounts for returning customers."
      }
    ]
  },
  {
    category: "Funded Accounts",
    questions: [
      {
        q: "What is the profit split?",
        a: "We offer up to 90% profit split on Crypto and Futures funded accounts, and 80% on FX funded accounts. There are no profit caps on funded accounts."
      },
      {
        q: "How often are payouts processed?",
        a: "Payouts are processed bi-weekly (every 14 days) for funded traders who meet the minimum payout threshold."
      },
      {
        q: "What is the minimum payout amount?",
        a: "The minimum payout amount is $50 for all account types."
      },
      {
        q: "Are there any restrictions on funded accounts?",
        a: "Funded accounts must maintain the same risk management rules as the challenge phase, including daily loss limits and maximum drawdown requirements."
      }
    ]
  },
  {
    category: "Technical & Support",
    questions: [
      {
        q: "What trading platforms do you support?",
        a: "We support MT5, TradingView, cTrader, TradeLocker, and MatchTrader. Platform availability may vary by challenge type."
      },
      {
        q: "What are your customer support hours?",
        a: "Our support team is available 24/5 (Monday to Friday) via live chat, email, and Discord. We typically respond within 2-4 hours."
      },
      {
        q: "Can I change my account size after starting?",
        a: "Account sizes cannot be changed once a challenge begins. You would need to start a new challenge with your preferred account size."
      },
      {
        q: "Do you offer any educational resources?",
        a: "Yes! We provide comprehensive trading guides, risk management resources, and strategy tutorials through our Discord community and help center."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <BackgroundBeams className="opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
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
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about 100XFT trading challenges and requirements
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-brand-600 to-red-600 rounded-lg flex items-center justify-center text-sm font-bold">
                    {sectionIndex + 1}
                  </span>
                  {section.category}
                </h2>
                
                <div className="space-y-6">
                  {section.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-l-4 border-brand-600/50 pl-6">
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-brand-900/20 to-red-900/20 backdrop-blur-xl border border-brand-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">Our support team is here to help you succeed</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/I00XFT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-brand-600 to-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-brand-700 hover:to-red-700 transition-all duration-300"
              >
                💬 Live Chat
              </a>
              <a
                href="mailto:contact@100xft.com"
                className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                📧 Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}