import React from 'react';
import { ResumeProvider } from '../../providers/resume-provider.tsx';
import { ResumePrintPageBody } from './resume-print-page-body.tsx';

/**
 * Print-friendly resume page.
 *
 * This page is meant to be opened in a new tab and printed/saved as PDF.
 * Styling is controlled primarily by `src/styles/print-resume.css`.
 */
export const ResumePrintPage: React.FC = () => (
  <ResumeProvider>
    <ResumePrintPageBody />
  </ResumeProvider>
);
