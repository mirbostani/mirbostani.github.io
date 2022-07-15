import Layout from "../components/layout";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Custom404({ darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <Layout title={t("404_page_not_found")} darkMode={darkMode}>
      <div className="flex flex-col flex-grow items-center justify-center">
        <h1 className="text-2xl font-bold">{t("404_page_not_found")}</h1>
      </div>
    </Layout>
  );
}
