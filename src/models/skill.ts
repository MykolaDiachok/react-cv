export interface Skill {
  id: string; // Unique identifier for the skill
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience: number;
  description?: string;
  category?: string; // e.g., "Programming", "Design", "Management"
  lastUsed?: Date; // Optional field to track when the skill was last used
  certifications?: string[]; // Optional field to list any certifications related to the skill
  projects?: string[]; // Optional field to list projects where the skill was applied
}
