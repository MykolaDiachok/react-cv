import type { Experience } from '../../models/experience.ts';

export const Intellias: Experience = {
  id: 'intellias',
  jobTitle: 'Full Stack Developer',
  companyName: 'Intellias',
  companyNameLocal: 'Intellias',
  companyDescription:
    'Intellias is a leading provider of IT solutions for business, government, education, and healthcare sectors across the United States, the United Kingdom, and Canada.',
  location: 'Zagreb, Croatia',
  startDate: new Date('2021-08-01'),
  link: 'https://www.intellias.com/',
  shotDescription: `
  Migration and development of legacy Win32 applications into modern web solutions using .NET Core, Angular, React for a high-load enterprise platform in business, government, education, and healthcare sectors across the US, UK, and Canada. API development, database optimization (MS SQL, MongoDB, IBMi, Elasticsearch), and CI/CD (Azure DevOps) in an Agile environment. Mentored junior developers and provided guidance to mentees, fostering their professional growth and ensuring alignment with development best practices.
  `,
  keyFeatures: [
    '**Led the migration** of legacy Win32 applications to modern web-based multi-tenant systems using .NET Core, Angular, React, significantly improving system performance and user experience.',
    '**Developed and maintained** high-load enterprise applications for a leading multi-brand\n  provider of IT solutions for business, government, education, and healthcare sectors\n  across the United States, the United Kingdom, and Canada.',
    '**Designed and implemented** RESTful APIs to support system integration and new business\n  functionality.',
    '**Analyzed software requirements** and system configurations, producing detailed technical\n  specifications and ensuring alignment with business needs.',
    '**Optimized T-SQL queries and stored procedures**, enhancing database performance\n  across MS SQL, MongoDB, IBMi, and Elasticsearch environments.',
    '**Configured and maintained CI/CD pipelines** using Azure DevOps, enabling faster releases\n  and minimizing deployment risks.',
    '**Collaborated closely with distributed Agile teams** across Europe, North America, and Asia,\n  ensuring timely delivery and high product quality.',
    '**Contributed to solution architecture** and guided technical decisions across projects.',
  ],
  skills: ['.Net', 'c#', 'core', 'api', 'angular', 'azure-devops', 'ci/cd'],
  projects: [
    {
      id: 'support-old-apps',
      name: 'Support for Legacy Win32 Applications',
      description:
        'Maintained and enhanced legacy Win32 applications while planning and executing their migration to modern web-based solutions using .NET Core, Angular, and React. Ensured seamless integration with existing systems and improved user experience.',
      role: 'Full Stack Developer',
    },
    {
      id: 'contract-editor',
      name: 'Contract Editor',
      description:
        'Developed a web-based contract editor for a leading multi-brand provider of IT solutions for business, government, education, and healthcare sectors across the United States, the United Kingdom, and Canada.',
      role: 'Full Stack Developer',
    },
    {
      id: 'quick-reg',
      name: 'Quick Registration System',
      description:
        'Migrated a legacy Win32 quick registration system to a modern web application using .NET Core and Angular, enhancing user experience and system performance.',
      role: 'Full Stack Developer',
      skills: ['.Net', 'core', 'api', 'angular'],
    },
    {
      id: 'bid-admin',
      name: 'Bid Administration System',
      description:
        'Developed a web-based bid administration system for a leading multi-brand provider of IT solutions for business, government, education, and healthcare sectors across the United States, the United Kingdom, and Canada.',
      role: 'Full Stack Developer',
    },
  ],
};
