import type { Project } from './project.ts';

export interface Experience {
  id: string; // Unique identifier for the experience
  jobTitle: string;
  companyName: string;
  location?: string; // Optional field for the location of the job
  startDate: Date;
  endDate?: Date;
  description: string;
  projects?: Project[];
}
