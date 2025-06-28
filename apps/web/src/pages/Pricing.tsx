import React, { useState } from 'react';
import { Check, X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Pricing = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "Pricing FAQ",
      questions: [
        {
          question: "Are there any setup fees or monthly minimums?",
          answer: "No setup fees, no monthly minimums. You only pay when you sell tickets. Our pricing is completely transparent and scales with your success."
        },
        {
          question: "Who pays the blockchain transaction fees?",
          answer: "We cover all blockchain transaction fees (gas fees) for you and your customers. The price you see is the price you pay—no surprise charges."
        },
        {
          question: "Can I change plans anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll pro-rate any differences."
        },
        {
          question: "What about refunds and chargebacks?",
          answer: "We handle standard refund policies and chargeback protection. Our smart contracts can automate refunds based on your event policies."
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes! Enterprise customers get custom pricing based on ticket volume and specific needs. Contact our sales team for a personalized quote."
        }
      ]
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="font-roboto text-xl text-gray-600 leading-relaxed">
            No hidden fees, no surprises. Choose the plan that fits your event size and needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-teal-300 transition-colors">
              <div className="text-center mb-8">
                <h3 className="font-inter font-bold text-2xl text-navy-900 mb-2">Starter</h3>
                <p className="font-roboto text-gray-600 mb-6">Perfect for small events and testing</p>
                <div className="mb-4">
                  <span className="font-inter font-bold text-4xl text-navy-900">2.5%</span>
                  <span className="font-roboto text-gray-600 ml-2">per ticket</span>
                </div>
                <p className="font-roboto text-sm text-gray-500">+ $0.30 transaction fee</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Up to 1,000 tickets per event</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Basic anti-scalping protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">NFT collectible tickets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Mobile app entry</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Email support</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-400">Advanced fraud protection</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-400">White-label customization</span>
                </li>
              </ul>

              <button className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-3 rounded-lg font-roboto font-medium transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional - Most Popular */}
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-600 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full font-roboto text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="font-inter font-bold text-2xl text-navy-900 mb-2">Professional</h3>
                <p className="font-roboto text-gray-600 mb-6">For growing events and venues</p>
                <div className="mb-4">
                  <span className="font-inter font-bold text-4xl text-navy-900">2%</span>
                  <span className="font-roboto text-gray-600 ml-2">per ticket</span>
                </div>
                <p className="font-roboto text-sm text-gray-500">+ $0.30 transaction fee</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Up to 25,000 tickets per event</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Advanced anti-scalping protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Custom NFT artwork</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Multiple entry methods</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Real-time analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Resale revenue sharing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">API access</span>
                </li>
              </ul>

              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-roboto font-medium transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-navy-300 transition-colors">
              <div className="text-center mb-8">
                <h3 className="font-inter font-bold text-2xl text-navy-900 mb-2">Enterprise</h3>
                <p className="font-roboto text-gray-600 mb-6">For large venues and festivals</p>
                <div className="mb-4">
                  <span className="font-inter font-bold text-4xl text-navy-900">Custom</span>
                </div>
                <p className="font-roboto text-sm text-gray-500">Volume pricing available</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Unlimited tickets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">White-label solution</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">24/7 phone support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">SLA guarantees</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Advanced reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="font-roboto text-gray-700">Custom smart contracts</span>
                </li>
              </ul>

              <button className="w-full border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white py-3 rounded-lg font-roboto font-medium transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Feature Comparison
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              See what's included in each plan to make the right choice for your events.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-inter font-bold text-navy-900">Features</th>
                    <th className="px-6 py-4 text-center font-inter font-bold text-navy-900">Starter</th>
                    <th className="px-6 py-4 text-center font-inter font-bold text-navy-900 bg-teal-50">Professional</th>
                    <th className="px-6 py-4 text-center font-inter font-bold text-navy-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">Monthly ticket limit</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700">1,000</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700 bg-teal-50">25,000</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">Transaction fee</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700">2.5% + $0.30</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700 bg-teal-50">2% + $0.30</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">Anti-scalping protection</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-teal-50"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">Secure resale</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-teal-50"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">Authenticity checks</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-teal-50"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">Custom NFT artwork</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-teal-50"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">API access</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-teal-50"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">White-label branding</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-teal-50"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-roboto text-gray-900">Dedicated support</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700">Email</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700 bg-teal-50">Priority</td>
                    <td className="px-6 py-4 text-center font-roboto text-gray-700">24/7 Phone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-inter font-bold text-2xl text-navy-900 mb-8 pb-4 border-b-2 border-teal-600">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                      >
                        <h3 className="font-inter font-semibold text-lg text-navy-900 pr-4">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 py-4 bg-white">
                          <p className="font-roboto text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl text-white mb-6">
            Ready to get started?
          </h2>
          <p className="font-roboto text-xl text-teal-100 mb-8">
            Join thousands of organizers who've revolutionized their ticketing with OpenTicket.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;