import React from 'react';
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-inter font-bold text-5xl lg:text-6xl text-navy-900 mb-6 leading-tight">
            Ticketing. Owned, fair,<br />
            <span className="text-teal-600">and fraud-proof.</span>
          </h1>
          <p className="font-inter text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            OpenTicket issues NFT-based event tickets on Solana. Transparent pricing. No scalping. Real ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-soft-lg group relative overflow-hidden">
              <span className="relative z-10">Request Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-soft flex items-center justify-center group">
              Learn How It Works
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-600/10 rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-navy-900/10 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}; 