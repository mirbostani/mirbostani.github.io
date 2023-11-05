import LinkX from "./link-x";
import Social from "./social";
import data from "../lib/data";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Footer() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const member = data.mirbostani;
  return (
    <footer className="sk-footer bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 mt-10">
      <div className="max-w-5xl container mx-auto flex flex-col items-center px-4 lg:px-16 xl:px-24 py-6 space-y-6 lg:space-y-0 lg:flex-row lg:justify-between">
        <div className="flex items-center text-sm space-x-1">
          <span>{t("copyright")}</span>
          <span>{new Date().getFullYear()}</span>
          <LinkX href={{pathname: "/", query: query}}>
            <a>{t("site_name")}</a>
          </LinkX>
        </div>
        <div className="flex items-center text-sm space-x-4">
          <LinkX href={{ pathname: "/disclaimer", query: query }}>
            <a>{t("disclaimer")}</a>
          </LinkX>
          {member.googlescholar && <Social type="googlescholar" link={member.googlescholar} />}
          {member.github && <Social type="github" link={member.github} />}
          {member.linkedin && <Social type="linkedin" link={member.linkedin} />}
          {member.medium && <Social type="medium" link={member.medium} />}
          {member.twitter && <Social type="twitter" link={member.twitter} />}
        </div>
      </div>
    </footer>
  );
}
