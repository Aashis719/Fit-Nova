
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { PROGRAMS, TRAINERS, TESTIMONIALS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MoveRight, Star } from 'lucide-react';
import type { Program, Trainer, Testimonial } from '../types';

// Sub-components defined outside the main component to prevent re-renders
const Hero: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
    <img src="/images/background.jpg" alt="Gym background" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-20 px-4">
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transform Your Body
      </motion.h1>
      <motion.h2 
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Unlock Your Power.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link to="/membership" className="bg-primary text-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-dark transition-all duration-300 glow-button">
          Join Now
        </Link>
        <a href="#featured-programs" className="bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-primary hover:text-dark transition-all duration-300">
          View Programs
        </a>
      </motion.div>
    </div>
  </section>
);

const About: React.FC = () => (
  <AnimatedSection className="py-20 bg-dark-2">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img src="/images/about-fitNova.jpg" alt="FitNova Gym interior" className="rounded-lg shadow-2xl" />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-4">About <span className="text-primary">FitNova</span></h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          At FitNova Gym, we're more than just a place to work out. We are a dedicated community committed to fostering a supportive and motivating environment. Our mission is to empower you to achieve your fitness goals through state-of-the-art equipment, expert-led classes, and personalized training programs. We believe that fitness is a journey, not a destination, and we're here to guide you every step of the way.
        </p>
        <Link to="/classes" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors">
          Explore Our Classes <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </AnimatedSection>
);

const FeaturedPrograms: React.FC = () => (
  <AnimatedSection id="featured-programs" className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-2">Our Programs</h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Discover a variety of programs tailored to help you meet your specific fitness objectives.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROGRAMS.map((program: Program, index) => (
          <motion.div
            key={program.title}
            className="bg-dark-2 p-8 rounded-lg text-center border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <program.icon className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
            <p className="text-gray-400">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const TrainersSection: React.FC = () => (
  <AnimatedSection className="py-20 bg-dark-2">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-2">Meet Our Expert Trainers</h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Our certified trainers are here to guide, motivate, and push you to your best.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TRAINERS.slice(0, 4).map((trainer: Trainer) => (
          <motion.div
            key={trainer.name}
            className="group relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={trainer.imageUrl} alt={trainer.name} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-left">
              <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
              <p className="text-primary font-semibold">{trainer.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Link to="/trainers" className="mt-12 inline-flex items-center gap-2 bg-primary text-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-dark transition-all duration-300 glow-button">
        View All Trainers <MoveRight />
      </Link>
    </div>
  </AnimatedSection>
);

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Members Say</h2>
        <div className="relative max-w-3xl mx-auto h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="text-xl italic text-gray-300 mb-4">"{TESTIMONIALS[current].quote}"</p>
              <h4 className="font-bold text-lg text-primary">{TESTIMONIALS[current].name}</h4>
              <p className="text-gray-500">{TESTIMONIALS[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
};

const CtaSection: React.FC = () => (
  <AnimatedSection className="py-20 bg-primary">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-dark mb-4">Get Your Free Trial Week Today!</h2>
      <p className="text-black text-lg mb-8 max-w-2xl mx-auto">Experience everything FitNova has to offer, completely free for 7 days. No commitment, just results.</p>
      <Link to="/contact" className="bg-dark text-primary font-bold py-4 px-10 rounded-full text-xl hover:bg-gray-800 transition-all duration-300">
        Claim Free Trial
      </Link>
    </div>
  </AnimatedSection>
);


const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <FeaturedPrograms />
      <TrainersSection />
      <Testimonials />
      <CtaSection />
    </motion.div>
  );
};

export default HomePage;
