import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-teal-600 rounded-lg">
                <Ticket className="h-5 w-5 text-white" />
              </div>
              <span className="font-inter font-bold text-xl">OpenTicket</span>
            </Link>
            <p className="font-roboto text-gray-300 text-sm mb-4">
              Ticketing. Owned, fair, and fraud-proof. Built on Solana for transparent, scalable event experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-inter font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">How It Works</Link></li>
              <li><Link to="/for-organizers" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">For Organizers</Link></li>
              <li><Link to="/for-fans" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">For Fans</Link></li>
              <li><Link to="/pricing" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/collectibles" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Collectibles</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-inter font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/investors" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Investors</Link></li>
              <li><Link to="/blog" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/faq" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><a href="#" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-inter font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Security</a></li>
              <li><a href="#" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="font-roboto text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-roboto text-gray-300 text-sm">
            © {currentYear} OpenTicket. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="font-roboto text-gray-300 text-sm">Built on</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
              <span className="font-roboto text-gray-300 text-sm">Solana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;