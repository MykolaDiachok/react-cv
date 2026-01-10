import React from 'react';
import { useResume } from '../../providers/use-resume.ts';

const formatMonthYear = (date: Date) =>
  date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });

export const ResumeEducationPrint: React.FC = () => {
  const { resume } = useResume();
  const { educations } = resume;

  if (!educations?.length) return;

  return (
    <div className="resume-print__section">
      <h2 className="resume-print__heading">Education</h2>

      <ul className="resume-print__education-list">
        {educations.map((edu) => {
          const start = formatMonthYear(edu.startDate);
          const end = edu.endDate ? formatMonthYear(edu.endDate) : 'Present';

          return (
            <li key={edu.id} className="resume-print__education-item">
              <h3 className="resume-print__education-degree">{edu.degree}</h3>

              <p className="resume-print__education-meta">
                <span className="resume-print__education-institution">
                  {edu.link ? (
                    <a href={edu.link} target="_blank" rel="noopener noreferrer">
                      {edu.institutionName}
                    </a>
                  ) : (
                    edu.institutionName
                  )}
                </span>

                <span aria-hidden="true" className="resume-print__separator">
                  ·
                </span>
                <span>
                  {start} – {end}
                </span>
              </p>

              {edu.location && <p className="resume-print__education-location">{edu.location}</p>}

              {edu.description && <p className="resume-print__prose">{edu.description}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
