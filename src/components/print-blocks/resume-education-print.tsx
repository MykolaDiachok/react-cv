import React from 'react';
import { useResume } from '../../providers/use-resume.ts';

const formatDate = (date: Date) => new Date(date).toLocaleDateString();

export const ResumeEducationPrint: React.FC = () => {
  const { resume } = useResume();
  const { educations } = resume;

  if (!educations?.length) return;

  return (
    <div className="resume-print__section">
      <h2 className="resume-print__heading">Education</h2>

      <ul className="resume-print__education-list">
        {educations.map((edu) => (
          <li key={edu.id} className="resume-print__education-item">
            <div className="resume-print__education-header">
              <h3 className="resume-print__education-degree">{edu.degree}</h3>
              <span className="resume-print__meta">
                {formatDate(edu.startDate)} – {edu.endDate ? formatDate(edu.endDate) : 'Present'}
              </span>
            </div>

            <p className="resume-print__education-school">
              {edu.institutionName}
              {edu.location ? ` - ${edu.location}` : ''}
            </p>

            {edu.description && <p className="resume-print__prose">{edu.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};
