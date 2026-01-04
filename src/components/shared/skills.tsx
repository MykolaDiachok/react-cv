import React, { Fragment } from 'react';

type SkillsProperties = {
  skills: string[];
  title?: string;
};

export const Skills: React.FC<SkillsProperties> = ({ skills, title = 'Skills' }) => {
  if (!skills?.length) return;
  const maxLength = Math.max(...skills.map((s) => s.length));
  const minCellCh = Math.min(28, Math.max(16, maxLength + 4));

  return (
    <Fragment>
      <h3>{title}</h3>
      <div className="overflow-hidden">
        <div className="flex flex-wrap -m-[0.5px]">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-3 py-2 m-[0.5px] text-sm"
              style={{
                flex: `1 0 ${minCellCh}ch`,
                wordBreak: 'break-word',
              }}
              role="cell"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
