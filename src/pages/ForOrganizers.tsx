import React from 'react';
import { ArrowRight, BarChart3, Shield, Settings, Zap, DollarSign, Users } from 'lucide-react';

const ForOrganizers = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            Built for Event Organizers
          </h1>
          <p className="font-roboto text-xl text-gray-600 leading-relaxed">
            Take control of your ticketing with enterprise-grade tools and transparent pricing.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Real-time Analytics</h3>
              <p className="font-roboto text-gray-600">
                Track sales performance, demographic insights, and secondary market activity with comprehensive dashboards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Anti-Fraud Protection</h3>
              <p className="font-roboto text-gray-600">
                Built-in bot detection, velocity limits, and smart contract enforcement prevent scalping automatically.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Flexible Configuration</h3>
              <p className="font-roboto text-gray-600">
                Customize pricing tiers, resale rules, transfer windows, and access controls for each event.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Revenue Optimization</h3>
              <p className="font-roboto text-gray-600">
                Dynamic pricing suggestions, demand forecasting, and revenue share from controlled secondary sales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Instant Settlement</h3>
              <p className="font-roboto text-gray-600">
                Receive payments instantly via Solana with automatic currency conversion and detailed reporting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Fan Relationship Tools</h3>
              <p className="font-roboto text-gray-600">
                Build lasting relationships with attendee data, marketing tools, and exclusive post-event benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Your Command Center
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage successful events in one intuitive dashboard.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-navy-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-white font-roboto text-sm">OpenTicket Dashboard</div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600">3,247</div>
                  <div className="text-sm text-gray-600">Tickets Sold</div>
                  <div className="text-xs text-green-600">+12% vs last hour</div>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-navy-800">$186k</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                  <div className="text-xs text-green-600">+8% vs projection</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-gray-600">Capacity</div>
                  <div className="text-xs text-gray-500">347 remaining</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">0</div>
                  <div className="text-sm text-gray-600">Scalping Attempts</div>
                  <div className="text-xs text-green-600">Protected</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-inter font-semibold text-lg text-navy-900 mb-4">Sales Velocity</h3>
                  <div className="h-40 bg-gradient-to-r from-teal-100 to-navy-100 rounded-lg flex items-end p-4">
                    <div className="flex items-end space-x-2 w-full">
                      <div className="bg-teal-500 w-6 h-8 rounded-t"></div>
                      <div className="bg-teal-500 w-6 h-16 rounded-t"></div>
                      <div className="bg-teal-500 w-6 h-24 rounded-t"></div>
                      <div className="bg-teal-600 w-6 h-32 rounded-t"></div>
                      <div className="bg-teal-700 w-6 h-28 rounded-t"></div>
                      <div className="bg-teal-500 w-6 h-20 rounded-t"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-inter font-semibold text-lg text-navy-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-roboto text-sm">VIP Section A - Seat 12</span>
                      <span className="font-roboto font-medium text-teal-600">$450</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-roboto text-sm">General Admission x2</span>
                      <span className="font-roboto font-medium text-teal-600">$180</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-roboto text-sm">Floor Section C - Seat 87</span>
                      <span className="font-roboto font-medium text-teal-600">$275</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Success Stories
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading organizers are using OpenTicket to transform their events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-teal-50 to-navy-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MF</span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-navy-900">MusicFest 2024</h3>
                  <p className="font-roboto text-gray-600">3-day festival, 50,000 attendees</p>
                </div>
              </div>
              <blockquote className="font-roboto text-gray-700 italic mb-4">
                "OpenTicket eliminated scalping completely. Our fans got tickets at face value, and we captured 100% of the secondary market revenue. It's a game-changer."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-teal-600">$2.1M</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">0%</div>
                  <div className="text-sm text-gray-600">Scalping</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">98%</div>
                  <div className="text-sm text-gray-600">Fan Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">TC</span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-navy-900">TechConf Global</h3>
                  <p className="font-roboto text-gray-600">Corporate conference, 15,000 attendees</p>
                </div>
              </div>
              <blockquote className="font-roboto text-gray-700 italic mb-4">
                "The analytics and fraud protection saved us countless hours. Our registration was seamless, and the post-event NFT collectibles created amazing engagement."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-navy-800">$890k</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy-800">15min</div>
                  <div className="text-sm text-gray-600">Sellout Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy-800">45%</div>
                  <div className="text-sm text-gray-600">Return Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl text-white mb-6">
            Ready to transform your events?
          </h2>
          <p className="font-roboto text-xl text-teal-100 mb-8">
            Join leading organizers who trust OpenTicket for fair, transparent, and profitable ticketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
              Request Demo
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center">
              See Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForOrganizers;