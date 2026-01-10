import React from 'react';
import { ResumeDescriptionPrint } from '../print-blocks/resume-description-print.tsx';
import { ResumeEducationPrint } from '../print-blocks/resume-education-print.tsx';
import { ResumeExperiencePrint } from '../print-blocks/resume-experiences-print.tsx';
import { ResumeHeaderPrint } from '../print-blocks/resume-header-print.tsx';

/**
 * Print-only body for the resume.
 *
 * Kept as a separate component so the page wrapper can stay minimal (provider + body),
 * while the print layout remains easy to evolve without touching routing.
 *
 * Styling is controlled primarily by `src/styles/print-resume.css`.
 */
export const ResumePrintPageBody: React.FC = () => (
  <div className="resume-print resume-print--pdf">
    <main className="resume-print__container" aria-label="Resume PDF view">
      {/* 1) Header: photo on the left, contacts on the right */}
      <header className="resume-print__header">
        <ResumeHeaderPrint />
      </header>

      {/* 2) Description */}
      <section className="resume-print__description">
        <ResumeDescriptionPrint />
      </section>

      {/* 3) Experience (descriptions + project names only) */}
      <section className="resume-print__experience">
        <ResumeExperiencePrint />
      </section>

      {/* 4) Education at the end */}
      <footer className="resume-print__education">
        <ResumeEducationPrint />
      </footer>
    </main>
  </div>
);
