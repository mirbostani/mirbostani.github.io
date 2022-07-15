import Layout from "../components/layout";
import { useTranslation, useLanguageQuery, LanguageSwitcher } from "next-export-i18n";

export default function Disclaimer({ darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  
  return (
    <Layout title={t("disclaimer")} darkMode={darkMode}>
      <h1 className="text-4xl font-extrabold mb-8">{t("disclaimer")}</h1>
      <div className="flex flex-col flex-grow">
        <p className="mb-4">
          The information, views, and opinions expressed on this website are
          entirely those of the author. They absolutely do not reflect the views
          of the author's employers, nor do they have any connection to any
          person or organization with which the author may or may not be
          associated personally or professionally, unless explicitly stated
          otherwise.
        </p>
      </div>
    </Layout>
  );
}
