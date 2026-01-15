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
  skills: ['.net', 'c#', 'core', 'api', 'angular', 'azure-devops', 'ci/cd', 'salesforce'],
  projects: [
    {
      id: 'ai-dev-integration',
      name: 'AI-Assisted Development Workflow — accelerated delivery & improved code quality',
      description:
        'Integrated AI into the development workflow by designing and iterating prompts, automating repetitive engineering tasks, improving documentation, and accelerating code review and troubleshooting while maintaining code quality and security standards.',
      role: 'Full Stack Developer',
      skills: ['ai', 'prompt-engineering', 'automation', 'documentation'],
    },
    {
      id: 'ai-contract-data-extraction',
      name: 'AI Contract Data Extraction & Auto-Fill — faster processing & fewer manual errors',
      description:
        'Implemented AI-assisted document understanding to recognize and extract key fields from contracts (e.g., parties, dates, amounts, clauses) and auto-fill structured forms, including validation and human-in-the-loop review workflows to improve accuracy and speed of contract processing.',
      role: 'Full Stack Developer',
      skills: ['ai', 'document-processing', 'data-extraction', 'automation'],
    },
    {
      id: 'salesforce-bids-contracts-integration',
      name: 'Salesforce ↔ Bids & Contracts Integration — reliable sync & better traceability',
      description:
        'Integrated Salesforce with internal Bids and Contracts subsystems to synchronize key entities and statuses, enabling consistent data flow across systems. Implemented API endpoints and mapping/validation logic to ensure reliable updates and reduce manual operations for business users.',
      role: 'Full Stack Developer',
      skills: ['salesforce', 'integration', 'api', 'data-mapping', 'validation'],
    },
    {
      id: 'devexpress-grid-optimization',
      name: 'DevExpress Data Grid + API Optimization — faster UI & scalable server-side filtering',
      description:
        'Developed UI features with DevExpress(DevExtreme) components and improved performance end-to-end (UI + API) for large grids/tables and datasets. Optimized API queries and data sources to enable fast, reliable server-side sorting, pagination, and filtering, reduced payload size, and improved rendering and interaction responsiveness for end users.',
      role: 'Full Stack Developer',
      skills: ['devexpress', 'performance-optimization', 'data-sources', 'ui'],
    },
    {
      id: 'support-old-apps',
      name: 'Legacy Win32 Support & Modernization — stability today & migration-ready architecture',
      description:
        'Maintained and enhanced legacy Win32 applications while planning and executing their migration to modern web-based solutions using .NET Core, Angular, and React. Ensured seamless integration with existing systems and improved user experience.',
      role: 'Full Stack Developer',
    },
    {
      id: 'contract-editor',
      name: 'Web Contract Editor — streamlined authoring & review workflow',
      description:
        'Developed a web-based contract editor for a leading multi-brand provider of IT solutions for business, government, education, and healthcare sectors across the United States, the United Kingdom, and Canada.',
      role: 'Full Stack Developer',
    },
    {
      id: 'quick-reg',
      name: 'Quick Registration System Migration — modern UX & higher throughput',
      description:
        'Migrated a legacy Win32 quick registration system to a modern web application using .NET Core and Angular, enhancing user experience and system performance.',
      role: 'Full Stack Developer',
      skills: ['.net', 'core', 'api', 'angular'],
    },
    {
      id: 'bid-admin',
      name: 'Bid Administration Portal — simpler admin ops & stronger compliance support',
      description:
        'Developed a web-based bid administration system for a leading multi-brand provider of IT solutions for business, government, education, and healthcare sectors across the United States, the United Kingdom, and Canada.',
      role: 'Full Stack Developer',
    },
  ],
};
