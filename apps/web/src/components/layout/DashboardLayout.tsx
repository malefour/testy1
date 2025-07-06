import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Calendar, 
  Ticket, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut,
  Bell,
  Search,
  ChevronDown,
  Building2,
  Star,
  Shield,
  Zap,
  DollarSign,
  Flag,
  Headphones,
  Code
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { ThemeToggle } from '../ui/theme-toggle';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const getNavigationItems = (): NavigationItem[] => {
    if (user?.role === 'organizer') {
      return [
        { name: 'Dashboard', href: '/platform/dashboard', icon: Home },
        { name: 'Events', href: '/platform/events', icon: Calendar },
        { name: 'Create Event', href: '/platform/events/new', icon: Ticket },
        { name: 'Resale Settings', href: '/platform/resale', icon: DollarSign },
        { name: 'Analytics', href: '/platform/analytics', icon: BarChart3 },
        { name: 'Team', href: '/platform/team', icon: Users },
        { name: 'Settings', href: '/platform/settings', icon: Settings },
      ];
    } else if (user?.role === 'admin') {
      return [
        { name: 'Dashboard', href: '/admin/dashboard', icon: Home },
        { name: 'Events', href: '/admin/events', icon: Calendar },
        { name: 'Flags', href: '/admin/flags', icon: Flag, badge: '3' },
        { name: 'Users', href: '/admin/users', icon: Users },
        { name: 'Support', href: '/admin/support', icon: Headphones },
        { name: 'Dev Tools', href: '/admin/dev-tools', icon: Code },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
      ];
    } else {
      return [
        { name: 'Dashboard', href: '/fans/dashboard', icon: Home },
        { name: 'My Tickets', href: '/fans/tickets', icon: Ticket },
        { name: 'Resell', href: '/fans/resell', icon: DollarSign },
        { name: 'Collectibles', href: '/fans/collectibles', icon: Star },
        { name: 'Attendance', href: '/fans/attendance', icon: Calendar },
        { name: 'Settings', href: '/fans/settings', icon: Settings },
      ];
    }
  };

  const navigationItems = getNavigationItems();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const getRoleIcon = () => {
    switch (user?.role) {
      case 'organizer':
        return <Building2 className="h-4 w-4" />;
      case 'admin':
        return <Shield className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  const getRoleColor = () => {
    switch (user?.role) {
      case 'organizer':
        return 'from-purple-500 to-indigo-600';
      case 'admin':
        return 'from-red-500 to-pink-600';
      default:
        return 'from-teal-500 to-cyan-600';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: sidebarOpen ? 0 : '-100%' }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 shadow-xl lg:translate-x-0 lg:static lg:inset-0"
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center space-x-3">
              <div className={`p-2 bg-gradient-to-br ${getRoleColor()} rounded-xl shadow-md`}>
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-slate-100">OpenTicket</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* User info */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${getRoleColor()} rounded-full flex items-center justify-center shadow-md`}>
                {getRoleIcon()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {user?.username}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                  {user?.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href !== '/platform/dashboard' && item.href !== '/fans/dashboard' && item.href !== '/admin/dashboard' && location.pathname.startsWith(item.href));
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <Menu className="h-5 w-5" />
              </button>
              
              {/* Search */}
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-64 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Notifications */}
              <button className="relative p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${getRoleColor()} rounded-full flex items-center justify-center shadow-md`}>
                    {getRoleIcon()}
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50"
                    >
                      <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{user?.username}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{user?.role}</p>
                      </div>
                      <button
                        onClick={() => {
                          navigate(user?.role === 'organizer' ? '/platform/settings' : user?.role === 'admin' ? '/admin/settings' : '/fans/settings');
                          setProfileOpen(false);
                        }}
                        className="w-full flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <Settings className="h-4 w-4 mr-3" />
                        Settings
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;