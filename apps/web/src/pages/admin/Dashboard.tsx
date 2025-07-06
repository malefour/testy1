import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Flag, 
  Users, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Activity,
  Server,
  Database,
  Zap
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock data - replace with actual API calls
  const stats = [
    { 
      label: 'Total Events', 
      value: '1,247', 
      change: '+12 today',
      changeType: 'positive',
      icon: Calendar, 
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      label: 'Active Users', 
      value: '8,432', 
      change: '+156 this week',
      changeType: 'positive',
      icon: Users, 
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      label: 'Flagged Items', 
      value: '23', 
      change: '-5 resolved',
      changeType: 'negative',
      icon: Flag, 
      color: 'from-red-500 to-pink-600' 
    },
    { 
      label: 'System Health', 
      value: '99.9%', 
      change: 'All systems operational',
      changeType: 'positive',
      icon: Shield, 
      color: 'from-purple-500 to-indigo-600' 
    },
  ];

  const recentFlags = [
    {
      id: 1,
      type: 'Suspicious Resale',
      description: 'Ticket listed at 300% of face value',
      event: 'Summer Music Festival',
      user: 'user_abc123',
      severity: 'high',
      timestamp: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      type: 'Bot Activity',
      description: 'Multiple rapid purchases detected',
      event: 'Tech Conference 2024',
      user: 'user_def456',
      severity: 'medium',
      timestamp: '4 hours ago',
      status: 'investigating'
    },
    {
      id: 3,
      type: 'Fake Ticket',
      description: 'Counterfeit ticket reported',
      event: 'Art Gallery Opening',
      user: 'user_ghi789',
      severity: 'high',
      timestamp: '6 hours ago',
      status: 'resolved'
    },
  ];

  const systemMetrics = [
    { name: 'API Response Time', value: '45ms', status: 'good', icon: Zap },
    { name: 'Database Load', value: '23%', status: 'good', icon: Database },
    { name: 'Server Uptime', value: '99.9%', status: 'good', icon: Server },
    { name: 'Active Connections', value: '1,247', status: 'good', icon: Activity },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'investigating': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'pending': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Admin Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Monitor platform health, manage flags, and oversee system operations.
        </p>
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
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
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
        {/* Recent Flags */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Recent Flags</h2>
            <Link
              to="/admin/flags"
              className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 text-sm font-medium transition-colors flex items-center"
            >
              View All
              <Flag className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentFlags.map((flag, index) => (
              <motion.div
                key={flag.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                className="flex items-start justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer group"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {flag.type}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(flag.severity)}`}>
                      {flag.severity}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(flag.status)}`}>
                      {flag.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{flag.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-500">
                    <span>Event: {flag.event}</span>
                    <span>User: {flag.user}</span>
                    <span>{flag.timestamp}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  {flag.status === 'resolved' ? (
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ) : flag.status === 'investigating' ? (
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-6"
        >
          {/* System Status */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">System Status</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">Operational</span>
              </div>
            </div>
            <div className="space-y-3">
              {systemMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{metric.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{metric.value}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Emergency Actions</h3>
                <p className="text-red-100 text-sm">Quick access to critical functions</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-200" />
            </div>
            <div className="space-y-2">
              <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm">
                Freeze All Resales
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm">
                Emergency Broadcast
              </button>
              <Link
                to="/admin/dev-tools"
                className="block w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm text-center"
              >
                Dev Tools
              </Link>
            </div>
          </div>

          {/* Platform Stats */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Today's Activity</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">New Events</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Tickets Sold</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">3,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Resales</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">89</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400 text-sm">Flags Resolved</span>
                <span className="font-semibold text-green-600 dark:text-green-400">5</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Link
          to="/admin/events"
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">1,247</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Manage Events
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">View and moderate all events</p>
        </Link>

        <Link
          to="/admin/users"
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">8,432</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            User Management
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Monitor user activity</p>
        </Link>

        <Link
          to="/admin/flags"
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <Flag className="h-8 w-8 text-red-600 dark:text-red-400" />
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">23</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
            Review Flags
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Handle reported issues</p>
        </Link>

        <Link
          to="/admin/support"
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow group"
        >
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">12</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            Support Tickets
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Assist users and organizers</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;