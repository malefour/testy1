import React from 'react';

const Careers = () => (
  <div className="pt-16 max-w-3xl mx-auto px-4">
    {/* 1. Hero Header */}
    <section className="text-center my-12">
      <h1 className="text-4xl font-bold mb-2 animate-pulse">Build the future of ticketing</h1>
      <p className="text-lg mb-4">Join a team redefining access, fairness, and transparency in events.</p>
      <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold">See Open Roles</button>
      {/* UI: Animated headline shuffle planned */}
    </section>
    {/* 2. Our Mission */}
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p>We believe in a world where ticketing is fair, transparent, and accessible to all. OpenTicket is building the rails for the next generation of live events.</p>
      <blockquote className="italic text-gray-600 mt-2">“We're not just selling tickets, we're building trust.” – Founder</blockquote>
    </section>
    {/* 3. Why Join Us */}
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-2">Why Join Us</h2>
      <ul className="list-disc ml-6 mb-2">
        <li>Transparency</li>
        <li>Speed</li>
        <li>Fairness</li>
        <li>Dev-first mindset</li>
        <li>Early employee equity promise</li>
        <li>Remote-first</li>
      </ul>
      {/* UI: Card flip/hover perks planned */}
    </section>
    {/* 4. Our Stack */}
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-2">Our Stack</h2>
      <p>Solana, Token-2022, TypeScript, NestJS, Postgres. We value product and design talent as much as engineering.</p>
    </section>
    {/* 5. Open Roles */}
    <section className="my-8 text-center">
      <h2 className="text-2xl font-semibold mb-2">Open Roles (Coming Soon)</h2>
      <p>We're not hiring yet — but we'd love to know you.</p>
      <a href="mailto:hello@openticket.com" className="text-teal-600 underline">Send your interest → hello@openticket.com</a>
    </section>
  </div>
);

export default Careers; 