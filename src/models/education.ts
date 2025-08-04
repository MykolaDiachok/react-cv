export interface Education {
  id: string; // Unique identifier for the education record
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  location?: string;
}
