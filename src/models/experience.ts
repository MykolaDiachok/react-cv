import type { Project } from './project.ts';

export interface Experience {
  id: string; // Unique identifier for the experience
  jobTitle: string;
  companyName: string;
  companyNameLocal?: string;
  companyDescription?: string;
  location?: string;
  link?: string;
  startDate: Date;
  endDate?: Date;
  shotDescription: string;
  fullDescription?: string;
  keyFeatures?: string[];
  projects?: Project[];
  skills?: string[];
}
