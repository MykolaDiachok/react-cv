import type { Experience } from './experience.ts';
import type { Skill } from './skill.ts';
import type { Language } from './language.ts';
import type { Education } from './education.ts';

export interface Cv {
  id: string; // Unique identifier for the CV
  name: string; // Full name of the individual
  title: string; // Professional title or position
  dateOfBirth?: Date; // Optional field for date of birth
  email: string; // Email address for contact
  phone?: string; // Optional field for phone number
  location?: string; // Location where the individual resides or works
  summary?: string; // Optional field for a brief summary or objective statement
  experiences: Experience[]; // List of work experiences
  skills: Skill[]; // List of skills
  languages?: Language[]; // Optional field for languages spoken
  educations?: Education[];
  description?: string;
}
