import { Component, Fragment } from 'react';
import { ResumeProvider } from '../providers/resume-provider.tsx';
import { ResumeHeader } from './blocks/resume-header.tsx';
import { ResumeDescription } from './blocks/resume-description.tsx';
import { ResumeEducation } from './blocks/resume-education.tsx';
import { ResumeExperience } from './blocks/resume-experiences.tsx';

export class ResumePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="pt-14 sm:pt-16 min-h-screen bg-slate-950 text-slate-100">
          <ResumeProvider>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between gap-3 mb-4 no-print">
                <h1 className="sr-only">Resume</h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <section className="sm:col-start-1 sm:row-start-1">
                  <ResumeHeader />
                  <ResumeEducation />
                </section>

                <aside className="sm:col-start-2 sm:row-start-1">
                  <ResumeDescription />
                </aside>

                <section className="col-span-full">
                  <ResumeExperience />
                </section>
              </div>
            </main>
          </ResumeProvider>
        </div>
      </Fragment>
    );
  }
}
