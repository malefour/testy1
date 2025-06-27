import React from 'react';
import { TrendingUp, Shield, Zap, Globe, BarChart3, Users, DollarSign, Award } from 'lucide-react';
import { Timeline } from '../components/ui/timeline';

const Investors = () => {
  const timelineData = [
    {
      title: "June 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold mb-8">
            Idea conception and initial development
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm text-gray-700">25,000 tickets processed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm text-gray-700">0% scalping rate achieved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm text-gray-700">94% customer satisfaction</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "July 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold mb-8">
            Platform launch and initial funding push
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-navy-50 p-4 rounded-lg">
              <DollarSign className="h-6 w-6 text-teal-600 mb-2" />
              <h4 className="font-semibold text-navy-900 mb-1 text-sm">$1.2M Series A</h4>
              <p className="text-xs text-gray-600">Initial funding projection</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-navy-50 p-4 rounded-lg">
              <Users className="h-6 w-6 text-purple-600 mb-2" />
              <h4 className="font-semibold text-navy-900 mb-1 text-sm">Public demo</h4>
              <p className="text-xs text-gray-600">We'll use our own ticketing technology to offer tickets to a live demo of the product</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q3 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold mb-8">
            MVP deployed, used in smaller venues
          </p>
          <div className="bg-gradient-to-r from-navy-50 to-teal-50 p-4 rounded-lg">
            <Shield className="h-6 w-6 text-navy-600 mb-2" />
            <h4 className="font-semibold text-navy-900 mb-1 text-sm">Security Audit</h4>
            <p className="text-xs text-gray-600">
              Smart contract audit, legislative compliance verified
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Q4 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold mb-8">
            First larger-audience event served
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-navy-50 p-4 rounded-lg">
              <Zap className="h-6 w-6 text-blue-600 mb-2" />
              <h4 className="font-semibold text-navy-900 mb-1 text-sm">Solana Integration</h4>
              <p className="text-xs text-gray-600">Core platform built</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-navy-50 p-4 rounded-lg">
              <Award className="h-6 w-6 text-green-600 mb-2" />
              <h4 className="font-semibold text-navy-900 mb-1 text-sm">5 Pilot Venues</h4>
              <p className="text-xs text-gray-600">Initial partnerships</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            Investor Overview
          </h1>
          <p className="font-roboto text-xl text-gray-600 leading-relaxed">
            Revolutionizing the $85B global ticketing industry with blockchain technology and transparent pricing.
          </p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Massive Market Opportunity
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              The global ticketing market is ripe for disruption, with clear pain points and massive inefficiencies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-10 w-10 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-navy-900 mb-2">$85B</div>
              <p className="font-roboto text-gray-600">Global Ticketing Market</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-navy-900 mb-2">$15B</div>
              <p className="font-roboto text-gray-600">Lost to Scalping Annually</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-navy-900 mb-2">2.8B</div>
              <p className="font-roboto text-gray-600">Event Tickets Sold Yearly</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-navy-900 mb-2">12%</div>
              <p className="font-roboto text-gray-600">Annual Market Growth</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-inter font-semibold text-2xl text-navy-900 mb-6 text-center">Market Problems We Solve</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="font-inter font-semibold text-lg text-navy-900 mb-2">Bot Scalping</h4>
                <p className="font-roboto text-gray-600 text-sm">
                  Automated purchasing inflates prices 10x+ and locks out real fans
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h4 className="font-inter font-semibold text-lg text-navy-900 mb-2">Counterfeit Tickets</h4>
                <p className="font-roboto text-gray-600 text-sm">
                  $1B+ lost annually to fake tickets and fraud
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💸</span>
                </div>
                <h4 className="font-inter font-semibold text-lg text-navy-900 mb-2">Hidden Fees</h4>
                <p className="font-roboto text-gray-600 text-sm">
                  Opaque pricing with fees that can double ticket costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Technology Competitive Advantage
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Built on Solana for unmatched speed, cost efficiency, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Solana Performance</h3>
              <ul className="space-y-2 font-roboto text-gray-600 text-sm">
                <li>• 400ms block times</li>
                <li>• 65,000 TPS capacity</li>
                <li>• Sub-$0.01 transaction fees</li>
                <li>• No network congestion</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Smart Contract Security</h3>
              <ul className="space-y-2 font-roboto text-gray-600 text-sm">
                <li>• Multi-signature security</li>
                <li>• Audited by leading firms</li>
                <li>• Immutable anti-scalping rules</li>
                <li>• Transparent pricing logic</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Enterprise SaaS</h3>
              <ul className="space-y-2 font-roboto text-gray-600 text-sm">
                <li>• Real-time analytics</li>
                <li>• API-first architecture</li>
                <li>• White-label solutions</li>
                <li>• SOC 2 compliance</li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-800 p-8 rounded-2xl text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-inter font-bold text-2xl mb-4">Why Solana?</h3>
                <p className="font-roboto text-gray-300 mb-6">
                  We evaluated Ethereum, Polygon, and other chains. Solana's performance and cost structure make it the only viable option for mass-market ticketing.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-roboto text-gray-300">Transaction Speed</span>
                    <span className="font-roboto font-medium">400ms vs 15s (Ethereum)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-roboto text-gray-300">Transaction Cost</span>
                    <span className="font-roboto font-medium">$0.00025 vs $15+ (Ethereum)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-roboto text-gray-300">Throughput</span>
                    <span className="font-roboto font-medium">65,000 TPS vs 15 TPS</span>
                  </div>
                </div>
              </div>
              <div className="bg-navy-700 p-6 rounded-xl">
                <h4 className="font-inter font-semibold text-lg mb-4">Ecosystem Benefits</h4>
                <ul className="space-y-2 font-roboto text-gray-300 text-sm">
                  <li>• Growing developer ecosystem</li>
                  <li>• Mobile wallet adoption</li>
                  <li>• DeFi integration opportunities</li>
                  <li>• Institutional backing (FTX, Jump)</li>
                  <li>• Energy efficient (Proof of Stake)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Scalable Business Model
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple revenue streams with high margins and network effects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-inter font-semibold text-2xl text-navy-900 mb-6">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-teal-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-roboto font-medium text-navy-900">Transaction Fees</h4>
                    <p className="font-roboto text-gray-600 text-sm">2-2.5% per ticket sale (vs 3-5% traditional)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-teal-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-roboto font-medium text-navy-900">Secondary Market</h4>
                    <p className="font-roboto text-gray-600 text-sm">Revenue share from controlled resales</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-teal-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-roboto font-medium text-navy-900">SaaS Subscriptions</h4>
                    <p className="font-roboto text-gray-600 text-sm">Enterprise features and white-label solutions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-teal-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-roboto font-medium text-navy-900">NFT Marketplace</h4>
                    <p className="font-roboto text-gray-600 text-sm">Collectible trading and artist collaborations</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-inter font-semibold text-2xl text-navy-900 mb-6">Unit Economics</h3>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-roboto text-gray-700">Average Ticket Price</span>
                    <span className="font-roboto font-medium text-navy-900">$75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-roboto text-gray-700">Our Fee (2.5%)</span>
                    <span className="font-roboto font-medium text-navy-900">$1.88</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-roboto text-gray-700">Processing Costs</span>
                    <span className="font-roboto font-medium text-red-600">-$0.35</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-roboto text-gray-700">Blockchain Fees</span>
                    <span className="font-roboto font-medium text-red-600">-$0.01</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between">
                    <span className="font-roboto font-medium text-gray-900">Gross Profit per Ticket</span>
                    <span className="font-roboto font-bold text-teal-600">$1.52</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-roboto text-gray-700">Gross Margin</span>
                    <span className="font-roboto font-bold text-teal-600">81%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl mb-6">
            Investment Opportunity
          </h2>
          <p className="font-roboto text-xl text-gray-300 mb-8">
            Join us in revolutionizing the ticketing industry with transparent, fair, and fraud-proof technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">$8M</div>
              <p className="font-roboto text-gray-300">Series A Round</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">18 months</div>
              <p className="font-roboto text-gray-300">Runway</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">$50M</div>
              <p className="font-roboto text-gray-300">Pre-money Valuation</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
              Request Pitch Deck
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-navy-800 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
              Schedule Meeting
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;