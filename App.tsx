
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import TrainersPage from './pages/TrainersPage';
import MembershipPage from './pages/MembershipPage';
import ContactPage from './pages/ContactPage';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';

// A helper component to scroll to the top of the page on route change
const ScrollToTop = () => { 
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
       <CustomCursor />
      <ScrollToTop />
      <div className="bg-dark text-light min-h-screen">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/trainers" element={<TrainersPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
