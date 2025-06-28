import React from 'react';
import { Timeline } from './timeline';

const timelineData = [
  {
    title: "Q1 2024",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        <p>Launch of OpenTicket platform with basic NFT ticketing functionality.</p>
        <p>Integration with Solana blockchain for fast, low-cost transactions.</p>
      </div>
    )
  },
  {
    title: "Q2 2024",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        <p>Advanced anti-scalping features and smart contract controls.</p>
        <p>Mobile app for ticket verification and entry.</p>
      </div>
    )
  },
  {
    title: "Q3 2024",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        <p>White-label solutions for enterprise clients.</p>
        <p>Advanced analytics and reporting dashboard.</p>
      </div>
    )
  },
  {
    title: "Q4 2024",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        <p>Global expansion and multi-chain support.</p>
        <p>Advanced collectible features and marketplace integration.</p>
      </div>
    )
  }
];

export const TimelineDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-teal-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            Timeline Demo
          </h1>
          <p className="font-roboto text-xl text-gray-600">
            See how our timeline component works
          </p>
        </div>
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}; 