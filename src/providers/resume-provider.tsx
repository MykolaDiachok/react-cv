import React, { createContext, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Cv } from '../models/cv.ts';
import { cvEn } from '../data/cv-en.ts';

type ResumeContextValue = {
  resume: Cv;
  language: string;
  setLanguage: (lang: string) => void;
};

const ResumeContext = createContext<ResumeContextValue | undefined>(undefined);

const cvs: Record<string, Cv> = {
  en: cvEn,
};

export const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  const language = i18n.language;
  const setLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  const resume = useMemo(() => cvs[language] ?? cvEn, [language]);

  return (
    <ResumeContext.Provider value={{ resume, language, setLanguage }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = (): ResumeContextValue => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error('useResumeContext must be used inside ResumeProvider');
  return context;
};
