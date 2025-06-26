import React from 'react';
import { Shield, Clock, History, UserCheck, Gift, Gavel, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    icon: <Clock className="h-7 w-7 text-teal-600" />, 
    title: 'Delay Transferability Until Near the Event',
    desc: (
      <>
        Tickets are non-transferable until 48–72 hours before the event.<br/>
        <span className="text-gray-500 text-sm">This makes off-chain deals riskier: buyer/seller trust breaks down, and there's no time for recovery if a deal goes wrong.</span><br/>
        <span className="text-green-600 font-medium">Reduces trust in unverified side deals.</span>
      </>
    )
  },
  {
    icon: <History className="h-7 w-7 text-blue-600" />, 
    title: 'On-Chain Resale History Marking',
    desc: (
      <>
        Every resale is logged transparently: original wallet, timestamp, amount. Suspicious transfers near the event get flagged. Buyers get warnings if a ticket comes from a flagged address.<br/>
        <span className="text-green-600 font-medium">Encourages fully transparent ownership history.</span>
      </>
    )
  },
  {
    icon: <UserCheck className="h-7 w-7 text-purple-600" />, 
    title: 'Redemption-Level Binding',
    desc: (
      <>
        Organizers or artists may optionally bind ticket redemption to email login, phone number match, or selfie/ID verification. Identity is not needed at purchase, only at entry.<br/>
        <span className="text-green-600 font-medium">Breaks resale value for unofficial buyers.</span>
      </>
    )
  },
  {
    icon: <Gift className="h-7 w-7 text-yellow-600" />, 
    title: 'Official Channel Incentives',
    desc: (
      <>
        Users who buy and resell via OpenTicket get loyalty airdrops, post-event NFT perks, and future discounts. These are only valid if the ticket stayed on-platform.<br/>
        <span className="text-green-600 font-medium">Makes off-chain purchases less attractive.</span>
      </>
    )
  },
  {
    icon: <Gavel className="h-7 w-7 text-red-600" />, 
    title: 'Terms & Community Enforcement',
    desc: (
      <>
        Terms of use make off-platform resale void. Users can report side listings (e.g. eBay screenshots). Artists and venues commit to verifying only official resales.<br/>
        <span className="text-green-600 font-medium">Shifts community norms and legal framing.</span>
      </>
    )
  },
];

export default function AntiScalping() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-navy-900 mb-4">Anti-Scalping Technology</h1>
      <p className="text-lg text-gray-700 mb-8">
        Even with smart contract-enforced price caps and transfer restrictions, users could theoretically make off-chain deals:
        <span className="block italic text-gray-500 mt-2 mb-2">"Send me £100 via bank transfer, then buy the ticket from me on OpenTicket at face value."</span>
        This is a coordination loophole, not a smart contract flaw. It undermines the platform's goals of fairness and transparency.
      </p>
      <div className="space-y-8">
        {STEPS.map((step, i) => (
          <div key={i} className="flex items-start space-x-4 bg-white rounded-xl shadow-md p-6">
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <div className="text-gray-700 text-base">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <div className="text-xl font-semibold text-navy-900 mb-2">Bottom Line</div>
        <p className="text-gray-700 mb-6">
          OpenTicket's approach to anti-scalping goes far beyond price caps — it combines smart contract logic, user behavior incentives, and real-world enforcement to protect fair access for fans and revenue for organizers.
        </p>
        <Link to="/contact" className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-all">
          Want to know how this affects your next event? <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
} 