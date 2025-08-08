import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | 100XFT",
  description: "Terms of Service and User Agreement for 100XFT proprietary trading challenges and funded accounts.",
};

export default function TermsPage() {
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
                Terms of
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using 100XFT services
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using the 100XFT platform ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Trader," or "you") and 100XFT ("Company," "we," or "us").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  100XFT is a proprietary trading firm that provides trading evaluation challenges and funded trading opportunities. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Trading evaluation challenges (Forex, Crypto, Futures)</li>
                  <li>Funded trading accounts for successful traders</li>
                  <li>Educational resources and trading support</li>
                  <li>Performance monitoring and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility Requirements</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To use our services, you must:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Be at least 18 years of age</li>
                  <li>Have the legal capacity to enter into binding agreements</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not be a resident of restricted jurisdictions as defined by us</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Trading Rules and Compliance</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All users must adhere to our trading rules and guidelines:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Follow all challenge-specific rules and requirements</li>
                  <li>Maintain proper risk management practices</li>
                  <li>Avoid prohibited trading strategies and practices</li>
                  <li>Provide accurate trading information and documentation</li>
                  <li>Submit to account monitoring and compliance reviews</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Payment terms for our services:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Challenge fees are due upon registration and are non-refundable unless specified</li>
                  <li>Funded account payouts are processed bi-weekly</li>
                  <li>Minimum payout threshold is $50 USD</li>
                  <li>Payout processing time is 1-3 business days</li>
                  <li>All fees are clearly disclosed before purchase</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Risk Disclosure</h2>
                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6 mb-4">
                  <p className="text-orange-200 font-semibold mb-2">⚠️ High-Risk Investment Warning</p>
                  <p className="text-gray-300 leading-relaxed">
                    Trading foreign exchange, cryptocurrencies, and derivatives carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  100XFT shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with your use of our services, whether based on warranty, contract, tort, or any other legal theory.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Account Termination</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We reserve the right to terminate or suspend accounts:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>For violation of these terms or trading rules</li>
                  <li>For fraudulent or suspicious activity</li>
                  <li>For non-compliance with regulatory requirements</li>
                  <li>At our sole discretion with reasonable notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Modifications</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be communicated through our platform or via email. Continued use of our services after modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Morocco. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Morocco.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <p className="text-white">Email: legal@100xft.com</p>
                  <p className="text-white">Address: 100XFT, Tangier, Morocco</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}