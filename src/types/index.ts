export type Language = 'en' | 'pt';

export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
  features: string[];
}

export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  category: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quoteKey: string;
  name: string;
  roleKey: string;
  company: string;
  image: string;
}

export interface Stat {
  value: string;
  labelKey: string;
  suffix?: string;
}

export interface ProcessStep {
  number: string;
  titleKey: string;
  descKey: string;
  icon: string;
}
