export interface Skill {
  name: string;
  category: 'data-engineering' | 'etl' | 'cloud' | 'ai' | 'databases' | 'domain' | 'leadership';
  proficiency: number; // 0 - 100
  experienceYears: number;
  iconName: string;
  isAiRelated?: boolean;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  client?: string;
  domain: string;
  duration: string;
  period: string; // e.g. "May 2025 – Present"
  isCurrent?: boolean;
  isOnsite?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'data-migration' | 'edw' | 'insurance' | 'ai-automation' | 'egov';
  client: string;
  domain: string;
  duration: string;
  overview: string;
  businessProblem: string;
  architectureDescription: string;
  responsibilities: string[];
  toolsAndTech: string[];
  challengesAndSolutions: string;
  outcomeAndImpact: string;
  featured?: boolean;
  badge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  isAiRelated?: boolean;
  badgeText?: string;
  verifyUrl?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  deliverables: string[];
  targetAudience: string;
}

export interface RecruiterPerspective {
  id: string;
  targetRole: string; // e.g. "CTOs & Enterprise Architects"
  icon: string;
  keyTakeaway: string;
  proofPoints: string[];
  recommendedQuestion: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
  quote: string;
  avatarUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  isPlaceholder?: boolean;
}
