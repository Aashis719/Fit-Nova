import React from 'react'; 
import { motion } from 'framer-motion';
import { TRAINERS } from '../constants';
import type { Trainer } from '../types';

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

const TrainersPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title="Expert Trainers" 
        subtitle="Our team of dedicated professionals is here to help you succeed." 
      />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRAINERS.map((trainer: Trainer) => (
              <div
                key={trainer.id}
                className="group relative overflow-hidden rounded-lg bg-dark-2 border border-gray-800 text-center flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(0,255,136,0.1),0_4px_6px_-2px_rgba(0,255,136,0.05)]"
              >
                <img 
                  src={trainer.imageUrl} 
                  alt={trainer.name} 
                  className="w-full h-80 object-cover" 
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-primary">{trainer.name}</h3>
                  <p className="text-gray-400 mb-4">{trainer.specialty}</p>
                  <p className="text-gray-500 text-sm mb-4 flex-grow">{trainer.bio}</p>
                  <div className="mt-auto">
                    <p className="text-xs text-gray-500 font-semibold mb-2">CERTIFICATIONS</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {trainer.certifications.map(cert => (
                        <span 
                          key={cert} 
                          className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainersPage;
