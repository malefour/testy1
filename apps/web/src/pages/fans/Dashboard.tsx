import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Ticket, 
  Star, 
  TrendingUp, 
  Clock, 
  MapPin, 
  ArrowRight,
  Gift,
  Users,
  DollarSign
} from 'lucide-react';

const FansDashboard = () => {
  // Mock data - replace with actual API calls
  const stats = [
    { 
      label: 'Events Attended', 
      value: '12', 
      change: '+3 this year',
      icon: Calendar, 
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      label: 'NFT Collectibles', 
      value: '8', 
      change: '+2 recent',
      icon: Star, 
      color: 'from-purple-500 to-pink-600' 
    },
    { 
      label: 'Total Saved', 
      value: '$340', 
      change: 'vs scalper prices',
      icon: TrendingUp, 
      color: 'from-green-500 to-emerald-600' 
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: 'Winter Jazz Night',
      date: '2024-12-15',
      time: '8:00 PM',
      venue: 'Blue Note Club',
      ticketType: 'VIP',
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      canResell: false,
      resellDate: '2024-12-10'
    },
    {
      id: 2,
      name: 'Food & Wine Festival',
      date: '2024-11-22',
      time: '6:00 PM',
      venue: 'Harbor District',
      ticketType: 'General',
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      canResell: true,
      resellDate: null
    },
  ];

  const recentCollectibles = [
    {
      id: 1,
      eventName: 'Summer Music Festival 2024',
      date: '2024-07-15',
      artist: 'Alex Chen',
      rarity: 'Limited Edition',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      eventName: 'Tech Conference 2024',
      date: '2024-06-20',
      artist: 'Sarah Kim',
      rarity: 'Exclusive',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      eventName: 'Art Gallery Opening',
      date: '2024-05-10',
      artist: 'Mike Rodriguez',
      rarity: 'Common',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Limited Edition': return 'text-purple-600 dark:text-purple-400';
      case 'Exclusive': return 'text-orange-600 dark:text-orange-400';
      case 'Rare': return 'text-blue-600 dark:text-blue-400';
      default: return 'text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Welcome back!</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Here's what's happening with your tickets and events.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{stat.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Upcoming Events</h2>
            <Link
              to="/fans/tickets"
              className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 text-sm font-medium transition-colors flex items-center"
            >
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer group"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-slate-900 dark:text-slate-100 truncate group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {event.name}
                  </h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-full">
                      {event.ticketType}
                    </span>
                    {event.canResell && (
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                        Can Resell
                      </span>
                    )}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
              </motion.div>
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">No upcoming events</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Discover amazing events and get your tickets!
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Browse Events
              </button>
            </div>
          )}
        </motion.div>

        {/* Recent Collectibles */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Recent Collectibles</h2>
            <Link
              to="/fans/collectibles"
              className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 text-sm font-medium transition-colors flex items-center"
            >
              View All
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentCollectibles.map((collectible, index) => (
              <motion.div
                key={collectible.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer group"
              >
                <img
                  src={collectible.image}
                  alt={collectible.eventName}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-slate-900 dark:text-slate-100 truncate text-sm">
                    {collectible.eventName}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      by {collectible.artist}
                    </span>
                    <span className={`text-xs font-medium ${getRarityColor(collectible.rarity)}`}>
                      {collectible.rarity}
                    </span>
                  </div>
                </div>
                <Star className="h-4 w-4 text-yellow-500" />
              </motion.div>
            ))}
          </div>

          {recentCollectibles.length === 0 && (
            <div className="text-center py-8">
              <Star className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">No collectibles yet</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Attend events to earn collectible NFT tickets!
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Browse Events</h3>
              <p className="text-teal-100 text-sm">Discover upcoming events</p>
            </div>
            <Calendar className="h-8 w-8 text-teal-200" />
          </div>
          <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
            Explore Events
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Resell Tickets</h3>
              <p className="text-purple-100 text-sm">List eligible tickets</p>
            </div>
            <DollarSign className="h-8 w-8 text-purple-200" />
          </div>
          <Link
            to="/fans/resell"
            className="block w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center"
          >
            View Resale Options
          </Link>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Collectibles</h3>
              <p className="text-orange-100 text-sm">View your NFT collection</p>
            </div>
            <Gift className="h-8 w-8 text-orange-200" />
          </div>
          <Link
            to="/fans/collectibles"
            className="block w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center"
          >
            View Collection
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default FansDashboard;