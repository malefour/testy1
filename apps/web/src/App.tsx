import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/layout/DashboardLayout';

// Public pages
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import ForOrganizers from './pages/ForOrganizers';
import ForFans from './pages/ForFans';
import Pricing from './pages/Pricing';
import Collectibles from './pages/Collectibles';
import Investors from './pages/Investors';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import HeroDemo from './pages/HeroDemo';
import Careers from './pages/Careers';
import Documentation from './pages/Documentation';
import APIReference from './pages/APIReference';
import Security from './pages/Security';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SignIn from './pages/SignIn';

// Platform pages (Organizers)
import PlatformDashboard from './pages/platform/Dashboard';
import PlatformEvents from './pages/platform/Events';
import CreateEvent from './pages/platform/CreateEvent';

// Fan pages
import FansDashboard from './pages/fans/Dashboard';

// Admin pages
import AdminDashboard from './pages/admin/Dashboard';
import DevTools from './pages/admin/DevTools';

// Role-based route wrapper
const RoleBasedRoute: React.FC<{ children: React.ReactNode; allowedRoles: string[] }> = ({ 
  children, 
  allowedRoles 
}) => {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes with navbar and footer */}
            <Route path="/" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main>
                  <Home />
                </main>
                <Footer />
              </div>
            } />
            
            <Route path="/how-it-works" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><HowItWorks /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/for-organizers" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><ForOrganizers /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/for-fans" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><ForFans /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/pricing" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><Pricing /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/collectibles" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><Collectibles /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/investors" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><Investors /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/faq" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><FAQ /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/blog" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><Blog /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/contact" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><Contact /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/hero-demo" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><HeroDemo /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/careers" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><Careers /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/documentation" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><Documentation /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/apireference" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><APIReference /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/security" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><Security /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/privacypolicy" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><PrivacyPolicy /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/termsofservice" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <Navbar />
                <main><TermsOfService /></main>
                <Footer />
              </div>
            } />
            
            <Route path="/signin" element={
              <div className="min-h-screen bg-background transition-colors duration-300">
                <SignIn />
              </div>
            } />

            {/* Protected dashboard routes */}
            <Route path="/platform/*" element={
              <RoleBasedRoute allowedRoles={['organizer']}>
                <DashboardLayout />
              </RoleBasedRoute>
            }>
              <Route path="dashboard" element={<PlatformDashboard />} />
              <Route path="events" element={<PlatformEvents />} />
              <Route path="events/new" element={<CreateEvent />} />
              <Route path="events/:id" element={<div>Event Management Page</div>} />
              <Route path="resale" element={<div>Resale Settings Page</div>} />
              <Route path="analytics" element={<div>Analytics Page</div>} />
              <Route path="team" element={<div>Team Management Page</div>} />
              <Route path="settings" element={<div>Platform Settings Page</div>} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>

            <Route path="/fans/*" element={
              <RoleBasedRoute allowedRoles={['fan']}>
                <DashboardLayout />
              </RoleBasedRoute>
            }>
              <Route path="dashboard" element={<FansDashboard />} />
              <Route path="tickets" element={<div>My Tickets Page</div>} />
              <Route path="tickets/:id" element={<div>Ticket Detail Page</div>} />
              <Route path="resell" element={<div>Resell Tickets Page</div>} />
              <Route path="collectibles" element={<div>Collectibles Page</div>} />
              <Route path="attendance" element={<div>Attendance History Page</div>} />
              <Route path="settings" element={<div>Fan Settings Page</div>} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>

            <Route path="/admin/*" element={
              <RoleBasedRoute allowedRoles={['admin']}>
                <DashboardLayout />
              </RoleBasedRoute>
            }>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="events" element={<div>Admin Events Page</div>} />
              <Route path="flags" element={<div>Flags Management Page</div>} />
              <Route path="users" element={<div>User Management Page</div>} />
              <Route path="support" element={<div>Support Tickets Page</div>} />
              <Route path="dev-tools" element={<DevTools />} />
              <Route path="settings" element={<div>Admin Settings Page</div>} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>

            {/* Legacy dashboard route - redirect based on role */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Navigate to="/platform/dashboard" replace />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;