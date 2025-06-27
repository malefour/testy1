import React from 'react';

const APIReference = () => (
  <div className="pt-16 max-w-3xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8">API Reference</h1>
    {/* 1. Authentication */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Authentication</h2>
      <ul className="list-disc ml-6">
        <li>API key format</li>
        <li>Wallet-based auth (if needed)</li>
      </ul>
    </section>
    {/* 2. Ticketing Endpoints */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Ticketing Endpoints</h2>
      <ul className="list-disc ml-6">
        <li>Create event</li>
        <li>Mint ticket(s)</li>
        <li>Lock/unlock ticket</li>
        <li>Validate QR</li>
        <li>Burn or mark as used</li>
      </ul>
      {/* UI: Live try-it box planned */}
    </section>
    {/* 3. Resale Endpoints */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Resale Endpoints</h2>
      <ul className="list-disc ml-6">
        <li>List ticket</li>
        <li>Fetch price caps</li>
        <li>Enforce cap on sale</li>
      </ul>
    </section>
    {/* 4. Event Management */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Event Management</h2>
      <ul className="list-disc ml-6">
        <li>Fetch all events</li>
        <li>Update metadata (art, perks)</li>
        <li>View sales/resales</li>
      </ul>
    </section>
    {/* 5. Webhook/Event Triggers */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Webhook/Event Triggers</h2>
      <ul className="list-disc ml-6">
        <li>Ticket scanned</li>
        <li>Transfer attempt</li>
        <li>Resale completed</li>
      </ul>
      {/* UI: Toggle for example payloads planned */}
    </section>
  </div>
);

export default APIReference; 