import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n/index';
import App from './app.tsx';

const appRoot = document.querySelector('#root');

if (appRoot) {
  createRoot(appRoot).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
