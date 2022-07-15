import LinkX from "./link-x";
import Date from "./date";
import ImageX from "./image-x";
import data from "../lib/data";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Author({ slug, date, readTime, className }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const author = slug ? data[slug] : null;
  return (
    <div className={className}>
      <div className="flex flex-row items-center text-sm text-gray-500 dark:text-gray-400">
        {date && <Date dateString={date} />}
        {author && (
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">·</span>
            <div className="flex flex-row space-x-1">
              <span className="">by</span>
              <LinkX href={{ pathname: "/about", query: query }}>
                <a>{author.fullname}</a>
              </LinkX>
            </div>
          </div>
        )}
        {readTime && (
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">·</span>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {readTime} min read
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function AuthorFull({ slug, date, readTime, className }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const author = data[slug];
  if (!author) return <></>;
  return (
    <div className={className}>
      <div className="flex items-center">
        <LinkX href={{ pathname: `/${author.slug}`, query: query }}>
          <a className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
            <ImageX
              src={author.image}
              alt={author.fullname}
              width={72}
              height={72}
            />
          </a>
        </LinkX>
        <div className="flex flex-col space-y-0 mx-2">
          <span>
            <LinkX href={{ pathname: `/${author.slug}`, query: query }}>
              <a className="">{author.fullname}</a>
            </LinkX>
          </span>
          <div className="flex flex-row items-center text-gray-500 dark:text-gray-400">
            <Date className="text-sm" dateString={date} />
            {readTime && (
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">·</span>
                <p className="text-sm">{readTime} min read</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
