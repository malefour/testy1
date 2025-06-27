import React from 'react';

const Security = () => (
  <div className="pt-16 max-w-3xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8">Security</h1>
    {/* 1. Philosophy */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Philosophy</h2>
      <p>“Fans first, fraud nowhere.” Our approach is to put users first and eliminate fraud at every layer.</p>
    </section>
    {/* 2. On-chain Security */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">On-chain Security</h2>
      <ul className="list-disc ml-6">
        <li>NFT immutability</li>
        <li>Transfer rule enforcement via Token-2022 / smart contract</li>
      </ul>
    </section>
    {/* 3. Ticket Validation Flow */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Ticket Validation Flow</h2>
      <p>QR scanning verifies real ownership and prevents replays/duplicates. Animated flow diagram planned.</p>
    </section>
    {/* 4. Infrastructure Security */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Infrastructure Security</h2>
      <ul className="list-disc ml-6">
        <li>Backend hosting security</li>
        <li>Rate limiting and DDoS protection</li>
        <li>Authentication/token handling</li>
      </ul>
    </section>
    {/* 5. Audits */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Audits</h2>
      <ul className="list-disc ml-6">
        <li>Smart contract audit partners</li>
        <li>Bug bounty / responsible disclosure program (if available)</li>
      </ul>
    </section>
  </div>
);

export default Security; 