import React from 'react';
import { useResume } from '../../providers/use-resume.ts';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';

export const ResumeDescriptionPrint: React.FC = () => {
  const { resume } = useResume();
  const { description } = resume;

  if (!description) return;

  return (
    <div className="resume-print__section">
      <h2 className="resume-print__heading">Summary</h2>
      <div className="resume-print__prose">
        <MarkdownRenderer content={description} />
      </div>
    </div>
  );
};
