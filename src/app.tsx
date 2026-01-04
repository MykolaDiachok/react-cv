import { Fragment, useEffect } from 'react';
import { initI18n } from './i18n/index.ts';
import { ResumePage } from './components/resume-page.tsx';
import { SiteHeader } from './components/shared/site-header.tsx';

function App() {
  useEffect(() => {
    void initI18n();
  }, []);

  return (
    <Fragment>
      <SiteHeader />
      <ResumePage />
    </Fragment>
  );
}

export default App;
