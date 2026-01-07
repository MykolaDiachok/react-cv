export interface Project {
  id: string; // Unique identifier for the project
  name: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  role?: string;
  link?: string;
  teamSize?: number;
  achievements?: string[];
  challenges?: string[];
  impact?: string;
  skills?: string[];
}
