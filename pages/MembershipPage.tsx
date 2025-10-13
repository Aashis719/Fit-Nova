
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { MEMBERSHIP_PLANS } from '../constants';
import type { MembershipPlan } from '../types';
import { Check } from 'lucide-react';

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

const MembershipPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader title="Membership Plans" subtitle="Choose the plan that's right for your fitness journey." />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {MEMBERSHIP_PLANS.map((plan: MembershipPlan, index: number) => (
              <AnimatedSection key={plan.title} delay={index * 0.15}>
                <motion.div
                  className={`relative bg-dark-2 p-8 rounded-lg border h-full flex flex-col ${plan.isPopular ? 'border-primary' : 'border-gray-800'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-dark px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-center mb-2">{plan.title}</h3>
                  <p className="text-5xl font-extrabold text-primary text-center mb-6">{plan.price}</p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-auto font-bold py-3 px-6 rounded-full transition-all duration-300 ${plan.isPopular ? 'bg-primary text-dark hover:bg-primary-dark glow-button' : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark'}`}>
                    Choose Plan
                  </button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MembershipPage;
