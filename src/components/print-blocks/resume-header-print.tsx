import React from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useResume } from '../../providers/use-resume.ts';

const formatPhone = (phone?: string | null) => {
  const phoneNumber = parsePhoneNumberFromString(phone ?? '', 'HR');
  return phoneNumber?.formatInternational() ?? phone ?? '';
};

export const ResumeHeaderPrint: React.FC = () => {
  const { resume } = useResume();
  const { name, title, location, email, phone } = resume;

  return (
    <div className="resume-print__section">
      <div className="resume-print__header-grid">
        <div className="resume-print__header-info">
          <h1 className="resume-print__name">{name}</h1>
          {title && <p className="resume-print__title">{title}</p>}

          <ul className="resume-print__contact-list" aria-label="Contact information">
            {location && <li>{location}</li>}
            {email && (
              <li>
                <a href={`mailto:${email}`} rel="noreferrer noopener">
                  {email}
                </a>
              </li>
            )}
            {phone && (
              <li>
                <a href={`tel:${phone}`} rel="noreferrer noopener">
                  {formatPhone(phone)}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
