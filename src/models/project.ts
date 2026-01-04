export interface Project {
  id: string; // Unique identifier for the project
  name: string;
  description: string;
  startDate?: Date;
  endDate?: Date; // Optional field for ongoing projects
  technologies?: string[]; // List of technologies used in the project
  role?: string; // Role in the project (e.g., Developer, Designer, Manager)
  link?: string; // Optional field for a link to the project (e.g., GitHub, website)
  teamSize?: number; // Optional field to indicate the size of the team
  achievements?: string[]; // Optional field to list any notable achievements or outcomes from the project
  challenges?: string[]; // Optional field to describe any challenges faced during the project
  impact?: string; // Optional field to describe the impact of the project (e.g.,
  skills?: string[];
}
