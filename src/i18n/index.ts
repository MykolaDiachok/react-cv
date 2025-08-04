import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locale/en/translation.json';

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

export { default } from 'i18next';
