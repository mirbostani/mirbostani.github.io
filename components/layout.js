import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Categories from "./categories";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Layout({
  children,
  categories,
  title,
  className,
  darkMode,
}) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div
      className={`flex flex-col h-screen ${darkMode.data ? "dark" : ""} ${
        className ? className : ""
      } sk-layout`}
    >
      <div className="flex flex-col flex-grow dark:bg-gray-700 dark:text-white">
        <Head>
          <title>
            {title && `${title} | `}
            {t("site_name")}
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header darkMode={darkMode} />
        <main className="sk-main max-w-5xl container mx-auto flex flex-col lg:flex-row lg:space-x-8 flex-grow px-4 lg:px-16 xl:px-24 py-10">
          <section className="sk-section flex flex-col lg:flex-grow">{children}</section>
          {categories && categories.length > 0 && (
            <section className="flex flex-col w-full lg:max-w-min">
              <Categories categories={categories} darkMode={darkMode} />
            </section>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
