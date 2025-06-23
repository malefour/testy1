import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-inter font-bold text-5xl text-navy-900 mb-6">
            Get in Touch
          </h1>
          <p className="font-roboto text-xl text-gray-600 leading-relaxed">
            Ready to revolutionize your ticketing? Let's talk about how OpenTicket can transform your events.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <MessageSquare className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Request Demo</h3>
              <p className="font-roboto text-gray-600 mb-4">
                See OpenTicket in action with a personalized demo tailored to your needs.
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors">
                Schedule Demo
              </button>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Phone className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Sales Consultation</h3>
              <p className="font-roboto text-gray-600 mb-4">
                Speak with our sales team about pricing and custom solutions.
              </p>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors">
                Call Sales
              </button>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Calendar className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-inter font-semibold text-xl text-navy-900 mb-3">Partnership</h3>
              <p className="font-roboto text-gray-600 mb-4">
                Explore partnership opportunities and integration possibilities.
              </p>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="font-inter font-bold text-3xl text-navy-900 mb-6">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-roboto font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-roboto"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-roboto font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-roboto"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block font-roboto font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-roboto"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block font-roboto font-medium text-gray-700 mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-roboto"
                      placeholder="Event Manager"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block font-roboto font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-roboto"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request Demo</option>
                    <option value="sales">Sales Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-roboto font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-roboto resize-none"
                    placeholder="Tell us about your event and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-lg font-roboto font-medium text-lg transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-inter font-bold text-3xl text-navy-900 mb-6">
                  Contact Information
                </h2>
                <p className="font-roboto text-xl text-gray-600 mb-8">
                  We're here to help you transform your ticketing experience. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-navy-900 mb-1">Email</h3>
                    <p className="font-roboto text-gray-600">hello@openticket.com</p>
                    <p className="font-roboto text-gray-600">sales@openticket.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-navy-900 mb-1">Phone</h3>
                    <p className="font-roboto text-gray-600">+1 (555) 123-4567</p>
                    <p className="font-roboto text-gray-500 text-sm">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-navy-900 mb-1">Office</h3>
                    <p className="font-roboto text-gray-600">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-navy-900 mb-1">Business Hours</h3>
                    <p className="font-roboto text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 p-6 rounded-xl">
                <h3 className="font-inter font-semibold text-lg text-navy-900 mb-3">
                  Enterprise Customers
                </h3>
                <p className="font-roboto text-gray-600 mb-4">
                  Need dedicated support or custom solutions? Our enterprise team is ready to help.
                </p>
                <button className="bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors">
                  Contact Enterprise Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-3xl text-navy-900 mb-6">
            Quick Answers
          </h2>
          <p className="font-roboto text-xl text-gray-600 mb-12">
            Looking for immediate answers? Check out our most frequently asked questions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-left">
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">
                How much does OpenTicket cost?
              </h3>
              <p className="font-roboto text-gray-600 text-sm mb-4">
                Our pricing starts at 2.5% per ticket with no setup fees or monthly minimums.
              </p>
              <a href="/pricing" className="text-teal-600 hover:text-teal-700 font-roboto font-medium text-sm">
                View Pricing Details →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-left">
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">
                How do you prevent scalping?
              </h3>
              <p className="font-roboto text-gray-600 text-sm mb-4">
                Smart contracts enforce price caps, transfer windows, and bot detection automatically.
              </p>
              <a href="/how-it-works" className="text-teal-600 hover:text-teal-700 font-roboto font-medium text-sm">
                Learn More →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-left">
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">
                Do fans need crypto wallets?
              </h3>
              <p className="font-roboto text-gray-600 text-sm mb-4">
                No! Fans can pay with credit cards and we handle the blockchain complexity.
              </p>
              <a href="/for-fans" className="text-teal-600 hover:text-teal-700 font-roboto font-medium text-sm">
                Fan Experience →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-left">
              <h3 className="font-inter font-semibold text-lg text-navy-900 mb-2">
                Can you integrate with our systems?
              </h3>
              <p className="font-roboto text-gray-600 text-sm mb-4">
                Yes! We offer API-first architecture with comprehensive integration support.
              </p>
              <a href="/for-organizers" className="text-teal-600 hover:text-teal-700 font-roboto font-medium text-sm">
                Organizer Features →
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="/faq"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-roboto font-medium transition-colors"
            >
              View All FAQs
              <Send className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;