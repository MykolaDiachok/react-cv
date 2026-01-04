import { useResume } from '../../providers/use-resume.ts';
import 'rehype-raw';
import 'highlight.js/styles/github.css';
import { Fragment } from 'react';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';

export const ResumeDescription = () => {
  const { resume } = useResume();
  const { description } = resume;

  return (
    <Fragment>
      <section className="bg-slate-900/50 rounded-lg p-6 mb-6">
        <h2 className="border-b-2 border-slate-700 pb-2 mb-4">Description</h2>
        <div className="prose prose-invert prose-slate max-w-none text-left">
          <MarkdownRenderer content={description ?? ''} />
        </div>
      </section>
    </Fragment>
  );
};
