
export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  number: string;
  year: string;
}

export interface Education {
  university: string;
  location: string;
  year: string;
  course: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: 'cloud' | 'code' | 'layers' | 'cpu';
}
