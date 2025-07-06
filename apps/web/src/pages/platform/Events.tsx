import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign,
  Eye,
  Edit,
  MoreHorizontal,
  TrendingUp
} from 'lucide-react';

const PlatformEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data - replace with actual API calls
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
      price: '$30',
      resaleVolume: '$1,200'
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
      price: '$50',
      resaleVolume: '$800'
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
      price: '$50',
      resaleVolume: '$340'
    },
    {
      id: 4,
      name: 'Winter Jazz Night',
      date: '2024-12-15',
      venue: 'Blue Note Club',
      ticketsSold: 0,
      totalTickets: 150,
      revenue: '$0',
      status: 'draft',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$45',
      resaleVolume: '$0'
    },
    {
      id: 5,
      name: 'Food & Wine Festival',
      date: '2024-06-22',
      venue: 'Harbor District',
      ticketsSold: 200,
      totalTickets: 200,
      revenue: '$15,000',
      status: 'completed',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$75',
      resaleVolume: '$2,100'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'selling': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'sold-out': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      case 'completed': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: events.length,
    active: events.filter(e => e.status === 'active').length,
    selling: events.filter(e => e.status === 'selling').length,
    draft: events.filter(e => e.status === 'draft').length,
    completed: events.filter(e => e.status === 'completed').length,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Events</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Manage all your events and track their performance.
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

      {/* Filters and Search */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <div className="flex space-x-1">
              {Object.entries(statusCounts).map(([status, count]) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    filterStatus === status
                      ? 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-shadow group"
          >
            {/* Event Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                  {event.status.replace('-', ' ')}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex space-x-2">
                  <button className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {event.name}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.venue}
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {event.price} per ticket
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600 dark:text-slate-400">
                    {event.ticketsSold}/{event.totalTickets} sold
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

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{event.revenue}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Revenue</div>
                </div>
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="text-lg font-bold text-slate-900 dark:text-slate-100">{event.resaleVolume}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Resale Volume</div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to={`/platform/events/${event.id}`}
                className="block w-full mt-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-medium py-2 px-4 rounded-lg transition-all duration-200 text-center"
              >
                Manage Event
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">No events found</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by creating your first event.'
            }
          </p>
          {!searchTerm && filterStatus === 'all' && (
            <Link
              to="/platform/events/new"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Event
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default PlatformEvents;