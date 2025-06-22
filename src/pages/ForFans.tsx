import React from 'react';
import { Heart, Shield, Smartphone, Award, Star, Gift } from 'lucide-react';

const ForFans = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            Built for Fans
          </h1>
          <p className="font-roboto text-xl text-gray-600 leading-relaxed">
            Fair prices, real ownership, and exclusive experiences that last forever.
          </p>
        </div>
      </section>

      {/* Fan Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <Heart className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Fair Pricing Always</h3>
              <p className="font-roboto text-gray-600">
                No more paying 10x face value to scalpers. Smart contracts enforce price caps so you pay what tickets are actually worth.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Guaranteed Authentic</h3>
              <p className="font-roboto text-gray-600">
                Every ticket is an NFT on the blockchain. No fakes, no counterfeits, no getting turned away at the gate.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Smartphone className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Easy to Use</h3>
              <p className="font-roboto text-gray-600">
                Pay with credit card, Apple Pay, or Google Pay. We handle all the blockchain complexity behind the scenes.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Own Your Memories</h3>
              <p className="font-roboto text-gray-600">
                Your ticket becomes a collectible NFT with exclusive artwork. Keep the memory of amazing events forever.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Exclusive Access</h3>
              <p className="font-roboto text-gray-600">
                Ticket holders get special perks: early access to future events, exclusive content, and VIP experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Gift className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Post-Event Rewards</h3>
              <p className="font-roboto text-gray-600">
                Unlock special content, behind-the-scenes footage, and exclusive merchandise offers after the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Your Fan Journey
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              From purchase to post-event, every step is designed around your experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">1</div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-3">Fair Purchase</h3>
              <p className="font-roboto text-gray-600 text-sm">
                Buy tickets at face value with transparent pricing. No hidden fees, no bot competition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">2</div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-3">Secure Ownership</h3>
              <p className="font-roboto text-gray-600 text-sm">
                Your ticket NFT is stored securely in your wallet or our custodial system. You choose.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">3</div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-3">Seamless Entry</h3>
              <p className="font-roboto text-gray-600 text-sm">
                Show your ticket via mobile app or wallet. Quick verification, no paper needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">4</div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-3">Lasting Value</h3>
              <p className="font-roboto text-gray-600 text-sm">
                Keep your collectible ticket NFT and enjoy exclusive post-event benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collectible Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Turn Tickets into Treasures
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Every OpenTicket becomes a unique collectible NFT with exclusive artwork and lasting value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl text-center">
              <div className="w-32 h-40 bg-white rounded-lg shadow-lg mx-auto mb-6 p-4">
                <div className="w-full h-6 bg-purple-600 rounded mb-2"></div>
                <div className="text-xs text-gray-600 mb-4">Summer Music Festival</div>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto"></div>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Music Festival</h3>
              <p className="font-roboto text-gray-600 text-sm">Collectible design featuring festival artwork</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-8 rounded-2xl text-center">
              <div className="w-32 h-40 bg-white rounded-lg shadow-lg mx-auto mb-6 p-4">
                <div className="w-full h-6 bg-blue-600 rounded mb-2"></div>
                <div className="text-xs text-gray-600 mb-4">TechConf 2024</div>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg mx-auto"></div>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Conference</h3>
              <p className="font-roboto text-gray-600 text-sm">Professional design with networking perks</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-yellow-100 p-8 rounded-2xl text-center">
              <div className="w-32 h-40 bg-white rounded-lg shadow-lg mx-auto mb-6 p-4">
                <div className="w-full h-6 bg-green-600 rounded mb-2"></div>
                <div className="text-xs text-gray-600 mb-4">Sports Championship</div>
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg mx-auto"></div>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Sports Event</h3>
              <p className="font-roboto text-gray-600 text-sm">Commemorative design with team colors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fan Testimonials */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              What Fans Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">SM</span>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-navy-900">Sarah M.</h4>
                  <p className="font-roboto text-gray-600 text-sm">Music Festival Attendee</p>
                </div>
              </div>
              <blockquote className="font-roboto text-gray-700 italic">
                "Finally! I paid face value for tickets and didn't have to compete with bots. The NFT collectible is beautiful and I'll treasure it forever."
              </blockquote>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">MJ</span>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-navy-900">Mike J.</h4>
                  <p className="font-roboto text-gray-600 text-sm">Conference Attendee</p>
                </div>
              </div>
              <blockquote className="font-roboto text-gray-700 italic">
                "The entry process was seamless, and I love that I have a digital proof of attendance. The post-event content access is a great bonus!"
              </blockquote>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">AL</span>
                </div>
                <div>
                  <h4 className="font-inter font-medium text-navy-900">Alex L.</h4>
                  <p className="font-roboto text-gray-600 text-sm">Sports Fan</p>
                </div>
              </div>
              <blockquote className="font-roboto text-gray-700 italic">
                "I was skeptical about the blockchain stuff, but it was actually easier than traditional ticketing. And the collectible aspect is really cool."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl text-white mb-6">
            Ready for better ticketing?
          </h2>
          <p className="font-roboto text-xl text-teal-100 mb-8">
            Join thousands of fans who've discovered fair pricing, guaranteed authenticity, and lasting digital ownership.
          </p>
          <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
            Find Events Near You
          </button>
        </div>
      </section>
    </div>
  );
};

export default ForFans;