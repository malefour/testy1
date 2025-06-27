import React from 'react';

const PrivacyPolicy = () => (
  <div className="pt-16 max-w-3xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
    {/* 1. What We Collect */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">What We Collect</h2>
      <ul className="list-disc ml-6">
        <li>Email (for wallet onboarding)</li>
        <li>Purchase info</li>
        <li>Metadata from ticket usage</li>
      </ul>
    </section>
    {/* 2. How We Use It */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">How We Use It</h2>
      <ul className="list-disc ml-6">
        <li>Improve platform</li>
        <li>Send updates / airdrops (if opted in)</li>
      </ul>
    </section>
    {/* 3. Storage & Security */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Storage & Security</h2>
      <ul className="list-disc ml-6">
        <li>Encryption policy</li>
        <li>How long we store user data</li>
      </ul>
    </section>
    {/* 4. Third Parties */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Third Parties</h2>
      <ul className="list-disc ml-6">
        <li>Wallet providers (e.g. Web3Auth)</li>
        <li>Payment processors</li>
      </ul>
    </section>
    {/* 5. User Rights */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">User Rights</h2>
      <ul className="list-disc ml-6">
        <li>How to request deletion</li>
        <li>Opt-out instructions</li>
      </ul>
      {/* UI: FAQ-style dropdowns planned */}
    </section>
  </div>
);

export default PrivacyPolicy; 