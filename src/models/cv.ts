import type { Experience } from './experience.ts';
import type { Skill } from './skill.ts';
import type { Language } from './language.ts';
import type { Education } from './education.ts';
import type { Project } from './project.ts';

export interface Cv {
  id: string;
  name: string;
  title: string;
  dateOfBirth?: Date;
  email: string;
  phone?: string;
  location?: string;
  summary?: string;
  experiences: Experience[];
  skills: Skill[];
  languages?: Language[];
  educations?: Education[];
  description?: string;
  projects?: Project[];
}
