import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | 100XFT",
  description: "Privacy Policy explaining how 100XFT collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
                Privacy
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Personal Information</h3>
                    <p className="text-gray-300 leading-relaxed mb-2">
                      We collect personal information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Name and contact information (email, phone)</li>
                      <li>Identity verification documents</li>
                      <li>Financial information for payouts</li>
                      <li>Trading experience and background</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Trading Data</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>Trading history and performance metrics</li>
                      <li>Account balance and transaction history</li>
                      <li>Risk management statistics</li>
                      <li>Platform usage and preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Technical Information</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>IP address and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Website usage patterns and analytics</li>
                      <li>Cookies and tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide and maintain our trading services</li>
                  <li>Process registrations and verify identities (KYC)</li>
                  <li>Monitor trading performance and compliance</li>
                  <li>Process payouts and financial transactions</li>
                  <li>Communicate service updates and important notices</li>
                  <li>Improve our platform and user experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Prevent fraud and ensure platform security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Service Providers</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We work with trusted third-party service providers who assist in platform operations, payment processing, and compliance verification.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Legal Requirements</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We may disclose information when required by law, court order, or regulatory authorities, or to protect our rights and safety.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Business Transfers</h3>
                    <p className="text-gray-300 leading-relaxed">
                      In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure data storage with encryption at rest</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Access controls and employee training</li>
                  <li>Multi-factor authentication where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Access: Request copies of your personal data</li>
                  <li>Rectification: Request correction of inaccurate information</li>
                  <li>Erasure: Request deletion of your data (subject to legal requirements)</li>
                  <li>Portability: Request transfer of your data to another service</li>
                  <li>Objection: Object to processing of your data in certain circumstances</li>
                  <li>Restriction: Request restriction of processing in specific situations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your information for as long as necessary to provide our services and comply with legal obligations. Trading data may be retained for regulatory compliance purposes even after account closure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. International Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your information may be processed and stored in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about this Privacy Policy or to exercise your rights, please contact us:
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <p className="text-white">Email: privacy@100xft.com</p>
                  <p className="text-white">Data Protection Officer: dpo@100xft.com</p>
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