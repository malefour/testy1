import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Future of Event Ticketing: How Blockchain Solves the Scalping Crisis",
    excerpt: "Explore how blockchain technology and smart contracts are revolutionizing the ticketing industry by eliminating scalping, reducing fraud, and creating fair pricing for fans.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const blogPosts = [
    {
      title: "Building Anti-Scalping Technology: A Technical Deep Dive",
      excerpt: "Learn how our smart contracts enforce price caps, transfer windows, and bot detection to create a fair ticketing ecosystem.",
      author: "Mike Rodriguez",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Why We Chose Solana for Mass-Market Ticketing",
      excerpt: "Comparing blockchain platforms and why Solana's speed and cost efficiency make it perfect for ticketing at scale.",
      author: "David Kim",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Case Study: How MusicFest 2024 Eliminated Scalping",
      excerpt: "A detailed look at our first major festival deployment and the results that surprised everyone.",
      author: "Lisa Park",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Case Studies",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "NFT Collectibles: More Than Just Digital Tickets",
      excerpt: "How collectible ticket NFTs create lasting value for fans and new revenue streams for organizers.",
      author: "Alex Thompson",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Product",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "The Economics of Fair Ticketing",
      excerpt: "Breaking down how transparent pricing and controlled resales benefit both fans and event organizers.",
      author: "Jennifer Wu",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Industry Insights",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Web3 Onboarding: Making Blockchain Accessible",
      excerpt: "How we're removing barriers to blockchain adoption with familiar payment methods and user experiences.",
      author: "Tom Anderson",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Product",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = ["All", "Industry Insights", "Technology", "Case Studies", "Product", "Company News"];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            OpenTicket Blog
          </h1>
          <p className="font-roboto text-xl text-gray-600 leading-relaxed">
            Insights on blockchain ticketing, industry trends, and the future of live events.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-800 to-teal-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full font-roboto text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full font-roboto text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="font-inter font-bold text-3xl mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="font-roboto text-gray-200 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 mb-8 text-sm text-gray-300">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <button className="bg-white text-navy-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-roboto font-medium transition-colors flex items-center">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy-800/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-roboto text-sm transition-colors ${
                  category === "All" 
                    ? "bg-teal-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full font-roboto text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3 leading-tight group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-roboto text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-teal-50 to-navy-50 p-12 rounded-2xl">
            <h2 className="font-inter font-bold text-4xl text-navy-900 mb-4">
              Stay Updated
            </h2>
            <p className="font-roboto text-xl text-gray-600 mb-8">
              Get the latest insights on blockchain ticketing, industry trends, and OpenTicket updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-roboto"
              />
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="font-roboto text-gray-500 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <TrendingUp className="h-6 w-6 text-teal-600 mr-3" />
            <h2 className="font-inter font-bold text-3xl text-navy-900">
              Trending Topics
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Blockchain Ticketing</h3>
              <p className="font-roboto text-gray-600 text-sm mb-4">
                How blockchain technology is transforming event ticketing
              </p>
              <span className="text-teal-600 font-roboto text-sm font-medium">12 articles →</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Anti-Scalping</h3>
              <p className="font-roboto text-gray-600 text-sm mb-4">
                Technical solutions to prevent ticket scalping
              </p>
              <span className="text-teal-600 font-roboto text-sm font-medium">8 articles →</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">NFT Collectibles</h3>
              <p className="font-roboto text-gray-600 text-sm mb-4">
                Creating lasting value with collectible ticket NFTs
              </p>
              <span className="text-teal-600 font-roboto text-sm font-medium">6 articles →</span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">Industry Insights</h3>
              <p className="font-roboto text-gray-600 text-sm mb-4">
                Analysis and trends in the live events industry
              </p>
              <span className="text-teal-600 font-roboto text-sm font-medium">15 articles →</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;