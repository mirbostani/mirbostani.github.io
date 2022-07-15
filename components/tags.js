import LinkX from "./link-x";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Tags({ category, tags, className }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <span className={className}>
      <span className="flex flex-row space-x-2">
        {category && (
          <LinkX
            key={category}
            href={{ pathname: `/categories/${category}`, query: query }}
          >
            <a className="inline-block text-gray-500 dark:text-gray-400">
              {t(category)}
            </a>
          </LinkX>
        )}
        {tags?.split(",").map((tag) => {
          tag = tag.trim();
          return (
            <LinkX key={tag} href={{ pathname: `/tags/${tag}`, query: query }}>
              <a className="inline-block text-gray-500 dark:text-gray-400">
                {`#${tag}`}
              </a>
            </LinkX>
          );
        })}
      </span>
    </span>
  );
}

export function Chips({ category, tags, className }) {
  const { t, lang } = useTranslation("common");

  return (
    <span className={className}>
      <span className="flex flex-row space-x-2">
        {category && (
          <LinkX
            key={category}
            href={{ pathname: `/categories/${category}`, query: query }}
          >
            <a className="text-xs inline-block bg-gray-400 hover:bg-gray-500 text-white hover:text-white dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-300 dark:hover:text-gray-300 rounded-full px-2">
              {category}
            </a>
          </LinkX>
        )}
        {tags.split(",").map((tag) => {
          tag = tag.trim();
          return (
            <LinkX key={tag} href={{ pathname: `/tags/${tag}`, query: query }}>
              <a className="text-xs inline-block bg-gray-200 hover:bg-gray-300 text-gray-500 hover:text-gray-600 rounded-full  dark:bg-gray-500 dark:hover:bg-gray-400 dark:text-gray-700 dark:hover:text-gray-600 px-2">
                {tag}
              </a>
            </LinkX>
          );
        })}
      </span>
    </span>
  );
}
