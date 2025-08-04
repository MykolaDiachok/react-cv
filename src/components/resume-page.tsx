import { Component, Fragment } from 'react';
import { ResumeProvider } from './providers/resume-provider.tsx';
import { ResumeHeader } from './shared/resume-header.tsx';

export class ResumePage extends Component {
  render() {
    return (
      <Fragment>
        <ResumeProvider>
          <main className="max-w-5xl mx-auto px-4 py-6 space-y-8">
            <ResumeHeader></ResumeHeader>
          </main>
        </ResumeProvider>
      </Fragment>
    );
  }
}
