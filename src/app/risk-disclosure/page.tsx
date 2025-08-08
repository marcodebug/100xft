import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Risk Disclosure Statement | 100XFT",
  description: "Important risk disclosure information for trading Forex, Crypto, and Futures with 100XFT.",
};

export default function RiskDisclosurePage() {
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
                Risk Disclosure
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Statement
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Important information about the risks involved in trading financial instruments
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            {/* High-Risk Warning Banner */}
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/50 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚠️</div>
                <div>
                  <h2 className="text-2xl font-bold text-red-200 mb-4">High-Risk Investment Warning</h2>
                  <p className="text-red-100 text-lg leading-relaxed">
                    Trading foreign exchange, cryptocurrencies, and derivatives involves substantial risk of loss and is not suitable for all investors. You should carefully consider whether trading is appropriate for you in light of your experience, objectives, financial resources, and other relevant circumstances.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. General Risk Factors</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Market Volatility</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Financial markets are highly volatile and can move rapidly against your position. Price movements in forex, cryptocurrency, and derivatives markets can be extreme and unpredictable, potentially resulting in significant losses that may exceed your initial investment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Leverage Risk</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Trading with leverage amplifies both potential profits and losses. A small adverse price movement can result in losses that significantly exceed your initial margin deposit. You should understand that leverage can work against you as well as for you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-brand-400 mb-2">Liquidity Risk</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Under certain market conditions, it may be difficult or impossible to liquidate a position at a reasonable price or at all. This may occur during periods of rapid price movement, market gaps, or low trading volume.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Forex Trading Risks</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Currency Risk:</strong> Exchange rate fluctuations can significantly impact your trading results</li>
                  <li><strong>Interest Rate Risk:</strong> Changes in interest rates can affect currency values and carry costs</li>
                  <li><strong>Political Risk:</strong> Political events and government policies can cause sudden currency movements</li>
                  <li><strong>Economic Risk:</strong> Economic indicators and central bank decisions can create market volatility</li>
                  <li><strong>Overnight Risk:</strong> Positions held overnight are subject to gap risk and rollover costs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cryptocurrency Trading Risks</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>Extreme Volatility:</strong> Cryptocurrency prices can fluctuate dramatically within short periods</li>
                  <li><strong>Regulatory Risk:</strong> Government regulations can significantly impact cryptocurrency values</li>
                  <li><strong>Technology Risk:</strong> Technical issues, hacking, or system failures can affect market access</li>
                  <li><strong>Market Manipulation:</strong> Cryptocurrency markets may be subject to manipulation due to lower liquidity</li>
                  <li><strong>Operational Risk:</strong> Exchange closures, wallet issues, or network problems can impact trading</li>
                  <li><strong>Limited History:</strong> Cryptocurrencies have limited trading history for risk assessment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Futures Trading Risks</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>High Leverage:</strong> Futures contracts typically involve high leverage, magnifying potential losses</li>
                  <li><strong>Margin Calls:</strong> Adverse price movements may result in margin calls requiring additional funds</li>
                  <li><strong>Expiration Risk:</strong> Futures contracts have expiration dates that can affect position management</li>
                  <li><strong>Basis Risk:</strong> The relationship between futures prices and underlying asset prices may vary</li>
                  <li><strong>Delivery Risk:</strong> Some futures contracts may require physical delivery of the underlying asset</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Technology and Platform Risks</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li><strong>System Failures:</strong> Technical malfunctions may prevent order execution or account access</li>
                  <li><strong>Internet Connectivity:</strong> Connection issues can impact your ability to monitor or close positions</li>
                  <li><strong>Software Bugs:</strong> Platform errors may affect trade execution or reporting accuracy</li>
                  <li><strong>Data Feed Issues:</strong> Incorrect or delayed price feeds can impact trading decisions</li>
                  <li><strong>Cybersecurity:</strong> Security breaches could compromise account information or funds</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Regulatory and Legal Considerations</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Regulatory Changes:</strong> Changes in regulations or laws may affect your ability to trade or the terms of existing positions. Different jurisdictions have varying regulatory frameworks for financial trading.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Tax Implications:</strong> Trading profits may be subject to taxation in your jurisdiction. You should consult with a tax professional regarding the tax treatment of your trading activities.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Legal Recourse:</strong> Your legal recourse may be limited, especially when trading with international brokers or on foreign exchanges.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Risk Management Recommendations</h2>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">Essential Risk Management Practices</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Never invest more than you can afford to lose</li>
                    <li>Use stop-loss orders to limit potential losses</li>
                    <li>Diversify your trading portfolio across different instruments</li>
                    <li>Maintain adequate capital reserves for margin requirements</li>
                    <li>Continuously educate yourself about markets and risk management</li>
                    <li>Start with smaller position sizes until you gain experience</li>
                    <li>Regularly review and adjust your risk management strategy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. No Guarantee of Profits</h2>
                <div className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-6">
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Important:</strong> Past performance is not indicative of future results. No trading system or strategy can guarantee profits or eliminate the risk of losses. Market conditions are constantly changing, and what works in one market environment may not work in another.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Professional Advice</h2>
                <p className="text-gray-300 leading-relaxed">
                  Before engaging in trading activities, you should:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                  <li>Consult with a qualified financial advisor</li>
                  <li>Carefully assess your financial situation and risk tolerance</li>
                  <li>Understand all terms and conditions of trading</li>
                  <li>Seek legal advice if you have questions about regulatory compliance</li>
                  <li>Consider the tax implications in your jurisdiction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Acknowledgment</h2>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <p className="text-red-100 leading-relaxed">
                    By using 100XFT services, you acknowledge that you have read, understood, and accepted this Risk Disclosure Statement. You confirm that you understand the risks involved in trading and that you are solely responsible for any trading decisions you make.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}