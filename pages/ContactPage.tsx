
import React from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; 

// This is a temporary list of dependencies that would be in package.json
// "dependencies": {
//   "react": "^18.2.0",
//   "react-dom": "^18.2.0",
//   "react-router-dom": "^6.22.3",
//   "framer-motion": "^11.0.8",
//   "lucide-react": "^0.354.0",
//   "react-hook-form": "^7.51.0"
// }

type Inputs = {
  name: string;
  email: string;
  message: string;
};

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

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    // Placeholder for form submission logic (e.g., API call to Supabase)
    console.log(data);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  const inputStyles = "w-full bg-dark-2 border border-gray-700 rounded-md py-3 px-4 text-light placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300";
  const errorStyles = "text-red-400 text-sm mt-1";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions." />
      
      <div className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input id="name" {...register("name", { required: "Name is required" })} className={inputStyles} />
                {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input id="email" type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} className={inputStyles} />
                {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea id="message" {...register("message", { required: "Message is required" })} className={`${inputStyles} h-36`}></textarea>
                {errors.message && <p className={errorStyles}>{errors.message.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-dark font-bold py-3 px-6 rounded-full hover:bg-primary-dark transition-all duration-300 glow-button disabled:bg-gray-500"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <h3 className="text-3xl font-bold mb-6">Our Location</h3>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-400">123 Fitness St, Workout City, 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-400">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-400">info@fitnova.com</p>
                  </div>
                </div>
             </div>
             <div className="mt-8 rounded-lg overflow-hidden border-2 border-primary">
                 <img src="/images/foto2.jpg" alt="Map to FitNova Gym" className="w-full h-full object-cover" />
             </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
