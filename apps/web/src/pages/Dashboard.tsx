import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import FanDashboard from '../components/dashboard/FanDashboard';
import OrganizerDashboard from '../components/dashboard/OrganizerDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-2">
              Welcome back, {user.username}!
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {user.role === 'organizer' 
                ? 'Manage your events and track performance' 
                : 'Discover events and manage your tickets'
              }
            </p>
          </div>

          {/* Role-specific Dashboard */}
          {user.role === 'organizer' ? <OrganizerDashboard /> : <FanDashboard />}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;