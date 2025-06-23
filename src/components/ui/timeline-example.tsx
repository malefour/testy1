import React from 'react';
import { Timeline } from './timeline';
import { TrendingUp, Users, Globe, Shield } from 'lucide-react';

export function TimelineExample() {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Launched OpenTicket platform with blockchain-powered ticketing solution
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-navy-50 p-6 rounded-lg">
              <TrendingUp className="h-8 w-8 text-teal-600 mb-3" />
              <h4 className="font-semibold text-navy-900 mb-2">Market Growth</h4>
              <p className="text-sm text-gray-600">$85B global ticketing market</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-navy-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-navy-900 mb-2">User Base</h4>
              <p className="text-sm text-gray-600">2.8B tickets sold yearly</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed core technology stack and secured initial partnerships
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Solana blockchain integration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Smart contract development</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Venue partnership agreements</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Founded OpenTicket with vision to revolutionize ticketing industry
          </p>
          <div className="bg-gradient-to-r from-navy-50 to-teal-50 p-6 rounded-lg">
            <Globe className="h-8 w-8 text-navy-600 mb-3" />
            <h4 className="font-semibold text-navy-900 mb-2">Mission</h4>
            <p className="text-sm text-gray-600">
              Eliminate scalping, reduce fees, and create transparent ticketing for fans and organizers
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Timeline data={timelineData} />
    </div>
  );
} 