import type { Experience } from '../../models/experience.ts';

export const Digma: Experience = {
  id: 'digma',
  jobTitle: 'CIO',
  companyName: 'Digma',
  companyNameLocal: 'Дігма',
  companyDescription: 'Digma is a leading provider of food and beverage products.',
  location: 'Kharkiv, Ukraine',
  link: 'https://digma.ua/',
  startDate: new Date('2008-07-01'),
  endDate: new Date('2011-10-01'),
  shotDescription: `As CIO at Digma, I was responsible for the company's IT strategy, development of business-critical systems, and maintenance of the overall infrastructure. I led multiple digital transformation initiatives and managed a cross-functional IT team.`,
  keyFeatures: [
    'Managed an IT team of 15 people.',
    'Developed corporate websites using ASP.NET and JavaScript.',
    'Upgraded all accounting systems to 1C: Enterprise 8.2.',
    'Developed a request accumulation system for sales representatives.',
    'Developed a mobile inventory system based on Windows CE client, ASP.NET API, and ASP.NET web interface.',
    'Implemented an ITIL-based system and optimized the work of the client support department.',
    'Integrated all subsidiaries and shops into a single corporate network.',
    'Implemented virtualization systems and optimized related business processes.',
    'Described, optimized, and configured business processes in food manufacturing.',
    'Developed and implemented an automated system for working with EDI providers (Comarch, Excite).',
    'Developed a telephone call analysis system.',
    'Developed and launched a processing center for calculating discounts and bonuses.',
    'Managed an IT team of 20 people.',
  ],
};
