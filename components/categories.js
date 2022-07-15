import LinkX from "./link-x";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Categories({ categories, className, darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <div>
      <div className="flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4">
          {t("categories")}
        </h1>
        <ul className="flex flex-col lg:w-48">
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <li key={category.params.category}>
                  <LinkX
                    href={{
                      pathname: `/categories/${category.params.category}`,
                      query: query,
                    }}
                  >
                    <a>
                      {t(category.params.category)}{" "}
                      <span className="rounded-full bg-gray-200 text-gray-500 dark:bg-gray-600 dark:text-white text-xs px-1">
                        {category.params.count}
                      </span>
                    </a>
                  </LinkX>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
