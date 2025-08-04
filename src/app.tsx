import './app.css';
import { ResumePage } from './components/resume-page.tsx';
import { Fragment } from 'react';
import { SiteHeader } from './components/shared/site-header.tsx';

function App() {
  return (
    <Fragment>
      <SiteHeader />
      <ResumePage />
    </Fragment>
  );
}

export default App;
