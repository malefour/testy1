import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Ticket } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'For Organizers', path: '/for-organizers' },
    { name: 'For Fans', path: '/for-fans' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Collectibles', path: '/collectibles' },
    { name: 'Investors', path: '/investors' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-navy-800 rounded-lg group-hover:bg-navy-700 transition-colors">
              <Ticket className="h-5 w-5 text-white" />
            </div>
            <span className="font-inter font-bold text-xl text-navy-800">OpenTicket</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-roboto text-sm transition-colors hover:text-teal-600 ${
                  isActive(item.path) ? 'text-teal-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="font-roboto text-sm text-gray-700 hover:text-navy-800 transition-colors"
            >
              Contact
            </Link>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-roboto font-medium text-sm transition-colors">
              Request Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-navy-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-roboto text-sm transition-colors hover:text-teal-600 ${
                    isActive(item.path) ? 'text-teal-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block font-roboto text-sm text-gray-700 hover:text-navy-800 transition-colors mb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-roboto font-medium text-sm transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;