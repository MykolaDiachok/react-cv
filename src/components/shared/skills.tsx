import React, { Fragment } from 'react';

type SkillsProperties = {
  skills: string[];
  title?: string;
  selectedSkills?: Set<string>;
  onToggle?: (skill: string) => void;
};

export const Skills: React.FC<SkillsProperties> = ({
  skills,
  title = 'Skills',
  selectedSkills,
  onToggle,
}) => {
  if (!skills?.length) return;

  return (
    <Fragment>
      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill}>
            {onToggle ? (
              <button
                type="button"
                onClick={() => onToggle(skill)}
                aria-pressed={selectedSkills?.has(skill) ?? false}
                className={`w-full text-left rounded-lg border px-3 py-2 text-xs font-medium break-words transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:focus-visible:ring-teal-300 ${
                  selectedSkills?.has(skill)
                    ? 'border-teal-500 bg-teal-50 text-teal-900 dark:border-teal-300 dark:bg-teal-900/40 dark:text-teal-100 shadow-sm'
                    : 'border-gray-200 bg-white/70 text-gray-800 hover:border-teal-400 hover:text-teal-800 dark:border-gray-700 dark:bg-gray-900/30 dark:text-gray-100 dark:hover:border-teal-400 dark:hover:text-teal-100'
                }`}
              >
                {skill}
              </button>
            ) : (
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/30 px-3 py-2 text-xs font-medium text-gray-800 dark:text-gray-100 break-words">
                {skill}
              </div>
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};
