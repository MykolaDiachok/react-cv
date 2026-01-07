import React, { Fragment, useMemo, useState } from 'react';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';
import type { Project } from '../../models/project.ts';

type ResumeProjectProperties = {
  projects: Project[];
  experienceRole?: string;
  highlightedSkills?: string[];
  showDetails?: boolean;
};

const normalizeRole = (role?: string) => (role ?? '').trim().toLowerCase();

export const ResumeProjects: React.FC<ResumeProjectProperties> = ({
  projects,
  experienceRole,
  highlightedSkills = [],
  showDetails = false,
}) => {
  const [expandedByUser, setExpandedByUser] = useState<Set<number>>(new Set());
  const [manuallyCollapsed, setManuallyCollapsed] = useState<Set<number>>(new Set());

  const normalizedExperienceRole = useMemo(() => normalizeRole(experienceRole), [experienceRole]);

  const highlightedIndices = useMemo(() => {
    if (highlightedSkills.length === 0) return new Set<number>();
    const normalizedSkills = new Set(
      highlightedSkills.map((skill) => skill.trim().toLowerCase()).filter(Boolean),
    );
    const indices = new Set<number>();

    let projectIndex = 0;
    for (const project of projects) {
      for (const skill of project.skills ?? []) {
        const normalizedSkill = skill.trim().toLowerCase();
        if (normalizedSkills.has(normalizedSkill)) {
          indices.add(projectIndex);
          break;
        }
      }
      projectIndex += 1;
    }

    return indices;
  }, [highlightedSkills, projects]);

  const toggleDescription = (index: number) => {
    const isAutoExpanded = highlightedIndices.has(index) && !manuallyCollapsed.has(index);
    const isUserExpanded = expandedByUser.has(index);
    const isCurrentlyExpanded = isAutoExpanded || isUserExpanded;

    if (isCurrentlyExpanded) {
      setExpandedByUser((previous) => {
        const clone = new Set(previous);
        clone.delete(index);
        return clone;
      });

      if (isAutoExpanded) {
        setManuallyCollapsed((previous) => new Set(previous).add(index));
      }
    } else {
      setExpandedByUser((previous) => new Set(previous).add(index));
      setManuallyCollapsed((previous) => {
        if (!previous.has(index)) return previous;
        const clone = new Set(previous);
        clone.delete(index);
        return clone;
      });
    }
  };

  if (projects.length === 0) {
    return;
  }

  return (
    <Fragment>
      <h2 className="text-base font-semibold mt-4 mb-2">Projects</h2>
      <section className="text-left">
        <div className="pl-0 sm:pl-1">
          <ul className="space-y-4">
            {projects.map((project, index) => {
              const isAutoExpanded = highlightedIndices.has(index) && !manuallyCollapsed.has(index);
              const isExpanded = isAutoExpanded || expandedByUser.has(index);
              const normalizedProjectRole = normalizeRole(project.role);
              const shouldShowRole =
                normalizedProjectRole.length > 0 &&
                normalizedProjectRole !== normalizedExperienceRole;
              const doesMatchHighlightedSkill = highlightedIndices.has(index);

              return (
                <li
                  key={index}
                  className={`rounded-2xl border border-slate-200/60 bg-white/90 p-4 shadow-sm transition-colors dark:border-slate-800/60 dark:bg-slate-900/60 ${
                    doesMatchHighlightedSkill
                      ? 'ring-1 ring-teal-300/60 dark:ring-teal-500/40'
                      : 'hover:border-teal-200/60 dark:hover:border-teal-500/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleDescription(index)}
                    className={`btn-link mt-1 w-full bg-transparent border-none text-left ${
                      doesMatchHighlightedSkill ? 'text-teal-600 dark:text-teal-300' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline gap-2 min-w-0 text-left">
                      <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 truncate">
                        {project.name}
                      </h3>

                      {shouldShowRole && (
                        <Fragment>
                          <span
                            aria-hidden="true"
                            className="text-xs text-gray-400 dark:text-gray-500 shrink-0 whitespace-nowrap"
                          >
                            ·
                          </span>
                          <span className="text-xs text-gray-600 dark:text-gray-400 shrink-0 whitespace-nowrap">
                            <span className="text-gray-500 dark:text-gray-500">Role:</span>{' '}
                            {project.role}
                          </span>
                        </Fragment>
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-screen mt-3' : 'max-h-0'
                    }`}
                  >
                    <div
                      className={`rounded-xl border border-slate-100/60 bg-white/80 p-4 dark:border-slate-800/50 dark:bg-slate-900/40 ${
                        doesMatchHighlightedSkill ? 'shadow-inner shadow-teal-500/10' : ''
                      }`}
                    >
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <MarkdownRenderer content={project.description} />
                      </div>
                    </div>

                    {showDetails && (
                      <div className="mt-4 space-y-4">
                        {(project.skills?.length ?? 0) > 0 && (
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                              Skills
                            </p>
                            <div className="mt-1 flex flex-wrap gap-1.5">
                              {[
                                ...new Set(
                                  (project.skills ?? [])
                                    .map((skill) => skill.trim())
                                    .filter((skill) => skill.length > 0),
                                ),
                              ].map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded-full border border-teal-200/60 px-2 py-0.5 text-xs text-teal-700 dark:border-teal-700/60 dark:text-teal-200"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {(project.achievements?.length ?? 0) > 0 && (
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                              Key achievements
                            </p>
                            <ul className="mt-1 list-disc pl-5 text-sm text-gray-700 dark:text-gray-200">
                              {(project.achievements ?? []).map((achievement, achievementIndex) => (
                                <li key={achievementIndex}>
                                  <MarkdownRenderer content={achievement} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.impact && (
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                              Impact
                            </p>
                            <div className="mt-1 prose prose-sm dark:prose-invert max-w-none">
                              <MarkdownRenderer content={project.impact} />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};
