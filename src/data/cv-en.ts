import type { Cv } from '../models/cv.ts';
import { Intellias } from './experiences/2021-08-intellias.ts';
import { DevPro as DevelopmentPro } from './experiences/2021-03-dev-pro.ts';
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
    DevelopmentPro,
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
  projects: [
    {
      id: 'cafe-pos-suite',
      name: 'Cafe POS Automation',
      role: 'Lead Solutions Architect',
      description:
        'Delivered a custom 1C-based POS suite for several high-volume cafés, blending C# hardware drivers with 1C business logic to streamline front-of-house operations.',
      skills: ['1C Enterprise', 'C#', 'SQL Server', 'Windows Services'],
      achievements: [
        'Implemented plug-and-play drivers for receipt printers, barcode scanners, and fiscal cash drawers using C# interop layers.',
        'Built dynamic menu costing, ingredient depletion, and live stock reconciliation dashboards to prevent shortages.',
        'Designed a table-availability monitor that tracked occupied vs. free tables in real time to optimize seating.',
        'Automated payroll calculations based on sold items, shifts, and tips, reducing manual processing time by 70%.',
      ],
      impact:
        'The solution ran in multiple cafés simultaneously, improved checkout speed, ensured accurate inventory levels, and gave owners clear profitability insights.',
    },
    {
      id: 'retail-1c-suite',
      name: 'Retail Chain Back&Front Office Suite',
      role: 'Solution Architect & Engineering Lead',
      description:
        'Architected and delivered a unified 1C, SQL Server, and .NET platform for a network of five high-traffic brick-and-mortar stores covering POS, procurement, finance, and stock control.',
      skills: [
        'Retail automation',
        'Supply-chain accounting',
        'Multi-register orchestration',
        'Payroll automation',
        'Advanced reporting',
        '1C Enterprise',
        'SQL Server',
        '.NET Framework',
        'Windows Services',
      ],
      achievements: [
        'Synced multiple registers per shop with resilient queue processing so each checkout lane stayed online even during WAN outages.',
        'Implemented supplier settlement workflows with contract-level price controls, credit notes, automated payment schedules, and multi-currency reconciliations.',
        'Automated payroll for sales staff, cashiers, and warehouse teams using sales KPIs, attendance, and incentive rules baked into 1C.',
        'Delivered near-real-time stock snapshots for backroom, shop floor, and central warehouse, enabling precise replenishment and shrinkage detection.',
        'Built consolidated BI dashboards with drill-down reporting for daily revenue, margin, aging stock, and cash variances across all five stores.',
        'Introduced automated nightly audits that reconciled POS data, supplier deliveries, and warehouse transfers, cutting manual verification time by 60%.',
      ],
      impact:
        'The five-store rollout reduced stockouts, shortened month-end close by 40%, and gave finance audit-ready supplier, payroll, and inventory statements backed by automated reporting.',
    },
    {
      id: 'pos-driver-net',
      name: 'Cash Register Driver Modernization',
      role: 'Principal .NET Engineer',
      description:
        'Engineered a custom .NET Framework driver that bridged 1C POS workflows with fiscal cash terminals to unlock new automation scenarios for retail front offices.',
      skills: [
        'Device integration',
        'Driver development',
        'Fiscal automation',
        'POS orchestration',
        '.NET Framework',
        'C#',
        'Serial COM',
      ],
      achievements: [
        'Reverse-engineered proprietary fiscal APIs and exposed a stable C# abstraction that 1C scripts could consume without vendor SDK dependencies.',
        'Automatic end-of-day Z-reports, and remote firmware updates directly from the POS dashboard.',
        'Added real-time health monitoring for printers, drawers, and scanners so operators could preempt outages during rush hours.',
        'Cut cashier onboarding time by 50% thanks to unified UI flows that hid low-level device quirks behind the driver layer.',
      ],
      impact:
        'The driver rollout standardized cash-front automation across all stores, reduced manual reconciliations, and allowed rapid rollout of new fiscal features without waiting on hardware vendors.',
    },
    {
      id: 'access-card-issuance-kiosk',
      name: 'Access Card Issuance Kiosk (AD-integrated)',
      role: 'Lead Engineer',
      description:
        'Developed a self-service kiosk for issuing employee access cards with on-card printing (photo, full name, and job title), integrated with Microsoft Active Directory and backed by an ASP.NET + MS SQL Server platform for secure identity lookup, auditing, and operations.',
      skills: [
        'ASP.NET',
        'C#',
        'MS SQL Server',
        'Active Directory (AD)',
        'Device integration',
        'Card printer SDKs',
        'Image processing',
      ],
      achievements: [
        'Integrated identity lookup and role/title resolution via Microsoft Active Directory to ensure consistent, authoritative employee data.',
        'Implemented end-to-end badge issuance flow: identity verification, photo capture/import, print preview, and controlled card printing.',
        'Built resilient print job handling (status tracking, retries, and clear error states) to reduce kiosk downtime and operator intervention.',
        'Added SSMS-friendly audit trail in MS SQL Server (issued cards, templates, timestamps, operator/kiosk metadata) to support compliance and troubleshooting.',
      ],
      impact:
        'Improved speed and consistency of badge issuance, reduced manual data entry errors, and provided reliable auditing for access-card lifecycle operations.',
    },
    {
      id: 'adeept-car-robot',
      name: 'Adeept Car — Kids-Friendly Robot Car (Pet Project)',
      role: 'Creator / Full Stack Hobby Engineer',
      description:
        'Built a small robot-car project based on the Adeept platform to make a reliable, kid-friendly toy that’s easy to control and fun to experiment with. Focused on safe interaction, predictable behavior, and straightforward setup so kids could play without constant adult “debugging”.\n\nRepository: https://github.com/MykolaDiachok/adeept-car',
      skills: [
        'Robotics',
        'Embedded programming',
        'Motor control',
        'Sensors',
        'Networking',
        'Rapid prototyping',
        'python',
      ],
      achievements: [
        'Prototyped and tuned driving behavior to keep movement smooth and predictable for kids (acceleration, turning radius, and stop behavior).',
        'Improved control reliability by reducing latency and handling disconnect/reconnect scenarios gracefully.',
        'Documented setup steps and wiring notes to make the build reproducible and easy to maintain.',
      ],
      impact:
        'Turned a hobby robotics kit into a practical “playable” robot for kids, while keeping the project open and reusable for further experiments and learning.',
    },
    {
      id: 'megahome-smart-home',
      name: 'MegaHome — Smart Home Automation (Arduino + Raspberry Pi)',
      role: 'Creator / Hardware-Software Engineer (Pet Project)',
      description:
        'Designed and built a working smart-home automation system using Arduino controllers and Raspberry Pi as the orchestration hub. The system provided centralized control over lighting, heating, floor heating, air conditioning, air quality monitoring, and other household automations — all integrated into Apple HomeKit for a seamless iOS experience.\n\nRepository: https://github.com/MykolaDiachok/megahome',
      skills: [
        'Arduino',
        'Raspberry Pi',
        'IoT',
        'Embedded systems',
        'Sensors',
        'Home automation',
        'Apple HomeKit',
        'C',
        'C++',
        'Java',
        'Javascript',
        'python',
      ],
      achievements: [
        'Implemented end-to-end device control for lighting and climate (heating, floor heating, AC) through a single automation hub.',
        'Integrated air-quality sensors and automated rules to keep indoor conditions stable and comfortable.',
        'Connected the whole system to Apple HomeKit, enabling voice and iOS-native control alongside scenes and automations.',
        'Built the solution as a real working installation, focused on reliability, stable connectivity, and safe fallbacks.',
      ],
      impact:
        'Delivered a fully functioning smart-home system that replaced fragmented controls with a unified HomeKit-first experience, improving comfort, energy efficiency, and day-to-day convenience.',
    },
  ],
};
