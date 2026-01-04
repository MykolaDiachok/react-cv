import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { initI18n } from '../i18n/index.ts';
import App from '../app.tsx';

async function main() {
  await initI18n();

  const root = document.querySelector('#root');
  if (!root) return;

  hydrateRoot(
    root,
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void main();
