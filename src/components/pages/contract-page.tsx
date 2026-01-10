import React from 'react';
import { ResumeProvider } from '../../providers/resume-provider.tsx';
import { SiteHeader } from '../shared/site-header.tsx';
import { MarkdownRenderer } from '../shared/markdown-renderer.tsx';
import { useResume } from '../../providers/use-resume.ts';
import mykolaUrl from '../../assets/mykola-icon.png?url';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const ContractPage: React.FC = () => (
  <ResumeProvider>
    <ContractPageBody />
  </ResumeProvider>
);

const ContractPageBody: React.FC = () => {
  const headingId = 'contract-workspace-heading';
  const { resume } = useResume();
  const { name, title, location, email, phone } = resume;

  const formattedPhone = (() => {
    const phoneNumber = parsePhoneNumberFromString(phone ?? '', 'HR');
    return phoneNumber?.formatInternational() ?? phone;
  })();

  const aboutMeMarkdown = `### About me
I’m a reliable, accountable engineer who cares about outcomes-not just shipping code. I enjoy listening first, understanding the business context, and then turning that understanding into practical, maintainable solutions.

I’m at my best when I can help a team improve the way they deliver value: simplifying workflows, removing bottlenecks, automating repetitive steps, and keeping quality high.

### How I work
- I listen carefully, ask clarifying questions, and help stakeholders turn ideas into actionable requirements.
- I translate “we need it to work” into a clear delivery plan: MVP → iterations → stabilization.
- I communicate transparently: progress, risks, trade-offs, and expectations-no surprises.

### What I like improving
- **Business processes:** simplification, automation, less manual work.
- **Quality & reliability:** testing, monitoring, safe releases.
- **Performance & cost:** faster systems, optimized queries, and a better time-to-market.

### Why this page exists
This is my **Contract Workspace**. Over time, it will include demos and notes about contract workflow automation, data validation, and practical AI-assisted approaches. If you’d like to discuss collaboration, feel free to reach out using the contact details below.`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pt-14 pb-24 sm:pt-16 text-left">
        <section
          aria-labelledby={headingId}
          className="rounded-2xl border border-teal-200/40 bg-white/90 p-6 shadow-sm dark:border-teal-800/40 dark:bg-gray-900/60"
        >
          <header>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-500 dark:text-teal-300">
              Contracts
            </p>
            <h1
              id={headingId}
              className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100"
            >
              Contract Workspace
            </h1>

            <div className="mt-5 flex flex-col gap-4 rounded-xl border border-teal-200/40 bg-white/60 p-4 dark:border-teal-800/40 dark:bg-gray-950/20 sm:flex-row sm:items-center">
              <img
                src={mykolaUrl}
                className="h-16 w-16 rounded-full object-cover aspect-square"
                alt={name}
                loading="lazy"
                decoding="async"
              />

              <div className="min-w-0">
                <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{name}</p>
                <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">{title}</p>

                {(location || email || phone) && (
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700 dark:text-gray-200">
                    {location && <span className="truncate">{location}</span>}
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        className="text-teal-700 hover:underline dark:text-teal-300 break-all"
                      >
                        {email}
                      </a>
                    )}
                    {phone && (
                      <a
                        href={`tel:${phone}`}
                        className="text-teal-700 hover:underline dark:text-teal-300"
                      >
                        {formattedPhone}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
              <MarkdownRenderer content={aboutMeMarkdown} />
            </div>
          </header>
        </section>
      </main>
    </div>
  );
};
