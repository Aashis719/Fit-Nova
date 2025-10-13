
import type { NavLink, Program, Trainer, Testimonial, MembershipPlan, GymClass } from './types';
import { Dumbbell, HeartPulse, Zap, Wind } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Classes', href: '/classes' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
];

export const PROGRAMS: Program[] = [
  { title: 'Strength Training', description: 'Build muscle and increase your power with our state-of-the-art weightlifting equipment and expert guidance.', icon: Dumbbell },
  { title: 'Cardio Blast', description: 'Improve your endurance and burn calories with high-intensity interval training and a variety of cardio machines.', icon: HeartPulse },
  { title: 'Functional Fitness', description: 'Enhance your daily movements and prevent injuries through exercises that mimic real-life activities.', icon: Zap },
  { title: 'Mind & Body', description: 'Find your balance and flexibility with our Yoga and Pilates classes, designed to calm the mind and strengthen the core.', icon: Wind },
];

export const TRAINERS: Trainer[] = [
  { id: 1, name: 'Alex Johnson', specialty: 'Strength & Conditioning', imageUrl: '/images/Strength-trainer.jpg', bio: 'With over 10 years of experience, Alex specializes in helping clients build functional strength and achieve peak physical performance.', certifications: ['NSCA-CPT', 'CSCS'] },
  { id: 2, name: 'Maria Garcia', specialty: 'Yoga & Flexibility', imageUrl: '/images/yoga-expert.jpg', bio: 'Maria is a certified yoga instructor who believes in the power of mind-body connection to transform lives, one breath at a time.', certifications: ['RYT-500', 'Certified Pilates Instructor'] },
  { id: 3, name: 'David Chen', specialty: 'HIIT & Endurance', imageUrl: '/images/HIIT_Specialist.jpg', bio: 'David brings energy and intensity to every session, pushing clients beyond their limits with dynamic and challenging workouts.', certifications: ['ACE Certified Personal Trainer', 'CrossFit Level 2 Trainer'] },
  { id: 4, name: 'Sarah Miller', specialty: 'Nutrition & Wellness', imageUrl: '/images/nutrition_expert.jpg', bio: 'Sarah combines personalized fitness plans with expert nutritional advice to help clients achieve holistic and sustainable results.', certifications: ['Registered Dietitian (RD)', 'NASM-CPT'] },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "FitNova isn't just a gym; it's a community. The trainers are incredibly supportive and the atmosphere is always motivating. I've never felt stronger!", name: 'Jessica L.', role: 'Member for 2 years' },
  { quote: "I was hesitant to join a gym, but FitNova changed everything. The personalized plan helped me lose 30 pounds and gain a new sense of confidence.", name: 'Mike R.', role: 'Member for 1 year' },
  { quote: "The facilities are top-notch and always clean. The variety of classes keeps my routine exciting. Highly recommend the Cardio Blast class!", name: 'Emily W.', role: 'Member for 3 years' },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  { title: 'Basic', price: '$39/mo', features: ['Gym Access', 'Locker Rooms', 'Basic Classes'], isPopular: false },
  { title: 'Standard', price: '$69/mo', features: ['All Basic Features', 'Unlimited Classes', '1 Personal Training Session/mo'], isPopular: true },
  { title: 'Premium', price: '$99/mo', features: ['All Standard Features', '4 Personal Training Sessions/mo', 'Towel Service', 'Guest Passes'], isPopular: false },
];

export const CLASSES: GymClass[] = [
    { id: 1, title: 'Powerlifting 101', description: 'Master the fundamentals of the squat, bench press, and deadlift in a safe and supportive environment.', instructor: 'Alex Johnson', schedule: 'Mon, Wed, Fri @ 6:00 PM', difficulty: 'Intermediate', imageUrl: '/images/power-lifting.jpg' },
    { id: 2, title: 'Vinyasa Flow Yoga', description: 'Connect breath with movement in this dynamic yoga class designed to build strength, flexibility, and inner peace.', instructor: 'Maria Garcia', schedule: 'Tue, Thu @ 7:00 AM', difficulty: 'Beginner', imageUrl: '/images/yoga.jpg' },
    { id: 3, title: 'Total Body HIIT', description: 'A high-intensity interval training session that will challenge your entire body and torch calories.', instructor: 'David Chen', schedule: 'Sat @ 9:00 AM', difficulty: 'Advanced', imageUrl: '/images/HIIT.jpg' },
    { id: 4, title: 'Core & Stability', description: 'Strengthen your core and improve your balance with a targeted workout using a variety of equipment.', instructor: 'Sarah Miller', schedule: 'Wed @ 12:00 PM', difficulty: 'Beginner', imageUrl: '/images/stability.jpg' },
    { id: 5, title: 'Spin Revolution', description: 'An energizing indoor cycling class with great music and motivating coaching to push your cardiovascular limits.', instructor: 'David Chen', schedule: 'Mon, Fri @ 5:00 PM', difficulty: 'Intermediate', imageUrl: '/images/spin_revolution.jpg' },
    { id: 6, title: 'Restorative Yoga', description: 'Unwind and release tension with this gentle, slow-paced yoga class using props for deep relaxation.', instructor: 'Maria Garcia', schedule: 'Sun @ 4:00 PM', difficulty: 'Beginner', imageUrl: '/images/restorative-yoga.jpg' },
];
