import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Ticket, 
  DollarSign, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Plus,
  Eye,
  BarChart3
} from 'lucide-react';

const PlatformDashboard = () => {
  // Mock data - replace with actual API calls
  const stats = [
    { 
      label: 'Total Revenue', 
      value: '$24,580', 
      change: '+12.5%', 
      changeType: 'positive',
      icon: DollarSign, 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      label: 'Active Events', 
      value: '8', 
      change: '+2', 
      changeType: 'positive',
      icon: Calendar, 
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      label: 'Tickets Sold', 
      value: '1,247', 
      change: '+18.2%', 
      changeType: 'positive',
      icon: Ticket, 
      color: 'from-purple-500 to-pink-600' 
    },
    { 
      label: 'Avg. Price', 
      value: '$67', 
      change: '+5.3%', 
      changeType: 'positive',
      icon: TrendingUp, 
      color: 'from-orange-500 to-red-600' 
    },
  ];

  const recentEvents = [
    {
      id: 1,
      name: 'Summer Music Festival 2024',
      date: '2024-08-15',
      venue: 'Central Park',
      ticketsSold: 450,
      totalTickets: 500,
      revenue: '$13,500',
      status: 'active',
    },
    {
      id: 2,
      name: 'Tech Innovation Summit',
      date: '2024-09-22',
      venue: 'Convention Center',
      ticketsSold: 180,
      totalTickets: 300,
      revenue: '$9,000',
      status: 'selling',
    },
    {
      id: 3,
      name: 'Art & Wine Evening',
      date: '2024-07-30',
      venue: 'Gallery District',
      ticketsSold: 85,
      totalTickets: 100,
      revenue: '$4,250',
      status: 'sold-out',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'selling': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'sold-out': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Welcome back! Here's what's happening with your events.
          </p>
        </div>
        <Link
          to="/platform/events/new"
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{stat.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Events */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Recent Events</h2>
            <Link
              to="/platform/events"
              className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 text-sm font-medium transition-colors flex items-center"
            >
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer group"
                onClick={() => window.location.href = `/platform/events/${event.id}`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {event.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                      {event.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <span>{event.venue}</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{event.revenue}</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        {event.ticketsSold}/{event.totalTickets} tickets sold
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {Math.round((event.ticketsSold / event.totalTickets) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.ticketsSold / event.totalTickets) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions & Analytics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
                <p className="text-teal-100 text-sm">Manage your events efficiently</p>
              </div>
              <Plus className="h-8 w-8 text-teal-200" />
            </div>
            <div className="space-y-3">
              <Link
                to="/platform/events/new"
                className="block w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center"
              >
                Create New Event
              </Link>
              <Link
                to="/platform/analytics"
                className="block w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center"
              >
                View Analytics
              </Link>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">This Month</h3>
              <BarChart3 className="h-5 w-5 text-slate-400" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Revenue Growth</span>
                <span className="font-semibold text-green-600 dark:text-green-400">+24.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Ticket Sales</span>
                <span className="font-semibold text-green-600 dark:text-green-400">+18.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">New Customers</span>
                <span className="font-semibold text-green-600 dark:text-green-400">+31.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Resale Volume</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">$2,340</span>
              </div>
            </div>
            <Link
              to="/platform/analytics"
              className="block w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center mt-4"
            >
              View Full Report
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformDashboard;