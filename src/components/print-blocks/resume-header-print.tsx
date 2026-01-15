import React from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useResume } from '../../providers/use-resume.ts';

const formatPhone = (phone?: string | null) => {
  const phoneNumber = parsePhoneNumberFromString(phone ?? '', 'HR');
  return phoneNumber?.formatInternational() ?? phone ?? '';
};

const asHttpsUrl = (url?: string | null): string | undefined => {
  const value = url?.trim();
  if (!value) return undefined;

  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  return `https://${value}`;
};

const displayUrl = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export const ResumeHeaderPrint: React.FC = () => {
  const { resume } = useResume();
  const { name, title, location, email, phone, siteUrl, linkedInUrl } = resume;

  const normalizedSiteUrl = asHttpsUrl(siteUrl);
  const normalizedLinkedInUrl = asHttpsUrl(linkedInUrl);

  return (
    <div className="resume-print__section">
      <div className="resume-print__header-grid">
        <div className="resume-print__header-info">
          <h1 className="resume-print__name">{name}</h1>
          {title && <p className="resume-print__title">{title}</p>}

          <ul className="resume-print__contact-list" aria-label="Contact information">
            {location && (
              <li>
                <span className="resume-print__contact-label">Location:</span> {location}
              </li>
            )}
            {email && (
              <li>
                <span className="resume-print__contact-label">Email:</span>{' '}
                <a href={`mailto:${email}`} rel="noreferrer noopener">
                  {email}
                </a>
              </li>
            )}
            {phone && (
              <li>
                <span className="resume-print__contact-label">Phone:</span>{' '}
                <a href={`tel:${phone}`} rel="noreferrer noopener">
                  {formatPhone(phone)}
                </a>
              </li>
            )}
            {normalizedSiteUrl && (
              <li>
                <span className="resume-print__contact-label">Site:</span>{' '}
                <a href={normalizedSiteUrl} target="_blank" rel="noreferrer noopener">
                  {displayUrl(normalizedSiteUrl)}
                </a>
              </li>
            )}
            {normalizedLinkedInUrl && (
              <li>
                <span className="resume-print__contact-label">LinkedIn:</span>{' '}
                <a href={normalizedLinkedInUrl} target="_blank" rel="noreferrer noopener">
                  {displayUrl(normalizedLinkedInUrl)}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
