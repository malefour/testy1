import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, TrendingUp, Zap, Check, Star, Award, Building2 } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-inter font-bold text-5xl lg:text-6xl text-navy-900 mb-6 leading-tight">
              Ticketing. Owned, fair,<br />
              <span className="text-teal-600">and fraud-proof.</span>
            </h1>
            <p className="font-roboto text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              OpenTicket issues NFT-based event tickets on Solana. Transparent pricing. No scalping. Real ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Request Demo
              </button>
              <Link 
                to="/how-it-works"
                className="border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Learn How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-navy-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-roboto text-gray-500 text-sm uppercase tracking-wide mb-8">Trusted by Leading Organizations</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* Placeholder logos */}
              <div className="flex items-center justify-center">
                <Building2 className="h-8 w-8 text-gray-400" />
                <span className="ml-2 font-roboto font-medium text-gray-400">EventCorp</span>
              </div>
              <div className="flex items-center justify-center">
                <Award className="h-8 w-8 text-gray-400" />
                <span className="ml-2 font-roboto font-medium text-gray-400">VenuePro</span>
              </div>
              <div className="flex items-center justify-center">
                <Star className="h-8 w-8 text-gray-400" />
                <span className="ml-2 font-roboto font-medium text-gray-400">FestivalMax</span>
              </div>
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-gray-400" />
                <span className="ml-2 font-roboto font-medium text-gray-400">ShowTime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Flow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              The ticketing industry is broken.
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Fans pay inflated prices, organizers lose revenue, and scalpers profit from artificial scarcity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Scalping Crisis</h3>
              <p className="font-roboto text-gray-600">Bots buy tickets instantly, reselling at 10x+ prices while real fans are locked out.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Fake Tickets</h3>
              <p className="font-roboto text-gray-600">Counterfeit tickets leave fans stranded at venue gates with no recourse.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Hidden Fees</h3>
              <p className="font-roboto text-gray-600">Opaque pricing with surprise charges that can double the ticket cost at checkout.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-roboto font-medium mb-8">
              OpenTicket Solution
            </div>
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Built for transparency and fairness.
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Every ticket is an NFT with built-in anti-scalping controls, transparent pricing, and verified authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works (Mini Version) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              How OpenTicket Works
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to revolutionize your ticketing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Zap className="h-10 w-10 text-teal-600" />
              </div>
              <div className="w-8 h-1 bg-teal-600 rounded mx-auto mb-4"></div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Tickets Minted as NFTs</h3>
              <p className="font-roboto text-gray-600">
                Each ticket is minted as a unique NFT on Solana with built-in metadata and transfer controls.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Shield className="h-10 w-10 text-teal-600" />
              </div>
              <div className="w-8 h-1 bg-teal-600 rounded mx-auto mb-4"></div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Controlled Resale Window</h3>
              <p className="font-roboto text-gray-600">
                Smart contracts enforce price caps and resale windows, preventing scalping while allowing fair transfers.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Users className="h-10 w-10 text-teal-600" />
              </div>
              <div className="w-8 h-1 bg-teal-600 rounded mx-auto mb-4"></div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Verified Entry</h3>
              <p className="font-roboto text-gray-600">
                Attendees enter with their wallet or our mobile app. No fraud, no fakes, no hassle.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/how-it-works"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105"
            >
              Learn More About Our Technology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Organizer Features */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
                Complete control for organizers.
              </h2>
              <p className="font-roboto text-xl text-gray-600 mb-8">
                Our SaaS dashboard gives you full control over your event ticketing with enterprise-grade features and analytics.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Dynamic Pricing Controls</h3>
                    <p className="font-roboto text-gray-600">Set tier pricing, early bird discounts, and maximum resale caps.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Real-time Analytics</h3>
                    <p className="font-roboto text-gray-600">Track sales, demographics, and secondary market activity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Anti-Bot Protection</h3>
                    <p className="font-roboto text-gray-600">Built-in CAPTCHA and velocity limits stop automated purchases.</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/for-organizers"
                className="inline-flex items-center border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-lg font-roboto font-medium transition-all"
              >
                Explore Organizer Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-inter font-semibold text-lg text-navy-900">Event Dashboard</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">2,847</div>
                    <div className="text-sm text-gray-600">Tickets Sold</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-navy-800">$142k</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-800">96%</div>
                    <div className="text-sm text-gray-600">Capacity</div>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-teal-100 to-navy-100 rounded-lg flex items-end p-4">
                  <div className="flex items-end space-x-2 w-full">
                    <div className="bg-teal-500 w-4 h-8 rounded-t"></div>
                    <div className="bg-teal-500 w-4 h-12 rounded-t"></div>
                    <div className="bg-teal-500 w-4 h-16 rounded-t"></div>
                    <div className="bg-teal-500 w-4 h-20 rounded-t"></div>
                    <div className="bg-teal-600 w-4 h-24 rounded-t"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-teal-50 to-navy-50 p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="w-24 h-32 bg-white rounded-lg shadow-lg mx-auto mb-4 p-4">
                    <div className="w-full h-4 bg-teal-600 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="w-full h-2 bg-gray-300 rounded mb-4"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-teal-400 rounded-lg mx-auto"></div>
                  </div>
                  <h3 className="font-inter font-semibold text-lg text-navy-900">Your Ticket NFT</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Event:</span>
                    <div className="font-medium">Summer Festival</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Date:</span>
                    <div className="font-medium">Aug 15, 2024</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Seat:</span>
                    <div className="font-medium">GA Floor</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Price:</span>
                    <div className="font-medium text-teal-600">$89.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
                Own your ticket. Keep the memories.
              </h2>
              <p className="font-roboto text-xl text-gray-600 mb-8">
                Your ticket becomes a collectible NFT with exclusive artwork and post-event benefits. No more paper stubs—digital ownership that lasts forever.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Collectible Artwork</h3>
                    <p className="font-roboto text-gray-600">Each ticket features unique artwork that becomes yours forever.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Post-Event Benefits</h3>
                    <p className="font-roboto text-gray-600">Access exclusive content, discounts, and early access to future events.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Verified Attendance</h3>
                    <p className="font-roboto text-gray-600">Prove you were there with blockchain-verified attendance records.</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/for-fans"
                className="inline-flex items-center border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-lg font-roboto font-medium transition-all"
              >
                Explore Fan Benefits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Web3 Onboarding Made Simple */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Web3 onboarding made simple.
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              You don't need to understand blockchain to use OpenTicket. Pay with credit card, Apple Pay, or Google Pay—we handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Familiar Payments</h3>
              <p className="font-roboto text-gray-600">
                Credit card, Apple Pay, Google Pay, or PayPal. No cryptocurrency required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">No Gas Fees</h3>
              <p className="font-roboto text-gray-600">
                We cover all blockchain transaction fees. The price you see is the price you pay.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Custodial Option</h3>
              <p className="font-roboto text-gray-600">
                We can hold your NFT tickets for you, or you can use your own wallet. Your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VC Competence Signals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Built for scale and security.
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure with the performance and compliance features you need.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Security Audited</h3>
              <p className="font-roboto text-gray-600 text-sm">Smart contracts audited by leading security firms</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Solana Speed</h3>
              <p className="font-roboto text-gray-600 text-sm">Sub-second transactions with minimal fees</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Compliant</h3>
              <p className="font-roboto text-gray-600 text-sm">SOC 2 Type II and GDPR compliant infrastructure</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Scalable</h3>
              <p className="font-roboto text-gray-600 text-sm">Handle millions of tickets for the largest events</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/investors"
              className="inline-flex items-center bg-navy-800 hover:bg-navy-900 text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105"
            >
              Learn About Our Technology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl text-white mb-6">
            Ready to revolutionize your ticketing?
          </h2>
          <p className="font-roboto text-xl text-teal-100 mb-8">
            Join the future of event ticketing with transparent pricing, anti-scalping controls, and fan ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
              Request Demo
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;