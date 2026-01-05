import type { Cv } from '../models/cv.ts';
import { Intellias } from './experiences/2021-08-intellias.ts';
import { DevPro } from './experiences/2021-03-dev-pro.ts';
import { ForteGroup } from './experiences/2020-03-forte-group.ts';
import { TennisPoint } from './experiences/2019-03-tennis-point.ts';
import { KtUkraine } from './experiences/2017-02-kt-ukraine.ts';
import { RadioLine } from './experiences/2011-10-radio-line.ts';
import { Agromars } from './experiences/2011-03-agromars.ts';
import { Digma } from './experiences/2008-07-digma.ts';
import { veresenPlus } from './experiences/2004-10-veresen-plus.ts';
import { naftaProduct } from './experiences/2002-02-nafta.ts';
import { mangust } from './experiences/2000-10-mangust.ts';
import { poligraphIzdat } from './experiences/1995-11-poligraph-izdat.ts';

export const cvEn: Cv = {
  id: 'cv-en',
  name: 'Mykola Diachok',
  title: 'Software Engineer',
  email: 'm.diachok@icloud.com',
  phone: '+385916077610',
  description: `🔧 **Full Stack Engineer** with over **20 years of experience** building scalable enterprise-grade web and mobile applications. Expert in full SDLC — from architecture design to deployment and optimization.

### 💡 Technical Strengths

- Deep expertise in **.NET (C#, ASP.NET Core, Web API)**, **Angular**, and **React**
- Strong experience with **Azure DevOps**, **CI/CD pipelines**, and **cloud platforms** (Azure, AWS, GCP)
- Proven ability to modernize **legacy Win32 systems** into responsive web applications
- Hands-on knowledge of **MongoDB**, **SQL Server**, **Cosmos DB**, and **Elasticsearch**
- Familiar with **Microservices**, **SOA**, and **distributed architecture**

### 🚀 Career Highlights

- Led migration of legacy systems for clients across **US, UK, and Canada**
- Designed and delivered REST APIs and real-time integrations
- Mentored junior engineers and contributed to architecture strategy
- Built a web portal for EDI visibility, manual control, and monitoring

### 🌍 Other Qualities

- Authorized to work in the **EU**
- Strong in **critical thinking**, **problem solving**, and **team leadership**
- Passionate about clean architecture, **code refactoring**, and performance tuning
- Fluent in **English**, **Ukrainian**, **Russian**, and **intermediate Croatian**`,
  experiences: [
    Intellias,
    DevPro,
    ForteGroup,
    TennisPoint,
    KtUkraine,
    RadioLine,
    Agromars,
    Digma,
    veresenPlus,
    naftaProduct,
    mangust,
    poligraphIzdat,
  ],
  skills: [
    { id: 'net', name: '.net', level: 'expert', yearsOfExperience: 20 },
    { id: 'c#', name: 'C#', level: 'expert', yearsOfExperience: 20 },
    { id: 'core', name: 'ASP.NET Core', level: 'expert', yearsOfExperience: 10 },
    { id: 'api', name: 'Web API', level: 'expert', yearsOfExperience: 10 },
    { id: 'angular', name: 'Angular', level: 'advanced', yearsOfExperience: 5 },
    { id: 'react', name: 'React', level: 'advanced', yearsOfExperience: 1 },
    { id: 'azure-devops', name: 'Azure DevOps', level: 'advanced', yearsOfExperience: 5 },
    { id: 'ci/cd', name: 'CI/CD', level: 'advanced', yearsOfExperience: 5 },
    {
      id: 'cloud',
      name: 'Cloud Platforms (Azure, AWS, GCP)',
      level: 'advanced',
      yearsOfExperience: 5,
    },
    { id: 'mongo', name: 'MongoDB', level: 'advanced', yearsOfExperience: 5 },
    { id: 'sql', name: 'SQL Server', level: 'advanced', yearsOfExperience: 20 },
    { id: 'elastic', name: 'Elasticsearch', level: 'intermediate', yearsOfExperience: 5 },
    { id: 'microservices', name: 'Microservices', level: 'intermediate', yearsOfExperience: 10 },
  ],
  languages: [
    { name: 'English', proficiency: 'advanced' },
    { name: 'Ukrainian', proficiency: 'native' },
    { name: 'Russian', proficiency: 'native' },
    { name: 'Croatian', proficiency: 'intermediate' },
  ],
  educations: [
    {
      id: 'College',
      institutionName: 'Kirovohrad Cybernetics and Technical College',
      degree: 'Associate Degree in Computer Programming',
      startDate: new Date('1996-09-01'),
      endDate: new Date('1999-06-30'),
      location: 'Kropyvnytskyi, Ukraine',
      fieldOfStudy: 'Computer Science',
      description: 'Core programming, databases, and software fundamentals.',
    },
    {
      id: 'KISM',
      institutionName: 'Kropyvnytskyi National Technical University',
      degree: 'Master of Science in Computer Science',
      startDate: new Date('1999-09-01'),
      endDate: new Date('2001-06-30'),
      location: 'Kropyvnytskyi, Ukraine',
      fieldOfStudy: 'FAEP Specialist’s',
      description:
        'Specialist in Computer Science, specializing in software development and systems engineering.',
      link: 'https://kntu.kr.ua/',
    },
    {
      id: 'Krok',
      institutionName: 'Business School “KROK”',
      degree: 'Business Management',
      startDate: new Date('2013-01-01'),
      endDate: new Date('2013-06-30'),
      location: 'Kyiv, Ukraine',
      fieldOfStudy: 'Business Administration',
      description: 'Courses in business management, project management, and entrepreneurship.',
      link: 'https://int.krok.edu.ua/en/',
    },
  ],
  summary: '',
};
