import type { Experience } from '../../models/experience.ts';

// eslint-disable-next-line unicorn/prevent-abbreviations
export const DevPro: Experience = {
  id: 'devpro',
  jobTitle: 'Senior C# Developer',
  companyName: 'DevPro',
  companyNameLocal: 'DevPro',
  companyDescription:
    'DevPro is a leading provider of IT solutions for business, government, education, and healthcare sectors across the United States, the United Kingdom, and Canada.',
  location: 'Kyiv, Ukraine',
  startDate: new Date('2021-03-01'),
  endDate: new Date('2021-08-01'),
  link: 'https://dev.pro/',
  shotDescription: `
  My main responsibilities were to develop the design of applications, provide regular support/guidance to project teams, issue resolution, and execution. The legacy system is one of the leaders in the US and Canada for the restaurant business which includes many subsystems for different areas of the business
  `,
  keyFeatures: [
    'Analyzed current state architecture and designed future state architecture also analyzed current projects portfolio and provided recommended actions for the in-flight and future planned projects as part of the transformation program planning.',
    'Worked with a talented team that adheres to an agile development methodology and ensures the proper use of test-driven development for producing high-quality output',
    'Designed high-quality architectures that meet customer requirements and are consistent with enterprise architectural standards',
    'Supported and developed a large highly loaded enterprise project',
    'Maintained Legacy Systems',
    'Refactored Legacy Code Base',
    'Performed Code Review and refactoring and addressing performance and security issues.',
    'Implemented documents for solution architectures',
  ],
  skills: ['.Net', 'c#', 'core', 'api', 'angular', 'azure-devops', 'ci/cd', 'vb', 'sql'],
  projects: [
    {
      id: 'support-visual-basic',
      name: 'Legacy Enterprise System Support (VB / .NET)',
      description: `Long-running, mission-critical enterprise system used by restaurant chains across the US and Canada. The platform consisted of multiple tightly coupled subsystems covering operations, billing, reporting, integrations, and back-office workflows, with high availability and performance requirements.`,
      role: 'Full Stack Developer',
      skills: ['.Net', 'vb', 'tfs', 'sql'],
    },
    {
      id: 'migration-to-modern-platform',
      name: 'Legacy-to-Modern Platform Transformation (API / Angular)',
      description: `Strategic transformation program to migrate a monolithic legacy platform to a modern, service-oriented architecture with a web-based frontend, while continuing to support existing customers and live operations.`,
      role: 'Full Stack Developer',
      skills: ['.Net', 'c#', 'core', 'api', 'angular', 'azure-devops', 'ci/cd'],
    },
  ],
};
