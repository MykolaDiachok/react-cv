import { useResume } from '../../providers/use-resume.ts';
import { Fragment } from 'react';

const formatMonthYear = (date: Date) =>
  date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });

export const ResumeEducation = () => {
  const { resume } = useResume();
  const { educations } = resume;

  if (!educations?.length) return;

  return (
    <Fragment>
      <section className="bg-slate-900/50 rounded-lg p-6 mb-6">
        <h2 className="border-b-2 border-slate-700 pb-2 mb-4">Education</h2>
        <ul className="space-y-5">
          {educations.map((edu, index) => {
            const start = formatMonthYear(edu.startDate);
            const end = edu.endDate ? formatMonthYear(edu.endDate) : 'Present';

            return (
              <li className="" key={index}>
                <h3 className="not-first:mt-5">{edu.degree}</h3>

                <p className="text-sm text-slate-300 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-medium">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                      >
                        {edu.institutionName}
                      </a>
                    ) : (
                      edu.institutionName
                    )}
                  </span>

                  <span aria-hidden="true" className="text-slate-500">
                    ·
                  </span>
                  <span>
                    {start} – {end}
                  </span>
                </p>

                {edu.location && <p className="text-xs text-slate-400 mt-1">{edu.location}</p>}

                {edu.description && <p>{edu.description}</p>}
              </li>
            );
          })}
        </ul>
      </section>
    </Fragment>
  );
};
