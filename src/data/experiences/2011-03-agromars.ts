import type { Experience } from '../../models/experience.ts';

export const Agromars: Experience = {
  id: 'agromars',
  jobTitle: 'CIO',
  companyName: 'Agromars',
  companyNameLocal: 'Агромарс',
  companyDescription:
    'Agromars was a leading provider of agricultural machinery and equipment in Ukraine.',
  location: 'Kyiv, Ukraine',
  startDate: new Date('2011-03-01'),
  endDate: new Date('2011-10-01'),
  link: 'https://agromars.com/',
  shotDescription: `As CIO at Agromars, I was responsible for maintaining and evolving the company's IT landscape to support large-scale manufacturing operations. I ensured stable 24/7 operation of core business systems, led infrastructure projects, and managed a multidisciplinary IT team.`,
  keyFeatures: [
    'Supported the existing IT infrastructure.',
    'Supported the 1C: Enterprise 8.1 Manufacturing Enterprise Management system.',
    'Customized 1C configurations according to business needs.',
    'Optimized and accelerated system performance for 24/7 operation under high loads.',
    'Led the migration of the system to 1C 8.2.',
    'Integrated 1C with the accounting system Intalev Corporate Finance, including configuration integration and exchange setup.',
    'Developed data exchange systems between subsidiaries using direct SQL requests.',
    'Performed ongoing optimization of system performance.',
    'Led the start-up of a Data Center based on HP Blade Server.',
    'Supported the launch of a new slaughtering shop from the IT side.',
    'Designed the project for connecting remote offices.',
    'Designed the project for automation of reception and accounting of bird quantities.',
    'Designed the project for automation and processing of final production.',
    'Conducted search, selection, and onboarding of IT personnel.',
    'Managed an IT team of 15 people.',
  ],
};
