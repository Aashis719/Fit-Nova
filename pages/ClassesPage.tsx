
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { CLASSES } from '../constants';
import type { GymClass } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-dark-2 py-16 text-center">
    <motion.h1 
      className="text-5xl font-extrabold text-primary mb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.h1>
    <motion.p 
      className="text-lg text-gray-400"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {subtitle}
    </motion.p>
  </div>
);

const getDifficultyClass = (difficulty: 'Beginner' | 'Intermediate' | 'Advanced') => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-500/20 text-green-400';
    case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
    case 'Advanced': return 'bg-red-500/20 text-red-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
};

const ClassesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader title="Our Classes" subtitle="Find the perfect class to challenge your body and mind." />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLASSES.map((gymClass: GymClass, index) => (
              <AnimatedSection key={gymClass.id} delay={index * 0.1}>
                <motion.div 
                  className="bg-dark-2 rounded-lg overflow-hidden border border-gray-800 h-full flex flex-col"
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 255, 136, 0.1), 0 4px 6px -2px rgba(0, 255, 136, 0.05)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img src={gymClass.imageUrl} alt={gymClass.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-primary">{gymClass.title}</h3>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyClass(gymClass.difficulty)}`}>
                          {gymClass.difficulty}
                        </span>
                    </div>
                    <p className="text-gray-400 mb-4 flex-grow">{gymClass.description}</p>
                    <div className="text-sm text-gray-500 mt-auto pt-4 border-t border-gray-700">
                      <p><strong>Instructor:</strong> {gymClass.instructor}</p>
                      <p><strong>Schedule:</strong> {gymClass.schedule}</p>
                    </div>
                    <button className="mt-6 w-full bg-primary text-dark font-bold py-2 px-4 rounded-full hover:bg-primary-dark transition-all duration-300">
                      Book Class
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassesPage;
