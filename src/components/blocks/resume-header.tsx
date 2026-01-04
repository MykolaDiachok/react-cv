import { useResume } from '../../providers/use-resume.ts';
import mykolaUrl from '../../assets/mykola-icon.png?url';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { Fragment } from 'react';

export const ResumeHeader = () => {
  const { resume } = useResume();
  const { name, title, location, email, phone } = resume;

  const formattedPhone = (() => {
    const phoneNumber = parsePhoneNumberFromString(phone ?? '', 'HR');
    return phoneNumber?.formatInternational() ?? phone;
  })();

  return (
    <Fragment>
      <section className="bg-slate-900/50 rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="md:basis-1/3 shrink-0 flex justify-center md:justify-start">
            <img
              src={mykolaUrl}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover aspect-square"
              alt={name}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="md:basis-2/3 min-w-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              {name}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-300">{title}</p>

            <div className="mt-2 space-y-1">
              <p className="truncate">{location}</p>
              <p>
                <a href={`mailto:${email}`} className="hover:underline text-teal-300 break-all">
                  {email}
                </a>
              </p>
              <p>
                <a href={`tel:${phone}`} className="hover:underline text-teal-300">
                  {formattedPhone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
