import React from 'react';
import { Star, Award, Gift, Palette, Zap, Heart } from 'lucide-react';

const Collectibles = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            Collectible Ticket NFTs
          </h1>
          <p className="font-roboto text-xl text-gray-600 leading-relaxed">
            Turn every event into a lasting memory with beautiful, collectible NFT tickets that fans treasure forever.
          </p>
        </div>
      </section>

      {/* Hero Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
                More than just tickets—<br />they're digital keepsakes.
              </h2>
              <p className="font-roboto text-xl text-gray-600 mb-8">
                Every OpenTicket becomes a unique piece of art that captures the essence of your event. Fans don't just attend—they own a piece of the experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Palette className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Custom Artwork</h3>
                    <p className="font-roboto text-gray-600">Each event gets unique artwork that reflects its personality and brand.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Rarity Tiers</h3>
                    <p className="font-roboto text-gray-600">VIP tickets get exclusive designs, creating natural collectible tiers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gift className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Post-Event Rewards</h3>
                    <p className="font-roboto text-gray-600">Unlock exclusive content, discounts, and experiences after the event.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-full h-32 bg-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="w-full h-4 bg-purple-600 rounded mb-2"></div>
                    <div className="text-xs text-gray-600 mb-2">Summer Music Fest</div>
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto"></div>
                  </div>
                  <h4 className="font-inter font-semibold text-sm text-navy-900">VIP Experience</h4>
                  <p className="font-roboto text-xs text-gray-600">Limited Edition #47/100</p>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-full h-32 bg-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="w-full h-4 bg-green-600 rounded mb-2"></div>
                    <div className="text-xs text-gray-600 mb-2">TechConf 2024</div>
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg mx-auto"></div>
                  </div>
                  <h4 className="font-inter font-semibold text-sm text-navy-900">Early Bird</h4>
                  <p className="font-roboto text-xs text-gray-600">Founders Edition</p>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-2xl transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-full h-32 bg-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="w-full h-4 bg-yellow-600 rounded mb-2"></div>
                    <div className="text-xs text-gray-600 mb-2">Art Gallery Opening</div>
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg mx-auto"></div>
                  </div>
                  <h4 className="font-inter font-semibold text-sm text-navy-900">Opening Night</h4>
                  <p className="font-roboto text-xs text-gray-600">Artist Collaboration</p>
                </div>

                <div className="bg-gradient-to-br from-teal-100 to-navy-100 p-6 rounded-2xl transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-full h-32 bg-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="w-full h-4 bg-teal-600 rounded mb-2"></div>
                    <div className="text-xs text-gray-600 mb-2">Sports Championship</div>
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-navy-400 rounded-lg mx-auto"></div>
                  </div>
                  <h4 className="font-inter font-semibold text-sm text-navy-900">Finals Game</h4>
                  <p className="font-roboto text-xs text-gray-600">Championship Series</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Why Fans Love Collectible Tickets
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Transform the traditional ticket stub into something fans actually want to keep and show off.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Emotional Connection</h3>
              <p className="font-roboto text-gray-600">
                Beautiful artwork creates an emotional bond with the event, making fans feel more connected to the experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Proof of Attendance</h3>
              <p className="font-roboto text-gray-600">
                Blockchain-verified proof that they were there, creating a permanent record of their experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Social Sharing</h3>
              <p className="font-roboto text-gray-600">
                Fans love showing off their collectible tickets on social media, creating organic marketing for your events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Collaboration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-teal-50 to-navy-50 p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <h3 className="font-inter font-semibold text-xl text-navy-900 mb-4">Artist Collaboration Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-roboto text-sm text-gray-700">1. Brief & Concept</span>
                      <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-roboto text-sm text-gray-700">2. Design Creation</span>
                      <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-roboto text-sm text-gray-700">3. Review & Approval</span>
                      <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-roboto text-sm text-gray-700">4. NFT Integration</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="font-inter font-bold text-4xl text-navy-900 mb-6">
                Work with talented artists.
              </h2>
              <p className="font-roboto text-xl text-gray-600 mb-8">
                Our network of digital artists creates stunning, event-specific artwork that captures the unique spirit of your event.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Palette className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Custom Designs</h3>
                    <p className="font-roboto text-gray-600">Every piece is created specifically for your event, not generic templates.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Multiple Variants</h3>
                    <p className="font-roboto text-gray-600">Different designs for different ticket tiers create natural collectible rarity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-medium text-navy-900">Artist Attribution</h3>
                    <p className="font-roboto text-gray-600">Artists get credit and can build their portfolio through your events.</p>
                  </div>
                </div>
              </div>

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors">
                Browse Artist Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Event Benefits */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              The Experience Continues
            </h2>
            <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
              Collectible tickets unlock exclusive post-event benefits that keep fans engaged long after the show ends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Exclusive Content</h3>
              <p className="font-roboto text-gray-600 text-sm">
                Behind-the-scenes footage, artist interviews, and exclusive recordings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎟️</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Early Access</h3>
              <p className="font-roboto text-gray-600 text-sm">
                First dibs on tickets for future events and special presales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Merchandise</h3>
              <p className="font-roboto text-gray-600 text-sm">
                Exclusive discounts and limited-edition merchandise offers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">VIP Experiences</h3>
              <p className="font-roboto text-gray-600 text-sm">
                Meet & greets, backstage tours, and other exclusive experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Collectible Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SF</span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-navy-900">SoundFest 2024</h3>
                  <p className="font-roboto text-gray-600">Electronic Music Festival</p>
                </div>
              </div>
              <blockquote className="font-roboto text-gray-700 italic mb-6">
                "Our collectible tickets became the most talked-about part of the festival. Fans were sharing them everywhere, and we saw a 40% increase in social media engagement."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">15k</div>
                  <div className="text-sm text-gray-600">Social Shares</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">89%</div>
                  <div className="text-sm text-gray-600">Kept Tickets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">3.2x</div>
                  <div className="text-sm text-gray-600">Return Rate</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AG</span>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-navy-900">Art Gallery NYC</h3>
                  <p className="font-roboto text-gray-600">Contemporary Art Exhibition</p>
                </div>
              </div>
              <blockquote className="font-roboto text-gray-700 italic mb-6">
                "The artist collaboration for our ticket NFTs was incredible. Attendees loved having a piece of art from the exhibition, and it drove repeat visits."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">$12k</div>
                  <div className="text-sm text-gray-600">NFT Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">67%</div>
                  <div className="text-sm text-gray-600">Repeat Visitors</div>
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
            Create memorable collectibles
          </h2>
          <p className="font-roboto text-xl text-teal-100 mb-8">
            Transform your tickets into treasured keepsakes that fans will love and share.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
              See Design Examples
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-roboto font-medium text-lg transition-all transform hover:scale-105">
              Request Custom Design
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collectibles;