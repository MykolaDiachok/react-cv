import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';

export const SiteHeader = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <Fragment>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white px-4 sm:px-8 py-3 flex justify-between items-center shadow-md">
        <nav className="flex flex-wrap items-center justify-between w-full">
          <div className="">Mykola Diachok</div>
          <div className="flex flex-col rounded-lg p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent">
            <a href="#resume" className="hover:text-teal-300 text-sm sm:text-base">
              Resume
            </a>
            <a href="#projects" className="hover:text-teal-300 text-sm sm:text-base">
              Projects
            </a>
            <a href="#contact" className="hover:text-teal-300 text-sm sm:text-base">
              Contact
            </a>

            <div className="flex gap-2 text-sm">
              <button onClick={() => changeLanguage('en')} className="hover:text-teal-300">
                EN
              </button>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};
