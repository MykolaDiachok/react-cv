import { useResume } from '../../providers/use-resume.ts';
import { Fragment } from 'react';

export const ResumeEducation = () => {
  const { resume } = useResume();
  const { educations } = resume;

  if (!educations?.length) return;

  return (
    <Fragment>
      <section className="bg-slate-900/50 rounded-lg p-6 mb-6">
        <h2 className="border-b-2 border-slate-700 pb-2 mb-4">Education</h2>
        <ul className="space-y-5">
          {educations.map((edu, index) => (
            <li className="" key={index}>
              <h3 className="not-first:mt-5">{edu.degree}</h3>
              <p>
                {edu.institutionName} - {edu.location}
              </p>
              <p>
                {edu.startDate.toLocaleDateString()} –{' '}
                {edu.endDate?.toLocaleDateString() ?? 'Present'}
              </p>
              {edu.description && <p>{edu.description}</p>}
              {edu.link && (
                <p className="mt-1 text-sm">
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    Visit website
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};
