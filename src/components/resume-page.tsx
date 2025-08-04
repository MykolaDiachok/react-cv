import { Component, Fragment } from 'react';
import { ResumeProvider } from '../providers/resume-provider.tsx';
import { ResumeHeader } from './blocks/resume-header.tsx';
import { ResumeSummary } from './blocks/resume-summary.tsx';
import { ResumeEducation } from './blocks/resume-education.tsx';

export class ResumePage extends Component {
  render() {
    return (
      <Fragment>
        <ResumeProvider>
          <main className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-[2.5fr_3.5fr] gap-6 items-start">
              <div className="-ml-4 sm:-ml-6 space-y-6">
                <ResumeHeader />
                <ResumeEducation />
              </div>

              <ResumeSummary />
            </div>
          </main>
        </ResumeProvider>
      </Fragment>
    );
  }
}
