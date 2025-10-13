
export interface NavLink {
  label: string;
  href: string;
}

export interface Program {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  bio: string;
  certifications: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface MembershipPlan {
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

export interface GymClass {
  id: number;
  title: string;
  description: string;
  instructor: string;
  schedule: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
}
