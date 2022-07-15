import LinkX from "./link-x";
import Date from "./date";
import ImageX from "./image-x";
import Social from "./social";
import data from "../lib/data";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Member({ slug, className }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const member = data[slug];
  if (!member) return <></>;
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <LinkX href={{pathname: `/${member.slug}`, query: query}}>
          <a className="relative flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border border-gray-200 mb-4">
            <ImageX
              src={member.image}
              alt={member.fullname}
              // layout="fill"
              // objectFit="cover"
            />
          </a>
        </LinkX>
        <div className="flex flex-col space-y-0 mx-2">
          <div className="text-center mb-2">
            <LinkX href={{pathname: `/${member.slug}`, query: query}}>
              <a className="font-bold text-2xl">{member.fullname}</a>
            </LinkX>
          </div>
          <div className="text-center pb-4">
            <LinkX href={{pathname: `/${member.slug}`, query: query}}>
              <a className="text-gray-500 text-xl">{member.title}</a>
            </LinkX>
          </div>
          <div className="flex flex-row justify-center space-x-4 text-gray-500">
            {member.twitter && <Social type="twitter" link={member.twitter} />}
            {member.github && <Social type="github" link={member.github} />}
            {member.linkedin && (
              <Social type="linkedin" link={member.linkedin} />
            )}
            {member.medium && <Social type="medium" link={member.medium} />}
          </div>
          <div className="flex flex-row items-center text-gray-500">
            {/* <Date className="text-sm" dateString={date} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
