import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Ticket } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-soft' 
        : 'bg-white border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-navy-900 rounded-xl group-hover:bg-navy-800 transition-all duration-300 group-hover:scale-105 group-hover:shadow-soft">
              <Ticket className="h-5 w-5 text-white" />
            </div>
            <span className="font-inter font-bold text-xl text-navy-900 group-hover:text-teal-600 transition-colors duration-300">
              OpenTicket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter text-sm font-medium transition-all duration-300 hover:text-teal-600 relative group ${
                  isActive(item.path) ? 'text-teal-600' : 'text-gray-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="font-inter text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors duration-300"
            >
              Contact
            </Link>
            <button className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2.5 rounded-xl font-inter font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-soft transform">
              Request Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-navy-900 transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-inter text-sm font-medium transition-colors duration-300 hover:text-teal-600 px-2 py-1 ${
                    isActive(item.path) ? 'text-teal-600' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block font-inter text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors duration-300 mb-3 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <button className="w-full bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-xl font-inter font-medium text-sm transition-all duration-300">
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