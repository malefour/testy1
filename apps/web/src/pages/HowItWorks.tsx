import React from 'react';
import { ArrowRight, Shield, Zap, Users, Code, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            How OpenTicket Works
          </h1>
          <p className="font-roboto text-xl text-gray-600 leading-relaxed">
            Deep dive into the technology that makes fair, transparent ticketing possible.
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-2xl text-navy-900 mb-4">1. Smart Contract Deployment</h3>
              <p className="font-roboto text-gray-600 mb-6">
                Each event gets its own smart contract on Solana with customizable rules for pricing, transfers, and resale restrictions.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-left">
                <h4 className="font-inter font-medium text-navy-900 mb-2">Contract Features:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Maximum resale price caps</li>
                  <li>• Transfer time windows</li>
                  <li>• Anti-bot velocity limits</li>
                  <li>• Royalty distributions</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-2xl text-navy-900 mb-4">2. NFT Ticket Minting</h3>
              <p className="font-roboto text-gray-600 mb-6">
                Tickets are minted as NFTs with unique metadata including seat info, event details, and collectible artwork.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-left">
                <h4 className="font-inter font-medium text-navy-900 mb-2">NFT Metadata:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Event information</li>
                  <li>• Seat/section details</li>
                  <li>• Artwork and branding</li>
                  <li>• Access permissions</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-2xl text-navy-900 mb-4">3. Verified Entry</h3>
              <p className="font-roboto text-gray-600 mb-6">
                At the venue, attendees prove ownership through wallet signatures or our mobile app with QR code scanning.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg text-left">
                <h4 className="font-inter font-medium text-navy-900 mb-2">Entry Methods:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Wallet signature verification</li>
                  <li>• Mobile app QR codes</li>
                  <li>• NFC tap-to-enter</li>
                  <li>• Biometric backup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Scalping Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Anti-Scalping Technology
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple layers of protection ensure tickets reach real fans at fair prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-navy-900 mb-2">Price Caps</h3>
                    <p className="font-roboto text-gray-600">Smart contracts enforce maximum resale prices, typically 110-120% of face value.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-navy-900 mb-2">Transfer Windows</h3>
                    <p className="font-roboto text-gray-600">Tickets can only be transferred during specific time periods, preventing instant scalping.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-navy-900 mb-2">Identity Verification</h3>
                    <p className="font-roboto text-gray-600">Optional KYC integration prevents bot accounts from mass purchasing tickets.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-navy-900 mb-2">Velocity Limits</h3>
                    <p className="font-roboto text-gray-600">Rate limiting prevents bulk purchases and gives real fans a fair chance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-6">Scalping Prevention Dashboard</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-roboto text-sm text-gray-700">Price Cap Enforcement</span>
                  <span className="font-roboto font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-roboto text-sm text-gray-700">Transfer Window Control</span>
                  <span className="font-roboto font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-roboto text-sm text-gray-700">Bot Detection</span>
                  <span className="font-roboto font-medium text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="font-roboto text-sm text-gray-700">Suspicious Activity</span>
                  <span className="font-roboto font-medium text-yellow-600">2 Blocked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Built on Solana
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Why we chose Solana for the future of ticketing infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-green-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Speed</h3>
              <p className="font-roboto text-gray-600 mb-4">
                400ms block times and 65,000 TPS capacity handle ticket drops for the largest events.
              </p>
              <div className="text-sm text-gray-500">
                <div>• Sub-second confirmations</div>
                <div>• No network congestion</div>
                <div>• Instant ticket delivery</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold">$</span>
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Low Cost</h3>
              <p className="font-roboto text-gray-600 mb-4">
                Transaction fees under $0.01 mean we can cover gas costs without impacting ticket prices.
              </p>
              <div className="text-sm text-gray-500">
                <div>• Predictable costs</div>
                <div>• No surprise fees</div>
                <div>• Scalable economics</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Ecosystem</h3>
              <p className="font-roboto text-gray-600 mb-4">
                Rich ecosystem of wallets, tools, and integrations makes adoption seamless.
              </p>
              <div className="text-sm text-gray-500">
                <div>• Mobile wallet support</div>
                <div>• DeFi integrations</div>
                <div>• Developer tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl text-white mb-6">
            Ready to see it in action?
          </h2>
          <p className="font-roboto text-xl text-gray-300 mb-8">
            Request a demo to explore our dashboard and see how OpenTicket can transform your events.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;