import { useResume } from '../../providers/use-resume.ts';
import mykola from '../../assets/mykola-icon.png';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const ResumeHeader = () => {
  const { resume } = useResume();
  const { name, title, location, email, phone } = resume;

  const formattedPhone = (() => {
    const phoneNumber = parsePhoneNumberFromString(phone ?? '', 'HR');
    return phoneNumber?.formatInternational() ?? phone;
  })();

  return (
    <header className="bg-gray-900 text-white p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
      <img
        srcSet={mykola}
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
        alt="Mykola Diachok"
      />

      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-4xl font-bold">{name}</h1>
        <p className="text-teal-400 text-lg">{title}</p>

        <div className="mt-2 text-sm text-gray-300">
          <p>{location}</p>
          <p>
            <a href={`mailto:${email}`} className="hover:underline text-teal-300">
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
    </header>
  );
};
