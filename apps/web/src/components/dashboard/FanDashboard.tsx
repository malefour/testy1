import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Ticket, Star, TrendingUp, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const FanDashboard = () => {
  // Mock data for demonstration
  const attendedEvents = [
    {
      id: 1,
      name: 'Summer Music Festival 2024',
      date: '2024-07-15',
      venue: 'Central Park',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      collectible: true,
    },
    {
      id: 2,
      name: 'Tech Conference 2024',
      date: '2024-06-20',
      venue: 'Convention Center',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      collectible: true,
    },
    {
      id: 3,
      name: 'Art Gallery Opening',
      date: '2024-05-10',
      venue: 'Modern Art Museum',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      collectible: false,
    },
  ];

  const upcomingEvents = [
    {
      id: 4,
      name: 'Winter Jazz Night',
      date: '2024-12-15',
      venue: 'Blue Note Club',
      price: '$45',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: true,
    },
    {
      id: 5,
      name: 'Food & Wine Festival',
      date: '2024-11-22',
      venue: 'Harbor District',
      price: '$75',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: false,
    },
  ];

  const stats = [
    { label: 'Events Attended', value: '12', icon: Calendar, color: 'from-blue-500 to-cyan-600' },
    { label: 'NFT Collectibles', value: '8', icon: Star, color: 'from-purple-500 to-pink-600' },
    { label: 'Total Saved', value: '$340', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <div className="space-y-8">
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
        {/* Attended Events */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Recent Events</h2>
            <button className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 text-sm font-medium transition-colors">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {attendedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-slate-900 dark:text-slate-100 truncate">{event.name}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.venue}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {event.collectible && (
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < event.rating ? 'text-yellow-400 fill-current' : 'text-slate-300 dark:text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Book New Events */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Quick Book Section */}
          <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Book New Event</h2>
                <p className="text-teal-100">Discover amazing events near you</p>
              </div>
              <Ticket className="h-8 w-8 text-teal-200" />
            </div>
            <button className="w-full bg-white text-teal-600 hover:bg-teal-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2">
              <span>Browse Events</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Recommended Events */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Recommended for You</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer group"
                >
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 truncate">{event.name}</h4>
                      {event.popular && (
                        <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs px-2 py-1 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3 mt-1">
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="text-teal-600 dark:text-teal-400 font-semibold text-sm">
                        {event.price}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FanDashboard;