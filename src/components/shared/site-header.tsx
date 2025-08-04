import { useTranslation } from 'react-i18next';

export const SiteHeader = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white px-4 sm:px-8 py-3 flex justify-between items-center shadow-md">
      <div className="text-xl sm:text-2xl font-bold text-teal-400 tracking-tight">
        Mykola Diachok
      </div>

      <nav className="flex items-center gap-4">
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
      </nav>
    </header>
  );
};
