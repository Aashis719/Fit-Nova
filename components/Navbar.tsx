
import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Dumbbell, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };
  
  const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-dark/80 backdrop-blur-sm sticky top-0 z-50 w-full py-4 px-4 md:px-8 lg:px-16 shadow-lg shadow-black/20">
      <div className="container mx-auto flex justify-between items-center">
        <RouterNavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Dumbbell />
          <span>FitNova</span>
        </RouterNavLink>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <RouterNavLink 
              key={link.label} 
              to={link.href} 
              className={({ isActive }) => `text-light hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary' : ''}`}
            >
              {link.label}
            </RouterNavLink>
          ))}
        </div>
        
        <RouterNavLink to="/membership" className="hidden md:inline-block bg-primary text-dark font-bold py-2 px-6 rounded-full hover:bg-primary-dark transition-all duration-300 glow-button">
          Join Now
        </RouterNavLink>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-light focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-dark-2 rounded-lg p-4"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {NAV_LINKS.map(link => (
              <motion.div key={link.label} variants={mobileMenuItemVariants}>
                 <RouterNavLink 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block py-2 px-4 text-center rounded-md text-light hover:bg-dark/50 hover:text-primary transition-colors duration-300 ${isActive ? 'bg-dark/50 text-primary' : ''}`}
                 >
                  {link.label}
                </RouterNavLink>
              </motion.div>
            ))}
            <motion.div variants={mobileMenuItemVariants}>
              <RouterNavLink to="/membership" onClick={() => setIsOpen(false)} className="block w-full mt-4 bg-primary text-dark font-bold py-3 px-6 rounded-full text-center hover:bg-primary-dark transition-all duration-300 glow-button">
                Join Now
              </RouterNavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
