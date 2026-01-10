import React, { Fragment } from 'react';
import { useResume } from '../../providers/use-resume.ts';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';
import type { Experience } from '../../models/experience.ts';

const formatDate = (date: Date) => new Date(date).toLocaleDateString();

const calculateDuration = (startDateString: Date, endDateString?: Date | null): string => {
  const startDate = new Date(startDateString);
  const endDate = endDateString ? new Date(endDateString) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (endDate.getDate() < startDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0 && months === 0) {
    months = 1;
  }

  const yearString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthString = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  return [yearString, monthString].filter(Boolean).join(' ');
};

const ExperienceProjects: React.FC<{ experience: Experience }> = ({ experience }) => {
  const projects = (experience.projects ?? []).slice(0, 2);
  if (projects.length === 0) return;

  return (
    <Fragment>
      <h4 className="resume-print__subheading">Projects</h4>
      <ul className="resume-print__project-list">
        {projects.map((project) => (
          <li key={project.id} className="resume-print__project-item">
            <p className="resume-print__project-name">{project.name}</p>
            <div className="resume-print__project-description">
              <MarkdownRenderer content={project.description} />
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export const ResumeExperiencePrint = () => {
  const { resume } = useResume();
  const { experiences } = resume;

  if (!experiences?.length) return;

  const visibleExperiences = experiences.slice(0, 5);

  return (
    <Fragment>
      <div className="resume-print__section">
        <h2 className="resume-print__heading">Experience</h2>

        <ul className="resume-print__experience-list">
          {visibleExperiences.map((exp) => (
            <li key={exp.id} className="resume-print__experience-item">
              <div className="resume-print__experience-header">
                <h3 className="resume-print__experience-title">{exp.jobTitle}</h3>
                <span className="resume-print__meta">
                  {formatDate(exp.startDate)} – {exp.endDate ? formatDate(exp.endDate) : 'Present'}{' '}
                  ({calculateDuration(exp.startDate, exp.endDate)})
                </span>
              </div>

              <p className="resume-print__company">
                {exp.companyName}
                {exp.companyNameLocal ? ` (${exp.companyNameLocal})` : ''}
                {exp.location ? ` - ${exp.location}` : ''}
              </p>

              <div className="resume-print__prose">
                <MarkdownRenderer content={exp.shotDescription} />
              </div>

              <ExperienceProjects experience={exp} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
