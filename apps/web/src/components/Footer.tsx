import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="p-2 bg-teal-600 rounded-xl group-hover:bg-teal-500 transition-all duration-300 group-hover:scale-105">
                <Ticket className="h-5 w-5 text-white" />
              </div>
              <span className="font-inter font-bold text-xl">OpenTicket</span>
            </Link>
            <p className="font-inter text-gray-300 text-sm mb-6 leading-relaxed">
              Ticketing. Owned, fair, and fraud-proof. Built on Solana for transparent, scalable event experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-inter font-bold text-white mb-6">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">How It Works</Link></li>
              <li><Link to="/for-organizers" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">For Organizers</Link></li>
              <li><Link to="/for-fans" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">For Fans</Link></li>
              <li><Link to="/pricing" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Pricing</Link></li>
              <li><Link to="/collectibles" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Collectibles</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-inter font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/investors" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Investors</Link></li>
              <li><Link to="/blog" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Blog</Link></li>
              <li><Link to="/faq" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact</Link></li>
              <li><Link to="/careers" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-inter font-bold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/documentation" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Documentation</Link></li>
              <li><Link to="/apireference" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">API Reference</Link></li>
              <li><Link to="/security" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Security</Link></li>
              <li><Link to="/privacypolicy" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</Link></li>
              <li><Link to="/termsofservice" className="font-inter text-gray-300 hover:text-white transition-colors duration-300 text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-gray-300 text-sm">
            © {currentYear} OpenTicket. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="font-inter text-gray-300 text-sm">Built on</span>
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
              <span className="font-inter text-gray-300 text-sm font-medium">Solana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;