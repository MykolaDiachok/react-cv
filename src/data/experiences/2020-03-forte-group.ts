import type { Experience } from '../../models/experience.ts';

export const ForteGroup: Experience = {
  id: 'forte-group',
  jobTitle: 'Senior .Net Developer',
  companyName: 'Forte Group',
  location: 'Kyiv, Ukraine',
  link: 'https://fortegrp.com/',
  startDate: new Date('2020-03-01'),
  endDate: new Date('2021-02-01'),
  shotDescription: `Supported and enhanced a collaboration and disclosure reporting platform for Donnelley Financial Solutions (DFIN), helping enterprise customers generate accurate, consistent, and audit-ready disclosure reports.`,
  keyFeatures: [
    'Supported and developed a large, high-load enterprise project',
    'Designed and configured a fully automated CI/CD lifecycle (migrated from TFS to Azure DevOps)',
    'Maintained legacy systems',
    'Implemented new API endpoints',
    'Refactored legacy codebase',
    'Performed unit and load testing',
    'Documented solution architecture',
    'Established code standards',
    'Provided technical and leadership assistance to developer team members',
    'Remediated site security vulnerabilities',
    'Profiled, troubleshot, and fixed bugs',
    'Reviewed code and design quality',
  ],
  projects: [
    {
      id: 'dfin-reporting-platform',
      name: 'DFIN Disclosure Reporting Platform - More reliable, scalable, and audit-ready reporting delivery',
      description: `Supported and evolved a collaboration platform used by Donnelley Financial Solutions (DFIN) customers to produce disclosure reports. I implemented new API endpoints, improved reliability and performance in a high-load enterprise environment, and contributed to refactoring legacy areas to reduce operational risk.

I also helped strengthen the delivery process by migrating CI/CD from TFS to Azure DevOps, introducing build validation and automated testing practices to improve release confidence and reduce manual effort.`,
      role: 'Senior .NET Developer',
      skills: ['net', 'c#', 'core', 'api', 'azure-devops', 'ci/cd', 'sql'],
    },
    {
      id: 'sharepoint-high-load',
      name: 'High-Load SharePoint Reporting Workflows - Improved stability under concurrency and faster issue resolution',
      description: `Worked with SharePoint at enterprise scale to support DFIN-related reporting workflows. I investigated performance bottlenecks, improved stability under high concurrency, and helped troubleshoot issues affecting report generation and collaboration scenarios.

In close collaboration with the team, I contributed to hardening security and ensuring predictable behavior of reporting-related features in production environments.`,
      role: 'Senior .NET Developer',
      skills: ['sharepoint', 'net', 'c#', 'sql'],
    },
  ],
  skills: ['net', 'c#', 'core', 'api', 'azure-devops', 'ci/cd', 'sql', 'sharepoint', 'word'],
};
