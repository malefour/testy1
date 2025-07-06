import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, TrendingUp, Zap, Check, Star, Award, Building2 } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-gray-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-inter font-bold text-5xl lg:text-6xl text-navy-900 mb-6 leading-tight animate-slide-up">
            A ticketing platform<br />
              <span className="text-teal-600">For fans, not bots.</span>
            </h1>
            <p className="font-inter text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-stagger-1">
            Transparent ticket sales with bespoke resale limits and fraud prevention. <br /> All without sacrificing user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-stagger-2">
              <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-soft-lg group relative overflow-hidden">
                <span className="relative z-10">Request Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <Link 
                to="/how-it-works"
                className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-soft flex items-center justify-center group"
              >
                Learn How It Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-600/10 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-navy-900/10 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-inter text-gray-500 text-sm uppercase tracking-wide mb-8 font-medium">Trusted by Leading Organizations</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* Placeholder logos */}
              <div className="flex items-center justify-center group hover:opacity-100 transition-opacity duration-300">
                <Building2 className="h-8 w-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                <span className="ml-2 font-inter font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300">EventCorp</span>
              </div>
              <div className="flex items-center justify-center group hover:opacity-100 transition-opacity duration-300">
                <Award className="h-8 w-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                <span className="ml-2 font-inter font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300">VenuePro</span>
              </div>
              <div className="flex items-center justify-center group hover:opacity-100 transition-opacity duration-300">
                <Star className="h-8 w-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                <span className="ml-2 font-inter font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300">FestivalMax</span>
              </div>
              <div className="flex items-center justify-center group hover:opacity-100 transition-opacity duration-300">
                <Users className="h-8 w-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                <span className="ml-2 font-inter font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300">ShowTime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Flow */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
              The ticketing industry is broken.
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Fans pay inflated prices, organizers lose revenue, and scalpers profit from artificial scarcity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-200 hover:shadow-soft-lg transition-all duration-300 hover:scale-102 group">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">Scalping Crisis</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Bots buy tickets instantly, reselling at 10x+ prices while real fans are locked out.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-200 hover:shadow-soft-lg transition-all duration-300 hover:scale-102 group">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">Fake Tickets</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Counterfeit tickets leave fans stranded at venue gates with no recourse.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-200 hover:shadow-soft-lg transition-all duration-300 hover:scale-102 group">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">Hidden Fees</h3>
              <p className="font-inter text-gray-600 leading-relaxed">Opaque pricing with surprise charges that can double the ticket cost at checkout.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-inter font-semibold mb-8 shadow-soft">
              Learn how we're combatting this
            </div>
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
              Built for transparency and fairness.
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Every ticket is an NFT with built-in anti-scalping controls, transparent pricing, and verified authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works (Mini Version) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
              How OpenTicket Works
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to revolutionize your ticketing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-teal-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                <Zap className="h-10 w-10 text-teal-600" />
              </div>
              <div className="w-12 h-1 bg-teal-600 rounded mx-auto mb-6"></div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">Tickets Minted as NFTs</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Each ticket is minted as a unique NFT on Solana with built-in metadata and transfer controls.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-teal-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                <Shield className="h-10 w-10 text-teal-600" />
              </div>
              <div className="w-12 h-1 bg-teal-600 rounded mx-auto mb-6"></div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">Controlled Resale Window</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Smart contracts enforce price caps and resale windows, preventing scalping while allowing fair transfers.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-teal-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                <Users className="h-10 w-10 text-teal-600" />
              </div>
              <div className="w-12 h-1 bg-teal-600 rounded mx-auto mb-6"></div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">Verified Entry</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Attendees enter with their wallet or our mobile app. No fraud, no fakes, no hassle.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/how-it-works"
              className="inline-flex items-center bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-soft-lg group"
            >
              Learn More About Our Technology
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Organizer Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-inter font-bold text-4xl text-navy-900 mb-8">
                Complete control for organizers.
              </h2>
              <p className="font-inter text-xl text-gray-600 mb-10 leading-relaxed">
                Our SaaS dashboard gives you full control over your event ticketing with enterprise-grade features and analytics.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start group">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-inter font-semibold text-navy-900 mb-1">Dynamic Pricing Controls</h3>
                    <p className="font-inter text-gray-600">Set tier pricing, early bird discounts, and maximum resale caps.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-inter font-semibold text-navy-900 mb-1">Real-time Analytics</h3>
                    <p className="font-inter text-gray-600">Track sales, demographics, and secondary market activity.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-inter font-semibold text-navy-900 mb-1">Bespoke ticket releases</h3>
                    <p className="font-inter text-gray-600">Automatically release tickets ant certain intervals and set up custom ticket airdrops</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/for-organizers"
                className="inline-flex items-center border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-xl font-inter font-semibold transition-all duration-300 transform hover:scale-105 group"
              >
                Explore Organizer Features
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft-lg border border-gray-200 hover:shadow-soft-lg transition-all duration-300">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-inter font-bold text-lg text-navy-900">Event Dashboard</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-300 group">
                    <div className="text-2xl font-bold text-teal-600 group-hover:scale-105 transition-transform duration-300">2,847</div>
                    <div className="text-sm text-gray-600 font-medium">Tickets Sold</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl hover:bg-navy-50 transition-colors duration-300 group">
                    <div className="text-2xl font-bold text-navy-900 group-hover:scale-105 transition-transform duration-300">$142k</div>
                    <div className="text-sm text-gray-600 font-medium">Revenue</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <div className="text-2xl font-bold text-gray-800 group-hover:scale-105 transition-transform duration-300">96%</div>
                    <div className="text-sm text-gray-600 font-medium">Capacity</div>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-teal-50 to-navy-50 rounded-xl flex items-end p-4">
                  <div className="flex items-end space-x-2 w-full">
                    <div className="bg-teal-500 w-4 h-8 rounded-t hover:h-10 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-16 rounded-t hover:h-14 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-20 rounded-t hover:h-18 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-16 rounded-t hover:h-22 transition-all duration-300"></div>
                    <div className="bg-teal-600 w-4 h-24 rounded-t hover:h-26 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-16 rounded-t hover:h-10 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-12 rounded-t hover:h-14 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-20 rounded-t hover:h-18 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-16 rounded-t hover:h-22 transition-all duration-300"></div>
                    <div className="bg-teal-600 w-4 h-20 rounded-t hover:h-26 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-24 rounded-t hover:h-10 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-16 rounded-t hover:h-14 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-10 rounded-t hover:h-18 transition-all duration-300"></div>
                    <div className="bg-teal-500 w-4 h-16 rounded-t hover:h-22 transition-all duration-300"></div>
                    <div className="bg-teal-600 w-4 h-24 rounded-t hover:h-26 transition-all duration-300"></div>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Experience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-teal-50 to-navy-50 p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 group">
                <div className="text-center mb-8">
                  <div className="w-24 h-32 bg-white rounded-xl shadow-soft mx-auto mb-6 p-4 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <div className="w-full h-4 bg-gradient-to-r from-teal-600 to-teal-500 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="w-full h-2 bg-gray-300 rounded mb-4"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-teal-400 rounded-xl mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <h3 className="font-inter font-bold text-lg text-navy-900">Your Ticket NFT</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 font-medium">Event:</span>
                    <div className="font-semibold text-navy-900">Summer Festival</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Date:</span>
                    <div className="font-semibold text-navy-900">Aug 15, 2024</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Seat:</span>
                    <div className="font-semibold text-navy-900">GA Floor</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Price:</span>
                    <div className="font-semibold text-teal-600">$89.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-inter font-bold text-4xl text-navy-900 mb-8">
                Own your ticket. Keep the memories.
              </h2>
              <p className="font-inter text-xl text-gray-600 mb-10 leading-relaxed">
                Your ticket becomes a collectible NFT with exclusive artwork and post-event benefits. No more paper stubs—digital ownership that lasts forever.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start group">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-inter font-semibold text-navy-900 mb-1">Collectible Artwork</h3>
                    <p className="font-inter text-gray-600">Each ticket features unique artwork that becomes yours forever.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-inter font-semibold text-navy-900 mb-1">Post-Event Benefits</h3>
                    <p className="font-inter text-gray-600">Access exclusive content, discounts, and early access to future events.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Check className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-inter font-semibold text-navy-900 mb-1">Verified Attendance</h3>
                    <p className="font-inter text-gray-600">Prove you were there with blockchain-verified attendance records.</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/for-fans"
                className="inline-flex items-center border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-xl font-inter font-semibold transition-all duration-300 transform hover:scale-105 group"
              >
                Explore Fan Benefits
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Web3 Onboarding Made Simple */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
              Web3 onboarding made simple.
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              You don't need to understand blockchain to use OpenTicket. Pay with credit card, Apple Pay, or Google Pay—we handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-200 text-center hover:shadow-soft-lg transition-all duration-300 hover:scale-102 group">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-teal-100 transition-colors duration-300">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">Familiar Payments</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Credit card, Apple Pay, Google Pay, or PayPal. No cryptocurrency required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-200 text-center hover:shadow-soft-lg transition-all duration-300 hover:scale-102 group">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-teal-100 transition-colors duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">No Gas Fees</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                We cover all blockchain transaction fees. The price you see is the price you pay.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-200 text-center hover:shadow-soft-lg transition-all duration-300 hover:scale-102 group">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-teal-100 transition-colors duration-300">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-inter font-bold text-xl text-navy-900 mb-4">Custodial Option</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                We can hold your NFT tickets for you, or you can use your own wallet. Your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VC Competence Signals */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
              Built for scale and security.
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure with the performance and compliance features you need.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-all duration-300 group-hover:scale-110">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-inter font-bold text-lg text-navy-900 mb-3">Security Audited</h3>
              <p className="font-inter text-gray-600 text-sm leading-relaxed">Smart contracts audited by leading security firms</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-inter font-bold text-lg text-navy-900 mb-3">Solana Speed</h3>
              <p className="font-inter text-gray-600 text-sm leading-relaxed">Sub-second transactions with minimal fees - issue thousands of tickets easily</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 transition-all duration-300 group-hover:scale-110">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-inter font-bold text-lg text-navy-900 mb-3">Compliant</h3>
              <p className="font-inter text-gray-600 text-sm leading-relaxed">We're working on SOC 2 Type II and GDPR compliant infrastructure</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100 transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-inter font-bold text-lg text-navy-900 mb-3">Scalable</h3>
              <p className="font-inter text-gray-600 text-sm leading-relaxed">Handle millions of tickets for the largest events</p>
            </div>
          </div>

          {/* Solana Badge */}
          <div className="flex justify-center">
            <div className="bg-gray-50 px-6 py-3 rounded-full border border-gray-200 flex items-center space-x-3 hover:bg-gray-100 transition-colors duration-300">
              <span className="font-inter text-gray-600 text-sm font-medium">Built on</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
                <span className="font-inter text-gray-700 text-sm font-semibold">Solana</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/how-it-works"
              className="inline-flex items-center bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-soft-lg group"
            >
              Learn About Our Technology
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-navy-900 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-teal-600/90"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl text-white mb-8">
            Ready to revolutionize your ticketing?
          </h2>
          <p className="font-inter text-xl text-white/90 mb-10 leading-relaxed">
            Join the future of event ticketing with transparent pricing, anti-scalping controls, and fan ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-soft-lg">
              Request Demo
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 group"
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