import React from 'react';
import { ResumeProvider } from '../../providers/resume-provider.tsx';
import { useResume } from '../../providers/use-resume.ts';
import { ResumeProjects } from '../blocks/resume-projects.tsx';
import { SiteHeader } from '../shared/site-header.tsx';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';

export const ProjectPage: React.FC = () => (
  <ResumeProvider>
    <ProjectPageBody />
  </ResumeProvider>
);

const ProjectPageBody: React.FC = () => {
  const headingId = 'project-workspace-heading';
  const { resume } = useResume();
  const topLevelProjects = resume.projects ?? [];
  const hasProjects = topLevelProjects.length > 0;
  const introMarkdown = `Work as an engineer where you are in charge of your own projects.

This portfolio shows a selection of independent projects and initiatives that I have developed and implemented outside of my normal job responsibilities.

Each project started with a real problem, or research into how buildings are made, or the need to try out an idea in a situation that was almost like the real thing before expanding it further. I created these systems on my own, and many of them are now ready to be used by businesses. They can handle real users, transactional data, hardware integrations, and complex operational requirements.

In all of these projects, I was responsible for the technical side of things. This included designing the solutions and the system, as well as implementing it, setting it up, monitoring it, and making improvements over time. The focus was always on reliability, data integrity, performance and maintainability, rather than short-lived prototypes.

Some of these projects later became examples to be followed or plans for larger platforms, internal systems, or long-term business solutions. Others were more technical and showed me new ways of designing systems, making them able to deal with more users, and how to keep systems working well in big business.`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <main
        className="mx-auto max-w-7xl px-4 pt-20 sm:pt-24 pb-24 text-left"
        aria-labelledby={headingId}
      >
        <article
          aria-labelledby={headingId}
          className="rounded-2xl border border-teal-200/40 bg-white/90 p-6 shadow-sm dark:border-teal-800/40 dark:bg-gray-900/60"
        >
          <header>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-500 dark:text-teal-300">
              Projects
            </p>
            <h1
              id={headingId}
              className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100"
            >
              Project Portfolio
            </h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              <MarkdownRenderer content={introMarkdown} />
            </div>
          </header>

          {hasProjects ? (
            <div className="mt-6 space-y-10">
              <section aria-label="Cross-company initiatives" className="space-y-3">
                <ResumeProjects projects={topLevelProjects} showDetails />
              </section>
            </div>
          ) : (
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">
              Project details will appear here once added to the resume data source.
            </p>
          )}
        </article>
      </main>
    </div>
  );
};
