import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Calendar, Users, TrendingUp, Plus, BarChart3, Eye, Edit, MoreHorizontal } from 'lucide-react';

const OrganizerDashboard = () => {
  // Mock data for demonstration
  const stats = [
    { label: 'Total Revenue', value: '$24,580', change: '+12.5%', icon: DollarSign, color: 'from-green-500 to-emerald-600' },
    { label: 'Active Events', value: '8', change: '+2', icon: Calendar, color: 'from-blue-500 to-cyan-600' },
    { label: 'Total Attendees', value: '1,247', change: '+18.2%', icon: Users, color: 'from-purple-500 to-pink-600' },
    { label: 'Avg. Ticket Price', value: '$67', change: '+5.3%', icon: TrendingUp, color: 'from-orange-500 to-red-600' },
  ];

  const events = [
    {
      id: 1,
      name: 'Summer Music Festival 2024',
      date: '2024-08-15',
      venue: 'Central Park',
      ticketsSold: 450,
      totalTickets: 500,
      revenue: '$13,500',
      status: 'active',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const recentActivity = [
    { type: 'sale', message: '5 tickets sold for Summer Music Festival', time: '2 minutes ago' },
    { type: 'event', message: 'New event "Jazz Night" created', time: '1 hour ago' },
    { type: 'milestone', message: 'Tech Summit reached 50% capacity', time: '3 hours ago' },
    { type: 'sale', message: '12 tickets sold for Art & Wine Evening', time: '5 hours ago' },
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
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
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
        {/* Events Management */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Event Management</h2>
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>New Event</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-medium text-slate-900 dark:text-slate-100 truncate">{event.name}</h3>
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
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">
                        {event.ticketsSold}/{event.totalTickets} tickets sold
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {Math.round((event.ticketsSold / event.totalTickets) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mt-1">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.ticketsSold / event.totalTickets) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics & Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Quick Analytics */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Analytics Overview</h3>
                <p className="text-purple-100 text-sm">Last 30 days performance</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-200" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-purple-100">Revenue Growth</span>
                <span className="font-semibold">+24.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-100">Ticket Sales</span>
                <span className="font-semibold">+18.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-100">New Customers</span>
                <span className="font-semibold">+31.7%</span>
              </div>
            </div>
            <button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] mt-4">
              View Full Report
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="flex items-start space-x-3"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'sale' ? 'bg-green-500' :
                    activity.type === 'event' ? 'bg-blue-500' :
                    'bg-orange-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-900 dark:text-slate-100">{activity.message}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;