import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locale/en/translation.json';

export async function initI18n() {
  if (i18n.isInitialized) return i18n;

  // eslint-disable-next-line import/no-named-as-default-member
  await i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: { translation: en },
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
}

// Best-effort init for runtime environments that support top-level await.
// For SSR/build, consumers can call initI18n() explicitly.
// eslint-disable-next-line unicorn/prefer-top-level-await
void initI18n();

export { default } from 'i18next';
