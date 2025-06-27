import React from 'react';

const TermsOfService = () => (
  <div className="pt-16 max-w-3xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
    {/* 1. Introduction */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
      <p>This is a binding agreement. Last updated: [date]</p>
    </section>
    {/* 2. Eligibility */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Eligibility</h2>
      <ul className="list-disc ml-6">
        <li>Age limit</li>
        <li>Regions of access</li>
      </ul>
    </section>
    {/* 3. Platform Use */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Platform Use</h2>
      <ul className="list-disc ml-6">
        <li>Fair resale conditions</li>
        <li>Use of APIs and ticket scanning</li>
      </ul>
    </section>
    {/* 4. Prohibited Use */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Prohibited Use</h2>
      <ul className="list-disc ml-6">
        <li>Scalping attempts, automation, resale via external platforms</li>
      </ul>
    </section>
    {/* 5. Account Termination */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Account Termination</h2>
      <ul className="list-disc ml-6">
        <li>If fraud or violations occur</li>
      </ul>
    </section>
    {/* 6. Liability Disclaimer */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Liability Disclaimer</h2>
      <ul className="list-disc ml-6">
        <li>No responsibility for third-party event failures</li>
        <li>"Best-effort" on scanning hardware/software reliability</li>
      </ul>
    </section>
    {/* 7. Changes to These Terms */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Changes to These Terms</h2>
      <p>How/when users are notified. Version control dropdown planned.</p>
    </section>
  </div>
);

export default TermsOfService; 