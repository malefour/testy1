import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is OpenTicket?",
        answer: "OpenTicket is a blockchain-based ticketing platform that issues NFT tickets on Solana. We eliminate scalping through smart contract controls while providing fans with collectible tickets and organizers with transparent pricing."
      },
      {
        question: "How is this different from traditional ticketing?",
        answer: "Unlike traditional platforms, OpenTicket uses blockchain technology to create verifiable, fraud-proof tickets with built-in anti-scalping controls. Every ticket is an NFT that fans truly own, and smart contracts enforce fair pricing automatically."
      },
      {
        question: "Do I need to understand cryptocurrency to use OpenTicket?",
        answer: "Not at all! You can pay with credit card, Apple Pay, or Google Pay just like any other online purchase. We handle all the blockchain complexity behind the scenes, and you can choose to have us hold your NFT tickets for you."
      }
    ]
  },
  {
    category: "For Fans",
    questions: [
      {
        question: "How do I buy tickets on OpenTicket?",
        answer: "Buying tickets is simple: browse events, select your tickets, and pay with your preferred method (credit card, Apple Pay, etc.). Your tickets are automatically minted as NFTs and stored securely. No crypto knowledge required!"
      },
      {
        question: "What happens to my ticket after the event?",
        answer: "Your ticket becomes a collectible NFT with exclusive artwork that you own forever. You'll also get access to post-event benefits like exclusive content, early access to future events, and special merchandise offers."
      },
      {
        question: "Can I resell my tickets?",
        answer: "Yes, but only within the rules set by the event organizer. Smart contracts enforce price caps (typically 110-120% of face value) and transfer windows to prevent scalping while allowing legitimate resales."
      },
      {
        question: "How do I enter the venue with an NFT ticket?",
        answer: "Entry is easy! Use our mobile app to display your ticket QR code, or connect your wallet for verification. The venue staff can instantly verify your ticket's authenticity on the blockchain."
      }
    ]
  },
  {
    category: "For Organizers",
    questions: [
      {
        question: "How much does OpenTicket cost?",
        answer: "OpenTicket charges a simple, transparent fee: 2% per ticket plus a $0.30 transaction fee. There are no setup fees, no monthly minimums, and no hidden costs. All blockchain transaction fees are included, so you and your customers never pay extra."
      },
      {
        question: "How do you prevent scalping?",
        answer: "We use multiple layers: smart contracts enforce price caps and transfer windows, bot detection prevents automated purchases, and optional identity verification stops fake accounts. These controls are built into the blockchain and can't be bypassed."
      },
      {
        question: "Can I customize the ticket design?",
        answer: "Absolutely! Professional and Enterprise plans include custom NFT artwork. We work with talented digital artists to create unique designs that reflect your event's brand and personality."
      },
      {
        question: "How quickly do I receive payments?",
        answer: "Payments are processed instantly via Solana blockchain with automatic currency conversion. You receive funds immediately after each sale, not weeks later like traditional platforms."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "Why did you choose Solana over Ethereum?",
        answer: "Solana offers 400ms block times, 65,000 TPS capacity, and sub-$0.01 transaction fees. This makes it the only blockchain capable of handling mass-market ticketing without network congestion or prohibitive costs."
      },
      {
        question: "Are the smart contracts audited?",
        answer: "Yes, our smart contracts have been audited by leading security firms including Trail of Bits. We follow best practices for smart contract security and maintain SOC 2 Type II compliance for our infrastructure."
      },
      {
        question: "What happens if Solana goes down?",
        answer: "Solana has 99.9%+ uptime, but we also maintain backup systems. Your tickets are permanently stored on the blockchain, and we have contingency plans including offline verification methods for venue entry."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes! We offer API-first architecture with comprehensive documentation. Our Enterprise plan includes custom integrations with your existing ticketing, CRM, and marketing systems."
      }
    ]
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        question: "How secure are NFT tickets?",
        answer: "NFT tickets are extremely secure. Each ticket is cryptographically signed and stored on the Solana blockchain, making them impossible to counterfeit. The blockchain provides an immutable record of ownership and transfers."
      },
      {
        question: "What about data privacy?",
        answer: "We're GDPR compliant and follow strict data protection standards. Personal information is encrypted and stored securely, and we only collect data necessary for ticket verification and customer service."
      },
      {
        question: "Are you regulated as a financial service?",
        answer: "We work closely with regulators and legal experts to ensure compliance. Our NFT tickets are utility tokens for event access, not securities. We maintain proper licensing in all jurisdictions where we operate."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50 dark:from-navy-950 dark:to-teal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-roboto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Everything you need to know about OpenTicket, blockchain ticketing, and NFT collectibles.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-inter font-bold text-2xl text-navy-900 dark:text-white mb-8 pb-4 border-b-2 border-teal-600 dark:border-teal-400">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50 dark:bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl text-navy-900 dark:text-white mb-6">
            Still have questions?
          </h2>
          <p className="font-roboto text-xl text-gray-600 dark:text-gray-300 mb-8">
            Our team is here to help. Get in touch and we'll answer any questions about OpenTicket.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 dark:text-white mb-2">Live Chat</h3>
              <p className="font-roboto text-gray-600 dark:text-gray-300 text-sm mb-4">
                Chat with our support team in real-time
              </p>
              <button className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-roboto font-medium text-sm">
                Start Chat →
              </button>
            </div>
            <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 dark:text-white mb-2">Email Us</h3>
              <p className="font-roboto text-gray-600 dark:text-gray-300 text-sm mb-4">
                Send us an email and we'll get back to you within 24 hours
              </p>
              <button className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-roboto font-medium text-sm">
                Email Support →
              </button>
            </div>
            <div className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 dark:text-white mb-2">Call Us</h3>
              <p className="font-roboto text-gray-600 dark:text-gray-300 text-sm mb-4">
                Prefer to talk? Call our support line for immediate help
              </p>
              <button className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-roboto font-medium text-sm">
                Call Support →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;