import Headroom from "react-headroom";
import { useState } from "react";
import LinkX from "./link-x";
import Logo from "./logo";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export function HeaderMenuBar() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center mx-4">
      <LinkX href={{pathname: "/", query: query}}>
        <a className="text-gray-500 dark:text-gray-200 hover:text-gray-800">
          {t("home")}
        </a>
      </LinkX>
      <LinkX href={{pathname: "/blog", query: query}}>
        <a className="text-gray-500 dark:text-gray-200 hover:text-gray-800">
          {t("blog")}
        </a>
      </LinkX>
    </div>
  );
}

export function HeaderDarkModeToggleButton({ darkMode }) {
  const handleToggleDarkMode = async (event) => {
    event.preventDefault();
    darkMode.setData(!darkMode.data);
  };

  return (
    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
      <button
        type="button"
        aria-label="Color Mode"
        className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
        onClick={handleToggleDarkMode}
      >
        {darkMode.data ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 transform -rotate-90"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default function Header({ darkMode }) {
  const { t, lang } = useTranslation("common");
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleMenuClick = async (event) => {
    event.preventDefault();
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="h-20">
      {/* <Headroom
      // pinStart={-80}
      // upTolerance={-80}
      // downTolerance={80}
      > */}
        <header className="header sk-header bg-gray-100 dark:bg-gray-800 sticky top-0 z-50">
          <div className="max-w-5xl container mx-auto px-4 lg:px-16 xl:px-24 py-3 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
            <div className="flex justify-between">
              <Logo darkMode={darkMode} />
              <div className="flex items-center space-x-2 lg:hidden">
                <button
                  className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none"
                  onClick={handleMenuClick}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile */}
            <div
              className="flex flex-col space-y-4 lg:hidden"
              style={{ display: displayMenu ? "block" : "none" }}
            >
              <HeaderMenuBar />
              {/* <HeaderDarkModeToggleButton darkMode={darkMode} /> */}
            </div>
            {/* Desktop */}
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:flex-1 lg:space-x-2">
              <HeaderMenuBar />
              {/* <HeaderDarkModeToggleButton darkMode={darkMode} /> */}
            </div>
          </div>
        </header>
      {/* </Headroom> */}
    </div>
  );
}
