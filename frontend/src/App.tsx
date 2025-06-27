import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/for-organizers" element={<ForOrganizers />} />
              <Route path="/for-fans" element={<ForFans />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/collectibles" element={<Collectibles />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hero-demo" element={<HeroDemo />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/apireference" element={<APIReference />} />
              <Route path="/security" element={<Security />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/termsofservice" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
