import { useResume } from '../../providers/use-resume.ts';
import { Fragment, useState } from 'react';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';
import { Skills } from '../shared/skills.tsx';
import { ResumeProjects } from './resume-projects.tsx';

type ProjectWithSkills = { skills?: string[] | null }; // narrow helper type keeps aggregator lean

type ProjectWithSkillsAndName = ProjectWithSkills & { name?: string };

const collectUniqueSkills = (
  experienceSkills?: string[] | null,
  projects?: Array<ProjectWithSkillsAndName | null | undefined> | null,
): string[] => {
  const orderedSkills: string[] = [];
  const seen = new Set<string>();

  const addSkill = (skill?: string) => {
    if (!skill) return;
    const trimmed = skill.trim();
    if (!trimmed || seen.has(trimmed)) return;
    seen.add(trimmed);
    orderedSkills.push(trimmed);
  };

  for (const skill of experienceSkills ?? []) {
    addSkill(skill);
  }

  for (const project of projects ?? []) {
    if (!project?.skills) continue;
    for (const skill of project.skills) {
      addSkill(skill);
    }
  }

  return orderedSkills;
};

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

export const ResumeExperience = () => {
  const { resume } = useResume();
  const { experiences } = resume;

  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set([0]));
  const [selectedSkills, setSelectedSkills] = useState<Record<number, Set<string>>>({});

  if (!experiences?.length) return;

  const toggleFeatures = (index: number) => {
    setExpandedIndices((previousIndices) => {
      const newIndices = new Set(previousIndices);
      if (newIndices.has(index)) {
        newIndices.delete(index);
      } else {
        newIndices.add(index);
      }
      return newIndices;
    });
  };

  return (
    <Fragment>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Experience
        </h2>
        <section className="text-left">
          <ul className="space-y-4">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndices.has(index);
              const hasKeyFeatures = !!exp.keyFeatures && exp.keyFeatures.length > 0;
              const aggregatedSkills = collectUniqueSkills(exp.skills, exp.projects);
              const skillsForExperience = selectedSkills[index] ?? new Set<string>();

              return (
                <li
                  key={index}
                  className="rounded-xl bg-white/80 dark:bg-gray-900/40 px-4 py-3 sm:px-5 sm:py-4"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {exp.jobTitle}
                        </h3>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {new Date(exp.startDate).toLocaleDateString()} –{' '}
                          {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
                          {' ('}
                          {calculateDuration(exp.startDate, exp.endDate)}
                          {')'}
                        </span>
                      </div>
                      <p
                        className="mt-1 text-sm font-medium text-teal-700 dark:text-teal-300"
                        title={exp.companyDescription}
                      >
                        {exp.companyName} {exp.companyNameLocal ? `(${exp.companyNameLocal})` : ''}{' '}
                        {exp.location ? `- ${exp.location}` : ''}
                      </p>
                      {exp.link && (
                        <p className="mt-1 text-xs sm:text-sm">
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 dark:text-teal-400 hover:underline"
                          >
                            Visit website
                          </a>
                        </p>
                      )}
                      <div className="mt-3 prose prose-sm dark:prose-invert max-w-none">
                        <MarkdownRenderer content={exp.shotDescription} />
                      </div>

                      {hasKeyFeatures && (
                        <div className="mt-3">
                          <button
                            type="button"
                            onClick={() => toggleFeatures(index)}
                            className="btn-link bg-transparent border-none"
                          >
                            {isExpanded ? 'Hide more' : 'More'}
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-200 ${
                              isExpanded ? 'max-h-500 mt-2' : 'max-h-0'
                            }`}
                          >
                            <div className="prose prose-sm dark:prose-invert max-w-none">
                              <ul className="list-disc list-outside space-y-1 pl-5">
                                {exp.keyFeatures!.map((feature, index_) => (
                                  <li key={index_}>
                                    <MarkdownRenderer content={feature} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-3">
                              <ResumeProjects
                                projects={exp.projects ?? []}
                                experienceRole={exp.jobTitle}
                                highlightedSkills={[...skillsForExperience]}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {aggregatedSkills.length > 0 && (
                      <div className="w-full lg:w-64 xl:w-72">
                        <Skills
                          skills={aggregatedSkills}
                          selectedSkills={skillsForExperience}
                          onToggle={(skill) => {
                            let updatedSelection: Set<string> | undefined;

                            setSelectedSkills((previousSkills) => {
                              const next = new Map<number, Set<string>>();
                              for (const [key, value] of Object.entries(previousSkills)) {
                                next.set(Number(key), new Set(value));
                              }

                              const currentSet = new Set(next.get(index) ?? new Set());
                              if (currentSet.has(skill)) {
                                currentSet.delete(skill);
                              } else {
                                currentSet.add(skill);
                              }

                              updatedSelection = currentSet;

                              if (currentSet.size > 0) {
                                next.set(index, currentSet);
                              } else {
                                next.delete(index);
                              }

                              return Object.fromEntries(next);
                            });

                            if ((updatedSelection?.size ?? 0) > 0) {
                              setExpandedIndices((previousIndices) => {
                                const newIndices = new Set(previousIndices);
                                newIndices.add(index);
                                return newIndices;
                              });
                            }
                          }}
                        />
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </Fragment>
  );
};
