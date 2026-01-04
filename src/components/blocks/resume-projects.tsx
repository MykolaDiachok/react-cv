import React, { Fragment, useMemo, useState } from 'react';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';
import type { Project } from '../../models/project.ts';

type ResumeProjectProperties = {
  projects: Project[];
  experienceRole?: string;
};

const normalizeRole = (role?: string) => (role ?? '').trim().toLowerCase();

export const ResumeProjects: React.FC<ResumeProjectProperties> = ({ projects, experienceRole }) => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const normalizedExperienceRole = useMemo(() => normalizeRole(experienceRole), [experienceRole]);

  if (!projects?.length) return;

  const toggleDescription = (index: number) => {
    setExpandedIndices((previousIndices) => {
      if (previousIndices.includes(index)) {
        return previousIndices.filter((index_) => index_ !== index);
      }
      return [...previousIndices, index];
    });
  };

  return (
    <Fragment>
      <h2 className="text-base font-semibold mt-4 mb-2">Projects</h2>
      <section className="text-left">
        <div className="pl-4 sm:pl-5">
          <ul className="list-disc list-outside space-y-3 pl-5">
            {projects.map((project, index) => {
              const isExpanded = expandedIndices.includes(index);
              const normalizedProjectRole = normalizeRole(project.role);
              const shouldShowRole =
                normalizedProjectRole.length > 0 &&
                normalizedProjectRole !== normalizedExperienceRole;

              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => toggleDescription(index)}
                    className="btn-link mt-1 w-full bg-transparent border-none text-left"
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
