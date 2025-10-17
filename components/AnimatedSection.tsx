import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string; 
  variants?: Variants;
  delay?: number;
  // FIX: Add id prop to allow setting an id on the section for anchor links.
  id?: string;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', variants = defaultVariants, delay = 0, id }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
