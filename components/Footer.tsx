
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, Twitter, Instagram, Facebook } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-2 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center gap-2 text-3xl font-bold text-primary mb-4">
              <Dumbbell />
              <span>FitNova</span>
            </NavLink>
            <p className="text-gray-400">Unlock your power. Transform your body. Join the revolution.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-light">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <NavLink to={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-light">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fitness St, Workout City</li>
              <li>(123) 456-7890</li>
              <li>info@fitnova.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-light">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} FitNova Gym. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
