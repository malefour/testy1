import React from 'react';

const Documentation = () => (
  <div className="pt-16 max-w-3xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8">Documentation</h1>
    {/* 1. Intro & Overview */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Intro & Overview</h2>
      <p>OpenTicket lets you issue tickets, verify ownership, and manage events via API.</p>
    </section>
    {/* 2. Quick Start */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Quick Start</h2>
      <ul className="list-disc ml-6">
        <li>Set up Solana wallet</li>
        <li>Get API key (if applicable)</li>
        <li>Mint first ticket</li>
        <li>Sample CLI/JS example</li>
      </ul>
      {/* UI: Tabbed code blocks planned */}
    </section>
    {/* 3. Ticket Lifecycle */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Ticket Lifecycle</h2>
      <p>Mint → Lock → Unlock → Resell → Use. Interactive timeline coming soon.</p>
    </section>
    {/* 4. How Rules Work */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">How Rules Work</h2>
      <ul className="list-disc ml-6">
        <li>Transfer caps</li>
        <li>Unlock conditions</li>
        <li>Price limits</li>
        <li>Programmable resale enforcement</li>
      </ul>
    </section>
    {/* 5. Smart Contract Reference */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Smart Contract Reference</h2>
      <p>Methods, hooks, and accounts for direct program calls.</p>
    </section>
    {/* 6. Best Practices */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Best Practices</h2>
      <ul className="list-disc ml-6">
        <li>Avoid NFT misuse</li>
        <li>Ensure fast QR validation</li>
        <li>Tips for large event optimization</li>
      </ul>
    </section>
    {/* 7. Sandbox / Devnet Tools */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Sandbox / Devnet Tools</h2>
      <p>Devnet faucet and event simulator coming soon.</p>
    </section>
  </div>
);

export default Documentation; 