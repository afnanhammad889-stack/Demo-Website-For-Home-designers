export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: string;
  year: string;
  coverImage: string;
  heroImage: string;
  gallery: string[];
  description: string;
  approach: string;
  materials: string[];
  specs: {
    area: string;
    duration: string;
    scope: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  summary: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  project: string;
  year: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
