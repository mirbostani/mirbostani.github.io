import LinkX from "./link-x";
import Date from "./date";
import Tags from "./tags";
import Author from "./author";
import ImageX from "./image-x";
import data from "../lib/data";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Post({
  slug,
  category,
  title,
  description,
  date,
  author,
  cover,
  tags,
  readTime,
  type,
}) {
  const pathname = `/${slug}`;
  let containerClass = "flex flex-col items-start mb-5";
  let coverClass = "flex w-full pb-2";
  let coverHeight = "h-72 xl:h-96";
  let titleClass = "flex flex-col w-full px-0";
  if (type === 1) {
    containerClass = "flex flex-col items-start mb-5";
    coverClass = "flex w-full pb-2";
    coverHeight = "h-72 lg:h-52";
    titleClass = "flex flex-col w-full px-0";
  } else if (type === 2) {
    containerClass = "flex flex-row items-start mb-5";
    coverClass = "flex w-full lg:w-1/2 pb-2";
    coverHeight = "h-40";
    titleClass = "flex flex-col flex-grow w-full px-0";
  }

  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const member = data[author];

  return (
    <div className={containerClass}>
      {/* <div className={coverClass}>
        <LinkX href={{ pathname: pathname, query: query }}>
          <a
            className={`overflow-hidden rounded-lg border-2 border-gray-100 relative ${coverHeight} w-full`}
          >
            <ImageX src={cover} alt={title} layout="fill" objectFit="cover" />
          </a>
        </LinkX>
      </div> */}
      <div className={titleClass}>
        <h2 className="pb-2 pt-1">
          <LinkX href={{ pathname: pathname, query: query }}>
            <a className="font-bold text-gray-600 dark:text-gray-300">
              {title}
            </a>
          </LinkX>
        </h2>
        <div className="flex flex-row items-center pb-2">
          <Date
            className="text-xs text-gray-500 dark:text-gray-400"
            dateString={date}
          />
          <span className="mx-2 text-gray-400">·</span>
          <Tags className="text-xs" category={category} tags={tags} />
        </div>
        {/* <div className="">
          <Date
            className="text-xs text-gray-500 dark:text-gray-400"
            dateString={date}
          />
        </div> */}
        {/* <div className="pb-2">
          <Tags className="text-xs" category={category} tags={tags} />
        </div> */}
        <div className="pb-2">
          <LinkX href={{ pathname: pathname, query: query }}>
            <a>{description}</a>
          </LinkX>
        </div>
      </div>
    </div>
  );
}
