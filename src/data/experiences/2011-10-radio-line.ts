import type { Experience } from '../../models/experience.ts';

export const RadioLine: Experience = {
  id: 'radio-line',
  jobTitle: 'CIO',
  companyName: 'Radio Line',
  companyNameLocal: 'Радіо Лайн',
  companyDescription:
    'RadioLine distributes mobile devices: phones, smartphones, tablets, and accessories for them.',
  location: 'Kyiv, Ukraine',
  link: 'https://www.rl.net.ua/',
  startDate: new Date('2011-10-01'),
  endDate: new Date('2017-01-01'),
  shotDescription: `As CIO at Radio Line, I was responsible for overseeing the company's technology strategy and operations. My role involved managing IT infrastructure, leading software development projects, and ensuring the security and efficiency of our technological resources. I collaborated with various departments to align IT initiatives with business goals, driving innovation and improving overall performance.Throughout my tenure, I led a team of IT professionals, implemented new systems, and optimized existing processes to support the company's growth and success.`,
  keyFeatures: [
    'Developed sales applications for Android & iOS.',
    'Developed an SMS notifications application for Android.',
    'Developed APIs for company websites.',
    'Developed SPA sites using AngularJS and Firebase.',
    'Upgraded the accounting system 1C:Enterprise from 7.7 to 8.2.',
    'Initiated and configured the management system 1C:Enterprise 8.2 Managed Application (full support for thin and web clients).',
    'Performed an online migration of the accounting system from 1C 8.1 Trade Management to 1C 8.2 Managed Application, ensuring zero downtime while old and new systems worked simultaneously.',
    'Customized information exchange between company offices using a proprietary method based on SQL queries.',
    'Developed and integrated enterprise activity analysis reports.',
    'Launched remote stores in thin client mode for 1C, with data from approximately 30 shops across Ukraine reflected online in a unified database.',
    'Customized and optimized security systems.',
    'Configured backup and data storage systems.',
    'Customized and optimized company servers.',
  ],
};
