import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';
import type { Project } from '../../models/project.ts';

type ResumeProjectProperties = {
  projects: Project[];
  experienceRole?: string;
  highlightedSkills?: string[];
};

const normalizeRole = (role?: string) => (role ?? '').trim().toLowerCase();

export const ResumeProjects: React.FC<ResumeProjectProperties> = ({
  projects,
  experienceRole,
  highlightedSkills = [],
}) => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());
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
    setExpandedIndices((previousSet) => {
      const updated = new Set(previousSet);
      if (updated.has(index)) {
        updated.delete(index);
        setManuallyCollapsed((previousCollapsed) => new Set(previousCollapsed).add(index));
      } else {
        updated.add(index);
        setManuallyCollapsed((previousCollapsed) => {
          const clone = new Set(previousCollapsed);
          clone.delete(index);
          return clone;
        });
      }
      return updated;
    });
  };

  useEffect(() => {
    setExpandedIndices((previousSet) => {
      const updated = new Set(previousSet);
      for (const index of highlightedIndices) {
        if (!manuallyCollapsed.has(index)) {
          updated.add(index);
        }
      }
      return updated;
    });
  }, [highlightedIndices, manuallyCollapsed]);

  if (projects.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <h2 className="text-base font-semibold mt-4 mb-2">Projects</h2>
      <section className="text-left">
        <div className="pl-4 sm:pl-5">
          <ul className="list-disc list-outside space-y-3 pl-5">
            {projects.map((project, index) => {
              const isExpanded = expandedIndices.has(index);
              const normalizedProjectRole = normalizeRole(project.role);
              const shouldShowRole =
                normalizedProjectRole.length > 0 &&
                normalizedProjectRole !== normalizedExperienceRole;
              const doesMatchHighlightedSkill = highlightedIndices.has(index);

              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => toggleDescription(index)}
                    className={`btn-link mt-1 w-full bg-transparent border-none text-left ${
                      doesMatchHighlightedSkill ? 'text-teal-600 dark:text-teal-300' : ''
                    }`}
                  >
                    <div className="flex items-baseline gap-2 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
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
                      isExpanded ? 'max-h-screen mt-2' : 'max-h-0'
                    } ${
                      doesMatchHighlightedSkill
                        ? 'border-l-2 border-teal-400/70 pl-3'
                        : 'border-l-2 border-transparent'
                    }`}
                  >
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <MarkdownRenderer content={project.description} />
                    </div>
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
